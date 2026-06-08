import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: "Terms of Service | ShipBridge Logistics",
  description: "Terms governing use of the ShipBridge website, apps, and logistics services including household shifting, office moves, and vehicle transport.",
  robots: "index, follow",
};

export default function TermsPage() {
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
            Terms of <span className={styles.highlightOrange}>Service</span>
          </h1>
          <div className={styles.underlineBar} />
          <p className={styles.lastUpdated}>Agreement active as of: {currentYear}</p>
        </header>

        {/* Content Section */}
        <div className={styles.contentSection}>
          {/* Card 1 */}
          <section className={styles.card} data-reveal>
            <h2 className={styles.cardTitle}>Services & Estimates</h2>
            <div className={styles.text}>
              <p>
                By booking any of our services—including household shifting, office relocation, vehicle transport, warehousing, or exhibition logistics—you agree to these Terms.
              </p>
              <p>
                All initial quotes are estimates computed based on the inventory list and distance you provide. Final billing amounts may vary in the event of additional cargo, difficult building access (e.g. non-functional lifts, narrow stairs), or specialized packing demands discovered during the move.
              </p>
            </div>
          </section>

          {/* Card 2 */}
          <section className={styles.card} data-reveal>
            <h2 className={`${styles.cardTitle} ${styles.cardTitleGreen}`}>Customer Responsibilities</h2>
            <div className={styles.text}>
              <p>
                To guarantee a safe and efficient shifting operation, customers agree to comply with the following protocols:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletGreen}`}>✓</span>
                  <span><strong>Accuracy:</strong> Provide exact addresses, correct floor details, and an exhaustive inventory sheet.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletGreen}`}>✓</span>
                  <span><strong>Preparations:</strong> Secure personal valuables (cash, jewelry, documents), defrost refrigerators, and pack loose high-fragility items.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletGreen}`}>✓</span>
                  <span><strong>Clearance & Approvals:</strong> Secure any required permissions from building societies, landlord entities, or local municipality gates prior to vehicle arrival.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletGreen}`}>✓</span>
                  <span><strong>Representation:</strong> Ensure a designated adult representative is present at both pickup and delivery locations to inspect goods.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Card 3 */}
          <section className={styles.card} data-reveal>
            <h2 className={styles.cardTitle}>Transit Liability & Insurance</h2>
            <div className={styles.text}>
              <p>
                ShipBridge utilizes standardized high-grade packing materials and background-checked logistics crews. To safeguard your move:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>✓</span>
                  <span>We offer comprehensive transit coverage to protect against unforeseen accidents.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>✓</span>
                  <span>Any damage claims must be formally filed in writing at <strong>contact@shipbridge.in</strong> within 48 hours of shipment delivery, supported by photographic and video proof.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.listBullet}>✓</span>
                  <span>Valuable electronics, high-end furniture, and luxury items must be explicitly declared prior to loading to secure valid insurance coverage.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Card 4 */}
          <section className={styles.card} data-reveal>
            <h2 className={`${styles.cardTitle} ${styles.cardTitleGreen}`}>Cancellations & Refund Claims</h2>
            <div className={styles.text}>
              <p>
                We understand plans change. Shifting appointments can be cancelled or rescheduled under the following terms:
              </p>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletGreen}`}>✓</span>
                  <span>Cancellations made more than 48 hours before the scheduled moving time slot receive a full refund of any deposit paid.</span>
                </li>
                <li className={styles.listItem}>
                  <span className={`${styles.listBullet} ${styles.listBulletGreen}`}>✓</span>
                  <span>Cancellations within 48 hours of the move slot are subject to a minor scheduling fee depending on the service tier.</span>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* Footer Contact Callout */}
        <p className={styles.footerText} data-reveal>
          These Terms of Service are governed by Indian law. For legal queries, partnership terms, or details on claims, email us at <strong>contact@shipbridge.in</strong>.
        </p>
      </main>
    </ScrollRevealWrapper>
  );
}
