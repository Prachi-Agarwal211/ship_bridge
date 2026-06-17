import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Healthcare & Pharmaceutical Logistics Solutions | ShipBridge India",
    description: "ShipBridge offers specialized logistics, warehousing, 3PL support, and sample distribution (Direct2MR) for the healthcare, biotech, and pharmaceutical industries.",
    openGraph: {
      title: "Healthcare & Pharma Logistics Solutions | ShipBridge",
      description: "Direct2MR sample distribution, secure temperature-controlled cargo, and Sunday deliveries with zero extra cost across India.",
      images: [{ url: "/industries/healthcare_hero.png" }],
    },
  };
}

export default function HealthcareIndustryPage() {
  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* HERO BANNER SECTION */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <Image
            src="/industries/healthcare_hero.png"
            alt="Healthcare & Pharma Logistics"
            fill
            priority
            className={styles.heroBackground}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroGlassCard} heroScrollContent`} data-reveal>
                <span className={styles.sectionLabel}>HEALTHCARE SUPPLY CHAIN</span>
                <h1 className={styles.heroTitle}>
                  Redefining Healthcare with <br />
                  <span className={styles.highlightGreen}>Customized Logistics</span>
                </h1>
                <p className={styles.heroSub}>
                  Getting the right healthcare logistics and supply chain solution available at the right place and at the right time is what we make possible.
                </p>
              </div>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      {/* INTRODUCTION SECTION */}
      <section className={styles.introSection} data-reveal="blur">
        <div className={styles.container}>
          <p className={styles.introText}>
            ShipBridge is the only <strong>vaccine</strong> that you will ever need to make your supply chain efficient. With our comprehensive supply chain services, which include last-mile delivery of healthcare goods, quality inspection, professional packaging, and reverse logistics, we ensure the smooth running of your healthcare department.
          </p>
        </div>
      </section>

      {/* UNIQUE CORE OFFERINGS SECTION */}
      <section className={styles.offeringsSection}>
        <div className={styles.container}>
          <div className={styles.offeringsGrid}>
            {/* Card 1 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>⚡</div>
              <h3 className={styles.offeringTitle}>Fastest</h3>
              <p className={styles.offeringDesc}>
                Fastest multimodal connectivity through surface and air modes to ensure time-critical therapeutics are prioritized.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>📍</div>
              <h3 className={styles.offeringTitle}>Time-Definite</h3>
              <p className={styles.offeringDesc}>
                Time-definite, secure doorstep deliveries directly across all pincodes of India.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>📅</div>
              <h3 className={styles.offeringTitle}>24 x 7 Operational</h3>
              <p className={styles.offeringDesc}>
                Sunday and holiday deliveries available at no extra cost to maintain continuity of healthcare operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISTINCTIVE OFFERINGS SECTION */}
      <section className={styles.edgeSection}>
        <div className={styles.container}>
          <div className={styles.edgeCard} data-reveal="blur">
            <div className={styles.edgeGrid}>
              <div className={styles.edgeLeft}>
                <span className={styles.sectionLabel}>OUR DISTINCTIVE OFFERINGS</span>
                <h2 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "2rem" }}>
                  Distinctive Offerings for Healthcare
                </h2>
                
                <ul className={styles.edgeList}>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>No extra cost Sunday & holiday deliveries.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Value-added services including Appointment deliveries, DOD, DACC & To-pay.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Seamless GST input tax credit documentation benefits.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>100% E-Waybill compliance with auto MIC integration status updates.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>NIC integration for auto E-Waybill updates & validity extensions.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Customized supply chain solutions to suit dynamic healthcare needs like Direct2MR.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Wide aggregator fleet of containerized, GPS-enabled trucks for safe and damage-free deliveries.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Affordable, sterile warehousing, 3PL support, and logistics consulting.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Track and Trace facility & tech-enabled operations.</span>
                  </li>
                </ul>
              </div>

              <div className={styles.edgeRight}>
                <div className={styles.edgeImageWrapper}>
                  <Image
                    src="/industries/healthcare_hero.png"
                    alt="Healthcare Packaging Box"
                    fill
                    className={styles.edgeImage}
                    sizes="(max-width: 992px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECT2MR SHOWCASE SECTION */}
      <section className={styles.showcaseSection}>
        <div className={styles.container}>
          <div className={styles.showcaseGrid}>
            <div className={styles.showcaseImageCol}>
              <Image
                src="/industries/healthcare_mr.png"
                alt="Direct2MR Sample Delivery"
                fill
                className={styles.showcaseImage}
                sizes="(max-width: 992px) 100vw, 45vw"
              />
            </div>
            
            <div className={styles.showcaseContentCol} data-reveal="slide-right">
              <span className={styles.sectionLabel}>SPECIALIZED SERVICE</span>
              <h2 className={styles.showcaseTitle}>How ShipBridge solves Healthcare supply chain roadblocks?</h2>
              
              <div className={styles.showcaseHighlight}>
                Direct2MR — Customized and specialized sample-handling service exclusively for the healthcare industry.
              </div>
              
              <p className={styles.showcaseDesc}>
                One typical & necessary need of the pharmaceuticals industry is to regularly deliver samples to its thousands of medical representatives (MRs) across the country, who generally function out of their homes.
              </p>
              
              <p className={styles.showcaseDesc}>
                With perfect coordination, tech-enabled operations, and operational continuity, we ensure that samples are delivered to representatives as per their availability and convenience.
              </p>

              <p className={styles.showcaseDesc}>
                Our focused sample distribution and reconciliation service—Direct2MR—assists organizations in getting free medicine samples delivered even to the most complex and remotest corners of the country.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBanner} data-reveal="scale">
            <h2 className={styles.ctaTitle}>Need a Healthcare Supply Chain Audit?</h2>
            <p className={styles.ctaSub}>Our pharmaceutical logistics experts are ready to design a compliant, time-definite transit map for your products.</p>
            <div className={styles.ctaButtons}>
              <Link href="/services/household#booking-form?industry=healthcare" className={`${styles.ctaFilled} global-btn`}>
                <span className="global-btn-text">Consult Our Pharma Experts</span>
              </Link>
              <Link href="/about" className={styles.ctaOutlined}>About ShipBridge</Link>
            </div>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
