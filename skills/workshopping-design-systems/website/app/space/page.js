import LabShell from "../components/LabShell";
import ComputedValue from "../components/ComputedValue";
import styles from "../lab.module.css";

const steps = [
  "--space-1",
  "--space-2",
  "--space-3",
  "--space-4",
  "--space-6",
  "--space-8",
  "--space-12",
  "--space-16",
];

export default function SpacePage() {
  return (
    <LabShell
      title="Space"
      lede="4px base. Use the scale for padding, gap, and margin. Do not add one-off pixels because a mock was close."
    >
      <section className={styles.section} style={{ marginTop: "var(--space-8)" }}>
        <h2 className={styles.sectionTitle}>Scale</h2>
        <div className={styles.stack}>
          {steps.map((token) => (
            <div key={token} className={styles.spaceRow}>
              <code className={styles.tokenName} style={{ width: "7rem" }}>
                {token}
              </code>
              <ComputedValue token={token} />
              <div className={styles.spaceBar} style={{ width: `var(${token})` }} />
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>In use</h2>
        <div className={styles.spaceCard}>
          <p className={styles.note}>Card padding --space-6, stack gap --space-4</p>
          <div className={styles.spaceCardInner}>Inner padding --space-4</div>
          <div className={styles.spaceCardInner}>Another block</div>
        </div>
      </section>
    </LabShell>
  );
}
