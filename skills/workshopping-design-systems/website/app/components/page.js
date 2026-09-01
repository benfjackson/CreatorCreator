import LabShell from "../components/LabShell";
import { ComponentWorkbench } from "../components/ComponentWorkbench";
import { controlsForComponent } from "../lib/tokenRegistry";
import styles from "../lab.module.css";

export default function ComponentsPage() {
  return (
    <LabShell
      title="Components"
      lede="Style real UI pieces — live preview on the left, controls on the right. Thirty-one picks across six components."
    >
      <div className={styles.componentList}>
        <ComponentWorkbench
          title="App header"
          description="Sticky nav bar with logo mark and wordmark."
          controls={controlsForComponent("nav")}
          preview={
            <header className={styles.specNav}>
              <div className={styles.specNavBrand}>
                <div className={styles.specNavLogoMark} aria-hidden />
                <span className={styles.specNavWordmark}>Your product</span>
              </div>
            </header>
          }
        />

        <ComponentWorkbench
          title="Folder tabs"
          description="Section tabs and content shell — swap labels when you compose a real screen."
          controls={controlsForComponent("folder-tab")}
          preview={
            <div className={styles.specFolderChrome}>
              <div className={styles.specFolderTabs}>
                <div className={`${styles.specFolderTab} ${styles.specFolderTabActive}`}>
                  <span className={styles.specFolderTabLabel}>Overview</span>
                  <span className={styles.specFolderTabSub}>Summary</span>
                </div>
                <div className={styles.specFolderTab}>
                  <span className={styles.specFolderTabLabel}>Library</span>
                  <span className={styles.specFolderTabSub}>Browse items</span>
                </div>
              </div>
              <div className={styles.specFolderPaper}>
                Tab content area — lists, tables, or forms sit here.
              </div>
            </div>
          }
        />

        <ComponentWorkbench
          title="Primary button"
          description="Main call-to-action — sign up, save, confirm."
          controls={controlsForComponent("button")}
          preview={
            <div className={styles.specButtonGroup}>
              <button type="button" className={styles.specButton}>Get started</button>
              <button type="button" className={styles.specButton}>Save changes</button>
            </div>
          }
        />

        <ComponentWorkbench
          title="Ghost button"
          description="Secondary actions — cancel, upload triggers, filter actions."
          controls={controlsForComponent("ghost-button")}
          preview={
            <div className={styles.specButtonGroup}>
              <button type="button" className={styles.specGhostButton}>Upload file</button>
              <button type="button" className={styles.specGhostButton}>Cancel</button>
            </div>
          }
        />

        <ComponentWorkbench
          title="Content card"
          description="Panels, summaries, and expandable content areas."
          controls={controlsForComponent("card")}
          preview={
            <article className={styles.specCard}>
              <h3 className={styles.specCardTitle}>Feature highlight</h3>
              <p className={styles.specCardBody}>
                Short supporting copy that explains what this block is for.
              </p>
              <p className={styles.specCardMeta}>Updated today</p>
            </article>
          }
        />
      </div>
    </LabShell>
  );
}
