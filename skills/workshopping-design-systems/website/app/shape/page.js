import LabShell from "../components/LabShell";
import ComputedValue from "../components/ComputedValue";
import styles from "../lab.module.css";

const radii = ["--radius-sm", "--radius-md", "--radius-lg", "--radius-full"];

export default function ShapePage() {
  return (
    <LabShell
      title="Shape"
      lede="Radius and shadow only. Motion waits until colour, type, space, and shape can compose a real screen."
    >
      <section className={styles.section} style={{ marginTop: "var(--space-8)" }}>
        <h2 className={styles.sectionTitle}>Radius</h2>
        <div className={styles.shapeRow}>
          {radii.map((token) => (
            <div key={token} style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
              <div className={styles.shapeBox} style={{ borderRadius: `var(${token})` }}>
                {token.replace("--radius-", "")}
              </div>
              <code className={styles.tokenName}>{token}</code>
              <ComputedValue token={token} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Shadow</h2>
        <div
          className={`${styles.shapeBox} ${styles.shapeRaised}`}
          style={{ borderRadius: "var(--radius-md)", width: "12rem", height: "6rem" }}
        >
          --shadow-sm
        </div>
      </section>
    </LabShell>
  );
}
