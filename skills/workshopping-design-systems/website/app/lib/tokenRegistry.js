/**
 * Lean workshop controls — a small set of knobs that map to semantic tokens.
 * Primitives in tokens.css stay derived via TOKEN_SYNC when you tune these.
 */

export const TOKEN_STORAGE_KEY = "design-lab-tokens";

/** When a control changes, keep matching primitives in sync for export/preview. */
export const TOKEN_SYNC = {
  "--accent": ["--brand-900"],
  "--bg": ["--brand-50"],
  "--fg": ["--ink-900"],
  "--fg-muted": ["--ink-700"],
  "--border-width": ["--border-width-1"],
};

export const FOUNDATION_CONTROLS = [
  {
    name: "--accent",
    label: "Accent",
    description: "Nav, buttons, headings, links.",
    type: "color",
    default: "#2563eb",
    axis: "colour",
  },
  {
    name: "--bg",
    label: "Canvas",
    description: "Page background behind content.",
    type: "color",
    default: "#f8fafc",
    axis: "colour",
  },
  {
    name: "--fg",
    label: "Body text",
    description: "Primary ink on light surfaces.",
    type: "color",
    default: "#0f172a",
    axis: "colour",
  },
  {
    name: "--fg-muted",
    label: "Secondary text",
    description: "Labels, meta, supporting copy.",
    type: "color",
    default: "#64748b",
    axis: "colour",
  },
  {
    name: "--text-h1",
    label: "Heading size",
    description: "Page titles and major headings.",
    type: "length",
    default: "2rem",
    min: 1.25,
    max: 3.5,
    step: 0.0625,
    unit: "rem",
    axis: "type",
  },
  {
    name: "--text-body",
    label: "Body size",
    description: "Paragraphs, tables, UI labels.",
    type: "length",
    default: "0.875rem",
    min: 0.75,
    max: 1.25,
    step: 0.0625,
    unit: "rem",
    axis: "type",
  },
  {
    name: "--leading-body",
    label: "Body line height",
    description: "Vertical rhythm for reading text.",
    type: "number",
    default: "1.5",
    min: 1.2,
    max: 2,
    step: 0.05,
    axis: "type",
  },
  {
    name: "--space-4",
    label: "Default padding",
    description: "Card padding, gaps, compact spacing.",
    type: "length",
    default: "1rem",
    min: 0.5,
    max: 2.5,
    step: 0.0625,
    unit: "rem",
    axis: "space",
  },
  {
    name: "--space-8",
    label: "Section spacing",
    description: "Between sections and large gaps.",
    type: "length",
    default: "2rem",
    min: 1,
    max: 5,
    step: 0.125,
    unit: "rem",
    axis: "space",
  },
  {
    name: "--radius-md",
    label: "Corner radius",
    description: "Cards, inputs, buttons.",
    type: "length",
    default: "8px",
    min: 0,
    max: 32,
    step: 1,
    unit: "px",
    axis: "shape",
  },
  {
    name: "--border-width",
    label: "Border thickness",
    description: "Hairlines, card edges, dividers.",
    type: "length",
    default: "1px",
    min: 0,
    max: 4,
    step: 0.5,
    unit: "px",
    axis: "shape",
  },
];

export const COMPONENT_CONTROLS = [
  {
    name: "--btn-bg",
    label: "Button background",
    description: "Primary button fill.",
    type: "color",
    default: "#1b35b2",
    axis: "components",
    component: "button",
  },
  {
    name: "--btn-padding-y",
    label: "Button padding (vertical)",
    description: "Top and bottom padding.",
    type: "length",
    default: "0.4375rem",
    min: 0.25,
    max: 1.25,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "button",
  },
  {
    name: "--btn-padding-x",
    label: "Button padding (horizontal)",
    description: "Left and right padding.",
    type: "length",
    default: "0.875rem",
    min: 0.5,
    max: 2,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "button",
  },
  {
    name: "--btn-radius",
    label: "Button corner radius",
    description: "Rounded corners on buttons.",
    type: "length",
    default: "8px",
    min: 0,
    max: 24,
    step: 1,
    unit: "px",
    axis: "components",
    component: "button",
  },
  {
    name: "--btn-font-size",
    label: "Button label size",
    description: "Text size on button labels.",
    type: "length",
    default: "0.8125rem",
    min: 0.75,
    max: 1,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "button",
  },
  {
    name: "--btn-border-width",
    label: "Button border thickness",
    description: "Outline on primary buttons (0 for none).",
    type: "length",
    default: "0px",
    min: 0,
    max: 4,
    step: 0.5,
    unit: "px",
    axis: "components",
    component: "button",
  },
  {
    name: "--btn-border-color",
    label: "Button border colour",
    description: "Outline colour on primary buttons.",
    type: "color",
    default: "#c5ccef",
    axis: "components",
    component: "button",
  },
  {
    name: "--btn-font-weight",
    label: "Button label weight",
    description: "Font weight on button text.",
    type: "weight",
    default: "600",
    min: 400,
    max: 700,
    step: 100,
    axis: "components",
    component: "button",
  },
  {
    name: "--card-bg",
    label: "Card background",
    description: "Surface behind card content.",
    type: "color",
    default: "#ffffff",
    axis: "components",
    component: "card",
  },
  {
    name: "--card-padding",
    label: "Card padding",
    description: "Space inside the card.",
    type: "length",
    default: "1.5rem",
    min: 0.75,
    max: 3,
    step: 0.125,
    unit: "rem",
    axis: "components",
    component: "card",
  },
  {
    name: "--card-radius",
    label: "Card corner radius",
    description: "Rounded corners on cards.",
    type: "length",
    default: "12px",
    min: 0,
    max: 32,
    step: 1,
    unit: "px",
    axis: "components",
    component: "card",
  },
  {
    name: "--card-border-width",
    label: "Card border thickness",
    description: "Edge weight around the card.",
    type: "length",
    default: "1.5px",
    min: 0,
    max: 4,
    step: 0.5,
    unit: "px",
    axis: "components",
    component: "card",
  },
  {
    name: "--card-title-size",
    label: "Card title size",
    description: "Heading text inside the card.",
    type: "length",
    default: "0.875rem",
    min: 0.75,
    max: 1.25,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "card",
  },
  {
    name: "--card-title-weight",
    label: "Card title weight",
    description: "Font weight on the card heading.",
    type: "weight",
    default: "700",
    min: 400,
    max: 700,
    step: 100,
    axis: "components",
    component: "card",
  },
  {
    name: "--card-body-size",
    label: "Card body size",
    description: "Paragraph and meta text in the card.",
    type: "length",
    default: "0.8125rem",
    min: 0.6875,
    max: 1,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "card",
  },
  {
    name: "--nav-bg",
    label: "Nav background",
    description: "Sticky app header bar.",
    type: "color",
    default: "#2563eb",
    axis: "components",
    component: "nav",
  },
  {
    name: "--nav-height",
    label: "Nav height",
    description: "Vertical size of the header bar.",
    type: "length",
    default: "66px",
    min: 48,
    max: 88,
    step: 1,
    unit: "px",
    axis: "components",
    component: "nav",
  },
  {
    name: "--nav-logo-size",
    label: "Logo mark size",
    description: "Diameter of the circular logo.",
    type: "length",
    default: "3rem",
    min: 2,
    max: 5,
    step: 0.125,
    unit: "rem",
    axis: "components",
    component: "nav",
  },
  {
    name: "--nav-wordmark-size",
    label: "Wordmark size",
    description: "Product name beside the logo mark.",
    type: "length",
    default: "1.25rem",
    min: 1,
    max: 1.75,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "nav",
  },
  {
    name: "--nav-wordmark-weight",
    label: "Wordmark weight",
    description: "Font weight on the wordmark.",
    type: "weight",
    default: "700",
    min: 400,
    max: 700,
    step: 100,
    axis: "components",
    component: "nav",
  },
  {
    name: "--tab-inactive-bg",
    label: "Inactive tab",
    description: "Background on unselected folder tabs.",
    type: "color",
    default: "#d4daf2",
    axis: "components",
    component: "folder-tab",
  },
  {
    name: "--tab-active-bg",
    label: "Active tab",
    description: "Background on the selected tab.",
    type: "color",
    default: "#ffffff",
    axis: "components",
    component: "folder-tab",
  },
  {
    name: "--tab-radius",
    label: "Tab corner radius",
    description: "Top corners on folder tabs.",
    type: "length",
    default: "10px",
    min: 0,
    max: 20,
    step: 1,
    unit: "px",
    axis: "components",
    component: "folder-tab",
  },
  {
    name: "--tab-shell-bg",
    label: "Folder shell wash",
    description: "Background behind tab content area.",
    type: "color",
    default: "#e8ebf8",
    axis: "components",
    component: "folder-tab",
  },
  {
    name: "--tab-label-size",
    label: "Tab label size",
    description: "Main label on folder tabs.",
    type: "length",
    default: "0.9375rem",
    min: 0.75,
    max: 1.125,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "folder-tab",
  },
  {
    name: "--tab-label-weight",
    label: "Tab label weight",
    description: "Font weight on tab labels.",
    type: "weight",
    default: "700",
    min: 400,
    max: 700,
    step: 100,
    axis: "components",
    component: "folder-tab",
  },
  {
    name: "--tab-sub-size",
    label: "Tab subtitle size",
    description: "Small uppercase line under the label.",
    type: "length",
    default: "0.65625rem",
    min: 0.5625,
    max: 0.8125,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "folder-tab",
  },
  {
    name: "--btn-ghost-fg",
    label: "Ghost button text",
    description: "Label colour on secondary buttons.",
    type: "color",
    default: "#64748b",
    axis: "components",
    component: "ghost-button",
  },
  {
    name: "--btn-ghost-border",
    label: "Ghost button border",
    description: "Outline on secondary buttons.",
    type: "color",
    default: "#e2e8f0",
    axis: "components",
    component: "ghost-button",
  },
  {
    name: "--btn-ghost-radius",
    label: "Ghost corner radius",
    description: "Rounded corners on ghost buttons.",
    type: "length",
    default: "8px",
    min: 0,
    max: 24,
    step: 1,
    unit: "px",
    axis: "components",
    component: "ghost-button",
  },
  {
    name: "--btn-ghost-border-width",
    label: "Ghost border thickness",
    description: "Outline weight on ghost buttons.",
    type: "length",
    default: "1px",
    min: 0,
    max: 3,
    step: 0.5,
    unit: "px",
    axis: "components",
    component: "ghost-button",
  },
  {
    name: "--btn-ghost-font-size",
    label: "Ghost label size",
    description: "Text size on ghost buttons.",
    type: "length",
    default: "0.8125rem",
    min: 0.75,
    max: 1,
    step: 0.0625,
    unit: "rem",
    axis: "components",
    component: "ghost-button",
  },
  {
    name: "--btn-ghost-font-weight",
    label: "Ghost label weight",
    description: "Font weight on ghost buttons.",
    type: "weight",
    default: "600",
    min: 400,
    max: 700,
    step: 100,
    axis: "components",
    component: "ghost-button",
  },
];

export const LEAN_CONTROLS = [...FOUNDATION_CONTROLS, ...COMPONENT_CONTROLS];

export const ALL_TOKENS = LEAN_CONTROLS;

export function controlsForAxis(axis) {
  return LEAN_CONTROLS.filter((control) => control.axis === axis);
}

export function controlsForComponent(component) {
  return COMPONENT_CONTROLS.filter((control) => control.component === component);
}

export function getControl(name) {
  return LEAN_CONTROLS.find((control) => control.name === name);
}

export function buildDefaultTokens() {
  return Object.fromEntries(LEAN_CONTROLS.map((token) => [token.name, token.default]));
}

export function expandedTokenNames() {
  const names = new Set();
  for (const control of LEAN_CONTROLS) {
    names.add(control.name);
    for (const synced of TOKEN_SYNC[control.name] ?? []) {
      names.add(synced);
    }
  }
  return [...names];
}

export function isColorLiteral(value) {
  return /^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i.test(value?.trim() ?? "");
}

export function resolveColorValue(value) {
  if (typeof window === "undefined" || !value) return value ?? "";
  if (isColorLiteral(value)) return value;
  if (value.startsWith("var(")) {
    const ref = value.match(/var\((--[^)]+)\)/)?.[1];
    if (ref) {
      return getComputedStyle(document.documentElement).getPropertyValue(ref).trim();
    }
  }
  return value;
}

const LENGTH_PATTERN = /^([\d.]+)(rem|px|em)$/;

export function parseLength(value, fallbackUnit = "rem") {
  const trimmed = value?.trim() ?? "";
  const match = trimmed.match(LENGTH_PATTERN);
  if (!match) return null;
  return { num: parseFloat(match[1]), unit: match[2] };
}

export function formatLength(num, unit) {
  if (unit === "px") return `${Math.round(num)}px`;
  if (unit === "rem" || unit === "em") {
    const rounded = parseFloat(num.toFixed(4));
    return `${rounded}${unit}`;
  }
  return `${num}${unit}`;
}

export function clamp(num, min, max) {
  return Math.min(max, Math.max(min, num));
}

export function tokenSliderBounds(token) {
  const parsed = parseLength(token.default, token.unit);
  const unit = parsed?.unit ?? token.unit ?? "rem";
  return {
    min: token.min ?? 0,
    max: token.max ?? (unit === "px" ? 100 : 4),
    step: token.step ?? (unit === "px" ? 1 : 0.0625),
    unit,
  };
}
