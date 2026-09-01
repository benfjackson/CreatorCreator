import LabShell from "../components/LabShell";
import { ControlRow } from "../components/TokenControl";
import { controlsForAxis } from "../lib/tokenRegistry";
import styles from "../lab.module.css";

const controls = controlsForAxis("type");

export default function TypePage() {
  return (
    <LabShell
      title="Type"
      lede="Geist Sans is the starter family. Adjust heading size, body size, and line height — swap fonts in layout.js when a brand locks type."
    >
      <div className={styles.controlList}>
        {controls.map((control) => (
          <ControlRow
            key={control.name}
            control={control}
            preview={
              control.name === "--text-h1" ? (
                <p
                  className={styles.previewHeading}
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "var(--text-h1)",
                    fontWeight: "var(--weight-bold)",
                    lineHeight: "var(--leading-heading)",
                    color: "var(--accent)",
                  }}
                >
                  Page heading
                </p>
              ) : control.name === "--text-body" ? (
                <p
                  className={styles.previewType}
                  style={{
                    fontSize: "var(--text-body)",
                    lineHeight: "var(--leading-body)",
                    color: "var(--fg)",
                  }}
                >
                  Body copy at the current size and leading — the rhythm you use for paragraphs and UI labels.
                </p>
              ) : (
                <p
                  className={styles.previewType}
                  style={{
                    fontSize: "var(--text-body)",
                    lineHeight: "var(--leading-body)",
                    color: "var(--fg)",
                  }}
                >
                  Line one and line two with the same body size — watch vertical rhythm change.
                </p>
              )
            }
          />
        ))}
      </div>
    </LabShell>
  );
}
