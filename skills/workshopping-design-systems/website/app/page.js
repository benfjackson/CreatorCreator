import Link from "next/link";
import LabShell from "./components/LabShell";
import styles from "./lab.module.css";

export default function Home() {
  return (
    <LabShell
      title="Overview"
      lede="Forty-one picks across foundations and components. Changes auto-save in your browser; use Undo or Download to keep a preset."
    >
      <section className={styles.snapshot}>
        <div className={styles.snapshotCard}>
          <h2>Identity</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginTop: "var(--space-2)" }}>
            <div className={styles.specNavLogoMark} aria-hidden />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: "var(--weight-bold)", fontSize: "var(--text-h2)", color: "var(--accent)" }}>
              Your product
            </span>
          </div>
        </div>
        <div className={styles.snapshotCard}>
          <h2 style={{ fontFamily: "var(--font-display)" }}>Colour</h2>
          <div className={styles.pair}>
            <div
              className={styles.pairBlock}
              style={{ background: "var(--bg)", color: "var(--fg)", border: "var(--border-width) solid var(--border)" }}
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
          <h2 style={{ fontFamily: "var(--font-display)" }}>Type</h2>
          <p style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-h1)", fontWeight: "var(--weight-bold)", lineHeight: "var(--leading-heading)", color: "var(--accent)" }}>
            Heading
          </p>
          <p style={{ marginTop: "var(--space-2)", fontSize: "var(--text-body)", lineHeight: "var(--leading-body)", color: "var(--fg-muted)" }}>
            Body at the current size and leading.
          </p>
        </div>
        <div className={styles.snapshotCard}>
          <h2 style={{ fontFamily: "var(--font-display)" }}>Space & shape</h2>
          <div
            style={{
              marginTop: "var(--space-2)",
              padding: "var(--space-4)",
              borderRadius: "var(--radius-md)",
              border: "var(--border-width) solid var(--border)",
              background: "var(--bg-elevated)",
              boxShadow: "var(--shadow-sm)",
            }}
          >
            Padding · radius · border
          </div>
        </div>
      </section>

      <nav className={styles.axisLinks} aria-label="Workshop axes">
        <Link className={styles.axisLink} href="/colour">Colour — 4 picks</Link>
        <Link className={styles.axisLink} href="/type">Type — 3 picks</Link>
        <Link className={styles.axisLink} href="/space">Space — 2 picks</Link>
        <Link className={styles.axisLink} href="/shape">Shape — 2 picks</Link>
        <Link className={styles.axisLink} href="/components">Components — 31 picks</Link>
      </nav>
    </LabShell>
  );
}
