import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Hi-Tech & Telecom Logistics Solutions | ShipBridge India",
    description: "ShipBridge offers secure, damage-free logistics, material handling, and inventory management for the hi-tech, electronics, and telecommunications sector.",
    openGraph: {
      title: "Hi-Tech & Telecom Logistics Solutions | ShipBridge",
      description: "Trusted logistics, safe first-to-last mile handling, and rapid components distribution across India.",
      images: [{ url: "/industries/hitech_hero.png" }],
    },
    alternates: {
      canonical: 'https://www.shipbridge.in/industries/hitech',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Hi-Tech & Telecom Logistics Solutions | ShipBridge",
      description: "Trusted logistics, safe first-to-last mile handling, and rapid components distribution across India.",
      images: ["/industries/hitech_hero.png"],
    },
  };
}

export default function HiTechIndustryPage() {
  const offerings = [
    "Presence in every region of the country",
    "Distinctive capability to stock & deliver critical spare parts",
    "Safest network operational on 24x7, 365 days",
    "GST input tax credit benefit with 100% E-Waybill compliance",
    "Deepest reach to the remotest corners of all pincodes of India",
    "Deliver directly to your dealers & service centres across India"
  ];

  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* HERO BANNER SECTION */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <Image
            src="/industries/hitech_hero.png"
            alt="Hi-Tech Industry Electronics Logistics"
            fill
            priority
            className={styles.heroBackground}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroGlassCard} heroScrollContent`} data-reveal>
                <span className={styles.sectionLabel}>Hi-Tech Industry</span>
                <h1 className={styles.heroTitle}>
                  Reliable and trusted logistics <br />
                  <span className={styles.highlightGreen}>services for Hi-Tech Industry</span>
                </h1>
                <p className={styles.heroSub}>
                  The era of Digital India has already begun, the government of India is constantly supporting, promoting and endeavouring to bring digital revolution to every nook and cranny of the nation. A number of programs of 'computerization' and 'digitisation' at the lowest administration level are being launched by the government.
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
          <span>Hi-Tech Industry</span>
        </nav>
      </div>

      {/* THREE CORE HIGHLIGHTS SECTION */}
      <section className={styles.highlightsSection}>
        <div className={styles.container}>
          <div className={styles.highlightsGrid}>
            {/* Card 1 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>🛡️</div>
              <h3 className={styles.highlightTitle}>Safe & Reliable</h3>
              <p className={styles.highlightDesc}>
                Safe loading, unloading, and handling from first-mile to last-mile to ensure safety of equipment.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>⚙️</div>
              <h3 className={styles.highlightTitle}>High-Quality Operations</h3>
              <p className={styles.highlightDesc}>
                Best-in-class material handling equipment backed by certified operations executives.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>⚡</div>
              <h3 className={styles.highlightTitle}>Fastest</h3>
              <p className={styles.highlightDesc}>
                Fastest multimodal connectivity through surface and air, especially designed for time-sensitive consignments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE OFFERINGS SECTION */}
      <section className={styles.edgeSection}>
        <div className={styles.container}>
          <div className={styles.edgeCard} data-reveal="blur">
            <div className={styles.edgeGrid}>
              <div className={styles.edgeLeft}>
                <span className={styles.sectionLabel}>OUR CAPABILITIES</span>
                <h2 className={styles.sectionTitle}>
                  What are the unique offerings of ShipBridge?
                </h2>
                
                <p className={styles.edgeIntroText}>
                  We can even facilitate the collection of 'Proof of Delivery' documents for all deliveries as a pre-requisite for your invoices to get processed in case of delivering to government and public sector institutes.
                </p>

                <ul className={styles.edgeList}>
                  {offerings.map((offering, index) => (
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
                    src="/industries/hitech_edge.png"
                    alt="Hi-Tech Microchips CPU Logistics"
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

      {/* REQUIREMENTS FULFILLMENT SECTION */}
      <section className={styles.infraSection}>
        <div className={styles.container}>
          <div className={styles.infraGrid}>
            <div className={styles.infraImageCol}>
              <Image
                src="/industries/hitech_requirements.png"
                alt="RAM Memory Modules Motherboard"
                fill
                className={styles.infraImage}
                sizes="(max-width: 992px) 100vw, 45vw"
              />
            </div>
            
            <div className={styles.infraContentCol} data-reveal="slide-right">
              <span className={styles.sectionLabel}>Reliable Delivery Network</span>
              <h2 className={styles.infraTitle}>
                How ShipBridge fulfil the logistics requirements of Hi-tech industry?
              </h2>
              
              <p className={styles.infraText}>
                A lot of high-end servers and telecom devices require a sensitive loading, unloading and handling while in transit. With our experience in making use of best-in-class Material Handling Equipment backed by a team of certified operations executives and assistants, we make sure that the expensive and sensitive consignments are picked, transshipped and delivered in an intact condition.
              </p>
              
              <p className={styles.infraText}>
                Since our strong network is backed by 346 area offices and 853 gateways in nearly every district of the country that we keep on adding on a regular basis.
              </p>

              <p className={styles.infraText}>
                It gives us a unique competitive advantage to stock and deliver the critical spare parts of IT and telecom equipment in any & every part of the country.
              </p>

              <p className={styles.infraText}>
                Our distribution, 3PL services including distribution and warehousing help you to minimize a significant portion of your distributed inventory management cost.
              </p>

              <p className={styles.infraText}>
                ShipBridge provides ready logistics and supply chain solutions that help our customers to minimise their costs and focus on their core competencies.
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
            { "@type": "ListItem", "position": 3, "name": "Hi-Tech & Telecom", "item": "https://www.shipbridge.in/industries/hitech" },
          ]
        }) }}
      />

      {/* CTA SECTION */}
      <section className={styles.ctaPromptSection}>
        <div className={styles.container}>
          <p className={styles.ctaPromptText} data-reveal="blur">
            Need Any Help? Contact our Hi-Tech service team for solutions.
          </p>
          <div className={styles.ctaButtons} data-reveal="scale">
            <Link href="/services/household#booking-form?industry=hitech" className={`${styles.ctaFilled} global-btn`}>
              <span className="global-btn-text">Consult Our Hi-Tech Experts</span>
            </Link>
            <Link href="/about" className={styles.ctaOutlined}>About ShipBridge</Link>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
