'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import styles from './EditorialNarrative.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const NARRATIVE_STEPS = [
  {
    id: 1,
    eyebrow: 'STEP 1 —',
    title: 'Precision Planning.',
    body: 'Before a single box is packed, our logistics architecture maps your entire move. We analyze route efficiency, structural requirements, and vehicle staging to guarantee zero delays.',
    tags: ['Real-time Tracking', 'Route Optimization'],
    image: '/services/office.jpeg',
    badgeText: 'Verified Route',
    badgeIcon: '🛰️',
    align: 'left' // Media left, Text right
  },
  {
    id: 2,
    eyebrow: 'STEP 2 —',
    title: 'Monumental Care.',
    body: 'We employ industrial-grade packaging and specialized handling protocols. Fragile assets, heavy machinery, or sensitive IT infrastructure—each item is secured with unmatched precision.',
    tags: ['Insured Transit', 'Fragile Safe'],
    image: '/services/warehouse.jpeg',
    badgeText: 'Climate Secured',
    badgeIcon: '❄️',
    align: 'right' // Text left, Media right
  },
  {
    id: 3,
    eyebrow: 'STEP 3 —',
    title: 'Flawless Execution.',
    body: 'Arrival is just the beginning. Our teams manage the complete unloading, placement, and reverse logistics of all packing materials. Your space is operational the moment we leave.',
    tags: ['Complete Setup', 'Zero Waste'],
    image: '/services/household.jpeg',
    badgeText: 'Setup Complete',
    badgeIcon: '✅',
    align: 'left' // Media left, Text right
  }
];

export default function EditorialNarrative() {
  const containerRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLHeadingElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    // 1. The Hook (Intro Text Scrub)
    if (introTextRef.current) {
      const split = new SplitText(introTextRef.current, { type: 'words,chars' });
      
      gsap.fromTo(split.words, 
        { opacity: 0.1, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 70%',
            end: 'top 20%',
            scrub: true,
          }
        }
      );
    }

    // 2. The Narrative Sequence (Staggered Reveals & Parallax)
    stepsRef.current.forEach((step, index) => {
      if (!step) return;

      const mediaCard = step.querySelector(`.${styles.mediaCard}`);
      const textContent = step.querySelector(`.${styles.textContent}`);
      const floatingBadge = step.querySelector(`.${styles.floatingBadge}`);

      // Section Reveal
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: step,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.from(mediaCard, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
      })
      .from(textContent, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.6')
      .from(floatingBadge, {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: 'back.out(1.5)'
      }, '-=0.4');

      // Floating Badge YoYo Animation
      gsap.to(floatingBadge, {
        y: -15,
        duration: 2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
        delay: index * 0.5 // Offset timings slightly
      });

      // Subtle Parallax on Media
      gsap.to(mediaCard, {
        yPercent: 15,
        ease: 'none',
        scrollTrigger: {
          trigger: step,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section className={styles.editorialSection} ref={containerRef}>
      
      {/* ── 1. The Introduction ── */}
      <div className={styles.introContainer}>
        <h2 className={styles.introHeading} ref={introTextRef}>
          3 Steps to Move India.
        </h2>
      </div>

      {/* ── 2. The Narrative Sequence ── */}
      <div className={styles.sequenceContainer}>
        {NARRATIVE_STEPS.map((step, i) => (
          <div 
            key={step.id} 
            className={`${styles.stepRow} ${step.align === 'right' ? styles.rowReverse : ''}`}
            ref={(el) => {
              if (el) stepsRef.current[i] = el;
            }}
          >
            
            {/* Media Block */}
            <div className={styles.mediaBlock}>
              <div className={styles.mediaCard}>
                <Image 
                  src={step.image} 
                  alt={step.title} 
                  fill 
                  className={styles.mediaImage}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
                <div className={styles.imageOverlay} />
                
                {/* Floating UI Overlay */}
                <div className={styles.floatingBadge}>
                  <span className={styles.badgeIcon}>{step.badgeIcon}</span>
                  <span className={styles.badgeText}>{step.badgeText}</span>
                </div>
              </div>
            </div>

            {/* Text Content Block */}
            <div className={styles.textBlock}>
              <div className={styles.textContent}>
                <span className={styles.eyebrow}>{step.eyebrow}</span>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepBody}>{step.body}</p>
                
                <div className={styles.tagsContainer}>
                  {step.tags.map(tag => (
                    <span key={tag} className={styles.featureTag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
