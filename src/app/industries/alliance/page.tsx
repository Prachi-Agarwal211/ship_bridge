import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Alliance Partner Management | 3PL & Warehouse Logistics | ShipBridge India",
    description: "ShipBridge offers customized 3PL logistics, warehouse management, and strategic alliance partner services for carriers and logistics networks.",
    openGraph: {
      title: "Alliance Partner Management | 3PL Logistics | ShipBridge",
      description: "Avail customized 3PL offerings and our extensive shipping network to serve your customers seamlessly.",
      images: [{ url: "/industries/ecommerce_hero.png" }],
    },
  };
}

export default function AlliancePartnerPage() {
  const valueAddedOfferings = [
    "Fastest & dedicated multimodal connectivity through surface and air modes",
    "100% GST compliant and ethical operations",
    "Doorstep pick ups and deliveries",
    "Technology-enabled operations",
    "Deepest reach to the remotest corners of all pincodes of India",
    "Safest network operational on 24x7, 365 days in a year",
    "Huge coverage radius of 33 kms from ShipBridge gateway to any pincode in the country",
    "Pickup and deliveries even on Sundays & Holidays",
    "NIC integration for auto E-Waybill validity extension & updates",
    "Simplified pricing mechanism",
    "End-to-end visibility and transparency",
    "GST input tax credit benefit"
  ];

  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* HERO BANNER SECTION */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <Image
            src="/industries/ecommerce_hero.png"
            alt="Alliance Partner Management 3PL Logistics"
            fill
            priority
            className={styles.heroBackground}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroGlassCard} heroScrollContent`} data-reveal>
                <span className={styles.sectionLabel}>Alliance Partner Management</span>
                <h1 className={styles.heroTitle}>
                  Customised logistics solutions for <br />
                  <span className={styles.highlightGreen}>3PL & warehousing service provider</span>
                </h1>
                <p className={styles.heroSub}>
                  India is a huge country with dynamic economy and complex arrangements. Operating in India's supply chain, ShipBridge has entrenched its position as the largest & widest logistics network service provider with its network spanning to every square inch of India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      {/* BREADCRUMB */}
      <div className={styles.container}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span className={styles.breadcrumbSeparator}>»</span>
          <span>Alliance Partner Management</span>
        </nav>
      </div>

      {/* THREE CORE HIGHLIGHTS SECTION */}
      <section className={styles.highlightsSection}>
        <div className={styles.container}>
          <div className={styles.highlightsGrid}>
            {/* Card 1 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>🌐</div>
              <h3 className={styles.highlightTitle}>Largest & wide-spread network</h3>
              <p className={styles.highlightDesc}>
                Send your goods to the deepest corners of India.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>⏱️</div>
              <h3 className={styles.highlightTitle}>Fastest Transit Times</h3>
              <p className={styles.highlightDesc}>
                Experience fastest transit time across the industry.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>📅</div>
              <h3 className={styles.highlightTitle}>Operations continuity</h3>
              <p className={styles.highlightDesc}>
                24x7, 365 days operations continuity for swift connectivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS ALLIANCE PARTNER MANAGEMENT? */}
      <section className={styles.infraSection}>
        <div className={styles.container}>
          <div className={styles.infraGrid}>
            <div className={styles.infraImageCol}>
              <Image
                src="/industries/alliance_concept.png"
                alt="Alliance Partner Management Team Synergy"
                fill
                className={styles.infraImage}
                sizes="(max-width: 992px) 100vw, 45vw"
              />
            </div>
            
            <div className={styles.infraContentCol} data-reveal="slide-right">
              <span className={styles.sectionLabel}>Strategic Alliance</span>
              <h2 className={styles.infraTitle}>
                What is Alliance Partner Management?
              </h2>
              
              <p className={styles.infraText}>
                A strategic association between alliance partner & ShipBridge where other logistics service providers use ShipBridge' extensive network & infrastructure to cater to their customers' supply chain & logistics requirements across India.
              </p>
              
              <p className={styles.infraText}>
                This saves Alliance Partners' immense time and the hassle of setting up their own supply chain network capabilities & strengths. Rather, they can avail ShipBridge' customised offerings and network to serve their customers in a delightful way, be it at first-mile, middle-mile and/ or last-mile.
              </p>

              <p className={styles.infraText}>
                This kind of arrangement is best suited for 4PL service providers, international players with no domestic network, allied businesses partners with limited network capabilities, any local player with less/ zero distribution capabilities, packers & movers type of service providers and many more.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE ADDED & UNIQUE OFFERINGS SECTION */}
      <section className={styles.edgeSection}>
        <div className={styles.container}>
          <div className={styles.edgeCard} data-reveal="blur">
            <div className={styles.edgeGrid}>
              <div className={styles.edgeLeft}>
                <span className={styles.sectionLabel}>OUR PORTFOLIO</span>
                <h2 className={styles.sectionTitle}>
                  ShipBridge' Value-Added and Unique Offerings Includes-
                </h2>
                
                <ul className={styles.edgeList}>
                  {valueAddedOfferings.map((offering, index) => (
                    <li key={index} className={styles.edgeItem}>
                      <span className={styles.triangleIcon}>▶</span>
                      <span>{offering}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.edgeRight}>
                <div className={styles.edgeImageWrapper}>
                  <Image
                    src="/industries/alliance_map.png"
                    alt="ShipBridge India Logistics Coverage Map Pin"
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

      {/* CTA SECTION */}
      <section className={styles.ctaPromptSection}>
        <div className={styles.container}>
          <p className={styles.ctaPromptText} data-reveal="blur">
            Enhance your customers' experience and send material directly to them across every corner of the country through ShipBridge' extensive Pan India reach and fastest routes.
          </p>
          <p className={styles.ctaPromptText} data-reveal="blur" style={{ fontWeight: 'bold' }}>
            To proceed further and get more information, contact us now!
          </p>
          <div className={styles.ctaButtons} data-reveal="scale">
            <Link href="/services/household#booking-form?industry=alliance" className={`${styles.ctaFilled} global-btn`}>
              <span className="global-btn-text">Connect With Alliance Team</span>
            </Link>
            <Link href="/about" className={styles.ctaOutlined}>About ShipBridge</Link>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
