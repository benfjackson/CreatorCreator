"use client";

import { TokenControl } from "./TokenControl";
import styles from "../lab.module.css";

export function ComponentWorkbench({ title, description, preview, controls }) {
  return (
    <section className={styles.componentWorkbench}>
      <div className={styles.componentIntro}>
        <h2 className={styles.componentTitle}>{title}</h2>
        {description ? <p className={styles.componentDesc}>{description}</p> : null}
      </div>
      <div className={styles.componentLayout}>
        <div className={styles.componentStage}>{preview}</div>
        <div className={styles.componentControls}>
          {controls.map((control) => (
            <div key={control.name} className={styles.componentControl}>
              <span className={styles.componentControlLabel}>{control.label}</span>
              {control.description ? (
                <span className={styles.componentControlHint}>{control.description}</span>
              ) : null}
              <TokenControl control={control} />
              <code className={styles.controlToken}>{control.name}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
