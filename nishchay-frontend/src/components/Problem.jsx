import React from 'react';
import styles from './Problem.module.css';

const problems = [
  {
    num: '67%',
    title: 'No structured plan',
    desc: 'Most self-study aspirants spend more time planning than actually studying — then abandon the plan after 3 days.',
  },
  {
    num: '3×',
    title: 'Missed days snowball',
    desc: "One missed day creates anxiety. Three missed days means starting over. There's no system that handles real life.",
  },
  {
    num: '82%',
    title: 'Revision neglected',
    desc: 'Aspirants read new content daily but skip revision. Topics studied in January vanish by Prelims in June.',
  },
  {
    num: '∞',
    title: 'Content overload',
    desc: 'There\'s no shortage of videos, PDFs, and PYQs. What\'s missing is someone to say: "Study this. Not that. Today."',
  },
];

export default function Problem() {
  return (
    <section className={styles.problem}>
      <div className={styles.inner}>
        <p className={styles.label}>The problem</p>
        <h2 className={styles.title}>Every UPSC aspirant knows this feeling.</h2>
        <div className={styles.grid}>
          {problems.map((p) => (
            <div key={p.title} className={styles.card}>
              <div className={styles.num}>{p.num}</div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
