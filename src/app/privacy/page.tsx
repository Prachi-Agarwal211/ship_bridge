import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Privacy Policy | ShipBridge Logistics",
  description: "How ShipBridge collects, uses, and protects your data when you book logistics and relocation services.",
  robots: "noindex, nofollow",
};

export default function PrivacyPage() {
  const currentYear = new Date().getFullYear();

  return (
    <ScrollRevealWrapper className={styles.pageContainer}>
      <Navbar />

      {/* Decorative Background Glows */}
      <div className={`${styles.bgGlow} ${styles.glowGreen}`} />
      <div className={`${styles.bgGlow} ${styles.glowOrange}`} />

      <main className={styles.container}>
        {/* Header Block */}
        <header className={styles.headerSection} data-reveal>
          <h1 className={styles.title}>
            Privacy <span className={styles.highlightOrange}>Policy</span>
          </h1>
          <div className={styles.underlineBar} />
          <p className={styles.lastUpdated}>Last updated: {currentYear}</p>
        </header>

        {/* Content Section */}
        <div className={styles.contentSection}>
          {/* Card 1 */}
          <section className={styles.card} data-reveal>
            <h2 className={styles.cardTitle}>Introduction</h2>
            <div className={styles.text}>
              <p>
                ShipBridge Logistics ("we", "us") respects your privacy. This policy explains what data we collect when you use our website, mobile applications, or relocation services—including household shifting, office relocation, vehicle transport, warehousing, and exhibition logistics—and how we manage and safeguard your personal information.
              </p>
            </div>
          </section>

          {/* Card 2 */}
          <section className={styles.card} data-reveal>
            <h2 className={`${styles.cardTitle} ${styles.cardTitleOrange}`}>Information We Collect</h2>
            <div className={styles.text}>
              <p>
                To provide you with accurate logistics quotes, coordinate bookings, and facilitate seamless transit, we collect the following types of information:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletOrange}`}>✓</span>
                  <span><strong>Contact Details:</strong> Your name, phone number, email address, and pickup/delivery addresses to schedule your relocations.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletOrange}`}>✓</span>
                  <span><strong>Move Details:</strong> Comprehensive inventories, item photos, structural access points (e.g., elevators, floor levels), and chosen service types for customized pricing.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletOrange}`}>✓</span>
                  <span><strong>Technical Data:</strong> IP address, browser type, device descriptors, and site navigation details collected automatically to optimize your browsing experience.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletOrange}`}>✓</span>
                  <span><strong>Payment Information:</strong> Transactions are handled securely through our trusted payment partners. ShipBridge does not directly store or retain your full credit/debit card numbers.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Card 3 */}
          <section className={styles.card} data-reveal>
            <h2 className={styles.cardTitle}>How We Use Your Information</h2>
            <div className={styles.text}>
              <p>
                Your personal details are used solely to deliver premium shifting experiences. This includes:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>✓</span>
                  <span>Calculating, generating, and sending transparent moving quotes.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>✓</span>
                  <span>Sharing live GPS location updates via our custom customer Flutter applications.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>✓</span>
                  <span>Processing secure invoice payments and dispatching service confirmation details.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>✓</span>
                  <span>Improving platform features, answering customer support queries, and sending service updates.</span>
                </li>
              </ul>
              <p style={{ marginTop: '1.2rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.6)' }}>
                * We maintain a strict policy of never selling, trading, or sharing your personal data with third-party marketers.
              </p>
            </div>
          </section>

          {/* Card 4 */}
          <section className={styles.card} data-reveal>
            <h2 className={`${styles.cardTitle} ${styles.cardTitleOrange}`}>Your Rights & Consent</h2>
            <div className={styles.text}>
              <p>
                You retain complete control over your data. You may request access to, correction of, or permanent deletion of your personal records from our database at any time by emailing us.
              </p>
              <p>
                By using the ShipBridge platform or booking our shifting services, you consent to the collection and handling of your data as outlined in this Privacy Policy.
              </p>
            </div>
          </section>
        </div>

        {/* Footer Contact Callout */}
        <p className={styles.footerText} data-reveal>
          For questions, data access requests, or further clarification, contact our privacy compliance officer at <strong>contact@shipbridge.in</strong>. We resolve all inquiries within 30 days.
        </p>
      </main>
    </ScrollRevealWrapper>
  );
}
