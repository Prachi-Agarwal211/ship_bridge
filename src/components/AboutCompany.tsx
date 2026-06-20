"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutCompany.module.css";

gsap.registerPlugin(ScrollTrigger);

const TEAM_MEMBERS = [
  { name: "Ashish Joshi", role: "Founder & CEO" },
  { name: "Anurag Singh", role: "Chief Technology Officer" },
  { name: "Prachi Agarwal", role: "Chief Operations Officer" },
];

export default function AboutCompany() {
  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    if (!isDesktop) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#company',
        start: 'top 75%',
        end: 'bottom 20%',
      }
    });

    tl.from('.about-logo-row, .about-title-group', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out'
    });

    tl.from('.about-desc', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4');

    tl.from('.about-highlight', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.2)'
    }, '-=0.4');

    tl.from('.about-team-card', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.12,
      ease: 'power3.out'
    }, '-=0.4');

  });

  return (
    <section className={styles.aboutSection} id="company">
      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          
          {/* Left Column: Text Content and Highlights */}
          <div className={styles.leftColumn}>
            
            <div className={`about-logo-row ${styles.logoRow}`}>
              <svg className={styles.logoIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v8M8 12h8" />
              </svg>
              <div className={styles.logoText}>
                <span className={styles.logoTextPrimary}>SHIPBRIDGE</span>
                <span className={styles.logoTextSecondary}>LOGISTICS</span>
              </div>
            </div>

            <div className="about-title-group">
              <h2 className={styles.title}>About Company</h2>
              <div className={styles.titleUnderline}></div>
              <h3 className={styles.subheading}>
                BUILDING BRIDGES. <span className={styles.subheadingGreen}>MOVING INDIA.</span>
              </h3>
            </div>

            <div className={`about-desc ${styles.descriptionText}`}>
              <p>
                Shipbridge Logistics was founded with a vision to create a logistics company that stands for reliability, efficiency, and customer trust.
              </p>
              <p>
                Our mission is simple — to bridge distances and deliver promises. Every. Single. Time.
              </p>
            </div>

            <div className={styles.highlightsBar}>
              <div className={`about-highlight ${styles.highlightItem}`}>
                <div className={styles.hexIconBox}>
                  <svg className={styles.hexSvg} viewBox="0 0 48 52" fill="none">
                    <defs>
                      <linearGradient id="hexGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#f97316" />
                        <stop offset="100%" stopColor="#22c55e" />
                      </linearGradient>
                    </defs>
                    <path d="M 24 2 L 44 13 L 44 39 L 24 50 L 4 39 L 4 13 Z" stroke="url(#hexGradient)" strokeWidth="1.5" />
                  </svg>
                  <svg className={styles.highlightIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  <h4>Reliable</h4>
                  <p>We deliver what we promise.</p>
                </div>
              </div>

              <div className={`about-highlight ${styles.highlightItem}`}>
                <div className={styles.hexIconBox}>
                  <svg className={styles.hexSvg} viewBox="0 0 48 52" fill="none">
                    <path d="M 24 2 L 44 13 L 44 39 L 24 50 L 4 39 L 4 13 Z" stroke="url(#hexGradient)" strokeWidth="1.5" />
                  </svg>
                  <svg className={styles.highlightIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  <h4>Efficient</h4>
                  <p>Smart solutions for operations.</p>
                </div>
              </div>

              <div className={`about-highlight ${styles.highlightItem}`}>
                <div className={styles.hexIconBox}>
                  <svg className={styles.hexSvg} viewBox="0 0 48 52" fill="none">
                    <path d="M 24 2 L 44 13 L 44 39 L 24 50 L 4 39 L 4 13 Z" stroke="url(#hexGradient)" strokeWidth="1.5" />
                  </svg>
                  <svg className={styles.highlightIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                </div>
                <div className={styles.highlightText}>
                  <h4>Delivered</h4>
                  <p>On time. Every time. Anywhere.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Team Members — names only */}
          <div className={styles.rightColumn}>
            <div className={styles.teamList}>
              <span className={styles.teamOverline}>LEADERSHIP</span>
              {TEAM_MEMBERS.map((member) => (
                <div key={member.name} className={`about-team-card ${styles.teamCard}`}>
                  <div className={styles.teamCardAccent}></div>
                  <div className={styles.teamCardContent}>
                    <h4 className={styles.teamName}>{member.name}</h4>
                    <span className={styles.teamRole}>{member.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
