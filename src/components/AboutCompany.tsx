"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./AboutCompany.module.css";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Ashish Joshi",
    role: "Founder & CEO",
    image: "/company/founder.png"
  },
  {
    name: "Anurag Singh",
    role: "Chief Technology Officer",
    image: "/company/cto.png"
  },
  {
    name: "Prachi Agarwal",
    role: "Chief Operations Officer",
    image: "/company/coo.png"
  }
];

export default function AboutCompany() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#company',
        start: 'top 75%',
        end: 'bottom 20%',
      }
    });

    // Reveal logo row and title
    tl.from('.about-logo-row, .about-title-group', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power3.out'
    });

    // Reveal description text
    tl.from('.about-desc', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.4');

    // Reveal highlight items
    tl.from('.about-highlight', {
      y: 30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.2)'
    }, '-=0.4');

    // Reveal right column slider
    tl.from('.about-slider', {
      x: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.6');

  });

  // Autoplay loop: auto-advances the slideshow every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === TEAM_MEMBERS.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TEAM_MEMBERS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TEAM_MEMBERS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className={styles.aboutSection} id="company">
      {/* Background ambient lighting glows */}
      <div className={styles.sectionGlowOrange}></div>
      <div className={styles.sectionGlowGreen}></div>

      <div className={styles.container}>
        <div className={styles.aboutGrid}>
          
          {/* Left Column: Text Content and Highlights */}
          <div className={styles.leftColumn}>
            
            {/* Logo Row matching Mockup */}
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
              {/* Main Header */}
              <h2 className={styles.title}>About Company</h2>
              <div className={styles.titleUnderline}></div>

              {/* Subheading */}
              <h3 className={styles.subheading}>
                BUILDING BRIDGES. <span className={styles.subheadingGreen}>DELIVERING TRUST.</span>
              </h3>
            </div>

            {/* Narrative text */}
            <div className={`about-desc ${styles.descriptionText}`}>
              <p>
                Shipbridge Logistics was founded with a vision to create a logistics company that stands for reliability, efficiency, and customer trust.
              </p>
              <p>
                Our mission is simple — to bridge distances and deliver promises. Every. Single. Time.
              </p>
            </div>

            {/* Horizontal Highlights Row */}
            <div className={styles.highlightsBar}>
              
              {/* Highlight 1: Reliable */}
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

              {/* Highlight 2: Efficient */}
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

              {/* Highlight 3: Delivered */}
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

          {/* Right Column: Diagonal Image Slider */}
          <div className={`about-slider ${styles.rightColumn}`}>
            <div className={styles.sliderContainer}>
              
              {/* Slider Images with Clip Path */}
              <div className={styles.imageCard}>
                {TEAM_MEMBERS.map((member, idx) => (
                  <div
                    key={member.name}
                    className={`${styles.imageSlide} ${idx === currentIndex ? styles.activeSlide : ""}`}
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      unoptimized
                      className={styles.profileImage}
                      priority
                    />
                    
                    {/* Dark gradient overlay inside card */}
                    <div className={styles.imageOverlay}></div>
                  </div>
                ))}
              </div>

              {/* Name/Title Label Card - Placed outside of the clipped imageCard to prevent cropping */}
              <div className={styles.memberLabelCard}>
                <h4 className={styles.memberName}>{TEAM_MEMBERS[currentIndex].name}</h4>
                <span className={styles.memberRole}>{TEAM_MEMBERS[currentIndex].role}</span>
              </div>

              {/* Glowing Hexagonal/Chevron Border Overlay */}
              <div className={styles.borderOverlay}>
                <svg className={styles.borderSvg} viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
                  <defs>
                    <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f97316" />
                      <stop offset="48%" stopColor="#f97316" />
                      <stop offset="52%" stopColor="#22c55e" />
                      <stop offset="100%" stopColor="#22c55e" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 20 0 L 5 45 L 25 100"
                    stroke="url(#neonGradient)"
                    strokeWidth="1.8"
                    vectorEffect="non-scaling-stroke"
                  />
                </svg>
              </div>

              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className={`${styles.navButton} ${styles.prevBtn}`}
                aria-label="Previous Slide"
              >
                <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className={`${styles.navButton} ${styles.nextBtn}`}
                aria-label="Next Slide"
              >
                <svg className={styles.arrowIcon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
