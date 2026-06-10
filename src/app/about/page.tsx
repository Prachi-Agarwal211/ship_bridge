import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About ShipBridge | India's Trusted Logistics & Relocation Platform",
    description: "Founded in Indore (2026), ShipBridge is building India's most transparent logistics platform for household shifting, office moves, vehicle transport, and more. Tech-enabled, insured, pan-India.",
    openGraph: {
      title: "About ShipBridge Logistics",
      description: "India's premier logistics platform. Story, team, mission for safer, simpler, transparent moves.",
      images: [{ url: "/seo/og-image.jpg" }],
    },
  };
}

export default function AboutPage() {
  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />



      {/* SECTION 1: HERO BANNER */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className={styles.heroVideo}
          >
            <source src="/videos/about-hero.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={`${styles.heroContent} heroScrollContent`} data-reveal>

              <h1 className={styles.heroTitle}>
                Building India&apos;s<br />
                <span className={styles.highlightOrange}>Logistics Future.</span>
              </h1>

              <p className={styles.heroSub}>
                We&apos;re building the technology to make every move in India simpler, safer, and more transparent — starting from Indore.
              </p>

              <div className={styles.foundingStrip}>
                <span className={styles.foundingItem}>📍 Founded in Indore, Madhya Pradesh • 2026</span>
                <span className={styles.foundingDivider}>|</span>
                <span className={styles.foundingItem}>🚀 Building India&apos;s Logistics Future</span>
              </div>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      {/* SECTION 2: OUR STORY */}
      <section className={styles.storySection} id="story">
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <div className={styles.storyText} data-reveal="slide-left">
              <span className={styles.sectionLabel}>HOW WE STARTED</span>
              <h2 className={styles.sectionTitle}>Our Story</h2>
              <div className={styles.underlineBar}></div>
              
              <p className={styles.storyNarrative}>
                ShipBridge was born out of a simple frustration — moving was always chaotic, expensive, and filled with uncertainty. In 2026, our founders set out to fix that. We built a platform that brings technology, trust, and transparency to every single move. From household shifts in Mumbai to exhibition logistics in Delhi, ShipBridge is the name India moves with.
              </p>

              {/* Timeline strip */}
              <div className={styles.timelineGrid}>
                <div className={styles.timelineCard} data-reveal>
                  <div className={styles.timelineMilestone}>2026 Q1</div>
                  <h4 className={styles.timelineTitle}>Idea & Foundation</h4>
                  <p className={styles.timelineDesc}>Born in Indore, Madhya Pradesh</p>
                </div>

                <div className={styles.chevronChain} data-reveal>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade1}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade2}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade3}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade4}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className={styles.timelineCard} data-reveal>
                  <div className={styles.timelineMilestone}>2026 Q2</div>
                  <h4 className={styles.timelineTitle}>Product Build</h4>
                  <p className={styles.timelineDesc}>Flutter app + Admin portal</p>
                </div>

                <div className={`${styles.chevronChain} ${styles.chevronGreen}`} data-reveal>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade1}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade2}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade3}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade4}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className={styles.timelineCard} data-reveal>
                  <div className={styles.timelineMilestone}>2026 Q3</div>
                  <h4 className={styles.timelineTitle}>Pilot Launch</h4>
                  <p className={styles.timelineDesc}>5 cities, 500+ early users</p>
                </div>

                <div className={`${styles.chevronChain} ${styles.chevronGreen}`} data-reveal>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade1}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade2}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade3}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg className={`${styles.chevronSvg} ${styles.chevronFade4}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <div className={styles.timelineCard} data-reveal>
                  <div className={styles.timelineMilestone}>2026 Q4</div>
                  <h4 className={styles.timelineTitle}>Pan-India</h4>
                  <p className={styles.timelineDesc}>50+ cities target</p>
                </div>
              </div>
            </div>

            <div className={styles.storyImageCard} data-reveal="clip">
              <div className={styles.storyImageWrapper}>
                <Image
                  src="/company/founder.png"
                  alt="ShipBridge Founders"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className={styles.storyImage}
                />
                <div className={styles.imageOverlay}></div>
                <div className={styles.storyImageLabel}>
                  <h4>Bridging India&apos;s Logistics</h4>
                  <p>Technology • Trust • Transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: MISSION & VISION */}
      <section className={styles.mvSection}>
        <div className={styles.container}>
          <div className={styles.mvGrid}>
            {/* Mission Card */}
            <div className={styles.mvCard} data-reveal="scale">
              <div className={styles.mvIconContainer}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="6" />
                  <circle cx="12" cy="12" r="2" />
                </svg>
              </div>
              <h3 className={styles.mvCardTitle}>Our Mission</h3>
              <p className={styles.mvCardBody}>
                To democratize access to reliable, technology-driven logistics for every household, business, and institution across India — from metros to the most remote villages.
              </p>
            </div>

            {/* Vision Card */}
            <div className={styles.mvCard} data-reveal="scale">
              <div className={styles.mvIconContainer} style={{ color: "#22c55e", backgroundColor: "rgba(34, 197, 94, 0.1)", borderColor: "rgba(34, 197, 94, 0.2)" }}>
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className={styles.mvCardTitle}>Our Vision</h3>
              <p className={styles.mvCardBody}>
                To become India&apos;s #1 asset-light logistics aggregator platform, powering 10 million+ moves annually by 2030 through AI-driven automation and a pan-India transporter network.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: CORE VALUES */}
      <section className={styles.valuesSection}>
        <div className={styles.container}>
          <div className={styles.valuesHeader} data-reveal="blur">
            <span className={styles.sectionLabel}>WHAT DRIVES US</span>
            <h2 className={styles.sectionTitle}>Our Core Values</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.valuesGrid}>
            {/* Reliability */}
            <div className={styles.valueCard} data-reveal="scale">
              <div className={styles.hexIconWrapper}>🛡️</div>
              <h3 className={styles.valueTitle}>Reliability</h3>
              <p className={styles.valueBody}>We deliver what we promise, every single time.</p>
            </div>

            {/* Speed */}
            <div className={styles.valueCard} data-reveal="scale">
              <div className={styles.hexIconWrapper}>⚡</div>
              <h3 className={styles.valueTitle}>Speed</h3>
              <p className={styles.valueBody}>Efficient logistics that saves your time and money.</p>
            </div>

            {/* Security */}
            <div className={styles.valueCard} data-reveal="scale">
              <div className={styles.hexIconWrapper}>🔒</div>
              <h3 className={styles.valueTitle}>Security</h3>
              <p className={styles.valueBody}>Your goods are insured, tracked, and protected.</p>
            </div>

            {/* Transparency */}
            <div className={styles.valueCard} data-reveal="scale">
              <div className={styles.hexIconWrapper}>🌐</div>
              <h3 className={styles.valueTitle}>Transparency</h3>
              <p className={styles.valueBody}>No hidden charges. Full visibility on every move.</p>
            </div>

            {/* Trust */}
            <div className={styles.valueCard} data-reveal="scale">
              <div className={styles.hexIconWrapper}>🤝</div>
              <h3 className={styles.valueTitle}>Trust</h3>
              <p className={styles.valueBody}>Verified professionals. Background-checked partners.</p>
            </div>

            {/* Innovation */}
            <div className={styles.valueCard} data-reveal="scale">
              <div className={styles.hexIconWrapper}>🚀</div>
              <h3 className={styles.valueTitle}>Innovation</h3>
              <p className={styles.valueBody}>Powered by AI, Flutter apps, and real-time data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE TEAM */}
      <section className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.teamHeader} data-reveal="blur">
            <span className={styles.sectionLabel}>BRAINS BEHIND SHIPBRIDGE</span>
            <h2 className={styles.sectionTitle}>Meet Our Team</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.teamGrid}>
            {/* Ashish Joshi */}
            <div className={styles.teamCard} data-reveal="rotate">
              <div className={styles.teamImageContainer}>
                <Image
                  src="/company/founder.png"
                  alt="Ashish Joshi"
                  fill
                  sizes="(max-width: 992px) 100vw, 400px"
                  className={styles.teamImage}
                />
              </div>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>Ashish Joshi</h3>
                <span className={styles.teamRole}>Founder & CEO</span>
                <p className={styles.teamBio}>
                  Ashish leads ShipBridge&apos;s business development, partnerships, and market expansion. 
                  Building the operational backbone of the platform from the ground up.
                </p>
              </div>
            </div>

            {/* Prachi Agarwal */}
            <div className={styles.teamCard} data-reveal="rotate">
              <div className={styles.teamImageContainer}>
                <Image
                  src="/company/coo.png"
                  alt="Prachi Agarwal"
                  fill
                  sizes="(max-width: 992px) 100vw, 400px"
                  className={styles.teamImage}
                />
              </div>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>Prachi Agarwal</h3>
                <span className={styles.teamRole}>Chief Operations Officer (COO)</span>
                <p className={styles.teamBio}>
                  Prachi owns all operations — from booking workflows to partner onboarding. 
                  She ensures every move runs on time and to standard.
                </p>
              </div>
            </div>

            {/* Anurag Singh */}
            <div className={styles.teamCard} data-reveal="rotate">
              <div className={styles.teamImageContainer}>
                <Image
                  src="/company/cto.png"
                  alt="Anurag Singh"
                  fill
                  sizes="(max-width: 992px) 100vw, 400px"
                  className={styles.teamImage}
                />
              </div>
              <div className={styles.teamInfo}>
                <h3 className={styles.teamName}>Anurag Singh</h3>
                <span className={styles.teamRole}>Chief Technology Officer (CTO)</span>
                <p className={styles.teamBio}>
                  Anurag architects the ShipBridge technology stack — Flutter apps, FastAPI backend, 
                  and the AI intelligence layer currently in development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* SECTION 7: WHY CHOOSE SHIPBRIDGE */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.whyHeader} data-reveal="blur">
            <span className={styles.sectionLabel}>WHY WE STAND OUT</span>
            <h2 className={styles.sectionTitle}>Why ShipBridge Stands Apart</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.whyGrid}>
            {/* Item 1 */}
            <div className={styles.whyItem} data-reveal="slide-left">
              <div className={styles.whyIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={styles.whyText}>
                <h4 className={styles.whyTitle}>Deep Tier 2/3 & Rural Reach</h4>
                <p className={styles.whyDesc}>Unmatched last-mile penetration across India&apos;s underserved markets.</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className={styles.whyItem} data-reveal="slide-right">
              <div className={styles.whyIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={styles.whyText}>
                <h4 className={styles.whyTitle}>Local Transporter Integration</h4>
                <p className={styles.whyDesc}>We onboard and empower local transporters with tech, branding, and capital.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className={styles.whyItem} data-reveal="slide-left">
              <div className={styles.whyIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={styles.whyText}>
                <h4 className={styles.whyTitle}>Asset-Light Scalable Model</h4>
                <p className={styles.whyDesc}>Zero truck ownership. 100% scalable. High ROI.</p>
              </div>
            </div>

            {/* Item 4 */}
            <div className={styles.whyItem} data-reveal="slide-right">
              <div className={styles.whyIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={styles.whyText}>
                <h4 className={styles.whyTitle}>Standardized SME Services</h4>
                <p className={styles.whyDesc}>Reliable, priced, and tech-managed service protocols.</p>
              </div>
            </div>

            {/* Item 5 */}
            <div className={styles.whyItem} data-reveal="slide-left">
              <div className={styles.whyIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={styles.whyText}>
                <h4 className={styles.whyTitle}>Real-Time Tracking</h4>
                <p className={styles.whyDesc}>Live GPS updates via our customer Flutter app.</p>
              </div>
            </div>

            {/* Item 6 */}
            <div className={styles.whyItem} data-reveal="slide-right">
              <div className={styles.whyIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <div className={styles.whyText}>
                <h4 className={styles.whyTitle}>AI-Powered Logistics (Coming Soon)</h4>
                <p className={styles.whyDesc}>Route optimization, demand forecasting, and smart pricing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA BANNER */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaBanner} data-reveal="scale">
            <h2 className={styles.ctaTitle}>Ready to Move Smarter?</h2>
            <p className={styles.ctaSub}>Join thousands of families and businesses who trust ShipBridge.</p>
            <div className={styles.ctaButtons}>
              <Link href="/product" className={`${styles.ctaFilled} global-btn`}>
                <span className="global-btn-text">Book a Move</span>
              </Link>
              <Link href="/franchise" className={styles.ctaOutlined}>Become a Partner</Link>
            </div>
          </div>
        </div>
      </section>

    </ScrollRevealWrapper>
  );
}
