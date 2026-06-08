"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import OurCulture from "@/components/OurCulture";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  link: string;
}

const JOB_OPENINGS: JobOpening[] = [
  {
    title: "Senior Flutter Developer",
    department: "Engineering",
    location: "Indore (On-site)",
    type: "Full-time",
    link: "mailto:careers@shipbridge.in?subject=Application for Senior Flutter Developer"
  },
  {
    title: "Backend Engineer (FastAPI & AI)",
    department: "Engineering",
    location: "Indore (On-site / Hybrid)",
    type: "Full-time",
    link: "mailto:careers@shipbridge.in?subject=Application for Backend Engineer"
  },
  {
    title: "Operations Manager",
    department: "Operations",
    location: "Indore (On-site)",
    type: "Full-time",
    link: "mailto:careers@shipbridge.in?subject=Application for Operations Manager"
  },
  {
    title: "Growth Lead",
    department: "Marketing",
    location: "Indore / Remote",
    type: "Full-time",
    link: "mailto:careers@shipbridge.in?subject=Application for Growth Lead"
  }
];

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

    // Positions board title and cards reveal
    gsap.from('.jobs-header', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.jobs-section',
        start: 'top 85%',
      }
    });

    gsap.from('.job-card', {
      y: 45,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.jobs-grid',
        start: 'top 90%',
      }
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

      {/* SECTION 3: OPEN POSITIONS */}
      <section className={`${styles.jobsSection} jobs-section`}>
        <div className={styles.container}>
          <div className={`jobs-header ${styles.jobsHeader}`}>
            <span className={styles.overline}>JOIN OUR JOURNEY</span>
            <h2 className={styles.sectionTitle}>Open Positions</h2>
            <div className={styles.underlineBar}></div>
            <p className={styles.jobsSub}>
              We are constantly looking for talented individuals who want to build the infrastructure of tomorrow.
            </p>
          </div>

          <div className={`jobs-grid ${styles.jobsGrid}`}>
            {JOB_OPENINGS.map((job, idx) => (
              <div key={idx} className={`job-card ${styles.jobCard}`}>
                <div className={styles.jobCardTop}>
                  <div className={styles.jobTags}>
                    <span className={styles.jobTagDept}>{job.department}</span>
                    <span className={styles.jobTagType}>{job.type}</span>
                  </div>
                  <h3 className={styles.jobTitle}>{job.title}</h3>
                  <p className={styles.jobLocation}>📍 {job.location}</p>
                </div>
                <div className={styles.jobCardBottom}>
                  <a href={job.link} className={`${styles.applyBtn} global-btn`}>
                    <span className="global-btn-text">Apply Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
