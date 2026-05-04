import React, { useState, useRef } from 'react';
import styles from './WaitlistForm.module.css';

const API_URL = import.meta.env.VITE_API_URL || '';

export default function WaitlistForm({ dark = false, successId }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef(null);

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!emailRe.test(trimmed)) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      inputRef.current?.focus();
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmed }),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
    } catch {
      setStatus('error');
      setErrorMsg('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div
        className={`${styles.successMsg} ${dark ? styles.successDark : ''}`}
        id={successId}
        role="alert"
      >
        {dark
          ? "You're on the list! 🎉 We'll be in touch before launch."
          : "You're on the list! We'll reach out before launch. 🎉"}
      </div>
    );
  }

  return (
    <form
      className={`${styles.signupBox} ${dark ? styles.dark : ''}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className={styles.inputRow}>
        <input
          ref={inputRef}
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'error') setStatus('idle');
          }}
          placeholder="Your email address"
          autoComplete="email"
          className={`${styles.input} ${status === 'error' ? styles.inputError : ''} ${dark ? styles.inputDark : ''}`}
          aria-label="Email address"
          aria-describedby={status === 'error' ? 'form-error' : undefined}
        />
        <button
          type="submit"
          className={styles.signupBtn}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Joining…' : 'Join waitlist →'}
        </button>
      </div>

      {status === 'error' && (
        <p id="form-error" className={styles.errorText} role="alert">
          {errorMsg}
        </p>
      )}
    </form>
  );
}
