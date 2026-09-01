"use client";

import { useRef } from "react";
import { ALL_TOKENS } from "../lib/tokenRegistry";
import { useTokens } from "./TokenProvider";
import styles from "../lab.module.css";

export default function LabToolbar() {
  const {
    undo,
    redo,
    resetTokens,
    exportCss,
    exportPreset,
    loadSnapshot,
    canUndo,
    canRedo,
    savedAt,
  } = useTokens();
  const fileInputRef = useRef(null);

  const handleExport = async () => {
    try {
      await navigator.clipboard.writeText(exportCss());
    } catch {
      /* clipboard may be unavailable */
    }
  };

  const handleDownload = () => {
    const blob = new Blob([exportPreset()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "design-lab-preset.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleLoadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    try {
      const raw = await file.text();
      const parsed = JSON.parse(raw);
      const overrides = parsed.tokens ?? parsed;
      if (typeof overrides !== "object" || overrides === null) return;

      const snapshot = {};
      for (const token of ALL_TOKENS) {
        if (overrides[token.name] !== undefined) {
          snapshot[token.name] = overrides[token.name];
        }
      }
      loadSnapshot(snapshot);
    } catch {
      /* invalid preset file */
    }
  };

  return (
    <div className={styles.toolbarWrap}>
      <div className={styles.toolbar}>
        <button
          type="button"
          className={styles.toolbarBtn}
          onClick={undo}
          disabled={!canUndo}
          title="Undo (⌘Z)"
        >
          Undo
        </button>
        <button
          type="button"
          className={styles.toolbarBtn}
          onClick={redo}
          disabled={!canRedo}
          title="Redo (⌘⇧Z)"
        >
          Redo
        </button>
        <button type="button" className={styles.toolbarBtn} onClick={handleExport}>
          Copy CSS
        </button>
        <button type="button" className={styles.toolbarBtn} onClick={handleDownload}>
          Download
        </button>
        <button type="button" className={styles.toolbarBtn} onClick={handleLoadClick}>
          Load
        </button>
        <button type="button" className={styles.toolbarBtn} onClick={resetTokens}>
          Reset
        </button>
        <input
          ref={fileInputRef}
          type="file"
          accept="application/json,.json"
          className={styles.toolbarFile}
          onChange={handleFileChange}
        />
      </div>
      <p className={styles.toolbarStatus}>
        {savedAt
          ? `Auto-saved in this browser · ${savedAt.toLocaleTimeString()}`
          : "Changes auto-save in this browser"}
      </p>
    </div>
  );
}
