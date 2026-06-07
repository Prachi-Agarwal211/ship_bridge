"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is the minimum investment?",
    answer: "You can start your franchise journey with ShipBridge for as low as ₹50k–1 Lakh as a Transporter Partner. Area Agent models start around ₹2–5 Lakhs, and City Partners range from ₹5–10 Lakhs depending on the target region size."
  },
  {
    question: "Do I need logistics experience?",
    answer: "No prior logistics background is required. We provide a 15-day intensive onboarding training program covering all customer booking flows, fleet allocations, driver management, safety protocols, and operations dashboards."
  },
  {
    question: "How does revenue sharing work?",
    answer: "ShipBridge operates on a transparent revenue-sharing model. City Partners and Area Agents receive a competitive commission percentage on every booking originating from or completed in their territory, processed via direct monthly payouts."
  },
  {
    question: "What tech support do I get?",
    answer: "Franchise partners get full enterprise access to our complete product suite: the Customer App listing, the Operations Admin Portal (lead CRM, tracking, invoice engines), and the ShipBridge driver navigation system."
  },
  {
    question: "How long does onboarding take?",
    answer: "Our standardized onboarding workflow takes 15 days. This includes document KYC verification, area eligibility assessment, agreement signing, operations training, and platform profile activation."
  }
];

export default function FranchiseClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);


  
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

    gsap.from('.why-card', {
      scrollTrigger: {
        trigger: '.why-section',
        start: 'top 75%',
      },
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'back.out(1.2)'
    });

    gsap.from('.model-card', {
      scrollTrigger: {
        trigger: '.model-section',
        start: 'top 75%',
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out'
    });

    gsap.from('.process-step', {
      scrollTrigger: {
        trigger: '.apply-section',
        start: 'top 75%',
      },
      y: 30,
      opacity: 0,
      scale: 0.9,
      duration: 0.5,
      stagger: 0.1,
      ease: 'back.out(1.5)'
    });
  }, { scope: containerRef });

  const handleFaqClick = (index: number) => {
    setExpandedFaq((prev) => (prev === index ? null : index));
  };



  return (
    <div className={styles.pageContainer} ref={containerRef}>
      <Navbar />



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

            <div className={`hero-elem ${styles.statChips}`}>
              <div className={styles.statChip}>₹5L+ Monthly Revenue Potential</div>
              <div className={styles.statChip}>15-Day Onboarding</div>
              <div className={styles.statChip}>Zero Inventory Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY FRANCHISE WITH US */}
      <section className={`why-section ${styles.whySection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>WHY PARTNER WITH US</span>
            <h2 className={styles.sectionTitle}>Why Franchise With Us</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.whyGrid}>
            {/* Card 1 */}
            <div className={`why-card ${styles.whyCard}`}>
              <span className={styles.whyIcon}>💰</span>
              <h3 className={styles.whyCardTitle}>Low Capital Entry</h3>
              <p className={styles.whyCardDesc}>Start your franchise business with as low as ₹2–5 Lakhs initial capital investment.</p>
            </div>

            {/* Card 2 */}
            <div className={`why-card ${styles.whyCard}`}>
              <span className={styles.whyIcon}>💻</span>
              <h3 className={styles.whyCardTitle}>Complete Tech Suite</h3>
              <p className={styles.whyCardDesc}>Full workspace access to ShipBridge customer apps, operations portals, and vendor routing clients.</p>
            </div>

            {/* Card 3 */}
            <div className={`why-card ${styles.whyCard}`}>
              <span className={styles.whyIcon}>📈</span>
              <h3 className={styles.whyCardTitle}>Proven Brand</h3>
              <p className={styles.whyCardDesc}>Leverage ShipBridge's growing brand reputation and standardized operational credibility.</p>
            </div>

            {/* Card 4 */}
            <div className={`why-card ${styles.whyCard}`}>
              <span className={styles.whyIcon}>📣</span>
              <h3 className={styles.whyCardTitle}>Marketing Support</h3>
              <p className={styles.whyCardDesc}>Access target localized digital campaigns, SEO tools, and WhatsApp marketing templates.</p>
            </div>

            {/* Card 5 */}
            <div className={`why-card ${styles.whyCard}`}>
              <span className={styles.whyIcon}>🎓</span>
              <h3 className={styles.whyCardTitle}>Training Program</h3>
              <p className={styles.whyCardDesc}>Benefit from a 15-day intensive onboarding training program with ongoing operations assistance.</p>
            </div>

            {/* Card 6 */}
            <div className={`why-card ${styles.whyCard}`}>
              <span className={styles.whyIcon}>🤝</span>
              <h3 className={styles.whyCardTitle}>Revenue Sharing</h3>
              <p className={styles.whyCardDesc}>Transparent commission structure with direct, hassle-free monthly payout schemes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FRANCHISE MODEL */}
      <section className={`model-section ${styles.modelSection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>PARTNER TIERS</span>
            <h2 className={styles.sectionTitle}>Franchise Models</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.modelGrid}>
            {/* City Partner */}
            <div className={`model-card ${styles.modelCard}`}>
              <h3 className={styles.modelTier}>City Partner</h3>
              <p className={styles.modelSub}>Manage a full city cluster — vehicles, drivers, customer leads, and local warehousing hubs.</p>
              
              <div className={styles.modelStatBlock}>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Investment Range:</span>
                  <span className={styles.modelStatValue}>₹5 – 10 Lakhs</span>
                </div>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Revenue Potential:</span>
                  <span className={styles.modelStatValue}>₹5L+ / Month</span>
                </div>
              </div>

              <ul className={styles.modelFeaturesList}>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Full city cluster franchise rights</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Real-time dispatch control desk</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Direct corporate B2B leads</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Regional hub warehousing tools</span>
                </li>
              </ul>
            </div>

            {/* Area Agent */}
            <div className={`model-card ${styles.modelCard}`}>
              <h3 className={styles.modelTier}>Area Agent</h3>
              <p className={styles.modelSub}>Cover a district or local area — generate shifting leads, schedule services, and coordinate local pickups.</p>
              
              <div className={styles.modelStatBlock}>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Investment Range:</span>
                  <span className={styles.modelStatValue}>₹2 – 5 Lakhs</span>
                </div>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Revenue Potential:</span>
                  <span className={styles.modelStatValue}>₹2L+ / Month</span>
                </div>
              </div>

              <ul className={styles.modelFeaturesList}>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Dedicated sector booking rights</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Customer app profile listing</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Marketing collateral & banners</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>On-ground operations training</span>
                </li>
              </ul>
            </div>

            {/* Transporter Partner */}
            <div className={`model-card ${styles.modelCard}`}>
              <h3 className={styles.modelTier}>Transporter</h3>
              <p className={styles.modelSub}>Bring your own fleet of trucks or delivery vehicles directly into the ShipBridge logistics grid.</p>
              
              <div className={styles.modelStatBlock}>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Investment Range:</span>
                  <span className={styles.modelStatValue}>₹50k – 1 Lakh</span>
                </div>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Revenue Potential:</span>
                  <span className={styles.modelStatValue}>₹1.5L+ / Month</span>
                </div>
              </div>

              <ul className={styles.modelFeaturesList}>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Vendor application access</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Daily automated job assignments</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Google Maps navigation routing</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Instant POD digital payout triggers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW TO APPLY */}
      <section className={`apply-section ${styles.applySection}`}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>APPLICATION FLOW</span>
            <h2 className={styles.sectionTitle}>How To Apply</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.processStrip}>
            <div className={`process-step ${styles.processStep}`}>
              <div className={styles.stepNumber}>1</div>
              <h4 className={styles.stepTitle}>Apply Online</h4>
            </div>
            <div className={`process-step ${styles.processStep}`}>
              <div className={styles.stepNumber}>2</div>
              <h4 className={styles.stepTitle}>Eligibility Check</h4>
            </div>
            <div className={`process-step ${styles.processStep}`}>
              <div className={styles.stepNumber}>3</div>
              <h4 className={styles.stepTitle}>Agreement Signing</h4>
            </div>
            <div className={`process-step ${styles.processStep}`}>
              <div className={styles.stepNumber}>4</div>
              <h4 className={styles.stepTitle}>Training Program</h4>
            </div>
            <div className={`process-step ${styles.processStep}`}>
              <div className={styles.stepNumber}>5</div>
              <h4 className={styles.stepTitle}>Go Live</h4>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 6: FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>HELP DESK</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.faqList}>
            {FAQ_DATA.map((faq, index) => {
              const isActive = expandedFaq === index;
              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ""}`}
                  onClick={() => handleFaqClick(index)}
                >
                  <div className={styles.faqQuestionBlock}>
                    <h4 className={styles.faqQuestion}>{faq.question}</h4>
                    <svg
                      className={styles.faqArrow}
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

                  {isActive && (
                    <div className={styles.faqAnswer}>
                      {faq.answer}
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
