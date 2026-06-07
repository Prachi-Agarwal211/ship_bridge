'use client';
import { useRef, useEffect, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.fromTo('.hero-slogan', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    const titleEl = containerRef.current?.querySelector('.hero-title') as HTMLElement;
    if (titleEl) {
      const split = new SplitText(titleEl, { type: 'chars' });
      tl.from(split.chars, {
        opacity: 0,
        y: 40,
        rotateX: -90,
        stagger: 0.05,
        duration: 1.2,
        ease: 'power4.out',
        transformOrigin: "0% 50% -50"
      }, "-=0.6");
    }

    // Scroll Parallax for content
    gsap.to('.hero-content-wrapper', {
      yPercent: -40,
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });

    // Fade out video background smoothly
    const videoElement = containerRef.current?.querySelector(`.${styles.videoBg}`);
    if (videoElement) {
      gsap.to(videoElement, {
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
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
        <div className={`hero-content-wrapper ${styles.contentWrapper}`}>
          <h2 className={`hero-slogan ${styles.slogan}`}>
            Aapka Bharosa, Humari Pahechan
          </h2>
          <h1 className={`hero-title ${styles.title}`}>
            SHIP BRIDGE
          </h1>
        </div>
      </div>
    </section>
  );
}
