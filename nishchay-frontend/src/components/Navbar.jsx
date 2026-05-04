import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const handleNavCta = (e) => {
    e.preventDefault();
    document.getElementById('signup')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        Nishchay<span className={styles.logoAccent}>AI</span>
      </div>
      <a href="#signup" className={styles.navCta} onClick={handleNavCta}>
        Get early access
      </a>
    </nav>
  );
}
