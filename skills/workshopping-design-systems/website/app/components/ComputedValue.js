"use client";

import { useEffect, useState } from "react";
import styles from "../lab.module.css";
import { useTokens } from "./TokenProvider";

export default function ComputedValue({ token }) {
  const { version } = useTokens();
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(
      getComputedStyle(document.documentElement).getPropertyValue(token).trim(),
    );
  }, [token, version]);

  return <span className={styles.tokenValue}>{value || token}</span>;
}
