'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ServiceTunnel.module.css';
import { SERVICES_DATA } from '@/data/services';

gsap.registerPlugin(Draggable);

// Glow accents for the tunnel visual effect — brand colors only
const GLOW_COLORS = [
  "rgba(249, 115, 22, 0.35)",
  "rgba(34, 197, 94, 0.3)",
  "rgba(249, 115, 22, 0.25)",
  "rgba(34, 197, 94, 0.2)",
  "rgba(249, 115, 22, 0.3)",
  "rgba(34, 197, 94, 0.25)"
];

const services = SERVICES_DATA.map((s, i) => ({
  ...s,
  // Use shorter descriptions for the dense tunnel cards (home showcase only).
  description: s.description.length > 140 ? s.description.slice(0, 137) + "..." : s.description,
  glowColor: GLOW_COLORS[i] || GLOW_COLORS[0]
}));

export default function ServiceTunnel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  useScrollReveal({}, containerRef);

  // Auto-play mechanic
  const startAutoplay = () => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % services.length);
      setIsFlipped(false);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [activeIndex]);

  // Swipe gesture navigation for mobile screens
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    
    const diffX = e.changedTouches[0].clientX - touchStartX.current;
    const diffY = e.changedTouches[0].clientY - touchStartY.current;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
      if (diffX > 0) {
        handlePrev(); // Swipe right -> previous card
      } else {
        handleNext(); // Swipe left -> next card
      }
    }
    
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Update layout when active index changes
  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // Only run the heavy 3D positioning + perspective animations on laptop/desktop.
    // This keeps the original cinematic laptop experience pristine and avoids
    // expensive transforms/blurs on phones (where we use a simpler design).
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    if (!isDesktop) return;

    // Crossfade background glow (desktop only)
    gsap.to(containerRef.current, {
      '--tunnel-glow': services[activeIndex]?.glowColor || 'rgba(249, 115, 22, 0.4)',
      duration: 1.2,
      ease: 'power2.out'
    });

    // Animate cards into their z-axis positions (desktop 3D only)
    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const offset = i - activeIndex;
      const isActive = offset === 0;
      
      // Calculate spatial values based on offset from center
      const xOffset = offset * 65; 
      const scale = isActive ? 1 : Math.max(0.6, 1 - Math.abs(offset) * 0.15);
      const zIndex = 100 - Math.abs(offset);
      const opacity = Math.abs(offset) > 2 ? 0 : 1;
      
      // 3D Visual Effects
      const brightness = isActive ? 1 : Math.max(0.3, 1 - Math.abs(offset) * 0.35);
      const blur = isActive ? 0 : Math.min(8, Math.abs(offset) * 3);

      gsap.to(card, {
        xPercent: xOffset,
        scale: scale,
        zIndex: zIndex,
        opacity: opacity,
        filter: `brightness(${brightness}) blur(${blur}px)`,
        duration: 0.8,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    });

  }, { dependencies: [activeIndex], scope: containerRef });

  // Initialize Draggable (desktop/laptop only - mobile uses tap arrows/dots)
  useGSAP(() => {
    if (!containerRef.current) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    if (!isDesktop) return;

    const proxy = document.createElement('div');
    
    Draggable.create(proxy, {
      type: 'x',
      trigger: containerRef.current,
      dragResistance: 0.4,
      onDragStart: stopAutoplay,
      onDragEnd: function() {
        startAutoplay();
        const direction = this.getDirection("velocity");
        if (direction === "left" && activeIndex < services.length - 1) {
          setActiveIndex(prev => prev + 1);
          setIsFlipped(false);
        } else if (direction === "right" && activeIndex > 0) {
          setActiveIndex(prev => prev - 1);
          setIsFlipped(false);
        }
      }
    });

    return () => {
      Draggable.get(proxy)?.kill();
    };
  }, { dependencies: [activeIndex], scope: containerRef });

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsFlipped(false);
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setIsFlipped(false);
    } else {
      setIsFlipped(prev => !prev);
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
    setIsFlipped(false);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsFlipped(false);
  };

  return (
    <section 
      className={styles.tunnelSection} 
      id="services"
      ref={containerRef}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className={styles.tunnelGlow} aria-hidden="true" />

      <div className={styles.header} data-reveal>
        <h2 className={styles.sectionTitle}>OUR SERVICES</h2>
        <div className={styles.progressDots}>
          {services.map((_, idx) => (
            <button 
              key={idx}
              className={`${styles.dot} ${idx === activeIndex ? styles.dotActive : ''}`}
              onClick={() => handleDotClick(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      <div 
        className={styles.carouselContainer}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows */}
        <button 
          className={`${styles.navArrow} ${styles.prevArrow}`} 
          onClick={handlePrev}
          aria-label="Previous Service"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>

        <button 
          className={`${styles.navArrow} ${styles.nextArrow}`} 
          onClick={handleNext}
          aria-label="Next Service"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
        </button>

        {services.map((service, i) => {
          const isActive = i === activeIndex;
          const offset = i - activeIndex;
          
          return (
            <div 
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className={`${styles.cardWrapper} ${isActive ? styles.cardActive : ''} ${isActive && isFlipped ? styles.cardFlipped : ''}`}
              data-offset={offset}
              onClick={() => handleCardClick(i)}
            >
              <div className={styles.flipCardInner}>
                
                {/* FRONT SIDE */}
                <div className={styles.flipCardFront}>
                  <div className={styles.imageContainer}>
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className={styles.cardImage}
                      sizes="(max-width: 768px) 80vw, 40vw"
                    />
                  </div>
                  <div className={styles.frontOverlay}>
                    <span className={styles.cardNumber}>0{i + 1}</span>
                    <h3 className={styles.frontTitle}>{service.title}</h3>
                    <span className={styles.frontSubtitle}>{service.subtitle}</span>
                  </div>
                </div>

                {/* BACK SIDE (Glassmorphism over Image) */}
                <div className={styles.flipCardBack}>
                  <div className={styles.imageContainer}>
                    {/* Re-render image on back so it's not "removed", just horizontally flipped back to normal since card is rotated 180 */}
                    <Image 
                      src={service.image}
                      alt={service.title}
                      fill
                      className={styles.cardImageBack}
                      sizes="(max-width: 768px) 80vw, 40vw"
                    />
                  </div>
                  {/* Heavy glass overlay over the image */}
                  <div className={styles.glassOverlay}>
                    <div 
                      className={styles.backGlow} 
                      style={{ background: `radial-gradient(circle, ${service.glowColor} 0%, transparent 70%)` }}
                    />
                    <h3 className={styles.backTitle}>{service.title}</h3>
                    <p className={styles.backDescription}>{service.description}</p>
                    
                    <div className={styles.tagsContainer}>
                      {service.tags.map(tag => (
                        <span key={tag} className={styles.tagBadge}>{tag}</span>
                      ))}
                    </div>

                    <Link href={`/services/${service.id}`} className={`${styles.exploreBtn} global-btn`}>
                      <span className="global-btn-text">Explore Service</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
