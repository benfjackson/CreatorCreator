"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../lab.module.css";

const AXES = [
  { href: "/", label: "Overview" },
  { href: "/colour", label: "Colour" },
  { href: "/type", label: "Type" },
  { href: "/space", label: "Space" },
  { href: "/shape", label: "Shape" },
];

export default function LabShell({ title, lede, children }) {
  const pathname = usePathname();

  return (
    <div className={styles.shell}>
      <header className={styles.header}>
        <p className={styles.brand}>Design lab</p>
        <nav className={styles.nav} aria-label="Token axes">
          {AXES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={pathname === item.href ? styles.navActive : styles.navLink}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>{title}</h1>
        {lede ? <p className={styles.lede}>{lede}</p> : null}
        {children}
      </main>
    </div>
  );
}
