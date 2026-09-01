import LabShell from "../components/LabShell";
import { ControlRow } from "../components/TokenControl";
import { controlsForAxis } from "../lib/tokenRegistry";
import styles from "../lab.module.css";

const controls = controlsForAxis("space");

export default function SpacePage() {
  return (
    <LabShell
      title="Space"
      lede="Two spacing picks — default padding inside components, and larger gaps between sections."
    >
      <div className={styles.controlList}>
        {controls.map((control) => (
          <ControlRow
            key={control.name}
            control={control}
            preview={
              control.name === "--space-4" ? (
                <div
                  className={styles.previewCard}
                  style={{ padding: "var(--space-4)", gap: "var(--space-4)" }}
                >
                  <div className={styles.previewCardInner}>Padding --space-4</div>
                  <div className={styles.previewCardInner}>Gap --space-4</div>
                </div>
              ) : (
                <div className={styles.previewStack} style={{ gap: "var(--space-8)" }}>
                  <div className={styles.previewCardInner}>Section one</div>
                  <div className={styles.previewCardInner}>Section two</div>
                </div>
              )
            }
          />
        ))}
      </div>
    </LabShell>
  );
}
