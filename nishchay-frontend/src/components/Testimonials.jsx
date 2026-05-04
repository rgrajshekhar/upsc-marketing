import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    initials: 'RK',
    name: 'Rohit K.',
    detail: '3rd attempt · Delhi',
    quote:
      "I've tried 4 different apps. All of them gave me content. None of them told me what to do when I missed 3 days. This actually solves the real problem.",
  },
  {
    initials: 'PS',
    name: 'Priya S.',
    detail: '1st attempt · Pune',
    quote:
      'The replan feature is what got me. I always abandoned my schedule after missing 2–3 days. Having a system that adjusts is completely different.',
  },
  {
    initials: 'AM',
    name: 'Anand M.',
    detail: '2nd attempt · Bengaluru',
    quote:
      "I don't need another video library. I need someone to tell me: study this topic for 90 minutes, then revise these two topics. StudyOS does exactly that.",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <p className={styles.label}>Early feedback</p>
        <h2 className={styles.title}>What aspirants are saying.</h2>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <figure key={t.name} className={styles.card}>
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>
              <figcaption className={styles.author}>
                <div className={styles.avatar} aria-hidden="true">{t.initials}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.detail}>{t.detail}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
