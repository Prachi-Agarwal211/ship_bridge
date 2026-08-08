import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "FMCG & Consumer Electronics Logistics Solutions | ShipBridge India",
    description: "ShipBridge offers customized logistics, prompt storage, express direct-to-dealer deliveries, and reverse returns management for India's FMCG and consumer electronics brands.",
    openGraph: {
      title: "FMCG & Consumer Electronics Logistics Solutions | ShipBridge",
      description: "Direct distribution to dealers, distributors, and retailers. Scaleable aggregator fleet and Sunday delivery slots across India.",
      images: [{ url: "/industries/fmcg_hero.png" }],
    },
    alternates: {
      canonical: 'https://www.shipbridge.in/industries/fmcg',
    },
    twitter: {
      card: 'summary_large_image',
      title: "FMCG & Consumer Electronics Logistics Solutions | ShipBridge",
      description: "Direct distribution to dealers, distributors, and retailers. Scaleable aggregator fleet and Sunday delivery slots across India.",
      images: ["/industries/fmcg_hero.png"],
    },
  };
}

export default function FmcgIndustryPage() {
  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* HERO BANNER SECTION */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <Image
            src="/industries/fmcg_hero.png"
            alt="FMCG & Consumer Electronics Logistics"
            fill
            priority
            className={styles.heroBackground}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroGlassCard} heroScrollContent`} data-reveal>
                <span className={styles.sectionLabel}>CONSUMER GOODS & ELECTRONICS</span>
                <h1 className={styles.heroTitle}>
                  FMCG & Consumer <br />
                  <span className={styles.highlightGreen}>Electronics Logistics</span>
                </h1>
                <p className={styles.heroSub}>
                  Supply chain solutions for FMCG and consumer electronics
                </p>
              </div>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      {/* INTRODUCTION SECTION */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introCard} data-reveal="blur">
            <div className={styles.introGrid}>
              <div>
                <span className={styles.sectionLabel}>SOLUTIONS OVERVIEW</span>
                <h2 className={styles.introTitle}>Prompt Availability for Dynamic Demands</h2>
                <p className={styles.introText}>
                  The FMCG & Consumer Electronics industry is a fast-moving vertical that is highly dynamic and requires the prompt availability of trending and fresh stock right at the nearest retail store. It includes the on-time delivery of home appliances, consumer electronics, white goods, FMCG food and non-food items, sports, toys, home décor, stationery, and more.
                </p>
                <div className={styles.introHighlight}>
                  ShipBridge has the most apt supply chain & logistics solutions for the FMCG and Consumer Electronics industry. Many prestigious and established brands in the industry are already availing of the end-to-end supply chain offerings provided by ShipBridge.
                </div>
              </div>
              <div className={styles.introImageWrapper}>
                <Image
                  src="/logo/logo_new.png"
                  alt="ShipBridge Logistics Brand Logo"
                  fill
                  className={styles.introImage}
                  sizes="300px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES SECTION */}
      <section className={styles.offeringsSection}>
        <div className={styles.container}>
          <div className={styles.offeringsGrid}>
            {/* Card 1 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>⚡</div>
              <h3 className={styles.offeringTitle}>Fastest</h3>
              <p className={styles.offeringDesc}>
                Fastest multimodal connectivity through surface and air cargo networks for urgent supply spikes.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>🏬</div>
              <h3 className={styles.offeringTitle}>Direct</h3>
              <p className={styles.offeringDesc}>
                Direct distribution pathways to dealers, distributors, retailers, or your own exclusive retail outlets.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>📍</div>
              <h3 className={styles.offeringTitle}>Doorstep</h3>
              <p className={styles.offeringDesc}>
                Doorstep pickup from outsourced suppliers, production centers, or regional warehouses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DISTINCTIVE OFFERINGS / CHECKLIST SECTION */}
      <section className={styles.edgeSection}>
        <div className={styles.container}>
          <div className={styles.edgeCard} data-reveal="blur">
            <div className={styles.edgeGrid}>
              <div className={styles.edgeLeft}>
                <Image
                  src="/industries/fmcg_distribution.png"
                  alt="FMCG Tech Distribution Illustration"
                  fill
                  className={styles.edgeImage}
                  sizes="(max-width: 992px) 100vw, 40vw"
                />
              </div>

              <div className={styles.edgeRight}>
                <span className={styles.sectionLabel}>UNIQUE & CUSTOMISED SOLUTIONS</span>
                <h2 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "2rem" }}>
                  FMCG & Consumer Electronics Solutions
                </h2>
                
                <ul className={styles.edgeList}>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Sunday & Holiday deliveries at no extra cost.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Doorstep deliveries across all pincodes of India.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Access to a wide, containerized aggregator fleet of GPS-enabled trucks.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Customized express distribution and final-mile logistics services.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>End-to-end visibility & transparency via digital consoles.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>NIC integrated auto E-Waybill updates & validity extensions.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Reverse logistics for sending unsold or seasonal inventory back to warehouses.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>One-stop supply chain solutions for items with longer shelf life.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Seamless GST input tax credit documentation benefits.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Value-added services including Appointment deliveries, DOD, DACC & To-Pay.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GOAL SECTION */}
      <section className={styles.goalSection}>
        <div className={styles.container}>
          <div className={styles.goalCard} data-reveal="scale">
            <h3 className={styles.goalTitle}>Our Goal</h3>
            <p className={styles.goalBody}>
              We at <strong>ShipBridge</strong> manage to serve the FMCG & Consumer Electronics Industry to ensure that we deliver the best service to our clients as per their availability, ensuring maximum convenience, speed, and efficiency throughout the supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* BREADCRUMB JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shipbridge.in" },
            { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.shipbridge.in/industries" },
            { "@type": "ListItem", "position": 3, "name": "FMCG & Consumer Electronics", "item": "https://www.shipbridge.in/industries/fmcg" },
          ]
        }) }}
      />

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBanner} data-reveal="scale">
            <h2 className={styles.ctaTitle}>Ready to Optimize Your Shelf Replenishment?</h2>
            <p className={styles.ctaSub}>Our consumer logistics consultants are ready to tailor an express distribution grid for your brand.</p>
            <div className={styles.ctaButtons}>
              <Link href="/services/household#booking-form?industry=fmcg" className={`${styles.ctaFilled} global-btn`}>
                <span className="global-btn-text">Consult Our FMCG Experts</span>
              </Link>
              <Link href="/about" className={styles.ctaOutlined}>About ShipBridge</Link>
            </div>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
