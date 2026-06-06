"use client";

import Image from 'next/image';
import styles from './Product.module.css';

const Product = () => {
  return (
    <section className={styles.productSection} id="product">
      {/* Background ambient lighting glow */}
      <div className={styles.sectionGlow}></div>

      <div className={styles.container}>
        <div className={styles.productGrid}>
          {/* Left Side: Mockup Image & Bottom row card */}
          <div className={styles.imageColumn}>
            <div className={styles.imageCard}>
              {/* Internal pulsing glow circle */}
              <div className={styles.cardGlow}></div>
              
              <div className={styles.imageContainer}>
                <Image 
                  src="/Product/app_image.png" 
                  alt="ShipBridge Logistics Application" 
                  fill
                  unoptimized
                  className={styles.image}
                  priority
                />
              </div>
            </div>

            {/* Bottom floating horizontal row card */}
            <div className={styles.bottomCardRow}>
              {/* Card item 1 */}
              <div className={styles.bottomCardItem}>
                <svg className={styles.bottomCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h4>Secure & Reliable</h4>
                <p>Your goods are in safe hands.</p>
              </div>

              {/* Card item 2 */}
              <div className={styles.bottomCardItem}>
                <svg className={styles.bottomCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
                <h4>Real-Time Tracking</h4>
                <p>Track your shipment live, anytime.</p>
              </div>

              {/* Card item 3 */}
              <div className={styles.bottomCardItem}>
                <svg className={styles.bottomCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <h4>24/7 Support</h4>
                <p>We're here to help, always.</p>
              </div>

              {/* Card item 4 */}
              <div className={styles.bottomCardItem}>
                <svg className={styles.bottomCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <h4>End-to-End Service</h4>
                <p>From pickup to delivery, we handle it all.</p>
              </div>
            </div>
          </div>

          {/* Right Side: Product Details, Copy, and Features Grid */}
          <div className={styles.contentDetails}>
            <div className={styles.overlineWrapper}>
              <span className={styles.overline}>ABOUT PRODUCT</span>
              <div className={styles.overlineBar}></div>
            </div>
            
            <h2 className={styles.title}>
              Smart Logistics. <br />
              <span className={styles.highlight}>Seamless Relocation.</span>
            </h2>

            <p className={styles.description}>
              ShipBridge is a smart logistics and relocation platform designed to make moving simple, fast, and stress-free. From household shifting and office relocation to warehousing and transportation, ShipBridge connects customers with reliable logistics solutions through one seamless digital platform.
            </p>

            <p className={styles.description}>
              With easy booking, real-time tracking, secure handling, and dedicated support, we ensure every move is efficient, transparent, and hassle-free.
            </p>

            {/* Premium 2x2 Features Grid */}
            <div className={styles.featuresGrid}>
              
              {/* Feature 1 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconBox}>
                  <svg viewBox="0 0 24 24" className={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Easy Booking</h4>
                  <p>Book your relocation or transport service in just a few clicks.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconBox}>
                  <svg viewBox="0 0 24 24" className={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Live Tracking</h4>
                  <p>Track your shipment in real-time with full visibility.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconBox}>
                  <svg viewBox="0 0 24 24" className={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Smart Management</h4>
                  <p>Manage inventory, schedule pickups, and view all requests in one place.</p>
                </div>
              </div>

              {/* Feature 4 */}
              <div className={styles.featureItem}>
                <div className={styles.featureIconBox}>
                  <svg viewBox="0 0 24 24" className={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Dedicated Support</h4>
                  <p>Get expert assistance anytime from our support team.</p>
                </div>
              </div>

            </div>

            {/* CTA Buttons Row */}
            <div className={styles.ctaRow}>
              {/* Learn More Button */}
              <button className={styles.ctaButton}>
                <span>Learn More</span>
                <svg
                  className={styles.arrowIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              {/* Download App Outline Button */}
              <button className={styles.downloadButton}>
                <span>Download App</span>
                <div className={styles.storeIcons}>
                  {/* Google Play Icon */}
                  <svg viewBox="0 0 24 24" className={styles.storeIcon} fill="currentColor">
                    <path d="M5 3.00005C4.69 3.00005 4.39 3.12005 4.16 3.35005C3.86 3.65005 3.75 4.09005 3.86 4.50005L12.35 12.9901L3.86 21.4801C3.75 21.8901 3.86 22.3301 4.16 22.6301C4.39 22.8601 4.69 22.9801 5 22.9801C5.23 22.9801 5.46 22.9101 5.66 22.7801L19.4 14.8801C19.78 14.6601 20 14.2801 20 13.8801C20 13.4801 19.78 13.1001 19.4 12.8801L5.66 4.98005C5.46 4.85005 5.23 4.78005 5 4.78005V3.00005Z"/>
                  </svg>
                  {/* Apple App Store Icon */}
                  <svg viewBox="0 0 24 24" className={styles.storeIcon} fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C16 1.04 14.9 1.6 14.25 2.38C13.69 3.04 13.2 4.14 13.34 5.4C14.39 5.48 15.4 4.87 15.97 4.17Z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
