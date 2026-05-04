import React from 'react';
import styles from './HowItWorks.module.css';

const steps = [
  {
    num: '01',
    tag: 'Day 1 · 2 minutes',
    title: 'Tell us your situation',
    desc: 'Your target year, attempt number, daily hours, and weak subjects. That\'s it. No lengthy setup, no spreadsheets.',
  },
  {
    num: '02',
    tag: 'Every morning',
    title: "Get today's exact plan",
    desc: "A prioritised task list built from your hours, exam stage, and revision backlog. Not a generic syllabus — your plan, for today.",
  },
  {
    num: '03',
    tag: 'When life happens',
    title: 'Miss a day? We replan.',
    desc: "Missed tasks are triaged automatically — priority topics move to tomorrow, others are deferred or dropped so your week doesn't collapse.",
  },
  {
    num: '04',
    tag: 'All week',
    title: 'Revision that actually happens',
    desc: 'Spaced repetition built into every day plan. Topics you studied 3 days ago appear for revision before you forget them.',
  },
];

export default function HowItWorks() {
  return (
    <section className={styles.how}>
      <div className={styles.inner}>
        <p className={styles.label}>How it works</p>
        <h2 className={styles.title}>
          Your personal study<br />Planner system.
        </h2>
        <div className={styles.steps}>
          {steps.map((s) => (
            <div key={s.num} className={styles.step}>
              <div className={styles.stepNum}>{s.num}</div>
              <div>
                <span className={styles.stepTag}>{s.tag}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
