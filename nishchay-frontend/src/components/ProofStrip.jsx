import React from 'react';
import styles from './ProofStrip.module.css';

export default function ProofStrip() {
  return (
    <div className={styles.strip} role="list" aria-label="Social proof">
      <span role="listitem"><strong>200+</strong> aspirants on waitlist</span>
      <span className={styles.divider} aria-hidden="true">|</span>
      <span role="listitem">Built for <strong>2026–28</strong> cycle</span>
      <span className={styles.divider} aria-hidden="true">|</span>
      <span role="listitem">Works for <strong>Prelims &amp; Mains</strong></span>
      <span className={styles.divider} aria-hidden="true">|</span>
      <span role="listitem">Mobile-first · <strong>Hindi &amp; English</strong></span>
    </div>
  );
}
