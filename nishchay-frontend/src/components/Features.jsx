import React from 'react';
import styles from './Features.module.css';

const features = [
  {
    icon: '📅',
    title: 'Daily plan generator',
    desc: 'Adaptive task list built from your hours, stage, and weak areas. Updates every day based on what you actually did.',
  },
  {
    icon: '⚡',
    title: 'Smart replan engine',
    desc: "Miss tasks? Get a clear breakdown — what moves to tomorrow, what's deferred, what's dropped. No guilt, just a new plan.",
  },
  {
    icon: '🔁',
    title: 'Revision scheduler',
    desc: 'Automatically schedules revision for completed topics using spaced repetition. Weak subjects get extra slots.',
  },
  {
    icon: '📰',
    title: 'Current affairs mapper',
    desc: '3–5 curated daily issues mapped to GS papers, Prelims angles, and Mains angles. Relevant, not overwhelming.',
  },
  {
    icon: '✍️',
    title: 'Mains answer feedback',
    desc: 'Submit one answer per day. Get rubric-based feedback on structure, relevance, depth, and conclusion.',
  },
  {
    icon: '📊',
    title: 'Progress dashboard',
    desc: 'Streak, completion rate, revision debt, and weak subject flags — so you can see exactly where you stand.',
  },
];

export default function Features() {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        <p className={styles.label}>What's inside</p>
        <h2 className={styles.title}>
          Everything you need.<br />Nothing you don't.
        </h2>
        <div className={styles.grid}>
          {features.map((f) => (
            <div key={f.title} className={styles.card}>
              <div className={styles.icon} aria-hidden="true">{f.icon}</div>
              <h3 className={styles.cardTitle}>{f.title}</h3>
              <p className={styles.cardDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
