import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        Nishchay<span className={styles.logoAccent}>AI</span>
      </div>
      <p className={styles.tagline}>
        Built for UPSC aspirants who are serious about execution, not just content.
      </p>
      <p className={styles.copy}>© 2025 Nishchay AI</p>
    </footer>
  );
}
