'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './ServiceTunnel.module.css';

gsap.registerPlugin(Draggable);

const services = [
  { 
    id: "household", 
    title: "Household Shifting", 
    subtitle: "Residential Relocation", 
    description: "Our expert team handles your household shifting with the utmost care. From premium packaging to secure transit and setup in your new home.", 
    image: "/services/household.jpeg", 
    tags: ["Premium Packing", "Disassembly", "Secure Transit"], 
    glowColor: "rgba(249, 115, 22, 0.4)" 
  },
  { 
    id: "office", 
    title: "Office Shifting", 
    subtitle: "Corporate Relocation", 
    description: "Minimize downtime with our efficient workspace relocations. We specialize in packing complex IT setups and office workstations.", 
    image: "/services/office.jpeg", 
    tags: ["IT Asset Mgmt", "Server Packing", "After-Hours"], 
    glowColor: "rgba(6, 182, 212, 0.4)" 
  },
  { 
    id: "warehouse", 
    title: "Warehouse Storage", 
    subtitle: "Secure Warehousing", 
    description: "Safe, climate-controlled, and fully insured storage solutions. Features 24/7 CCTV surveillance, fire prevention, and digital stock indexing.", 
    image: "/services/warehouse.jpeg", 
    tags: ["24/7 CCTV", "Climate Control", "Short/Long Term"], 
    glowColor: "rgba(168, 85, 247, 0.4)" 
  },
  { 
    id: "local", 
    title: "Local Shifting", 
    subtitle: "Same-City Relocations", 
    description: "Fast, reliable, and affordable moving services within your city. Our local teams navigate city routes efficiently for same-day shifts.", 
    image: "/services/local.png", 
    tags: ["Same-Day", "Dedicated Trucks", "Express Packing"], 
    glowColor: "rgba(59, 130, 246, 0.4)" 
  },
  { 
    id: "vehicle", 
    title: "Vehicle Transport", 
    subtitle: "Safe Vehicle Logistics", 
    description: "Relocate your cars and motorcycles across long distances without adding miles or risk. We use specialized, secure auto-carriers.", 
    image: "/services/vehicle.jpeg", 
    tags: ["Enclosed Carriers", "GPS Tracking", "Damage-Free"], 
    glowColor: "rgba(34, 197, 94, 0.4)" 
  },
  { 
    id: "exhibition", 
    title: "Exhibition Logistics", 
    subtitle: "Event Logistics", 
    description: "Time-critical setup and logistics management for exhibition pavilions, trade shows, and events. On-site assembly and secure reverse logistics.", 
    image: "/services/exhibition.png", 
    tags: ["Booth Setup", "Time-Critical", "Reverse Logistics"], 
    glowColor: "rgba(236, 72, 153, 0.4)" 
  }
];

export default function ServiceTunnel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const autoplayTimer = useRef<NodeJS.Timeout | null>(null);

  // Auto-play mechanic
  const startAutoplay = () => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
    autoplayTimer.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % services.length);
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayTimer.current) clearInterval(autoplayTimer.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [activeIndex]);

  // Update layout when active index changes
  useGSAP(() => {
    if (!containerRef.current) return;

    // Crossfade background glow
    gsap.to(containerRef.current, {
      '--tunnel-glow': services[activeIndex].glowColor,
      duration: 1.2,
      ease: 'power2.out'
    });

    // Animate cards into their z-axis positions
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

  // Initialize Draggable
  useGSAP(() => {
    if (!containerRef.current) return;
    
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
        } else if (direction === "right" && activeIndex > 0) {
          setActiveIndex(prev => prev - 1);
        }
      }
    });

    return () => {
      Draggable.get(proxy)?.kill();
    };
  }, { dependencies: [activeIndex], scope: containerRef });

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleCardClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
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

      <div className={styles.carouselContainer}>
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
          
          return (
            <div 
              key={service.id}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className={`${styles.cardWrapper} ${isActive ? styles.cardActive : ''}`}
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
                      unoptimized
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
                      unoptimized
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

                    <Link href={`/services/${service.id}`} className={styles.exploreBtn}>
                      Explore Service
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
