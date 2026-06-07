'use client';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Footer.module.css';

export default function Footer() {
  const revealRef = useScrollReveal();

  return (
    <footer className={styles.footer} ref={revealRef}>
      <div className={styles.marqueeWrapper}>
        <div className="marquee-track">
          {['SHIPBRIDGE', 'CONNECTING INDIA', 'CONNECTING GROWTH', 'PAN-INDIA LOGISTICS', 'SHIPBRIDGE', 'CONNECTING INDIA', 'CONNECTING GROWTH', 'PAN-INDIA LOGISTICS'].map((text, i) => (
            <span key={i} className={styles.marqueeItem}>{text} &nbsp;•&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      <div className={`${styles.footerMain} section-padding`}>
        <div className={styles.footerGrid}>
          <div className={`${styles.footerCol} ${styles.brandCol}`} data-reveal>
            <h3>SHIPBRIDGE</h3>
            <p>India's premier logistics aggregator. Building bridges. Delivering trust.</p>
            <div className={styles.contactInfo}>
              <a href="mailto:contact@shipbridge.in">📧 contact@shipbridge.in</a>
              <a href="tel:+91XXXXXXXXXX">📞 +91 XXXXXXXXXX</a>
            </div>
          </div>

          <div className={styles.footerCol} data-reveal>
            <h4>SERVICES</h4>
            <ul>
              <li><Link href="/services/household">Household Shifting</Link></li>
              <li><Link href="/services/office">Office Relocation</Link></li>
              <li><Link href="/services/warehouse">Warehousing</Link></li>
              <li><Link href="/services/local">Local Moving</Link></li>
              <li><Link href="/services/vehicle">Vehicle Transport</Link></li>
              <li><Link href="/services/exhibition">Exhibition Logistics</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol} data-reveal>
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/franchise">Franchise</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
            
            <h4 style={{ marginTop: '2rem' }}>LEGAL</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.footerBottom} data-reveal>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="LinkedIn">In</a>
            <a href="#" aria-label="Twitter">Tw</a>
            <a href="#" aria-label="Facebook">Fb</a>
            <a href="#" aria-label="Instagram">Ig</a>
          </div>
          <p>© {new Date().getFullYear()} ShipBridge Logistics. Made in India 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}
