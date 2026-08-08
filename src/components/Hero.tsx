'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import StaggerButton from '@/components/animations/StaggerButton';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    const tl = gsap.timeline({ delay: 0.2 });

    // Slogan fade in
    tl.fromTo('.hero-slogan',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
    );

    // Main title SplitText chars
    const titleEl = containerRef.current?.querySelector('.hero-title') as HTMLElement;
    if (titleEl) {
      const split = new SplitText(titleEl, { type: 'chars' });
      tl.from(split.chars, {
        opacity: 0,
        y: 60,
        rotateX: -90,
        stagger: 0.04,
        duration: 1.2,
        ease: 'power4.out',
        transformOrigin: '0% 50% -50',
      }, '-=0.4');
    }

    // Subtitle line
    tl.fromTo('.hero-subtitle',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.3'
    );

    // CTA buttons stagger in
    tl.fromTo('.hero-cta-group',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
      '-=0.2'
    );

    // Live stat counter
    tl.fromTo('.hero-stat',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
      '-=0.1'
    );

    // Scroll parallax for content (desktop only)
    if (isDesktop) {
      gsap.to('.hero-content-wrapper', {
        yPercent: -30,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Video fade out
      const videoEl = containerRef.current?.querySelector(`.${styles.video}`);
      if (videoEl) {
        gsap.to(videoEl, {
          opacity: 0,
          scale: 1.05,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }

  }, { scope: containerRef });

  return (
    <section className={styles.hero} ref={containerRef}>
      {/* Background layer */}
      <div className={styles.bgContainer}>
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={styles.video}
          poster="/hero section/logo.jpeg"
        >
          <source src="/hero section/video.mp4" type="video/mp4" />
        </video>
        <div className="noise-overlay" />
        <div className={`grid-bg ${styles.gridBg}`} />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Content layer */}
      <div className={styles.content}>
        <div className={`hero-content-wrapper ${styles.contentWrapper}`}>
          {/* Sub-label */}
          <div className={`hero-slogan ${styles.slogan}`}>
            Aapka Bharosa, Humari Pahechan
          </div>

          {/* Giant title */}
          <h1 className={`hero-title ${styles.title}`}>
            SHIPBRIDGE
          </h1>

          {/* Subtitle */}
          <p className={`hero-subtitle ${styles.subtitle}`}>
            India&apos;s AI-Powered Logistics Platform
          </p>

          {/* Split-path CTAs */}
          <div className={`hero-cta-group ${styles.ctaGroup}`}>
            <StaggerButton text="I'm a Shipper" href="/services/household#booking-form" variant="shipper" />
            <StaggerButton text="I'm a Carrier" href="/franchise" variant="carrier" />
          </div>

          {/* Live stat */}
          <div className={`hero-stat ${styles.statRow}`}>
            <span className={styles.statDot} />
            <span className={styles.statText}>
              Tracking <strong className={styles.statNum}>2,847</strong> shipments across{' '}
              <strong className={styles.statNum}>29</strong> states right now
            </span>
          </div>

          {/* Scroll indicator */}
          <div className={styles.scrollIndicator}>
            <span className={styles.scrollLabel}>SCROLL</span>
            <div className={styles.scrollLine} />
          </div>
        </div>
      </div>
    </section>
  );
}
