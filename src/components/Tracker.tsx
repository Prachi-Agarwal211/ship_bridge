'use client';

import { useState, useRef, useCallback } from 'react';
import styles from './Tracker.module.css';

interface TrackingDetail {
  id: number;
  date: string;
  time: string;
  actionLabel: string;
  remarks: string;
  location: string;
  updatedOU: string;
  dateTime: string;
}

interface TrackingData {
  waybillNumber: string;
  currentStatus: string;
  currentOu: string;
  consignor: string;
  consignorAddress: string;
  consignorCity: string;
  consignorState: string;
  consignee: string;
  consigneeAddress: string;
  consigneeCity: string;
  consigneeState: string;
  bookingDate: string;
  deliveryDate: string;
  actualWeight: number;
  chargedWeight: number;
  numberOfPackages: string;
  packageType: string;
  service: string;
  paymentType: string;
  invoiceAmount: number;
  totalAmount: number;
  epod: string;
  epods: string[];
  waybillTrackingDetail: TrackingDetail[];
}

interface TrackResponse {
  success: boolean;
  error?: string;
  data?: TrackingData;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

function getStatusColor(status: string): string {
  if (status === 'Delivered') return '#22c55e';
  if (status === 'Out For Delivery' || status === 'In Transit') return '#f97316';
  if (status === 'At Origin' || status === 'At Warehouse' || status === 'Pickup Request Received' || status === 'Manifest Received') return '#3b82f6';
  if (status === 'Undelivered' || status === 'RTO Delivered') return '#ef4444';
  return '#6b7280';
}

export default function Tracker() {
  const [awb, setAwb] = useState('');
  const [result, setResult] = useState<TrackResponse | null>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const abortRef = useRef<AbortController | null>(null);

  const handleTrack = useCallback(async () => {
    const trimmed = awb.trim();
    if (!trimmed) {
      setErrorMsg('Please enter a waybill number');
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
      const res = await fetch(`/api/track?awb=${encodeURIComponent(trimmed)}`, {
        signal: controller.signal,
      });
      const data: TrackResponse = await res.json();

      if (!data.success) {
        setErrorMsg(data.error || 'No tracking information found');
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
  }, [awb]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleTrack();
  };

  const d = result?.data;
  const timeline = d?.waybillTrackingDetail?.slice().reverse() || [];

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={`grid-bg ${styles.gridBg}`} aria-hidden="true" />

      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.label}>Track Your Package</h2>
          <p className={styles.description}>
            Enter your waybill number to see real-time shipment status
          </p>

          <div className={styles.inputRow}>
            <div className={`${styles.inputWrapper} ${status === 'error' ? styles.inputError : ''} ${status === 'success' ? styles.inputSuccess : ''}`}>
              <input
                type="text"
                value={awb}
                onChange={(e) => {
                  setAwb(e.target.value);
                  if (status === 'error' || status === 'success') {
                    setStatus('idle');
                    setResult(null);
                    setErrorMsg('');
                  }
                }}
                onKeyDown={handleKeyDown}
                placeholder="Enter waybill number"
                className={styles.input}
                aria-label="Waybill number"
              />
            </div>
            <button
              className={`${styles.trackBtn} ${status === 'loading' ? styles.loading : ''}`}
              onClick={handleTrack}
              disabled={status === 'loading'}
              aria-label="Track shipment"
            >
              {status === 'loading' ? (
                <span className={styles.spinner} />
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                  </svg>
                  Track
                </>
              )}
            </button>
          </div>

          {status === 'error' && errorMsg && (
            <p className={styles.errorText}>{errorMsg}</p>
          )}

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

          {status === 'success' && d && (
            <div className={styles.results}>
              <div className={styles.statusBar}>
                <span
                  className={styles.statusBadge}
                  style={{ background: getStatusColor(d.currentStatus) }}
                >
                  {d.currentStatus}
                </span>
                <span className={styles.trackingNumber}>#{d.waybillNumber}</span>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.routeRow}>
                  <span className={styles.routeCity}>{d.consignorCity}</span>
                  <svg className={styles.routeArrow} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span className={styles.routeCity}>{d.consigneeCity}</span>
                </div>
                <div className={styles.detailRow}>
                  {d.numberOfPackages && <span className={styles.detailTag}>{d.numberOfPackages} × {d.packageType}</span>}
                  {d.service && <span className={styles.detailTag}>{d.service}</span>}
                </div>
                {d.epod && (
                  <a href={d.epod} target="_blank" rel="noopener noreferrer" className={styles.podBtn}>
                    Download Proof of Delivery
                  </a>
                )}
              </div>

              <h3 className={styles.timelineTitle}>Tracking History</h3>
              <div className={styles.timeline}>
                {timeline.map((event, i) => (
                  <div key={event.id} className={styles.timelineItem}>
                    <div className={styles.timelineDotWrapper}>
                      <div className={styles.timelineDot} style={{ background: getStatusColor(event.actionLabel) }} />
                      {i < timeline.length - 1 && <div className={styles.timelineLine} />}
                    </div>
                    <div className={styles.timelineContent}>
                      <span className={styles.timelineLabel}>{event.actionLabel}</span>
                      <span className={styles.timelineDate}>
                        {event.date} {event.time}
                        {event.updatedOU && <> &middot; {event.updatedOU}</>}
                      </span>
                      {event.remarks && <span className={styles.timelineRemark}>{event.remarks}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
