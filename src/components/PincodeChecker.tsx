'use client';

import { useState, useRef, useCallback } from 'react';
import styles from './PincodeChecker.module.css';

interface PincodeResult {
  found: boolean;
  directService?: boolean;
  city?: string;
  state?: string;
  message: string;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function PincodeChecker() {
  const [pin, setPin] = useState('');
  const [result, setResult] = useState<PincodeResult | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const handleCheck = useCallback(async () => {
    const trimmed = pin.trim();

    if (!trimmed || !/^\d{6}$/.test(trimmed)) {
      setErrorMsg('Please enter a valid 6-digit pincode');
      setStatus('error');
      setResult(null);
      return;
    }

    // Cancel any in-flight request
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus('loading');
    setErrorMsg('');
    setResult(null);

    try {
      const res = await fetch(`/api/pincode-check?pin=${trimmed}`, {
        signal: controller.signal,
      });
      const data = await res.json();

      if (!data.success) {
        setErrorMsg(data.error || 'Something went wrong');
        setStatus('error');
        return;
      }

      setResult(data);
      setStatus('success');
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') return;
      setErrorMsg('Failed to connect. Please try again.');
      setStatus('error');
    }
  }, [pin]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCheck();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    setPin(val);
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setResult(null);
      setErrorMsg('');
    }
  };

  const isDirect = result?.found && result?.directService;
  const isOda = result?.found && !result?.directService;

  return (
    <section className={styles.section}>
      <div className={styles.glassCard}>
        <div className={styles.content}>
          <h2 className={styles.label}>Check Service Availability</h2>
          <p className={styles.description}>
            Enter your pincode to see if we deliver to your area
          </p>

          <div className={styles.inputGroup}>
            <div className={`${styles.inputWrapper} ${status === 'error' ? styles.inputError : ''} ${status === 'success' && result?.found ? (isDirect ? styles.inputSuccess : styles.inputOda) : ''}`}>
              <svg
                className={styles.searchIcon}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={6}
                value={pin}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter 6-digit pincode"
                className={styles.input}
                autoComplete="postal-code"
                aria-label="Enter your pincode"
              />
              <button
                className={`${styles.checkBtn} ${status === 'loading' ? styles.loading : ''}`}
                onClick={handleCheck}
                disabled={status === 'loading'}
                aria-label="Check pincode"
              >
                {status === 'loading' ? (
                  <span className={styles.spinner} />
                ) : (
                  'Check'
                )}
              </button>
            </div>
            {status === 'error' && errorMsg && (
              <p className={styles.errorText}>{errorMsg}</p>
            )}
          </div>

          {/* Loading skeleton */}
          {status === 'loading' && (
            <div className={styles.skeleton}>
              <div className={styles.skeletonIcon} />
              <div className={styles.skeletonLines}>
                <div className={styles.skeletonLine} style={{ width: '75%' }} />
                <div className={styles.skeletonLine} style={{ width: '50%' }} />
              </div>
            </div>
          )}

          {/* Result display */}
          {status === 'success' && result && (
            <div
              className={`${styles.resultCard} ${
                !result.found
                  ? styles.resultNotFound
                  : isDirect
                  ? styles.resultDirect
                  : styles.resultOda
              }`}
            >
              <div className={styles.resultIcon}>
                {!result.found ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
                    <path d="M9 9h.01" />
                    <path d="M15 9h.01" />
                  </svg>
                ) : isDirect ? (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                ) : (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                )}
              </div>
              <div className={styles.resultText}>
                <p className={styles.resultMessage}>{result.message}</p>
                {result.found && result.city && (
                  <p className={styles.resultLocation}>
                    {result.city}, {result.state}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Stats footer */}
          <div className={styles.statsBar}>
            <span className={styles.statItem}>
              <span className={styles.statDot} style={{ background: '#22c55e' }} />
              Direct service areas
            </span>
            <span className={styles.statItem}>
              <span className={styles.statDot} style={{ background: '#f97316' }} />
              Extended areas (extra charges)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
