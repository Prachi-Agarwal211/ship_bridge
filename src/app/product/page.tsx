import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import HeroScrollFade from "@/components/HeroScrollFade";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Products | ShipBridge Customer App, Vendor App & Operations Portal",
    description: "The complete ShipBridge ecosystem: Customer App for instant bookings & live tracking, Vendor App for transporters, and powerful Admin Portal. Book any shifting service in under 3 minutes.",
    openGraph: {
      title: "ShipBridge Products - Apps & Platform",
      description: "Mobile apps and portal for seamless logistics. Real-time tracking, easy booking, full visibility.",
      images: [{ url: "/seo/og-image.jpg" }],
    },
  };
}

export default function ProductCatalogPage() {
  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* Decorative Glow Blobs */}
      <div className={`${styles.glowBlob} ${styles.glowGreen}`} style={{ top: "5%", left: "2%", width: "500px", height: "500px" }}></div>
      <div className={`${styles.glowBlob} ${styles.glowOrange}`} style={{ top: "15%", right: "2%", width: "600px", height: "600px" }}></div>
      <div className={`${styles.glowBlob} ${styles.glowGreen}`} style={{ bottom: "25%", left: "10%", width: "550px", height: "550px" }}></div>
      <div className={`${styles.glowBlob} ${styles.glowOrange}`} style={{ bottom: "5%", right: "5%", width: "500px", height: "500px" }}></div>

      {/* SECTION 1: HERO */}
      <HeroScrollFade>
        <section className={styles.heroSection}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.container}>
            <div className={`${styles.heroContent} heroScrollContent`} data-reveal>

              <span className={styles.overline}>OUR PRODUCTS</span>
              <h1 className={styles.heroTitle}>
                A Complete Ecosystem for<br />
                <span className={styles.highlightOrange}>Modern Logistics</span>
              </h1>

              <p className={styles.heroSub}>
                ShipBridge has built a suite of interconnected products — a customer-facing app, an AI-powered admin platform, and a vendor management system — all working in real-time to deliver the perfect move.
              </p>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      {/* SECTION 2: PRODUCT 01 — CUSTOMER APP */}
      <section className={styles.productSection} data-reveal="clip">
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {/* Left Image Column */}
            <div className={styles.imageColumn}>
              <div className={`${styles.productImageWrapper} ${styles.productImageMobile}`}>
                <Image
                  src="/Product/app_image.png"
                  alt="ShipBridge Customer App Mockup"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={styles.productImage}
                />
              </div>
            </div>

            {/* Right Details Column */}
            <div>
              <div className={`${styles.badgePill} ${styles.badgeOrange}`} data-reveal="slide-right">
                PRODUCT 01
              </div>
              <h2 className={styles.productTitle} data-reveal="slide-right">ShipBridge Customer App</h2>
              <span className={styles.productSub} data-reveal="slide-right">Book. Track. Move. Effortlessly.</span>

              <p className={styles.productDescription} data-reveal="slide-right">
                The ShipBridge Customer App puts the power of professional logistics in your pocket. Book any service in under 3 minutes, track your move in real-time, communicate directly with your assigned team, and manage everything from a sleek, intuitive dashboard.
              </p>

              <div className={styles.featureList} data-reveal="stagger">
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📱</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>One-Tap Booking</h4>
                    <p className={styles.featureDesc}>Select service, enter details, submit in minutes</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📍</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Live GPS Tracking</h4>
                    <p className={styles.featureDesc}>Real-time location updates from pickup to delivery</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📦</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Item Inventory Manager</h4>
                    <p className={styles.featureDesc}>Add all your items room-by-room before the move</p>
                  </div>
                </div>

                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>💳</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Secure Payments</h4>
                    <p className={styles.featureDesc}>Razorpay-powered secure checkout with invoice generation</p>
                  </div>
                </div>
              </div>

              <div className={styles.downloadRow}>
                <button className={`${styles.downloadButton} global-btn`}>
                  <svg viewBox="0 0 24 24" className={styles.storeIcon} fill="currentColor">
                    <path d="M5 3.00005C4.69 3.00005 4.39 3.12005 4.16 3.35005C3.86 3.65005 3.75 4.09005 3.86 4.50005L12.35 12.9901L3.86 21.4801C3.75 21.8901 3.86 22.3301 4.16 22.6301C4.39 22.8601 4.69 22.9801 5 22.9801C5.23 22.9801 5.46 22.9101 5.66 22.7801L19.4 14.8801C19.78 14.6601 20 14.2801 20 13.8801C20 13.4801 19.78 13.1001 19.4 12.8801L5.66 4.98005C5.46 4.85005 5.23 4.78005 5 4.78005V3.00005Z" />
                  </svg>
                  <span className="global-btn-text">Play Store</span>
                </button>
              </div>

              <div className={styles.statusBadge}>
                <span className={styles.pulsingDot}></span>
                <span>Currently in Development — Coming Soon to Play Store</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT 02 — ADMIN & OPERATIONS PORTAL */}
      <section className={styles.productSection} data-reveal="clip">
        <div className={styles.container}>
          <div className={styles.productGrid} style={{ direction: "rtl" }}>

            <div className={styles.imageColumn} style={{ direction: "ltr" }}>
              <div className={`${styles.productImageWrapper} ${styles.productImageDesktop}`}>
                <Image
                  src="/Product/admin_portal.png"
                  alt="ShipBridge Admin Portal Dashboard Mockup"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.productImage}
                />
              </div>
            </div>

            <div style={{ direction: "ltr" }}>
              <div className={`${styles.badgePill} ${styles.badgeGreen}`} data-reveal="slide-left">
                PRODUCT 02
              </div>
              <h2 className={styles.productTitle} data-reveal="slide-left">ShipBridge Admin Portal</h2>
              <span className={styles.productSub} style={{ color: "#22c55e" }} data-reveal="slide-left">The Brain Behind Every Move.</span>

              <p className={styles.productDescription} data-reveal="slide-left">
                A powerful command center for ShipBridge operations teams. Every lead, every booking, every driver, every truck, every invoice — managed from a single real-time dashboard. Built for scale with role-based access, analytics, and automated notifications.
              </p>

              <div className={styles.statusBadge}>
                <span className={`${styles.pulsingDot} ${styles.pulsingDotGreen}`}></span>
                <span>Internal Use — Operations Live</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className={styles.ctaSection} data-reveal="scale">
        <div className={styles.container}>
          <div className={styles.ctaBanner}>
            <h2 className={styles.ctaTitle}>Interested in Partnering or Investing?</h2>
            <p className={styles.ctaSub}>We&apos;re building the logistics infrastructure India deserves. Join us.</p>
            <div className={styles.ctaButtons}>
              <a href="mailto:contact@shipbridge.in" className={`${styles.ctaFilled} global-btn`}>
                <span className="global-btn-text">Contact Us</span>
              </a>
              <Link href="/franchise" className={styles.ctaOutlined}>View Franchise Opportunities</Link>
            </div>
          </div>
        </div>
      </section>

      <footer></footer>
    </ScrollRevealWrapper>
  );
}
