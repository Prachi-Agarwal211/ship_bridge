'use client';

import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Process.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Instant Booking',
    desc: 'Enter your locations, inventory size, and preferred date to get a transparent, AI-calculated quote instantly. No hidden fees or endless phone calls required.',
    icon: '📱'
  },
  {
    num: '02',
    title: 'Precision Packing',
    desc: 'Our specialized crew arrives with industrial-grade materials. Every item is barcoded, wrapped in bubble or foam, and securely loaded using structured stacking protocols.',
    icon: '📦'
  },
  {
    num: '03',
    title: 'Secure Transit',
    desc: 'Your assets move in our dedicated, GPS-tracked fleet. You receive a live link to monitor the exact location of the truck in real-time until it reaches the destination.',
    icon: '🚛'
  },
  {
    num: '04',
    title: 'Doorstep Setup',
    desc: 'We do not just unload. We place the heavy furniture where you want it, reassemble dismantled beds or desks, and clear away the massive piles of packing debris.',
    icon: '🏠'
  }
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const laserRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    if (!sectionRef.current || !laserRef.current || stepsRef.current.length === 0) return;

    // The Laser Progress Line
    gsap.fromTo(laserRef.current, 
      { scaleY: 0 },
      {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: true,
        }
      }
    );

    // Step Activation
    stepsRef.current.forEach((step) => {
      if (!step) return;
      
      ScrollTrigger.create({
        trigger: step,
        start: 'top center',
        end: 'bottom center',
        toggleClass: { targets: step, className: styles.stepActive },
      });
    });

  }, { scope: sectionRef });

  return (
    <section className={styles.section} id="process" ref={sectionRef}>
      
      {/* Background Ambience */}
      <div className={styles.ambientGlow} />

      <div className={styles.container} ref={containerRef}>
        
        {/* ── LEFT SIDE: Sticky Header ── */}
        <div className={styles.stickyColumn}>
          <div className={styles.stickyContent}>
            <span className={styles.overline}>THE PROCESS</span>
            <h2 className={styles.title}>
              Simplifying logistics down to an exact science.
            </h2>
            <p className={styles.subtitle}>
              We replaced the chaos of moving with a structured, technology-driven workflow. Every step is predictable, transparent, and flawless.
            </p>
          </div>
        </div>

        {/* ── RIGHT SIDE: Scrolling Pipeline ── */}
        <div className={styles.scrollingColumn}>
          
          {/* Vertical Laser Line Track */}
          <div className={styles.laserTrack}>
            <div className={styles.laserLine} ref={laserRef} />
          </div>

          <div className={styles.stepsList}>
            {PROCESS_STEPS.map((step, i) => (
              <div 
                key={step.num}
                className={styles.stepItem}
                ref={(el) => {
                  if (el) stepsRef.current[i] = el;
                }}
              >
                {/* Node on the laser line */}
                <div className={styles.stepNode}>
                  <div className={styles.stepNodeInner} />
                </div>

                {/* Content Card */}
                <div className={styles.stepCard}>
                  <div className={styles.stepCardGlow} />
                  
                  <div className={styles.stepHeader}>
                    <span className={styles.stepNum}>{step.num}</span>
                    <span className={styles.stepIcon}>{step.icon}</span>
                  </div>
                  
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
