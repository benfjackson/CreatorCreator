import LabShell from "../components/LabShell";
import { ControlRow } from "../components/TokenControl";
import { controlsForAxis } from "../lib/tokenRegistry";
import styles from "../lab.module.css";

const controls = controlsForAxis("colour");

export default function ColourPage() {
  return (
    <LabShell
      title="Colour"
      lede="Four colour picks. Primitives in tokens.css follow these when you copy CSS."
    >
      <div className={styles.controlList}>
        {controls.map((control) => (
          <ControlRow
            key={control.name}
            control={control}
            preview={
              control.name === "--accent" ? (
                <div
                  className={styles.previewBlock}
                  style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
                >
                  Primary button
                </div>
              ) : control.name === "--bg" ? (
                <div
                  className={styles.previewBlock}
                  style={{ background: "var(--bg)", color: "var(--fg)", border: "var(--border-width) solid var(--border)" }}
                >
                  Page canvas
                </div>
              ) : control.name === "--fg" ? (
                <p className={styles.previewType} style={{ color: "var(--fg)" }}>
                  Primary body text
                </p>
              ) : (
                <p className={styles.previewType} style={{ color: "var(--fg-muted)" }}>
                  Secondary label text
                </p>
              )
            }
          />
        ))}
      </div>
    </LabShell>
  );
}
