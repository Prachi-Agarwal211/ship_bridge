'use client';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

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

    // Scroll Parallax for content - laptop/desktop only (heavy scrub feels bad on phone)
    if (isDesktop) {
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

      // Fade out video background smoothly (desktop only)
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
    }

  }, { scope: containerRef });

  // Attempt to play video on mobile too (browsers are strict about autoplay)
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const playVideo = () => {
        video.play().catch((err) => {
          // Autoplay was blocked - common on mobile until user interaction
          console.log('Video autoplay blocked on mobile:', err);
        });
      };

      // Try immediately + on first user interaction (tap/scroll)
      playVideo();
      const handleInteraction = () => {
        playVideo();
        window.removeEventListener('touchstart', handleInteraction);
        window.removeEventListener('click', handleInteraction);
      };
      window.addEventListener('touchstart', handleInteraction, { once: true });
      window.addEventListener('click', handleInteraction, { once: true });
    }
  }, []);

  return (
    <section className={styles.hero} ref={containerRef}>
      {/* Background layer */}
      <div className={styles.bgContainer}>
        {/* Always try the video background. On mobile it may need user interaction to start
            due to strict browser autoplay policies (even with muted + playsInline).
            We attempt .play() + listen for first touch/click. */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className={styles.video}
          poster="/hero section/logo.jpeg" // fallback image while loading / if blocked
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
