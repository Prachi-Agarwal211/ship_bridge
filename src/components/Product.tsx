'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import styles from './Product.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Product() {
  const sectionRef = useScrollReveal();

  return (
    <section className={styles.productSection} id="product" ref={sectionRef}>
      <div className={styles.sectionGlow}></div>

      <div className={styles.container}>
        <div className={styles.productGrid}>
          {/* Left Side: Mockup Image & Bottom row card */}
          <div className={styles.imageColumn}>
            <div className={`product-image-card ${styles.imageCard}`} data-reveal>
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
            <div className={styles.bottomCardRow} data-reveal>
              {/* Card item 1 */}
              <div className={`product-bottom-card ${styles.bottomCardItem}`}>
                <svg className={styles.bottomCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
                <h4>Secure</h4>
              </div>

              {/* Card item 2 */}
              <div className={`product-bottom-card ${styles.bottomCardItem}`}>
                <svg className={styles.bottomCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
                <h4>Live Track</h4>
              </div>

              {/* Card item 3 */}
              <div className={`product-bottom-card ${styles.bottomCardItem}`}>
                <svg className={styles.bottomCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
                <h4>24/7 Support</h4>
              </div>

              {/* Card item 4 */}
              <div className={`product-bottom-card ${styles.bottomCardItem}`}>
                <svg className={styles.bottomCardIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" ry="2"/>
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                  <circle cx="5.5" cy="18.5" r="2.5"/>
                  <circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
                <h4>End-to-End</h4>
              </div>
            </div>
          </div>

          {/* Right Side: Product Details, Copy, and Features Grid */}
          <div className={`product-text-content ${styles.contentDetails}`}>
            <div className={styles.overlineWrapper} data-reveal>
              <span className={styles.overline}>PLATFORM</span>
              <div className={styles.overlineBar}></div>
            </div>
            
            <h2 className={styles.title} data-reveal>
              Smart Logistics. <br />
              <span className={styles.highlight}>Seamless Control.</span>
            </h2>

            <p className={styles.description} data-reveal>
              ShipBridge is a smart logistics platform designed to make moving simple, fast, and stress-free. From household shifting to enterprise freight, our digital ecosystem connects you with reliable solutions instantly.
            </p>

            {/* Premium Bento Features Grid */}
            <div className={styles.featuresBento}>
              
              <div className={`product-bento-card ${styles.bentoCard}`}>
                <div className={styles.featureIconBox}>
                  <svg viewBox="0 0 24 24" className={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Easy Booking</h4>
                  <p>Book your transport service in just a few clicks.</p>
                </div>
              </div>

              <div className={`product-bento-card ${styles.bentoCard}`}>
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

              <div className={`product-bento-card ${styles.bentoCard}`}>
                <div className={styles.featureIconBox}>
                  <svg viewBox="0 0 24 24" className={styles.featureIcon} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h4>Smart Management</h4>
                  <p>Manage inventory, schedule pickups, and view requests.</p>
                </div>
              </div>

              <div className={`product-bento-card ${styles.bentoCard}`}>
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
            <div className={styles.ctaRow} data-reveal>
              <button className={`${styles.downloadButton} global-btn`}>
                <span className="global-btn-text">Download App</span>
                <div className={styles.storeIcons}>
                  <svg viewBox="0 0 24 24" className={styles.storeIcon} fill="currentColor">
                    <path d="M5 3.00005C4.69 3.00005 4.39 3.12005 4.16 3.35005C3.86 3.65005 3.75 4.09005 3.86 4.50005L12.35 12.9901L3.86 21.4801C3.75 21.8901 3.86 22.3301 4.16 22.6301C4.39 22.8601 4.69 22.9801 5 22.9801C5.23 22.9801 5.46 22.9101 5.66 22.7801L19.4 14.8801C19.78 14.6601 20 14.2801 20 13.8801C20 13.4801 19.78 13.1001 19.4 12.8801L5.66 4.98005C5.46 4.85005 5.23 4.78005 5 4.78005V3.00005Z"/>
                  </svg>
                  <svg viewBox="0 0 24 24" className={styles.storeIcon} fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.1 16.67C20.08 16.74 19.67 18.11 18.71 19.5M15.97 4.17C16.63 3.37 17.07 2.28 16.95 1C16 1.04 14.9 1.6 14.25 2.38C13.69 3.04 13.2 4.14 13.34 5.4C14.39 5.48 15.4 4.87 15.97 4.17Z"/>
                  </svg>
                </div>
              </button>
              <span className={styles.comingSoonBadge}>
                <span className={styles.comingSoonDot}></span>
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
