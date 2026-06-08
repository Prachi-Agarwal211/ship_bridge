'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import styles from './FranchiseTimeline.module.css';

interface TimelineItem {
  id: number;
  icon: string;
  title: string;
  description: string;
  position: 'above' | 'below';
}

const items: TimelineItem[] = [
  {
    id: 1,
    icon: "💰",
    title: "Low Capital Entry",
    description: "Start your franchise business with as low as ₹2–5 Lakhs initial capital investment.",
    position: "above",
  },
  {
    id: 2,
    icon: "💻",
    title: "Complete Tech Suite",
    description: "Full workspace access to ShipBridge customer apps, operations portals, and vendor routing clients.",
    position: "below",
  },
  {
    id: 3,
    icon: "📈",
    title: "Proven Brand",
    description: "Leverage ShipBridge's growing brand reputation and standardized operational credibility.",
    position: "above",
  },
  {
    id: 4,
    icon: "📢",
    title: "Marketing Support",
    description: "Access target localized digital campaigns, SEO tools, and WhatsApp marketing templates.",
    position: "below",
  },
  {
    id: 5,
    icon: "🎓",
    title: "Training Program",
    description: "Benefit from a 15-day intensive onboarding training program with ongoing operations assistance.",
    position: "above",
  },
  {
    id: 6,
    icon: "🤝",
    title: "Revenue Sharing",
    description: "Transparent commission structure with direct, hassle-free monthly payout schemes.",
    position: "below",
  },
];

export default function FranchiseTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // DESKTOP TIMELINE ANIMATION (min-width: 768px)
    mm.add("(min-width: 768px)", () => {
      const desktopTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        }
      });

      // 1. Draw horizontal main line
      desktopTl.fromTo(`.${styles.mainLine}`, 
        { scaleX: 0 }, 
        { scaleX: 1, duration: 0.8, ease: "power2.out" }
      );

      // 2. Staggered reveal of stem lines (scaleY 0 -> 1)
      desktopTl.fromTo(`.stem-line-above`, 
        { scaleY: 0 }, 
        { scaleY: 1, duration: 0.4, stagger: 0.08, ease: "power1.out" },
        "-=0.4"
      );
      desktopTl.fromTo(`.stem-line-below`, 
        { scaleY: 0 }, 
        { scaleY: 1, duration: 0.4, stagger: 0.08, ease: "power1.out" },
        "-=0.4"
      );

      // 3. Scale timeline intersection dots in
      desktopTl.fromTo(`.${styles.timelineDot}`,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, stagger: 0.08, ease: "back.out(1.5)" },
        "-=0.3"
      );

      // 4. Fade + slide above and below cards in (above: y: -30 -> 0, below: y: 30 -> 0)
      desktopTl.fromTo(`.node-above-content`,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" },
        "-=0.2"
      );
      desktopTl.fromTo(`.node-below-content`,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out" },
        "-=0.5"
      );
    });

    // MOBILE TIMELINE ANIMATION (max-width: 767px)
    mm.add("(max-width: 767px)", () => {
      const mobileTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        }
      });

      // 1. Draw vertical main line
      mobileTl.fromTo(`.${styles.mobileLine}`,
        { scaleY: 0 },
        { scaleY: 1, duration: 0.8, ease: "power2.out" }
      );

      // 2. Grow intersection dots on mobile
      mobileTl.fromTo(`.${styles.mobileDot}`,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, stagger: 0.1, ease: "back.out(1.5)" },
        "-=0.5"
      );

      // 3. Staggered draw of mobile side stems (scaleX 0 -> 1)
      mobileTl.fromTo(`.${styles.mobileStem}`,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.3, stagger: 0.1, ease: "power1.out" },
        "-=0.3"
      );

      // 4. Fade + slide mobile cards (left: x: -30 -> 0, right: x: 30 -> 0)
      mobileTl.fromTo(`.mobile-content-left`,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
      mobileTl.fromTo(`.mobile-content-right`,
        { x: 30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );
    });
  }, { scope: sectionRef });

  return (
    <section className={`why-section ${styles.timelineSection}`} ref={sectionRef}>
      {/* Subtle bottom green glow */}
      <div className={styles.glow} />

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionLabel}>WHY PARTNER WITH US</span>
          <h2 className={styles.sectionTitle}>Why Franchise With Us</h2>
          <div className={styles.underlineBar}></div>
        </div>

        {/* ── DESKTOP LAYOUT ── */}
        <div className={styles.desktopTimeline}>
          {/* Timeline Line */}
          <div className={styles.mainLine}>
            <div className={styles.dashedLine} />
          </div>

          <div className={styles.nodesWrapper}>
            {items.map((item) => {
              const isAbove = item.position === 'above';
              return (
                <div key={item.id} className={styles.nodeCol}>
                  {isAbove ? (
                    /* ABOVE NODE */
                    <div className={styles.nodeAbove}>
                      <div className={`${styles.nodeContent} node-above-content`}>
                        <div className={styles.iconCircle}>
                          <span>{item.icon}</span>
                        </div>
                        <h4 className={styles.nodeTitle}>{item.title}</h4>
                        <p className={styles.nodeDesc}>{item.description}</p>
                      </div>
                      <div className={`${styles.stemLine} stem-line-above`} />
                      <div className={styles.timelineDot}>
                        <div className={styles.dotGlow} />
                        <div className={styles.dotInner} />
                      </div>
                    </div>
                  ) : (
                    /* BELOW NODE */
                    <div className={styles.nodeBelow}>
                      <div className={styles.timelineDot}>
                        <div className={styles.dotGlow} />
                        <div className={styles.dotInner} />
                      </div>
                      <div className={`${styles.stemLine} stem-line-below`} />
                      <div className={`${styles.nodeContent} node-below-content`}>
                        <h4 className={styles.nodeTitle}>{item.title}</h4>
                        <p className={styles.nodeDesc}>{item.description}</p>
                        <div className={styles.iconCircle}>
                          <span>{item.icon}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className={styles.mobileTimeline}>
          {/* Vertical line */}
          <div className={styles.mobileLine}>
            <div className={styles.mobileDashedLine} />
          </div>

          <div className={styles.mobileNodes}>
            {items.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div 
                  key={item.id} 
                  className={`${styles.mobileNodeItem} ${isLeft ? styles.mobileNodeLeft : styles.mobileNodeRight}`}
                >
                  <div className={styles.mobileDot}>
                    <div className={styles.dotGlow} />
                    <div className={styles.dotInner} />
                  </div>
                  <div className={styles.mobileStem} />
                  
                  <div className={`${styles.mobileContent} ${isLeft ? 'mobile-content-left' : 'mobile-content-right'}`}>
                    <div className={styles.mobileIconWrapper}>
                      <span>{item.icon}</span>
                    </div>
                    <h4 className={styles.mobileTitle}>{item.title}</h4>
                    <p className={styles.mobileDesc}>{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
