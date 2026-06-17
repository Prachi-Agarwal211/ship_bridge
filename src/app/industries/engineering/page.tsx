import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Engineering & Electronics Logistics Solutions | ShipBridge India",
    description: "ShipBridge offers specialized logistics, safe containerized deliveries, and reverse logistics systems for the engineering tool and electronics industries.",
    openGraph: {
      title: "Engineering & Electronics Logistics Solutions | ShipBridge",
      description: "Time-definite logistics, secure heavy machinery transport, and seamless reverse logistics for the engineering tools sector.",
      images: [{ url: "/industries/engineering_hero.png" }],
    },
  };
}

export default function EngineeringIndustryPage() {
  const edgeBullets = [
    "Deliveries to the remotest and inaccessible areas",
    "Places such as power plants, mines, etc.",
    "Serving at extreme climatic sensitive locations",
    "We ensure tools & equipment arrive safely & on time",
    "Safest network operational on all 24x7, 365 days",
    "Fleet of containerised, GPS-enabled trucks"
  ];

  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* HERO BANNER SECTION */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <Image
            src="/industries/engineering_hero.png"
            alt="Engineering & Electronics Logistics"
            fill
            priority
            className={styles.heroBackground}
          />
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={`${styles.heroGlassCard} heroScrollContent`} data-reveal>
                <span className={styles.sectionLabel}>Engineering & Electronics Industry</span>
                <h1 className={styles.heroTitle}>
                  Enabling the Infrastructure <br />
                  <span className={styles.highlightGreen}>Formation of Future</span>
                </h1>
                <p className={styles.heroSub}>
                  Build India through swift delivery of tools & engineering supplies across every pincode. Engineering and electronics players require the finest and efficient logistics and supply chain solutions to secure a competitive advantage in the industry.
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
          <span>Engineering</span>
        </nav>
      </div>

      {/* THREE CORE HIGHLIGHTS SECTION */}
      <section className={styles.highlightsSection}>
        <div className={styles.container}>
          <div className={styles.highlightsGrid}>
            {/* Card 1 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>🛡️</div>
              <h3 className={styles.highlightTitle}>Safe deliveries</h3>
              <p className={styles.highlightDesc}>
                ShipBridge' fleet of containerised and GPS-enabled trucks plying through direct routes ensure safe and timely deliveries.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>⏱️</div>
              <h3 className={styles.highlightTitle}>Time-definite</h3>
              <p className={styles.highlightDesc}>
                Zero worries about the on-time departure and arrival of the equipment as ShipBridge route departure are time-bound.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.highlightCard} data-reveal="scale">
              <div className={styles.highlightIcon}>🔄</div>
              <h3 className={styles.highlightTitle}>Returns from Dealers</h3>
              <p className={styles.highlightDesc}>
                Seamless reverse logistics processes that ensures a return request is pre-approved before the pickup happens.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EDGE / UNIQUE CAPABILITIES SECTION */}
      <section className={styles.edgeSection}>
        <div className={styles.container}>
          <div className={styles.edgeCard} data-reveal="blur">
            <div className={styles.edgeGrid}>
              <div className={styles.edgeLeft}>
                <span className={styles.sectionLabel}>OUR COMPETITIVE ADVANTAGE</span>
                <h2 className={styles.sectionTitle}>
                  ShipBridge unique capabilities that can give you an edge
                </h2>
                
                <p className={styles.edgeIntroText}>
                  ShipBridge provides the fastest and safest distribution services catering to the specific requirements of the engineering tools, electrical appliances and spare parts industry.
                </p>
                <p className={styles.edgeIntroText}>
                  We provide the quickest distribution services through technology-enabled operations that enhances visibility and traceability catering to the individual needs of engineering tools and spare parts industry.
                </p>

                <h3 className={styles.edgeSubTitle}>Deliveries at most inaccessible locations</h3>
                
                <ul className={styles.edgeList}>
                  {edgeBullets.map((bullet, index) => (
                    <li key={index} className={styles.edgeItem}>
                      <span className={styles.triangleIcon}>▶</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.edgeRight}>
                <div className={styles.edgeImageWrapper}>
                  <Image
                    src="/industries/engineering_edge.png"
                    alt="ShipBridge Logistics Capabilities Map"
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

      {/* TWO COLUMN DETAILS SECTION */}
      <section className={styles.detailsSection}>
        <div className={styles.container}>
          <div className={styles.detailsGrid}>
            <div className={styles.detailCard} data-reveal="fade-in">
              <h3 className={styles.detailTitle}>Time-definite deliveries</h3>
              <p className={styles.detailText}>
                Customers need not to worry about the on-time departure and arrival of their equipment as our vehicles' departure are time-bound and not load dependent. A big boon for those who are waiting for their critical tool spares to arrive at a site at a particular time limit.
              </p>
            </div>

            <div className={styles.detailCard} data-reveal="fade-in">
              <h3 className={styles.detailTitle}>Returns from Dealers – Rock solid reverse logistics</h3>
              <p className={styles.detailText}>
                Our reverse logistics processes ensure that a return request is pre-approved before the pickup happens. The offering also includes access to our unique online portal, 'Rev-Log' that can be used by the last-mile outlets who are part of this supply chain cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE SUPPORT SPLIT SECTION */}
      <section className={styles.infraSection}>
        <div className={styles.container}>
          <div className={styles.infraGrid}>
            <div className={styles.infraImageCol}>
              <Image
                src="/industries/engineering_infra.png"
                alt="ShipBridge Infrastructure Operations Support"
                fill
                className={styles.infraImage}
                sizes="(max-width: 992px) 100vw, 45vw"
              />
            </div>
            
            <div className={styles.infraContentCol} data-reveal="slide-right">
              <span className={styles.sectionLabel}>Heavy Logistics Support</span>
              <h2 className={styles.infraTitle}>Infrastructure Integration</h2>
              
              <p className={styles.infraText}>
                To cater the needs of this dynamic industry, ShipBridge has invested heavily in establishing the infrastructure that is capable enough to single-handedly support logistics and supply chain requirements of the industry and integrate technology in such a way that connect all aspects of supply chain with complete visibility.
              </p>
              
              <p className={styles.infraText}>
                ShipBridge is ready and prepared to single-handedly serve Pan India supply chain and logistics requirements of the engineering & electronics industry by ensuring high-quality operations, customised services cater to meet the specific needs of customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className={styles.ctaPromptSection}>
        <div className={styles.container}>
          <p className={styles.ctaPromptText} data-reveal="blur">
            Need more help on solutions for your Engineering requirements? Click below for your queries to be answered.
          </p>
          <div className={styles.ctaButtons} data-reveal="scale">
            <Link href="/services/household#booking-form?industry=engineering" className={`${styles.ctaFilled} global-btn`}>
              <span className="global-btn-text">Consult Our Engineering Experts</span>
            </Link>
            <Link href="/about" className={styles.ctaOutlined}>About ShipBridge</Link>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
