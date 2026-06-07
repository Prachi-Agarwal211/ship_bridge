import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper";
import styles from "./page.module.css";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Products | ShipBridge Logistics",
    description: "Explore the ShipBridge suite: our user-friendly Customer App for one-tap bookings and real-time GPS tracking, the robust Operations Admin Portal, and the ShipBridge Vendor App connecting transporters across India.",
  };
}

export default function ProductCatalogPage() {
  const customerAppFlow = [
    "Login",
    "OTP Verify",
    "Dashboard",
    "Select Service",
    "Address Details",
    "Item Details",
    "Service Options",
    "Schedule",
    "Submit Lead",
  ];

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Decorative Glow Blobs */}
      <div className={`${styles.glowBlob} ${styles.glowGreen}`} style={{ top: "5%", left: "2%", width: "500px", height: "500px" }}></div>
      <div className={`${styles.glowBlob} ${styles.glowOrange}`} style={{ top: "15%", right: "2%", width: "600px", height: "600px" }}></div>
      <div className={`${styles.glowBlob} ${styles.glowGreen}`} style={{ bottom: "25%", left: "10%", width: "550px", height: "550px" }}></div>
      <div className={`${styles.glowBlob} ${styles.glowOrange}`} style={{ bottom: "5%", right: "5%", width: "500px", height: "500px" }}></div>

      {/* SECTION 1: HERO */}
      <section className={styles.heroSection}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className={styles.heroVideo}
        >
          <source src="/videos/product-hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <div className={styles.heroContent} data-reveal>
            {/* Breadcrumb */}
            <nav className={styles.breadcrumb} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={styles.breadcrumbSeparator}>&gt;</span>
              <span aria-current="page">Our Products</span>
            </nav>

            <span className={styles.overline}>OUR PRODUCTS</span>
            <h1 className={styles.heroTitle}>
              A Complete Ecosystem for<br />
              <span className={styles.highlightOrange}>Modern Logistics</span>
            </h1>

            <p className={styles.heroSub}>
              ShipBridge has built a suite of interconnected products — a customer-facing app, an AI-powered admin platform, and a vendor management system — all working in real-time to deliver the perfect move.
            </p>

            <div className={styles.heroPreviews}>
              <div className={styles.previewCard} data-reveal>
                <div className={styles.previewImageWrapper}>
                  <Image
                    src="/Product/app_image.png"
                    alt="Customer App Interface"
                    fill
                    unoptimized
                    className={styles.previewImage}
                  />
                </div>
                <div style={{ marginTop: "1rem", textAlign: "left", padding: "0 0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "#f97316", fontWeight: "700" }}>MOBILE</span>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#fff", marginTop: "0.25rem" }}>Customer App</h4>
                </div>
              </div>

              <div className={styles.previewCard} data-reveal>
                <div className={styles.previewImageWrapper}>
                  <Image
                    src="/Product/admin_portal.png"
                    alt="Admin Portal Interface"
                    fill
                    unoptimized
                    className={styles.previewImage}
                  />
                </div>
                <div style={{ marginTop: "1rem", textAlign: "left", padding: "0 0.5rem" }}>
                  <span style={{ fontSize: "0.85rem", color: "#22c55e", fontWeight: "700" }}>DESKTOP</span>
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "800", color: "#fff", marginTop: "0.25rem" }}>Operations Dashboard</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: PRODUCT 01 — CUSTOMER APP */}
      <section className={styles.productSection} data-reveal>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            {/* Left Image Column */}
            <div className={styles.imageColumn}>
              <div className={styles.productImageCard}>
                <div className={`${styles.productImageWrapper} ${styles.productImageMobile}`}>
                  <Image
                    src="/Product/app_image.png"
                    alt="ShipBridge Customer App Mockup"
                    fill
                    unoptimized
                    className={styles.productImage}
                  />
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div>
              <div className={`${styles.badgePill} ${styles.badgeOrange}`}>
                PRODUCT 01
              </div>
              <h2 className={styles.productTitle}>ShipBridge Customer App</h2>
              <span className={styles.productSub}>Book. Track. Move. Effortlessly.</span>
              
              <div className={styles.platformPill}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
                <span>Flutter • iOS & Android</span>
              </div>

              <p className={styles.productDescription}>
                The ShipBridge Customer App puts the power of professional logistics in your pocket. Book any service in under 3 minutes, track your move in real-time, communicate directly with your assigned team, and manage everything from a sleek, intuitive dashboard.
              </p>

              <div className={styles.featureList}>
                {/* Feature 1 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📱</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>One-Tap Booking</h4>
                    <p className={styles.featureDesc}>Select service, enter details, submit in minutes</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📍</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Live GPS Tracking</h4>
                    <p className={styles.featureDesc}>Real-time location updates from pickup to delivery</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📦</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Item Inventory Manager</h4>
                    <p className={styles.featureDesc}>Add all your items room-by-room before the move</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>💳</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Secure Payments</h4>
                    <p className={styles.featureDesc}>Razorpay-powered secure checkout with invoice generation</p>
                  </div>
                </div>
              </div>

              {/* App Flow Steps */}
              <div className={styles.flowStrip}>
                <div className={styles.flowTitle}>Customer App Flow Journey</div>
                <div className={styles.flowSteps}>
                  {customerAppFlow.map((step, idx) => (
                    <span key={step} style={{ display: "inline-flex", alignItems: "center", gap: "1rem" }}>
                      <span className={styles.flowStep}>{step}</span>
                      {idx < customerAppFlow.length - 1 && <span className={styles.flowArrow}>&rarr;</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.downloadRow}>
                <button className={`${styles.downloadButton} global-btn`}>
                  <svg viewBox="0 0 24 24" className={styles.storeIcon} fill="currentColor">
                    <path d="M5 3.00005C4.69 3.00005 4.39 3.12005 4.16 3.35005C3.86 3.65005 3.75 4.09005 3.86 4.50005L12.35 12.9901L3.86 21.4801C3.75 21.8901 3.86 22.3301 4.16 22.6301C4.39 22.8601 4.69 22.9801 5 22.9801C5.23 22.9801 5.46 22.9101 5.66 22.7801L19.4 14.8801C19.78 14.6601 20 14.2801 20 13.8801C20 13.4801 19.78 13.1001 19.4 12.8801L5.66 4.98005C5.46 4.85005 5.23 4.78005 5 4.78005V3.00005Z"/>
                  </svg>
                  <span className="global-btn-text">Play Store</span>
                </button>
                <button className={`${styles.downloadButton} global-btn`}>
                  <svg viewBox="0 0 24 24" className={styles.storeIcon} fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C16 1.04 14.9 1.6 14.25 2.38C13.69 3.04 13.2 4.14 13.34 5.4C14.39 5.48 15.4 4.87 15.97 4.17Z"/>
                  </svg>
                  <span className="global-btn-text">App Store</span>
                </button>
              </div>

              {/* Status Badge */}
              <div className={styles.statusBadge}>
                <span className={styles.pulsingDot}></span>
                <span>Currently in Development — Coming Soon to Play Store</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: PRODUCT 02 — ADMIN & OPERATIONS PORTAL */}
      <section className={styles.productSection} data-reveal>
        <div className={styles.container}>
          <div className={styles.productGrid} style={{ direction: "rtl" }}>
            
            {/* Image Column (placed left visually via direction layout) */}
            <div className={styles.imageColumn} style={{ direction: "ltr" }}>
              <div className={styles.productImageCard}>
                <div className={styles.productImageWrapper}>
                  <Image
                    src="/Product/admin_portal.png"
                    alt="ShipBridge Admin Portal Dashboard Mockup"
                    fill
                    unoptimized
                    className={styles.productImage}
                  />
                </div>
              </div>
            </div>

            {/* Details Column */}
            <div style={{ direction: "ltr" }}>
              <div className={`${styles.badgePill} ${styles.badgeGreen}`}>
                PRODUCT 02
              </div>
              <h2 className={styles.productTitle}>ShipBridge Admin Portal</h2>
              <span className={styles.productSub} style={{ color: "#22c55e" }}>The Brain Behind Every Move.</span>

              <div className={styles.platformPill}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                <span>Next.js Web App • Desktop Optimized</span>
              </div>

              <p className={styles.productDescription}>
                A powerful command center for ShipBridge operations teams. Every lead, every booking, every driver, every truck, every invoice — managed from a single real-time dashboard. Built for scale with role-based access, analytics, and automated notifications.
              </p>

              <div className={styles.featureList2Col}>
                {/* Feature 1 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🎯</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>CRM & Pipeline</h4>
                    <p className={styles.featureDesc}>New &rarr; Quote &rarr; Accept &rarr; Go</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🚛</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Fleet & Drivers</h4>
                    <p className={styles.featureDesc}>Assign vehicles and track driver schedules</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📋</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Quotation Engine</h4>
                    <p className={styles.featureDesc}>Auto-generate quotes with custom pricing rules</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📊</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Analytics & Reports</h4>
                    <p className={styles.featureDesc}>Track performance, revenue, and demand forecast</p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🔔</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Real-Time Alerts</h4>
                    <p className={styles.featureDesc}>SMS and WhatsApp triggers via MSG91 & API</p>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🏭</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Warehousing</h4>
                    <p className={styles.featureDesc}>Manage occupancy, storage units, & customer lists</p>
                  </div>
                </div>
              </div>

              {/* Tech stack badges */}
              <div className={styles.techBadgeRow}>
                <span className={styles.techBadge}>Next.js</span>
                <span className={styles.techBadge}>Python FastAPI</span>
                <span className={styles.techBadge}>PostgreSQL</span>
                <span className={styles.techBadge}>Redis</span>
                <span className={styles.techBadge}>AWS</span>
                <span className={styles.techBadge}>Razorpay</span>
              </div>

              {/* Status Badge */}
              <div className={styles.statusBadge}>
                <span className={`${styles.pulsingDot} ${styles.pulsingDotGreen}`}></span>
                <span>Internal Use — Operations Live</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT 03 — DRIVER / VENDOR APP */}
      <section className={styles.productSection} data-reveal>
        <div className={styles.container}>
          <div className={styles.productGrid}>
            
            {/* Left Image Column */}
            <div className={styles.imageColumn}>
              <div className={styles.productImageCard}>
                <div className={`${styles.productImageWrapper} ${styles.productImageMobile}`}>
                  <Image
                    src="/Product/vendor_app.png"
                    alt="ShipBridge Driver Vendor App Mockup"
                    fill
                    unoptimized
                    className={styles.productImage}
                  />
                </div>
              </div>
            </div>

            {/* Right Details Column */}
            <div>
              <div className={`${styles.badgePill} ${styles.badgeGradient}`}>
                PRODUCT 03
              </div>
              <h2 className={styles.productTitle}>ShipBridge Partner App</h2>
              <span className={styles.productSub}>Empowering Local Transporters. Digitally.</span>

              <div className={styles.platformPill}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                  <line x1="12" y1="18" x2="12.01" y2="18"/>
                </svg>
                <span>Flutter • iOS & Android</span>
              </div>

              <p className={styles.productDescription}>
                The ShipBridge Vendor App is our proprietary application designed to onboard, manage, and empower local transporters across India. Drivers and vendors get real-time job assignments, route guidance, delivery confirmations, payment tracking, and digital identity.
              </p>

              <div className={styles.featureList2Col}>
                {/* Feature 1 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📦</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Job Assignment</h4>
                    <p className={styles.featureDesc}>Instant notification on new task allocation</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🗺️</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>GPS Navigation</h4>
                    <p className={styles.featureDesc}>Google Maps integrated route directions</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>✅</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Delivery Proof</h4>
                    <p className={styles.featureDesc}>Photo uploads, OTP confirmation, digital POD</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>💰</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Earnings Dashboard</h4>
                    <p className={styles.featureDesc}>Track completed jobs, earnings, & payments</p>
                  </div>
                </div>

                {/* Feature 5 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>🆔</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Digital Profile</h4>
                    <p className={styles.featureDesc}>KYC verification, reviews, and service rating</p>
                  </div>
                </div>

                {/* Feature 6 */}
                <div className={styles.featureItem}>
                  <div className={styles.featureIcon}>📞</div>
                  <div className={styles.featureText}>
                    <h4 className={styles.featureTitle}>Masked Calling</h4>
                    <p className={styles.featureDesc}>Direct contact with customer with number privacy</p>
                  </div>
                </div>
              </div>

              {/* Status Badge */}
              <div className={styles.statusBadge}>
                <span className={styles.pulsingDot}></span>
                <span>In Development — Pilot Q4 2025</span>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* SECTION 7: CTA */}
      <section className={styles.ctaSection} data-reveal>
        <div className={styles.container}>
          <div className={styles.ctaBanner}>
            <h2 className={styles.ctaTitle}>Interested in Partnering or Investing?</h2>
            <p className={styles.ctaSub}>We're building the logistics infrastructure India deserves. Join us.</p>
            <div className={styles.ctaButtons}>
              <a href="mailto:contact@shipbridge.in" className={`${styles.ctaFilled} global-btn`}>
                <span className="global-btn-text">Contact Us</span>
              </a>
              <Link href="/franchise" className={styles.ctaOutlined}>View Franchise Opportunities</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer></footer>
    </div>
  );
}
