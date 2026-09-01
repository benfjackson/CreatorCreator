"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ALL_TOKENS,
  buildDefaultTokens,
  expandedTokenNames,
  TOKEN_STORAGE_KEY,
  TOKEN_SYNC,
} from "../lib/tokenRegistry";

const TokenContext = createContext(null);
const HISTORY_DEBOUNCE_MS = 400;
const MAX_HISTORY = 50;

function readStoredOverrides() {
  try {
    const raw = localStorage.getItem(TOKEN_STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function applyTokenToRoot(name, value) {
  document.documentElement.style.setProperty(name, value);
  for (const synced of TOKEN_SYNC[name] ?? []) {
    document.documentElement.style.setProperty(synced, value);
  }
}

function applySnapshotToRoot(snapshot, defaults) {
  clearInlineTokens();
  for (const token of ALL_TOKENS) {
    const value = snapshot[token.name] ?? defaults[token.name];
    applyTokenToRoot(token.name, value);
  }
}

function clearInlineTokens() {
  for (const name of expandedTokenNames()) {
    document.documentElement.style.removeProperty(name);
  }
}

function diffOverrides(tokens, defaults) {
  const overrides = {};
  for (const token of ALL_TOKENS) {
    const value = tokens[token.name];
    if (value !== undefined && value !== defaults[token.name]) {
      overrides[token.name] = value;
    }
  }
  return overrides;
}

function snapshotsEqual(a, b) {
  return ALL_TOKENS.every((token) => a[token.name] === b[token.name]);
}

function persistOverrides(tokens, defaults) {
  const overrides = diffOverrides(tokens, defaults);
  if (Object.keys(overrides).length > 0) {
    localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(overrides));
  } else {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}

export function TokenProvider({ children }) {
  const defaults = useMemo(() => buildDefaultTokens(), []);
  const [tokens, setTokens] = useState(defaults);
  const [historyIndex, setHistoryIndex] = useState(0);
  const [version, setVersion] = useState(0);
  const [ready, setReady] = useState(false);
  const [savedAt, setSavedAt] = useState(null);

  const defaultsRef = useRef(defaults);
  const historyRef = useRef([]);
  const historyIndexRef = useRef(0);
  const historyDebounceRef = useRef(null);
  const pendingSnapshotRef = useRef(null);
  const undoRef = useRef(() => {});
  const redoRef = useRef(() => {});

  defaultsRef.current = defaults;

  const bumpVersion = useCallback(() => {
    setVersion((v) => v + 1);
    setSavedAt(new Date());
  }, []);

  const commitSnapshot = useCallback((snapshot) => {
    applySnapshotToRoot(snapshot, defaultsRef.current);
    setTokens({ ...snapshot });
    persistOverrides(snapshot, defaultsRef.current);
    bumpVersion();
  }, [bumpVersion]);

  const pushHistory = useCallback((snapshot) => {
    const base = historyRef.current.slice(0, historyIndexRef.current + 1);
    const last = base[base.length - 1];
    if (last && snapshotsEqual(last, snapshot)) return;

    const next = [...base, { ...snapshot }].slice(-MAX_HISTORY);
    historyRef.current = next;
    historyIndexRef.current = next.length - 1;
    setHistoryIndex(historyIndexRef.current);
  }, []);

  const scheduleHistory = useCallback(
    (snapshot) => {
      pendingSnapshotRef.current = { ...snapshot };
      clearTimeout(historyDebounceRef.current);
      historyDebounceRef.current = setTimeout(() => {
        if (pendingSnapshotRef.current) {
          pushHistory(pendingSnapshotRef.current);
          pendingSnapshotRef.current = null;
        }
      }, HISTORY_DEBOUNCE_MS);
    },
    [pushHistory],
  );

  const undo = useCallback(() => {
    clearTimeout(historyDebounceRef.current);
    pendingSnapshotRef.current = null;

    if (historyIndexRef.current <= 0) return;

    historyIndexRef.current -= 1;
    setHistoryIndex(historyIndexRef.current);
    commitSnapshot(historyRef.current[historyIndexRef.current]);
  }, [commitSnapshot]);

  const redo = useCallback(() => {
    clearTimeout(historyDebounceRef.current);
    pendingSnapshotRef.current = null;

    if (historyIndexRef.current >= historyRef.current.length - 1) return;

    historyIndexRef.current += 1;
    setHistoryIndex(historyIndexRef.current);
    commitSnapshot(historyRef.current[historyIndexRef.current]);
  }, [commitSnapshot]);

  undoRef.current = undo;
  redoRef.current = redo;

  useEffect(() => {
    const overrides = readStoredOverrides();
    const merged = { ...defaults, ...overrides };
    historyRef.current = [{ ...merged }];
    historyIndexRef.current = 0;
    setHistoryIndex(0);
    setTokens(merged);
    applySnapshotToRoot(merged, defaults);
    if (Object.keys(overrides).length > 0) {
      setSavedAt(new Date());
    }
    setReady(true);
  }, [defaults]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const mod = event.metaKey || event.ctrlKey;
      if (!mod || event.key.toLowerCase() !== "z") return;

      event.preventDefault();
      if (event.shiftKey) {
        redoRef.current();
      } else {
        undoRef.current();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const setToken = useCallback(
    (name, value) => {
      setTokens((prev) => {
        const next = { ...prev, [name]: value };
        applyTokenToRoot(name, value);
        persistOverrides(next, defaultsRef.current);
        scheduleHistory(next);
        setSavedAt(new Date());
        return next;
      });
      setVersion((v) => v + 1);
    },
    [scheduleHistory],
  );

  const resetTokens = useCallback(() => {
    clearTimeout(historyDebounceRef.current);
    pendingSnapshotRef.current = null;
    const snapshot = { ...defaultsRef.current };
    historyRef.current = [snapshot];
    historyIndexRef.current = 0;
    setHistoryIndex(0);
    commitSnapshot(snapshot);
  }, [commitSnapshot]);

  const loadSnapshot = useCallback(
    (partial) => {
      clearTimeout(historyDebounceRef.current);
      pendingSnapshotRef.current = null;

      const merged = { ...defaultsRef.current };
      for (const token of ALL_TOKENS) {
        if (partial[token.name] !== undefined) {
          merged[token.name] = partial[token.name];
        }
      }

      commitSnapshot(merged);
      pushHistory(merged);
    },
    [commitSnapshot, pushHistory],
  );

  const exportCss = useCallback(() => {
    const lines = ALL_TOKENS.map((token) => {
      const value = tokens[token.name] ?? token.default;
      return `  ${token.name}: ${value};`;
    });
    const syncLines = Object.entries(TOKEN_SYNC).flatMap(([source, targets]) => {
      const value = tokens[source] ?? defaults[source];
      return targets.map((target) => `  ${target}: ${value};`);
    });
    return `:root {\n${lines.join("\n")}\n${syncLines.join("\n")}\n}`;
  }, [tokens, defaults]);

  const exportPreset = useCallback(() => {
    return JSON.stringify(
      {
        version: 1,
        savedAt: new Date().toISOString(),
        tokens: diffOverrides(tokens, defaults),
      },
      null,
      2,
    );
  }, [tokens, defaults]);

  const canUndo = historyIndex > 0;
  const canRedo = historyIndex < historyRef.current.length - 1;

  const value = useMemo(
    () => ({
      tokens,
      version,
      ready,
      savedAt,
      canUndo,
      canRedo,
      setToken,
      undo,
      redo,
      resetTokens,
      loadSnapshot,
      exportCss,
      exportPreset,
      defaults,
    }),
    [
      tokens,
      version,
      ready,
      savedAt,
      canUndo,
      canRedo,
      setToken,
      undo,
      redo,
      resetTokens,
      loadSnapshot,
      exportCss,
      exportPreset,
      defaults,
    ],
  );

  return <TokenContext.Provider value={value}>{children}</TokenContext.Provider>;
}

export function useTokens() {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error("useTokens must be used within TokenProvider");
  }
  return context;
}
