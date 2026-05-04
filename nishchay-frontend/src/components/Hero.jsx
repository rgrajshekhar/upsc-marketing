import React from 'react';
import WaitlistForm from './WaitlistForm';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <div className={`${styles.heroKicker} animate-fade-up-1`}>
          AI Study Manager for UPSC
        </div>
        <h1 className={`${styles.heroHeadline} animate-fade-up-2`}>
          Stop planning.<br />
          Start <em>executing.</em>
        </h1>
        <p className={`${styles.heroSub} animate-fade-up-3`}>
          Nishchay AI tells you exactly what to study today, why, and how to
          recover when you fall behind — so you never waste another study session.
        </p>

        <div className={`animate-fade-up-4`} id="signup">
          <WaitlistForm successId="hero-success" />
          <p className={styles.signupNote}>
            Free early access · No credit card · Launching in 3 weeks
          </p>
        </div>
      </div>
    </section>
  );
}
