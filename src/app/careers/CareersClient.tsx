"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import OurCulture from "@/components/OurCulture";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

interface JobOpening {
  id: string;
  role: string;
  type: string;
  location: string;
  brief: string;
  responsibilities: string[];
  requirements: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "flutter-dev",
    role: "Flutter Developer (Mobile)",
    type: "Full-time",
    location: "Remote",
    brief: "Build the customer and driver app",
    responsibilities: [
      "Develop cross-platform mobile apps for iOS and Android using Flutter & Dart.",
      "Integrate Google Maps SDK, custom GPS tracking modules, and location sync loops.",
      "Implement secure payment checkout workflows via Razorpay SDK integrations.",
      "Build responsive UI animations, micro-interactions, and caching systems."
    ],
    requirements: [
      "2+ years of production experience building high-performance Flutter mobile apps.",
      "Strong understanding of state management patterns (BLoC, Provider, Riverpod).",
      "Experience with background processes, background location tracking, and offline data sync.",
      "Familiarity with native platform channels (Swift/Kotlin/Java) is a plus."
    ]
  },
  {
    id: "fastapi-backend",
    role: "FastAPI Backend Engineer",
    type: "Full-time",
    location: "Remote",
    brief: "Build scalable logistics APIs",
    responsibilities: [
      "Design, build, and maintain highly scalable RESTful APIs using Python and FastAPI.",
      "Manage relational database schemas and queries in PostgreSQL.",
      "Configure caching layers and event-driven background queues via Redis.",
      "Implement secure authentication mechanisms using JWT and OAuth 2.0."
    ],
    requirements: [
      "3+ years of professional backend engineering experience.",
      "Expert knowledge of Python and asynchronous programming paradigms.",
      "Strong experience with PostgreSQL database optimization, indexing, and migrations.",
      "Hands-on experience with Redis, Docker, and cloud deployments (AWS/GCP)."
    ]
  },
  {
    id: "ops-manager",
    role: "Operations Manager",
    type: "Full-time",
    location: "Jaipur",
    brief: "Manage city-level logistics coordination",
    responsibilities: [
      "Coordinate local cargo operations, fleet schedules, and packers/movers tasks.",
      "Build and manage relations with local vehicle transporters and vendor hubs.",
      "Monitor daily relocation jobs to ensure peak punctuality and customer satisfaction.",
      "Streamline warehousing layouts, storage capacity indexing, and inventory logs."
    ],
    requirements: [
      "2+ years of experience in on-ground logistics, relocation, or supply chain management.",
      "Excellent communication, negotiation, and vendor-partner relations skills.",
      "Ability to make split-second routing and resource allocation decisions.",
      "Deep familiarity with Jaipur local transporter hubs."
    ]
  },
  {
    id: "marketing-exec",
    role: "Digital Marketing Executive",
    type: "Full-time",
    location: "Remote",
    brief: "SEO, performance marketing, content",
    responsibilities: [
      "Lead SEO strategies for logistics and shifting services across target locations.",
      "Configure and run high-ROI ad campaigns on Google Ads and Meta platforms.",
      "Manage social media content, brand newsletters, and local business profiles.",
      "Track acquisition metrics, client conversion costs, and analytics reporting."
    ],
    requirements: [
      "2+ years of performance marketing, growth hacking, or digital branding experience.",
      "Proven experience optimizing organic search rankings (SEO tools like Ahrefs/Semrush).",
      "Excellent copywriting, design briefing, and marketing campaign reporting skills."
    ]
  },
  {
    id: "bde-sales",
    role: "Business Development Executive",
    type: "Full-time",
    location: "Multiple cities",
    brief: "Enterprise and SME sales",
    responsibilities: [
      "Source, pitch, and onboard corporate partners, local factories, and SMEs.",
      "Manage the complete B2B sales cycle, contract negotiations, and corporate billing.",
      "Expand market presence through strategic partnerships with residential societies and developers.",
      "Meet monthly new partner acquisition targets to fuel marketplace scaling."
    ],
    requirements: [
      "1+ year of B2B sales, enterprise partnerships, or field marketing experience.",
      "Highly self-motivated with exceptional pitching and negotiation capabilities.",
      "Willingness to travel locally and engage with SME directors and warehouse operators."
    ]
  }
];

export default function CareersClient() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  

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

    // Reveal culture cards
    gsap.from('.culture-card', {
      scrollTrigger: {
        trigger: '.culture-section',
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.2)'
    });

    // Reveal jobs
    gsap.from('.job-card-anim', {
      scrollTrigger: {
        trigger: '.jobs-section',
        start: 'top 80%',
      },
      x: -30,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      ease: 'power2.out'
    });
  }, { scope: containerRef });

  const handleJobCardClick = (jobId: string) => {
    setExpandedJob((prev) => (prev === jobId ? null : jobId));
  };



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
              left: `${Math.random() * 95}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${12 + Math.random() * 6}s`
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

            <div className={`hero-elem ${styles.statRow}`}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>3</span>
                <span className={styles.statLabel}>Founders</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>Rapid</span>
                <span className={styles.statLabel}>Growth</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>100%</span>
                <span className={styles.statLabel}>Remote-Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR CULTURE */}
      <OurCulture />

      {/* SECTION 3: OPEN POSITIONS */}
      <section className={`jobs-section ${styles.jobsSection}`} id="positions">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>OPPORTUNITIES</span>
            <h2 className={styles.sectionTitle}>Open Positions</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.jobsList}>
            {JOB_OPENINGS.map((job) => {
              const isActive = expandedJob === job.id;
              return (
                <div
                  key={job.id}
                  className={`job-card-anim ${styles.jobCard} ${isActive ? styles.jobCardActive : ""}`}
                  onClick={() => handleJobCardClick(job.id)}
                >
                  <div className={styles.jobHeader}>
                    <div className={styles.jobTitleBlock}>
                      <h3 className={styles.jobRole}>{job.role}</h3>
                      <div className={styles.jobMetaRow}>
                        <span className={styles.metaLabel}>{job.type}</span>
                        <span className={`${styles.metaLabel} ${styles.metaLocation}`}>📍 {job.location}</span>
                      </div>
                    </div>
                    <div className={styles.expandTrigger}>
                      <span>{isActive ? "Collapse" : "View Details"}</span>
                      <svg
                        className={styles.expandArrow}
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        fill="none"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </div>
                  </div>

                  <p className={styles.jobBrief}>{job.brief}</p>

                  {/* Expanded block */}
                  {isActive && (
                    <div className={styles.jobDetails} onClick={(e) => e.stopPropagation()}>
                      <div className={styles.detailsBlock}>
                        <h5>Key Responsibilities</h5>
                        <ul>
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailsBlock}>
                        <h5>Requirements & Qualifications</h5>
                        <ul>
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <a
                        href={`mailto:careers@shipbridge.in?subject=Application for ${encodeURIComponent(job.role)}`}
                        className={`${styles.applyLinkBtn} global-btn`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="global-btn-text">Apply For This Role</span>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>



    </div>
  );
}
