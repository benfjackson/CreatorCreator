"use client";

import { useEffect, useState } from "react";
import styles from "../lab.module.css";

export default function ComputedValue({ token }) {
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(
      getComputedStyle(document.documentElement).getPropertyValue(token).trim(),
    );
  }, [token]);

  return <span className={styles.tokenValue}>{value || token}</span>;
}
