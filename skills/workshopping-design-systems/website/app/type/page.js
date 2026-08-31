import LabShell from "../components/LabShell";
import ComputedValue from "../components/ComputedValue";
import styles from "../lab.module.css";

const samples = [
  ["--text-display", "--leading-display", "--weight-semibold", "Display", "The quick brown fox"],
  ["--text-h1", "--leading-heading", "--weight-semibold", "Heading 1", "The quick brown fox"],
  ["--text-h2", "--leading-heading", "--weight-semibold", "Heading 2", "The quick brown fox"],
  ["--text-h3", "--leading-heading", "--weight-medium", "Heading 3", "The quick brown fox"],
  ["--text-body", "--leading-body", "--weight-regular", "Body", "Pack my box with five dozen liquor jugs. Body copy should hold a line of this length without looking tight or sparse."],
  ["--text-small", "--leading-body", "--weight-regular", "Small", "Meta, labels, compact UI."],
  ["--text-caption", "--leading-body", "--weight-medium", "Caption", "Token names, overlines, fine print."],
];

export default function TypePage() {
  return (
    <LabShell
      title="Type"
      lede="Families are loaded in layout.js via next/font, then mapped in tokens.css. Change the mapping, not page CSS."
    >
      <section className={styles.section} style={{ marginTop: "var(--space-8)" }}>
        <h2 className={styles.sectionTitle}>Families</h2>
        <div className={styles.stack}>
          <p style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-h2)" }}>
            Sans — Geist (placeholder)
          </p>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-body)" }}>
            Mono — Geist Mono (placeholder)
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Scale</h2>
        <div className={styles.stack}>
          {samples.map(([size, leading, weight, label, sample]) => (
            <div key={size} className={styles.typeRow}>
              <div className={styles.typeMeta}>
                <div>{label}</div>
                <ComputedValue token={size} />
              </div>
              <p
                style={{
                  fontSize: `var(${size})`,
                  lineHeight: `var(${leading})`,
                  fontWeight: `var(${weight})`,
                }}
              >
                {sample}
              </p>
            </div>
          ))}
        </div>
      </section>
    </LabShell>
  );
}
