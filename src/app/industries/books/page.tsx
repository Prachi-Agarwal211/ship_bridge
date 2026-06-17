import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import SolutionsAccordion from "@/components/SolutionsAccordion";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Books & Periodicals Logistics Solutions | ShipBridge India",
    description: "ShipBridge provides secure, time-definite, and piracy-safe logistics services for books, periodicals, publishers, and academic institutions across India.",
    openGraph: {
      title: "Books & Periodicals Logistics | ShipBridge",
      description: "Hassle-free shipping for libraries, publishers, and coaching centers. Confidentially secured and express transit.",
      images: [{ url: "/industries/books_hero.png" }],
    },
  };
}

const STAKEHOLDERS = [
  "Publishing Houses and Printing Press",
  "College & Universities",
  "Preschools and Coaching Centers",
  "Promotional Material Distributors",
  "Financial Institutions and Banks",
  "Insurance Providers",
  "Industry Associations",
  "IT & Vocational Institutes",
  "Event & Exhibition Managers"
];

const METHODOLOGICAL_SOLUTIONS = [
  {
    title: "Sensitivity & Confidentiality",
    bullets: [
      "In order to prevent piracy and leakage of sensitive information, confidentiality is maintained at all levels. This is where our philosophy of 'Custodians First, Carriers Later' comes into play.",
      "Tech-enabled operations to provide clear visibility at every touchpoint of the consignments from first-mile to last-mile.",
      "ShipBridge has a suite of services that caters to the time-sensitive requirement of this industry."
    ]
  },
  {
    title: "Time-Definite, Wide Reach & Seamless Delivery",
    bullets: [
      "For time-sensitive products like examination papers, enrollment forms and question papers, we offer secure and time-bound services to ensure hassle-free planning, conduct and execution of exams."
    ]
  },
  {
    title: "Business Documents",
    bullets: [
      "ShipBridge provides customised express distribution services with a unique combination of weight, time and cost flexibility for huge-sized government and educational institutions who need to move business documents, that neither fit in consumer courier category nor heavy cargo or FTL segment."
    ]
  },
  {
    title: "Corporate Gifting",
    bullets: [
      "There is a huge surge in corporate diaries, calendars and associated stationery being exchanged across organizations— big or small, in metros as well as small towns during Diwali, new year and annual review meetings. We ensure the timely and safe delivery of such gifts to your customers on time anywhere across India."
    ]
  },
  {
    title: "Courseware Or Reading Material Delivery To Various Institutions And Libraries",
    bullets: [
      "ShipBridge has one-stop logistics solutions for institutions and libraries for their regular and frequent supply requirement of courseware and/ or reading material across the country. A complete warehousing & distribution support can be provided with a provision for value-added services such as kitting, labelling & inventory management."
    ]
  }
];

export default function BooksIndustryPage() {
  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* HERO SECTION */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <Image
            src="/industries/books_hero.png"
            alt="Books and Periodicals Logistics"
            fill
            priority
            className={styles.heroBackground}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroGlassCard} heroScrollContent`} data-reveal>
                <span className={styles.sectionLabel}>ACADEMIC & PUBLISHING LOGISTICS</span>
                <h1 className={styles.heroTitle}>
                  Books and Periodicals — <br />
                  <span className={styles.highlightOrange}>Hassle-free Services</span>
                </h1>
                <p className={styles.heroSub}>
                  ShipBridge is fully equipped and prepared to provide secure, time-definite logistics services to the books and periodicals industry & academic institutions across India.
                </p>
              </div>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      {/* CORE CAPABILITIES SECTION */}
      <section className={styles.offeringsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-reveal="blur">
            <span className={styles.sectionLabel}>CORE CAPABILITIES</span>
            <h2 className={styles.sectionTitle}>Designed for Time-Sensitive Shipping</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.offeringsGrid}>
            {/* Card 1 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>⏱️</div>
              <h3 className={styles.offeringTitle}>24 x 7 Operational</h3>
              <p className={styles.offeringDesc}>
                We maintain round-the-clock operations and customer support to ensure continuity and non-stop movement of urgent course materials.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>🚛</div>
              <h3 className={styles.offeringTitle}>Aggregator Fleet</h3>
              <p className={styles.offeringDesc}>
                ShipBridge utilizes a massive, containerized aggregator fleet of GPS-equipped vehicles to guarantee weather-proof, safe transit.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.offeringCard} data-reveal="scale">
              <div className={styles.offeringIcon}>⚡</div>
              <h3 className={styles.offeringTitle}>Fastest Transit Time</h3>
              <p className={styles.offeringDesc}>
                Our optimized direct routing maps ensure the speediest possible deliveries across schools, colleges, and distribution points.
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
                <span className={styles.sectionLabel}>THE SHIPBRIDGE ADVANTAGE</span>
                <h2 className={styles.sectionTitle} style={{ textAlign: "left", marginBottom: "2rem" }}>
                  How ShipBridge Gives You an Edge?
                </h2>
                
                <ul className={styles.edgeList}>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Real-time status updates with &lsquo;track & trace&rsquo; facilities for full visibility.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Impeccable network and direct dispatch routes for swift inter-city transport.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Reach extending to the remotest academic institutions and village schools.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>Express distribution services that focus on the absolute safety and speed of consignments.</span>
                  </li>
                  <li className={styles.edgeItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>State-of-the-art logistics support featuring storage, local warehousing, and packaging assembly.</span>
                  </li>
                </ul>
              </div>

              <div className={styles.edgeRight}>
                <div className={styles.edgeImageWrapper}>
                  <Image
                    src="/industries/books_delivery.png"
                    alt="Delivery Tracking Status"
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

      {/* STAKEHOLDERS SECTION */}
      <section className={styles.stakeholdersSection}>
        <div className={styles.container}>
          <div className={styles.stakeholdersCard} data-reveal="blur">
            <h3 className={styles.stakeholderTitle}>
              Serving Stakeholders requiring Hassle-Free Supply Chain Solutions
            </h3>
            
            <div className={styles.stakeholdersGrid}>
              {STAKEHOLDERS.map((stakeholder, idx) => (
                <div key={idx} className={styles.stakeholderItem}>
                  <span className={styles.stakeholderBullet}>■</span>
                  <span>{stakeholder}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION SOLUTIONS SECTION */}
      <section className={styles.solutionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-reveal="blur">
            <span className={styles.sectionLabel}>METHODOLOGY</span>
            <h2 className={styles.sectionTitle}>Our Methodological Solutions</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <SolutionsAccordion items={METHODOLOGICAL_SOLUTIONS} />
        </div>
      </section>

      {/* GOAL SECTION */}
      <section className={styles.goalSection}>
        <div className={styles.container}>
          <div className={styles.goalCard} data-reveal="scale">
            <h3 className={styles.goalTitle}>Our Goal</h3>
            <p className={styles.goalBody}>
              <strong>Allow Agility:</strong> Our primary objective is to provide you with the operational agility & enhanced tracking visibility while fulfilling your time-sensitive requirements. We at ShipBridge serve the Book & Periodicals Industry to ensure that we deliver customized, excellent logistics models tailored to your specific corporate goals.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBanner} data-reveal="scale">
            <h2 className={styles.ctaTitle}>Need a Customs Brief?</h2>
            <p className={styles.ctaSub}>Connect with our educational logistics coordinators for customized pricing structures.</p>
            <div className={styles.ctaButtons}>
              <Link href="/services/household#booking-form?industry=books" className={`${styles.ctaFilled} global-btn`}>
                <span className="global-btn-text">Consult Our Publishing Team</span>
              </Link>
              <Link href="/about" className={styles.ctaOutlined}>About ShipBridge</Link>
            </div>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
