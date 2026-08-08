'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Counter from '@/components/animations/Counter';
import styles from './AboutCompany.module.css';

gsap.registerPlugin(ScrollTrigger, SplitText);

const SCALE_MODULES = [
  {
    word: 'HOUSEHOLDS',
    stat: 50000,
    statLabel: 'households relocated',
    description: 'Across 29 states and 2,000+ cities — families, students, and professionals trust ShipBridge for door-to-door relocation.',
    image: '/services/household.jpeg',
    suffix: '+',
  },
  {
    word: 'BUSINESSES',
    stat: 2000,
    statLabel: 'corporate clients',
    description: 'From startups to enterprises, we provide end-to-end logistics — office relocation, warehousing, and supply chain management.',
    image: '/services/office.jpeg',
    suffix: '+',
  },
  {
    word: 'VEHICLES',
    stat: 10000,
    statLabel: 'vehicles shipped monthly',
    description: 'Cars, bikes, and commercial vehicles transported safely with GPS tracking and insurance on every shipment.',
    image: '/services/vehicle.jpeg',
    suffix: '+',
  },
  {
    word: 'WAREHOUSES',
    stat: 5000000,
    statLabel: 'sq. ft. of storage',
    description: 'Tech-enabled warehousing and distribution centers across major Indian logistics hubs — Delhi, Mumbai, Bangalore, Chennai, Kolkata, and more.',
    suffix: '+ sq. ft.',
    image: '/services/warehouse.jpeg',
  },
];

const TEAM_MEMBERS = [
  { name: 'Ashish Joshi', role: 'Founder & CEO' },
  { name: 'Anurag Singh', role: 'Chief Technology Officer' },
  { name: 'Prachi Agarwal', role: 'Chief Operations Officer' },
];

export default function AboutCompany() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    // For each scale module: reveal giant word with SplitText, then image + content
    const modules = sectionRef.current?.querySelectorAll(`.${styles.scaleModule}`);
    if (!modules) return;

    modules.forEach((module) => {
      const wordEl = module.querySelector(`.${styles.giantWord}`) as HTMLElement;
      const imageEl = module.querySelector(`.${styles.moduleImage}`) as HTMLElement;
      const contentEl = module.querySelector(`.${styles.moduleContent}`) as HTMLElement;

      // Only run SplitText on desktop — word might be too big on mobile
      const isDesktop = window.matchMedia('(min-width: 769px)').matches;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: module,
          start: 'top 75%',
          end: 'bottom 25%',
          toggleActions: 'play none none reverse',
        },
      });

      // Giant word reveal
      if (wordEl) {
        if (isDesktop) {
          const split = new SplitText(wordEl, { type: 'chars' });
          tl.from(split.chars, {
            opacity: 0,
            y: 80,
            rotateX: -60,
            stagger: 0.04,
            duration: 1.2,
            ease: 'power4.out',
            transformOrigin: '50% 100% -50',
          }, 0);
        } else {
          tl.from(wordEl, {
            opacity: 0,
            y: 40,
            duration: 0.8,
            ease: 'power3.out',
          }, 0);
        }
      }

      // Image slide in
      if (imageEl) {
        tl.from(imageEl, {
          clipPath: 'inset(0 100% 0 0)',
          duration: 1.2,
          ease: 'power3.inOut',
        }, '-=0.6');
      }

      // Content fades up
      if (contentEl) {
        tl.from(contentEl, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.6');
      }
    });

    // Leadership section reveal
    const leadership = sectionRef.current?.querySelector(`.${styles.leadership}`);
    if (leadership) {
      gsap.from(leadership.querySelectorAll(`.${styles.teamCard}`), {
        scrollTrigger: {
          trigger: leadership,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: 'power3.out',
      });
    }

  }, { scope: sectionRef });

  return (
    <section className={styles.aboutSection} id="company" ref={sectionRef}>
      {/* Section Header */}
      <div className={styles.sectionHeader}>
        <span className="section-number">04</span>
        <h2 className={styles.heading}>Operational Scale</h2>
        <p className={styles.subheading}>
          Numbers don&apos;t lie.{' '}
          <span className={styles.highlightText}>Every stat is a promise kept.</span>
        </p>
      </div>

      {/* Editorial Scale Modules */}
      <div className={styles.modulesContainer}>
        {SCALE_MODULES.map((module, index) => (
          <div key={module.word} className={styles.scaleModule}>
            <div className={styles.moduleGrid}>
              {/* Left: Giant Word + Counter */}
              <div className={styles.moduleTextSide}>
                <div className={styles.moduleNumber}>
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className={styles.giantWord}>{module.word}</h3>
                <div className={styles.moduleContent}>
                  <div className={styles.statRow}>
                    <Counter
                      to={module.stat}
                      suffix={module.suffix}
                      duration={2.5}
                      ease="power3.out"
                      className={styles.statNumber}
                    />
                    <span className={styles.statLabel}>{module.statLabel}</span>
                  </div>
                  <p className={styles.moduleDescription}>{module.description}</p>
                </div>
              </div>

              {/* Right: Editorial Image */}
              <div className={styles.moduleImageSide}>
                <div className={styles.moduleImageWrapper}>
                  <Image
                    src={module.image}
                    alt={module.word}
                    fill
                    className={styles.moduleImage}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className={styles.imageOverlay} />
                  <div className={styles.imageBadge}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            </div>

            {/* Horizontal rule between modules */}
            {index < SCALE_MODULES.length - 1 && (
              <div className={styles.moduleDivider} />
            )}
          </div>
        ))}
      </div>

      {/* Leadership Section */}
      <div className={styles.leadership}>
        <div className={styles.leadershipHeader}>
          <span className="section-number">TEAM</span>
          <h2 className={styles.leadershipTitle}>Leadership</h2>
          <div className={styles.leadershipKeyline} />
        </div>
        <div className={styles.teamGrid}>
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className={styles.teamCard}>
              <div className={styles.teamCardAccent} />
              <div className={styles.teamCardContent}>
                <div className={styles.teamAvatar}>
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h4 className={styles.teamName}>{member.name}</h4>
                  <span className={styles.teamRole}>{member.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.aboutCta}>
          <p className={styles.aboutCtaText}>
            Building bridges.{' '}
            <span className={styles.highlightText}>Moving India.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
