'use client';
import { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import MagneticButton from './animations/MagneticButton';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const STATS_TICKER = [
  '50,000+ MOVES COMPLETED', '200+ CITIES', '98% ON-TIME DELIVERY',
  '$250B MARKET OPPORTUNITY', '89% UNORGANIZED SECTOR', 'PAN-INDIA NETWORK',
];

export default function Hero() {
  const containerRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
      // Split text for animation
      const titleSplit = new SplitText('.hero-title-line', { type: 'words,chars' });
      
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.from('.hero-badge', { y: -20, opacity: 0, duration: 0.6 })
        .from(titleSplit.words, { y: '120%', opacity: 0, stagger: 0.05, duration: 0.9 }, '-=0.3')
        .from('.hero-sub', { y: 20, opacity: 0, duration: 0.7 }, '-=0.4')
        .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-marquee', { opacity: 0, duration: 0.5 }, '-=0.2');

      // Kinetic Marquee (moves left-to-right on scroll down)
      gsap.to('.marquee-track', {
        xPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

    } else {
      gsap.set(['.hero-badge', '.hero-sub', '.hero-ctas', '.hero-marquee'], { opacity: 1, y: 0 });
    }
  }, { scope: containerRef });

  return (
    <section className={styles.hero} ref={containerRef}>
      {/* Background layer */}
      <div className={styles.bgContainer}>
        {isMobile ? (
          <div className={styles.mobileBg} />
        ) : (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={styles.video}
          >
            <source src="/hero section/video.mp4" type="video/mp4" />
          </video>
        )}
        <div className="noise-overlay" />
        <div className={`grid-bg ${styles.gridBg}`} />
        <div className={styles.gradientOverlay} />
      </div>

      {/* Content layer */}
      <div className={styles.content}>
        <div className={styles.mainContent}>
          <div className={`hero-badge ${styles.badge}`}>
            <span className={styles.pulseDot} /> INDIA'S PREMIER LOGISTICS
          </div>
          
          <h1 className={styles.title}>
            <div className="hero-title-line">CONNECTING INDIA.</div>
            <div className={`hero-title-line ${styles.textOrange}`}>CONNECTING GROWTH.</div>
          </h1>
          
          <p className={`hero-sub ${styles.subtitle}`}>
            We build the bridges that keep your business moving forward. 
            Asset-light, technology-driven logistics for modern enterprises.
          </p>
          
          <div className={`hero-ctas ${styles.ctas}`}>
            <MagneticButton strength={40}>
              <Link href="/quote" className={styles.primaryBtn}>
                Book a Move
              </Link>
            </MagneticButton>
            <MagneticButton strength={40}>
              <Link href="#services" className={styles.secondaryBtn}>
                Explore Services
              </Link>
            </MagneticButton>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={`hero-marquee ${styles.marqueeContainer}`}>
            <div className="marquee-track">
              {[...STATS_TICKER, ...STATS_TICKER].map((stat, i) => (
                <span key={i} className={styles.marqueeItem}>
                  {stat} <span className={styles.marqueeDot}>•</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
