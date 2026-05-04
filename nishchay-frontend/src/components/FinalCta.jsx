import React from 'react';
import WaitlistForm from './WaitlistForm';
import styles from './FinalCta.module.css';

export default function FinalCta() {
  return (
    <section className={styles.finalCta}>
      <h2 className={styles.title}>
        Ready to stop drifting<br />and start moving?
      </h2>
      <p className={styles.sub}>
        Join 200+ aspirants already on the waitlist.<br />
        Early access opens in 2 weeks.
      </p>
      <div className={styles.formWrap}>
        <WaitlistForm dark successId="final-success" />
      </div>
      <p className={styles.note}>Free to join · No credit card · Unsubscribe anytime</p>
    </section>
  );
}
