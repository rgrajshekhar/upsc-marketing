import React from 'react';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'Free',
    amount: '₹0',
    period: 'forever',
    features: [
      'Personalised daily plan',
      'Basic revision queue',
      '1 current affairs mapping/day',
      'Limited replan (3/week)',
      'Basic progress tracking',
    ],
    cta: 'Get started free',
    featured: false,
  },
  {
    name: 'Pro Monthly',
    amount: '₹349',
    period: 'per month · cancel anytime',
    features: [
      'Unlimited adaptive replans',
      'Full revision engine',
      'Unlimited current affairs',
      '1 mains answer/day with feedback',
      'Advanced analytics',
      'Weekly AI strategy review',
    ],
    cta: 'Start 7-day free trial',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: 'Pro Yearly',
    amount: '₹1,799',
    period: 'per year · save 57%',
    features: [
      'Everything in Pro Monthly',
      'Priority support',
      'Early access to new features',
      'Locked-in price guarantee',
    ],
    cta: 'Get yearly plan',
    featured: false,
  },
];

export default function Pricing() {
  const scrollToFinalEmail = () => {
    document.getElementById('final-email')?.focus();
    document.getElementById('final-email')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className={styles.pricing}>
      <div className={styles.inner}>
        <p className={styles.label}>Pricing</p>
        <h2 className={styles.title}>
          Start free.<br />Upgrade when it works.
        </h2>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              {plan.badge && (
                <div className={styles.badge}>{plan.badge}</div>
              )}
              <div className={styles.planName}>{plan.name}</div>
              <div className={styles.amount}>{plan.amount}</div>
              <div className={styles.period}>{plan.period}</div>
              <div className={styles.divider} />
              <ul className={styles.featureList}>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <button
                className={`${styles.btn} ${plan.featured ? styles.btnFeatured : ''}`}
                onClick={scrollToFinalEmail}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
