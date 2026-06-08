"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FranchiseTimeline from "@/components/FranchiseTimeline";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function FranchiseClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const tl = gsap.timeline();
    tl.from('.hero-elem', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    });

  }, { scope: containerRef });

  return (
    <div className={styles.pageContainer} ref={containerRef}>

      {/* SECTION 1: HERO */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={`hero-elem ${styles.overline}`}>PARTNERSHIP OPPORTUNITIES</span>
            <h1 className={`hero-elem ${styles.heroTitle}`}>
              Become a ShipBridge<br />
              <span className={styles.highlightOrange}>Franchise Partner</span>
            </h1>

            <p className={`hero-elem ${styles.heroSub}`}>
              Join India's fastest-growing logistics network. Start your own ShipBridge franchise with low investment, full tech support, and a proven operating model.
            </p>

            <div className={`hero-elem ${styles.ctaButtons}`}>
              <a href="mailto:partners@shipbridge.in" className={`${styles.ctaFilled} global-btn`}>
                <span className="global-btn-text">Apply for Franchise</span>
              </a>
              <a href="/Shipbridge_Planning_final.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaOutlined}>
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY FRANCHISE WITH US */}
      <FranchiseTimeline />
    </div>
  );
}
