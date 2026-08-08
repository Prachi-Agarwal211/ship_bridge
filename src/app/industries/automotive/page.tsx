import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Automotive & Spares Logistics Solutions | ShipBridge India",
    description: "ShipBridge offers customized logistics, Vendor Managed Inventory (VMI), and After Market distribution for the automotive industry and spares manufacturers.",
    openGraph: {
      title: "Automotive & Spares Logistics Solutions | ShipBridge",
      description: "Vendor Managed Inventory (VMI), assembly line-ready deliveries, and fast After Market spares distribution across India.",
      images: [{ url: "/industries/automotive_hero.png" }],
    },
    alternates: {
      canonical: 'https://www.shipbridge.in/industries/automotive',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Automotive & Spares Logistics Solutions | ShipBridge",
      description: "Vendor Managed Inventory (VMI), assembly line-ready deliveries, and fast After Market spares distribution across India.",
      images: ["/industries/automotive_hero.png"],
    },
  };
}

export default function AutomotiveIndustryPage() {
  const capabilities = [
    "Fastest multimodal connectivity through surface and air modes",
    "Especially designed for time-sensitive consignments",
    "Deepest reach to the remotest corners of all pincodes of India",
    "Deliver directly to your dealers & service centres across India",
    "Safest network operational on 24x7, 365 days in a year",
    "Pickup and deliveries even on Sundays & Holidays",
    "Vendor Managed Inventory for OEM manufacturers",
    "Assembly line-ready deliveries Pan India",
    "NIC integration for auto-E-Waybill validity extension & updates",
    "Just-in-time delivery, ensuring lean inventory",
    "Customised services for sending unsold inventory",
    "GST input tax credit benefit"
  ];

  const vmiServices = [
    "Unpacking",
    "Laying in trays and bins",
    "Assembly line ready deliveries in dedicated vehicles",
    "De-Boxing",
    "GST compliance distribution",
    "Order processing & invoicing",
    "Serialization",
    "Inventory management",
    "Physical Quality Inspection",
    "System updates"
  ];

  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* HERO BANNER SECTION */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <Image
            src="/industries/automotive_hero.png"
            alt="Automotive Manufacturing Industry Logistics"
            fill
            priority
            className={styles.heroBackground}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroGlassCard} heroScrollContent`} data-reveal>
                <span className={styles.sectionLabel}>Automotive Industry</span>
                <h1 className={styles.heroTitle}>
                  Speedy, timely and nationwide distribution of <br />
                  <span className={styles.highlightGreen}>automotive parts & spares</span>
                </h1>
                <p className={styles.heroSub}>
                  Automotive industry, by far, ranks high on supply chain maturity. It is important thus for a logistics service provider to support and efficiently manage its stringent supply chain needs.
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
          <span>Automotive</span>
        </nav>
      </div>

      {/* CAPABILITIES SECTION */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-reveal="blur">
            <span className={styles.sectionLabel}>Our Offerings</span>
            <h2 className={styles.sectionTitle}>
              ShipBridge has unique offering to cater logistics and supply chain requirement of automotive industry
            </h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.capabilitiesGrid}>
            {capabilities.map((capability, index) => (
              <div key={index} className={styles.capabilityItem} data-reveal="scale">
                <span className={styles.checkCircle}>✓</span>
                <span className={styles.capabilityText}>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALISED IN VENDOR MANAGED INVENTORY */}
      <section className={styles.vmiSection}>
        <div className={styles.container}>
          <div className={styles.vmiCard} data-reveal="blur">
            <div className={styles.vmiGrid}>
              <div className={styles.vmiLeft}>
                <span className={styles.sectionLabel}>Warehouse & OEM Support</span>
                <h2 className={styles.vmiTitle}>Specialised in Vendor Managed Inventory</h2>
                
                <p className={styles.vmiParagraph}>
                  Our automotive supply chain specialists monitor stock of parts available with the vehicle manufacturer and replenish it as per the planned schedule. They also coordinate with the <strong>Original Equipment Manufacturers (OEM)</strong> and ensure sufficient stock availability at our warehouses.
                </p>
                <p className={styles.vmiParagraph}>
                  With our unique supply chain solutions, we capture your invoice number and quantities of all transactions, giving you a complete visibility of your <strong>'in-transit'</strong> and <strong>'at-destination'</strong> delivery.
                </p>
              </div>

              <div className={styles.vmiRight}>
                <div className={styles.vmiImageWrapper}>
                  <Image
                    src="/industries/automotive_vmi.png"
                    alt="Automotive Spare Parts Inventory Rack"
                    fill
                    className={styles.vmiImage}
                    sizes="(max-width: 992px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VMI SERVICES INCLUDES */}
      <section className={styles.vmiIncludesSection}>
        <div className={styles.container}>
          <div className={styles.vmiIncludesHeader} data-reveal="blur">
            <h3 className={styles.sectionTitle}>Our VMI services includes</h3>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.vmiIncludesGrid}>
            {vmiServices.map((service, index) => (
              <div key={index} className={styles.vmiIncludeItem} data-reveal="scale">
                <span className={styles.triangleIcon}>▶</span>
                <span className={styles.vmiIncludeText}>{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AFTER MARKET SECTION */}
      <section className={styles.aftermarketSection}>
        <div className={styles.container}>
          <div className={styles.aftermarketGrid}>
            <div className={styles.aftermarketImageCol}>
              <Image
                src="/industries/automotive_aftermarket.png"
                alt="Automotive Spare Parts Conveyor Box"
                fill
                className={styles.aftermarketImage}
                sizes="(max-width: 992px) 100vw, 45vw"
              />
            </div>
            
            <div className={styles.aftermarketContentCol} data-reveal="slide-right">
              <span className={styles.sectionLabel}>Express Distribution</span>
              <h2 className={styles.aftermarketTitle}>After Market</h2>
              
              <p className={styles.aftermarketText}>
                To ensure that the right parts reach the dealers/ service centres situated across the length and breadth of the country at the right time, we have Express Distribution services through air & surface mode, thus, connecting every single pincode in the fastest possible time.
              </p>
              
              <p className={styles.aftermarketText}>
                Be it distribution of auto components, accessories, spare parts, paints or batteries, from the supplier's manufacturing site to the next processing warehouse or distribution centre, ShipBridge has been serving Automotive industry with its uniquely crafted express distribution, 3PL & 'Vendor Managed Inventory' services.
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
            { "@type": "ListItem", "position": 3, "name": "Automotive", "item": "https://www.shipbridge.in/industries/automotive" },
          ]
        }) }}
      />

      {/* CTA SECTION */}
      <section className={styles.ctaPromptSection}>
        <div className={styles.container}>
          <p className={styles.ctaPromptText} data-reveal="blur">
            If you are looking for customised supply chain & logistics solutions for your automotive business, click below for a quick resolution.
          </p>
          <div className={styles.ctaButtons} data-reveal="scale">
            <Link href="/services/household#booking-form?industry=automotive" className={`${styles.ctaFilled} global-btn`}>
              <span className="global-btn-text">Consult Our Automotive Experts</span>
            </Link>
            <Link href="/about" className={styles.ctaOutlined}>About ShipBridge</Link>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
