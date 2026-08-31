import LabShell from "./components/LabShell";
import Swatch from "./components/Swatch";
import styles from "./lab.module.css";

export default function Home() {
  return (
    <LabShell
      title="Overview"
      lede="Neutral starter tokens. Change tokens.css, then look here and on each axis page. Lock the why in DECISIONS.md."
    >
      <section className={styles.snapshot}>
        <div className={styles.snapshotCard}>
          <h2>Colour</h2>
          <div className={styles.pair}>
            <div
              className={styles.pairBlock}
              style={{ background: "var(--bg)", color: "var(--fg)", border: "1px solid var(--border)" }}
            >
              Canvas
            </div>
            <div
              className={styles.pairBlock}
              style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
            >
              Accent
            </div>
          </div>
        </div>
        <div className={styles.snapshotCard}>
          <h2>Type</h2>
          <p style={{ fontSize: "var(--text-h2)", fontWeight: "var(--weight-semibold)", lineHeight: "var(--leading-heading)" }}>
            Heading
          </p>
          <p style={{ marginTop: "var(--space-2)", color: "var(--fg-muted)" }}>
            Body at the current size and leading.
          </p>
        </div>
        <div className={styles.snapshotCard}>
          <h2>Space & shape</h2>
          <div
            style={{
              marginTop: "var(--space-2)",
              padding: "var(--space-4)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--border)",
              background: "var(--bg)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Padding 4 · radius md
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Semantic colours</h2>
        <div className={styles.grid}>
          <Swatch token="--bg" note="Page canvas" />
          <Swatch token="--fg" note="Primary text" />
          <Swatch token="--fg-muted" note="Secondary text" />
          <Swatch token="--accent" foreground="--accent-fg" note="Interactive" />
          <Swatch token="--border" note="Hairlines" />
        </div>
      </section>
    </LabShell>
  );
}
