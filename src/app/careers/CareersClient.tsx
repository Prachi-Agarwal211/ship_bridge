"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import OurCulture from "@/components/OurCulture";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function CareersClient() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Hero timeline
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
      <Navbar />

      {/* Particle Background */}
      <div className={styles.particleContainer}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${[15, 85, 45, 70, 25, 60, 90, 35][i]}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${[13, 17, 12, 16, 14, 15, 18, 13][i]}s`
            }}
          ></div>
        ))}
      </div>

      {/* SECTION 1: HERO */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={`hero-elem ${styles.overline}`}>WE ARE HIRING</span>
            <h1 className={`hero-elem ${styles.heroTitle}`}>
              Build the Future of<br />
              <span className={styles.highlightOrange}>Indian Logistics</span>
            </h1>

            <p className={`hero-elem ${styles.heroSub}`}>
              We're a small team building something big. If you're passionate about logistics, technology, and making India move smarter — we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR CULTURE */}
      <OurCulture />
    </div>
  );
}
