"use client";

import {
  clamp,
  formatLength,
  isColorLiteral,
  parseLength,
  resolveColorValue,
  tokenSliderBounds,
} from "../lib/tokenRegistry";
import { useTokens } from "./TokenProvider";
import styles from "../lab.module.css";

function toPickerHex(value) {
  if (!value) return "#000000";
  const trimmed = value.trim();
  if (/^#[0-9a-f]{6}$/i.test(trimmed)) return trimmed;
  if (/^#[0-9a-f]{3}$/i.test(trimmed)) {
    const [, r, g, b] = trimmed.match(/^#(.)(.)(.)$/i);
    return `#${r}${r}${g}${g}${b}${b}`;
  }
  return "#000000";
}

function SliderControl({ min, max, step, value, onChange, ariaLabel }) {
  return (
    <input
      type="range"
      className={styles.tokenSlider}
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={(e) => onChange(parseFloat(e.target.value))}
      aria-label={ariaLabel}
    />
  );
}

export function TokenControl({ control }) {
  const { tokens, setToken } = useTokens();
  const value = tokens[control.name] ?? control.default;

  if (control.type === "color") {
    const pickerValue = isColorLiteral(value)
      ? value
      : resolveColorValue(value) || "#000000";

    return (
      <div className={styles.tokenFieldInputs}>
        <input
          type="color"
          className={styles.tokenColorPicker}
          value={toPickerHex(pickerValue)}
          onChange={(e) => setToken(control.name, e.target.value)}
          aria-label={`${control.label} colour`}
        />
        <span className={styles.tokenSliderValue}>{value}</span>
      </div>
    );
  }

  if (control.type === "length") {
    const bounds = tokenSliderBounds(control);
    const parsed = parseLength(value, bounds.unit);

    if (!parsed) {
      return (
        <input
          type="text"
          className={styles.tokenInput}
          value={value}
          onChange={(e) => setToken(control.name, e.target.value)}
          spellCheck={false}
        />
      );
    }

    const sliderValue = clamp(parsed.num, bounds.min, bounds.max);

    return (
      <div className={styles.tokenSliderRow}>
        <SliderControl
          min={bounds.min}
          max={bounds.max}
          step={bounds.step}
          value={sliderValue}
          onChange={(num) => setToken(control.name, formatLength(num, parsed.unit))}
          ariaLabel={control.label}
        />
        <div className={styles.tokenSliderMeta}>
          <span className={styles.tokenSliderValue}>
            {formatLength(sliderValue, parsed.unit)}
          </span>
        </div>
      </div>
    );
  }

  if (control.type === "number") {
    const min = control.min ?? 0;
    const max = control.max ?? 10;
    const step = control.step ?? 0.1;
    const num = clamp(parseFloat(value) || 0, min, max);

    return (
      <div className={styles.tokenSliderRow}>
        <SliderControl
          min={min}
          max={max}
          step={step}
          value={num}
          onChange={(n) => setToken(control.name, String(n))}
          ariaLabel={control.label}
        />
        <div className={styles.tokenSliderMeta}>
          <span className={styles.tokenSliderValue}>{num}</span>
        </div>
      </div>
    );
  }

  if (control.type === "weight") {
    const min = control.min ?? 100;
    const max = control.max ?? 900;
    const step = control.step ?? 100;
    const num = clamp(parseInt(value, 10) || 400, min, max);

    return (
      <div className={styles.tokenSliderRow}>
        <SliderControl
          min={min}
          max={max}
          step={step}
          value={num}
          onChange={(n) => setToken(control.name, String(Math.round(n)))}
          ariaLabel={control.label}
        />
        <div className={styles.tokenSliderMeta}>
          <span className={styles.tokenSliderValue}>{num}</span>
        </div>
      </div>
    );
  }

  return null;
}

export function ControlRow({ control, preview }) {
  return (
    <div className={styles.controlRow}>
      <div className={styles.controlPreview}>{preview}</div>
      <div className={styles.controlFields}>
        <h3 className={styles.controlLabel}>{control.label}</h3>
        {control.description ? (
          <p className={styles.controlDesc}>{control.description}</p>
        ) : null}
        <TokenControl control={control} />
        <code className={styles.controlToken}>{control.name}</code>
      </div>
    </div>
  );
}
