import LabShell from "../components/LabShell";
import { ControlRow } from "../components/TokenControl";
import { controlsForAxis } from "../lib/tokenRegistry";
import styles from "../lab.module.css";

const controls = controlsForAxis("shape");

export default function ShapePage() {
  return (
    <LabShell
      title="Shape"
      lede="Corner radius and border thickness — the two shape picks that show up everywhere."
    >
      <div className={styles.controlList}>
        {controls.map((control) => (
          <ControlRow
            key={control.name}
            control={control}
            preview={
              control.name === "--radius-md" ? (
                <div
                  className={styles.previewBlock}
                  style={{
                    borderRadius: "var(--radius-md)",
                    background: "var(--bg-elevated)",
                    border: "var(--border-width) solid var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  Card corner
                </div>
              ) : (
                <div
                  className={styles.previewBlock}
                  style={{
                    borderRadius: "var(--radius-md)",
                    background: "var(--bg-elevated)",
                    border: "var(--border-width) solid var(--border)",
                    color: "var(--fg)",
                  }}
                >
                  Border edge
                </div>
              )
            }
          />
        ))}
      </div>
    </LabShell>
  );
}
