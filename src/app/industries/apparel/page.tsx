import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Apparel & Lifestyle Logistics Solutions | ShipBridge India",
    description: "ShipBridge offers specialized logistics, warehousing, Stock2Shelf services, and reverse returns management for India's fashion, apparel, and lifestyle retail brands.",
    openGraph: {
      title: "Apparel & Lifestyle Retail Logistics | ShipBridge",
      description: "Smart storing, mall-fulfillment, and reverse logistics for fashion brands. Tier I-V city distribution across India.",
      images: [{ url: "/industries/apparel_hero.png" }],
    },
    alternates: {
      canonical: 'https://www.shipbridge.in/industries/apparel',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Apparel & Lifestyle Retail Logistics | ShipBridge",
      description: "Smart storing, mall-fulfillment, and reverse logistics for fashion brands. Tier I-V city distribution across India.",
      images: ["/industries/apparel_hero.png"],
    },
  };
}

export default function ApparelIndustryPage() {
  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* HERO BANNER SECTION */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <Image
            src="/industries/apparel_hero.png"
            alt="Apparel & Lifestyle Logistics"
            fill
            priority
            className={styles.heroBackground}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroGlassCard} heroScrollContent`} data-reveal>
                <span className={styles.sectionLabel}>SMART STORING & RETAILING</span>
                <h1 className={styles.heroTitle}>
                  Apparels / Lifestyle — <br />
                  <span className={styles.highlightGreen}>Smart Storing & Retailing</span>
                </h1>
                <p className={styles.heroSub}>
                  ShipBridge offers one-stop solutions for all your retail logistics needs that significantly reduce transit times for your distribution across the supply chain, ensuring your products reach the shelves on time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      {/* UNIQUE OFFERINGS SECTION */}
      <section className={styles.offeringsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-reveal="blur">
            <span className={styles.sectionLabel}>UNIQUE OFFERINGS</span>
            <h2 className={styles.sectionTitle}>Characteristics of Our Apparel Solutions</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.offeringsGrid}>
            {/* Card 1 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>👕</div>
              <h3 className={styles.offeringTitle}>Quickly Changing Fashion</h3>
              <p className={styles.offeringDesc}>
                We deploy customized supply chain solutions for apparels, footwear, accessories, and seasonal merchandise to match rapidly evolving market trends anywhere across India.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>🗺️</div>
              <h3 className={styles.offeringTitle}>Diverse Indian Geography</h3>
              <p className={styles.offeringDesc}>
                We ensure that every style and retail parcel reaches Tier I, II, III, IV, and even remote Tier V cities and towns of India via our robust network.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>💰</div>
              <h3 className={styles.offeringTitle}>Optimized Cash Flow</h3>
              <p className={styles.offeringDesc}>
                Our operational expertise, speed, and real-time tracking give you the confidence to maintain lean inventories, stocking only as much as is needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDGE / ADVANTAGE SECTION */}
      <section className={styles.edgeSection}>
        <div className={styles.container}>
          <div className={styles.edgeCard} data-reveal="blur">
            <div className={styles.edgeGrid}>
              <div className={styles.edgeLeft}>
                <span className={styles.sectionLabel}>THE SHIPBRIDGE EDGE</span>
                <h2 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "2rem" }}>
                  How ShipBridge Gives You an Edge?
                </h2>
                
                <ul className={styles.edgeList}>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Fastest multimodal connectivity through surface & air cargo networks.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Time-definite, secure doorstep deliveries directly to malls and outlets.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Expansive, fully-containerized aggregator fleet of GPS-enabled trucks.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Deepest last-mile reach extending to the remotest corners of India.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Customized express distribution channels tailored for clothing and textiles.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Specialized, clean transit cabins preventing moisture and dust damage.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>24x7, 365 days safest network operations for uninterrupted dispatch.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Convenient pickups and door deliveries even on Sundays & holidays.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Seamless GST input tax credit documentation benefits.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>100% E-Waybill compliant operations with automatic NIC status updates.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Affordable, scaleable warehousing, 3PL support, and logistics consulting.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Value-added services including appointment deliveries, DOD, DACC, and To-Pay.</span>
                  </li>
                </ul>
              </div>

              <div className={styles.edgeRight}>
                <div className={styles.edgeImageWrapper}>
                  <Image
                    src="/industries/stock_to_shelf.png"
                    alt="Apparel Boutique"
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

      {/* SHOWCASE SOLUTIONS SECTION */}
      <section className={styles.showcaseSection}>
        <div className={styles.container}>
          
          {/* Row 1: Stock2Shelf */}
          <div className={styles.showcaseRow}>
            <div className={styles.showcaseTextCard} data-reveal="slide-left">
              <span className={styles.sectionLabel}>STORE REPLENISHMENT</span>
              <h2 className={styles.showcaseTitle}>What is Stock2Shelf?</h2>
              <p className={styles.showcaseDesc}>
                &ldquo;Stock2Shelf&rdquo; is our comprehensive supply chain fulfillment service for the lifestyle and apparel industry, specifically optimized for shopping malls and retail outlets.
              </p>
              <div className={styles.showcaseHighlight}>
                Includes direct retail delivery, on-site quality inspection, professional unpacking support, and reverse pick-ups—even on Sundays & Holidays—to ease the workload of retail staff.
              </div>
              <p className={styles.showcaseDesc}>
                Highly popular in malls and busy retail high-streets with high footfall, this win-win service ensures your latest inventory is always available at the point of consumption, utilizing ShipBridge&apos;s precise last-mile routing.
              </p>
            </div>

            <div className={styles.showcaseImageCard} data-reveal="clip">
              <div className={styles.showcaseImageWrapper}>
                <Image
                  src="/industries/stock_to_shelf.png"
                  alt="Stock2Shelf Retail"
                  fill
                  className={styles.showcaseImage}
                  sizes="(max-width: 992px) 100vw, 45vw"
                />
              </div>
            </div>
          </div>

          {/* Row 2: Secure Returns */}
          <div className={styles.showcaseRow}>
            <div className={styles.showcaseImageCard} data-reveal="clip">
              <div className={styles.showcaseImageWrapper}>
                <Image
                  src="/industries/apparel_returns.png"
                  alt="Secure Returns Management"
                  fill
                  className={styles.showcaseImage}
                  sizes="(max-width: 992px) 100vw, 45vw"
                />
              </div>
            </div>

            <div className={styles.showcaseTextCard} data-reveal="slide-right">
              <span className={styles.sectionLabel}>REVERSE LOGISTICS</span>
              <h2 className={styles.showcaseTitle}>What solutions does Secure Returns offer?</h2>
              <p className={styles.showcaseDesc}>
                The modern apparel industry experiences a high rate of product returns—whether due to seasonal unsold inventory, customer returns, or packaging updates. Getting these products quickly sorted and graded is essential to preserve margins.
              </p>
              <div className={styles.showcaseHighlight}>
                Our reverse logistics services provide convenient, single-point returns processing for national retailers.
              </div>
              <p className={styles.showcaseDesc}>
                We handle the end-to-end flow: from collecting returned stocks, conducting initial quality assessments, assisting in disposition sorting, repackaging, and finally returning products to primary warehouses or discount shelves.
              </p>
            </div>
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
            { "@type": "ListItem", "position": 3, "name": "Apparel & Lifestyle", "item": "https://www.shipbridge.in/industries/apparel" },
          ]
        }) }}
      />

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBanner} data-reveal="scale">
            <h2 className={styles.ctaTitle}>Need Apparel Logistics Support?</h2>
            <p className={styles.ctaSub}>Our retail supply chain experts are ready to build a customized movement blueprint for your brand.</p>
            <div className={styles.ctaButtons}>
              <Link href="/services/household#booking-form?industry=apparel" className={`${styles.ctaFilled} global-btn`}>
                <span className="global-btn-text">Consult Our Retail Experts</span>
              </Link>
              <Link href="/about" className={styles.ctaOutlined}>Explore ShipBridge Company</Link>
            </div>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
