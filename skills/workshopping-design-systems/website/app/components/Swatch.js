"use client";

import { useEffect, useState } from "react";
import styles from "../lab.module.css";

export default function Swatch({ token, note, foreground }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    const raw = getComputedStyle(document.documentElement)
      .getPropertyValue(token)
      .trim();
    setValue(raw);
  }, [token]);

  return (
    <div className={styles.swatch}>
      <div
        className={styles.swatchChip}
        style={{
          background: `var(${token})`,
          color: foreground ? `var(${foreground})` : undefined,
        }}
      />
      <div className={styles.swatchMeta}>
        <code className={styles.tokenName}>{token}</code>
        <span className={styles.tokenValue}>{value}</span>
        {note ? <span className={styles.note}>{note}</span> : null}
      </div>
    </div>
  );
}
