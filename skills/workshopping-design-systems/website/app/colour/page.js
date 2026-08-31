import LabShell from "../components/LabShell";
import Swatch from "../components/Swatch";
import styles from "../lab.module.css";

const primitives = [
  ["--ink-900", "Darkest ink"],
  ["--ink-700", "Muted ink"],
  ["--ink-500", "Mid gray"],
  ["--ink-200", "Hairline / border"],
  ["--ink-50", "Wash"],
  ["--paper", "Surface"],
  ["--accent", "Placeholder accent"],
];

const semantic = [
  ["--bg", "Page canvas"],
  ["--bg-subtle", "Sunken / card wash"],
  ["--fg", "Primary text"],
  ["--fg-muted", "Secondary text"],
  ["--border", "Dividers"],
  ["--accent", "Interactive"],
  ["--accent-fg", "Text on accent"],
];

export default function ColourPage() {
  return (
    <LabShell
      title="Colour"
      lede="Primitives are the swatches. Semantic tokens are what UI uses. Do not pick a primitive in a component."
    >
      <section className={styles.section} style={{ marginTop: "var(--space-8)" }}>
        <h2 className={styles.sectionTitle}>Primitives</h2>
        <div className={styles.grid}>
          {primitives.map(([token, note]) => (
            <Swatch key={token} token={token} note={note} />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Semantic</h2>
        <div className={styles.grid}>
          {semantic.map(([token, note]) => (
            <Swatch
              key={token}
              token={token}
              note={note}
              foreground={token === "--accent" ? "--accent-fg" : undefined}
            />
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Contrast pairs</h2>
        <div className={styles.pair}>
          <div
            className={styles.pairBlock}
            style={{ background: "var(--bg)", color: "var(--fg)", border: "1px solid var(--border)" }}
          >
            <strong>fg on bg</strong>
            <p style={{ marginTop: "var(--space-2)", color: "var(--fg-muted)" }}>
              fg-muted on bg
            </p>
          </div>
          <div
            className={styles.pairBlock}
            style={{ background: "var(--accent)", color: "var(--accent-fg)" }}
          >
            <strong>accent-fg on accent</strong>
            <p style={{ marginTop: "var(--space-2)" }}>Primary button, links, focus</p>
          </div>
        </div>
      </section>
    </LabShell>
  );
}
