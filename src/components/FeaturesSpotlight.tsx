'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './FeaturesSpotlight.module.css';

const features = [
  { icon: '🎯', name: 'CRM & Pipeline', desc: 'New → Quote → Accept → Go. Full lead lifecycle in one place.' },
  { icon: '🚛', name: 'Fleet & Drivers', desc: 'Assign vehicles and track driver schedules in real time.' },
  { icon: '📋', name: 'Quotation Engine', desc: 'Auto-generate quotes with custom pricing rules and margins.' },
  { icon: '📊', name: 'Analytics & Reports', desc: 'Track performance, revenue, and demand forecast visually.' },
  { icon: '🔔', name: 'Real-Time Alerts', desc: 'SMS and WhatsApp triggers via MSG91 & API, zero delay.' },
  { icon: '🏭', name: 'Warehousing', desc: 'Manage occupancy, storage units, and customer lists seamlessly.' },
];

export default function FeaturesSpotlight() {
  const [activeIdx, setActiveIdx] = useState(4); // Default to Real-Time Alerts (index 4) for showcase
  const autoRotateRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    autoRotateRef.current = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % 6);
    }, 2800);

    return () => {
      if (autoRotateRef.current) clearInterval(autoRotateRef.current);
    };
  }, []);

  const getCardStyle = (index: number) => {
    // Relative index difference (0 is active/centered, 1 is right-lower, etc.)
    const diff = (index - activeIdx + 6) % 6;

    let translateX = 0;
    let translateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 1;

    switch (diff) {
      case 0: // Center Active
        translateX = 0;
        translateY = 25;
        scale = 1.15;
        opacity = 1.0;
        zIndex = 10;
        break;
      case 1: // Right Lower
        translateX = 90;
        translateY = 110;
        scale = 0.72;
        opacity = 0.45;
        zIndex = 8;
        break;
      case 2: // Right Upper
        translateX = 115;
        translateY = -70;
        scale = 0.72;
        opacity = 0.45;
        zIndex = 8;
        break;
      case 3: // Top Center
        translateX = 0;
        translateY = -150;
        scale = 0.72;
        opacity = 0.45;
        zIndex = 6;
        break;
      case 4: // Left Upper
        translateX = -115;
        translateY = -70;
        scale = 0.72;
        opacity = 0.45;
        zIndex = 8;
        break;
      case 5: // Left Lower
        translateX = -90;
        translateY = 110;
        scale = 0.72;
        opacity = 0.45;
        zIndex = 8;
        break;
    }

    return {
      transform: `translate3d(calc(${translateX}% - 50%), calc(${translateY}px - 50%), 0) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <section 
      id="features" 
      className={styles.wrapper}
    >
      <div className={styles.carouselContainer}>
        {features.map((feature, idx) => {
          const isActive = idx === activeIdx;
          return (
            <div
              key={feature.name}
              className={`${styles.card} ${isActive ? styles.active : ''}`}
              style={getCardStyle(idx)}
              onClick={() => setActiveIdx(idx)}
            >
              <span className={styles.icon}>{feature.icon}</span>
              <h4 className={styles.cardTitle}>{feature.name}</h4>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Dot Indicators */}
      <div className={styles.dots}>
        {features.map((_, idx) => (
          <button
            key={idx}
            className={`${styles.dot} ${idx === activeIdx ? styles.activeDot : ''}`}
            onClick={() => setActiveIdx(idx)}
            aria-label={`Go to feature ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
