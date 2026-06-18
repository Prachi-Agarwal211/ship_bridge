'use client';

import { useState, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './RouteChecker.module.css';

interface RouteResult {
  success: boolean;
  error?: string;
  route?: {
    from: { oda: boolean; city: string; state: string };
    to: { oda: boolean; city: string; state: string };
    fromPin: string;
    toPin: string;
    distanceKm: number;
    distanceLabel: string;
    sameCity: boolean;
    sameState: boolean;
  };
  services?: {
    id: string;
    name: string;
    available: boolean;
    estimatedTime: string;
    note: string;
  }[];
  vehicles?: {
    type: string;
    capacity: string;
    bestFor: string;
    icon: string;
  }[];
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function RouteChecker() {
  const [fromPin, setFromPin] = useState('');
  const [toPin, setToPin] = useState('');
  const [result, setResult] = useState<RouteResult | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const abortRef = useRef<AbortController | null>(null);
  const fromRef = useRef<HTMLInputElement>(null);

  const handleSwap = () => {
    setFromPin(toPin);
    setToPin(fromPin);
    if (status === 'success' || status === 'error') {
      setStatus('idle');
      setResult(null);
      setErrorMsg('');
    }
  };

  const handleCheck = useCallback(async () => {
    const fromTrimmed = fromPin.trim();
    const toTrimmed = toPin.trim();

    if (!fromTrimmed || !/^\d{6}$/.test(fromTrimmed)) {
      setErrorMsg('Please enter a valid 6-digit origin pincode');
      setStatus('error');
      setResult(null);
      return;
    }
    if (!toTrimmed || !/^\d{6}$/.test(toTrimmed)) {
      setErrorMsg('Please enter a valid 6-digit destination pincode');
      setStatus('error');
      setResult(null);
      return;
    }
    if (fromTrimmed === toTrimmed) {
      setErrorMsg('Origin and destination cannot be the same');
      setStatus('error');
      setResult(null);
      return;
    }

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setStatus('loading');
    setErrorMsg('');
    setResult(null);

    try {
      const res = await fetch(`/api/route-check?from=${fromTrimmed}&to=${toTrimmed}`, {
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
  }, [fromPin, toPin]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleCheck();
  };

  const handleInputChange = (setter: (v: string) => void) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6);
    setter(val);
    if (status === 'error' || status === 'success') {
      setStatus('idle');
      setResult(null);
      setErrorMsg('');
    }
  };

  const route = result?.route;
  const hasOda = route?.from.oda || route?.to.oda;

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`grid-bg ${styles.gridBg}`} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.label}>Check Route &amp; Services</h2>
          <p className={styles.description}>
            Enter origin &amp; destination pincodes to see available services and transit times
          </p>

          {/* Input Row */}
          <div className={styles.inputRow}>
            {/* From Pincode */}
            <div className={`${styles.inputGroup} ${styles.inputGroupHalf}`}>
              <label className={styles.inputLabel} htmlFor="fromPin">From</label>
              <div className={`${styles.inputWrapper} ${status === 'error' ? styles.inputError : ''} ${status === 'success' && route?.from ? (route.from.oda ? styles.inputOda : styles.inputSuccess) : ''}`}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
                </svg>
                <input
                  ref={fromRef}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  value={fromPin}
                  onChange={handleInputChange(setFromPin)}
                  onKeyDown={handleKeyDown}
                  placeholder="Origin"
                  className={styles.input}
                  autoComplete="postal-code"
                  aria-label="Origin pincode"
                />
              </div>
            </div>

            {/* Swap Button */}
            <button className={styles.swapBtn} onClick={handleSwap} type="button" aria-label="Swap origin and destination">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>

            {/* To Pincode */}
            <div className={`${styles.inputGroup} ${styles.inputGroupHalf}`}>
              <label className={styles.inputLabel} htmlFor="toPin">To</label>
              <div className={`${styles.inputWrapper} ${status === 'error' ? styles.inputError : ''} ${status === 'success' && route?.to ? (route.to.oda ? styles.inputOda : styles.inputSuccess) : ''}`}>
                <svg className={styles.inputIcon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 11.5 7.3 11.8a1 1 0 0 0 1.4 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
                </svg>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={6}
                  value={toPin}
                  onChange={handleInputChange(setToPin)}
                  onKeyDown={handleKeyDown}
                  placeholder="Destination"
                  className={styles.input}
                  autoComplete="postal-code"
                  aria-label="Destination pincode"
                />
              </div>
            </div>
          </div>

          {/* Check Button */}
          <button
            className={`${styles.checkBtn} ${status === 'loading' ? styles.loading : ''}`}
            onClick={handleCheck}
            disabled={status === 'loading'}
            aria-label="Check route services"
          >
            {status === 'loading' ? (
              <span className={styles.spinner} />
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                Check Services
              </>
            )}
          </button>

          {status === 'error' && errorMsg && (
            <p className={styles.errorText}>{errorMsg}</p>
          )}

          {/* Loading Skeleton */}
          {status === 'loading' && (
            <div className={styles.skeletonGrid}>
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.skeletonCard}>
                  <div className={styles.skeletonLine} style={{ width: '60%' }} />
                  <div className={styles.skeletonLine} style={{ width: '40%' }} />
                  <div className={styles.skeletonLine} style={{ width: '80%' }} />
                </div>
              ))}
            </div>
          )}

          {/* Results */}
          {status === 'success' && result && route && (
            <div className={styles.results}>
              {/* Route Summary */}
              <div className={styles.routeSummary}>
                <div className={styles.routePin}>
                  <span className={styles.routePinCode}>{route.fromPin}</span>
                  <span className={styles.routeCity}>{route.from.city}, {route.from.state}</span>
                  {route.from.oda && <span className={styles.odaBadge}>ODA</span>}
                </div>
                <div className={styles.routeArrow}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span className={styles.routeDistance}>{route.distanceLabel}</span>
                </div>
                <div className={styles.routePin}>
                  <span className={styles.routePinCode}>{route.toPin}</span>
                  <span className={styles.routeCity}>{route.to.city}, {route.to.state}</span>
                  {route.to.oda && <span className={styles.odaBadge}>ODA</span>}
                </div>
              </div>

              {/* ODA Warning */}
              {hasOda && (
                <div className={styles.odaWarning}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  <span>Extended delivery area (ODA) surcharges may apply for {route.from.oda ? 'origin' : ''}{route.from.oda && route.to.oda ? ' & ' : ''}{route.to.oda ? 'destination' : ''}.</span>
                </div>
              )}

              {/* Services Grid */}
              <h3 className={styles.sectionTitle}>Available Services</h3>
              <div className={styles.servicesGrid}>
                {result.services?.filter(s => s.available).map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.id}?from=${route.fromPin}&to=${route.toPin}`}
                    className={styles.serviceCard}
                  >
                    <div className={styles.serviceHeader}>
                      <h4 className={styles.serviceName}>{service.name}</h4>
                      <span className={styles.serviceBadge}>{service.estimatedTime}</span>
                    </div>
                    <p className={styles.serviceNote}>{service.note}</p>
                    <span className={styles.serviceCta}>Get Quote →</span>
                  </Link>
                ))}
              </div>

              {/* Vehicle Recommendations */}
              <h3 className={styles.sectionTitle}>Recommended Vehicles</h3>
              <div className={styles.vehiclesGrid}>
                {result.vehicles?.map((v) => (
                  <div key={v.type} className={styles.vehicleCard}>
                    <span className={styles.vehicleIcon}>{v.icon}</span>
                    <div>
                      <h4 className={styles.vehicleType}>{v.type}</h4>
                      <p className={styles.vehicleCapacity}>{v.capacity}</p>
                      <p className={styles.vehicleBest}>{v.bestFor}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className={styles.ctaRow}>
                <Link href={`/services/ftl?from=${route.fromPin}&to=${route.toPin}`} className={styles.ctaBtn}>
                  Get Full Quote
                </Link>
                <a href="tel:+919876543210" className={styles.ctaBtnSecondary}>
                  Talk to Expert
                </a>
              </div>
            </div>
          )}

          {/* Legend */}
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
