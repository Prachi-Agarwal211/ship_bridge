'use client';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Footer.module.css';

const MARQUEE_WORDS = [
  'SHIPBRIDGE', '•', 'INDIA MOVES', '•',
  'CONNECTING INDIA', '•', 'TRUSTED LOGISTICS', '•',
  'PAN-INDIA', '•', 'TECHNOLOGY FIRST', '•',
];

export default function Footer() {
  const revealRef = useScrollReveal();

  return (
    <footer className={styles.footer} ref={revealRef}>

      {/* Big marquee */}
      <div className={styles.marqueeWrapper} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_WORDS, ...MARQUEE_WORDS, ...MARQUEE_WORDS].map((word, i) => (
            <span key={i} className={styles.marqueeItem}>{word}&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div className={styles.footerMain}>
        <div className={styles.footerGrid}>

          {/* Brand column */}
          <div className={`${styles.footerCol} ${styles.brandCol}`} data-reveal>
            <h3 className={styles.brandName}>SHIPBRIDGE</h3>
            <p>We&apos;re building the technology to make every move in India simpler, safer, and more transparent.</p>
            <div className={styles.contactInfo}>
              <a href="mailto:contact@shipbridge.in" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                contact@shipbridge.in
              </a>
              <a href="tel:+91XXXXXXXXXX" className={styles.contactLink}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                </svg>
                +91 XXXXXXXXXX
              </a>
            </div>
          </div>

          {/* Services */}
          <div className={styles.footerCol} data-reveal>
            <h4>SERVICES</h4>
            <ul>
              <li><Link href="/services/household">Household Shifting</Link></li>
              <li><Link href="/services/office">Office Relocation</Link></li>
              <li><Link href="/services/vehicle">Vehicle Transport</Link></li>
              <li><Link href="/services/warehouse">Warehousing</Link></li>
              <li><Link href="/services/local">Local Moving</Link></li>
              <li><Link href="/services/exhibition">Exhibition Logistics</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className={styles.footerCol} data-reveal>
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/product">Our Products</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/franchise">Franchise</Link></li>
            </ul>
            <h4 style={{ marginTop: '2rem' }}>LEGAL</h4>
            <ul>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>

          {/* CTA column */}
          <div className={`${styles.footerCol} ${styles.ctaCol}`} data-reveal>
            <h4>GET MOVING</h4>
            <p className={styles.ctaText}>Ready to shift smarter? Book your move in under 60 seconds.</p>
            <Link href="/services/household" className={styles.footerCta}>
              Book a Move
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/franchise" className={styles.footerCtaOutline}>
              Become a Partner
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={styles.footerBottom} data-reveal>
          <p>© {new Date().getFullYear()} ShipBridge Logistics. Made with ❤️ in India 🇮🇳</p>
          <div className={styles.socialIcons}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
          </div>
          <p className={styles.tagline}>Humari Soch, Apka Bharosa.</p>
        </div>
      </div>
    </footer>
  );
}
