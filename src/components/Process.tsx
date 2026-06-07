'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Process.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Timeline for the entire section
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom 30%",
      }
    });

    // Reveal header
    tl.from('.process-header', {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Staggered card reveal
    tl.from('.process-card', {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "back.out(1.2)"
    }, "-=0.4");

    // Animate the progress line depending on screen size
    let mm = gsap.matchMedia();

    mm.add("(min-width: 993px)", () => {
      // Horizontal fill
      gsap.fromTo('.progress-fill', 
        { width: "0%" },
        {
          width: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: '.process-line-container',
            start: "left center",
            end: "right center",
            scrub: 1
          }
        }
      );
    });

    mm.add("(max-width: 992px)", () => {
      // Vertical fill
      gsap.fromTo('.progress-fill-vertical', 
        { height: "0%" },
        {
          height: "100%",
          ease: "none",
          scrollTrigger: {
            trigger: '.process-grid',
            start: "top center",
            end: "bottom center",
            scrub: 1
          }
        }
      );
    });

    // Hover orb mechanic
    const orb = document.querySelector('.hover-orb') as HTMLElement;
    if (orb) {
      const xTo = gsap.quickTo(orb, "x", { duration: 0.4, ease: "power3" });
      const yTo = gsap.quickTo(orb, "y", { duration: 0.4, ease: "power3" });
      
      const cards = gsap.utils.toArray('.process-card') as HTMLElement[];
      cards.forEach((card, i) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(orb, { scale: 1, opacity: 0.8, duration: 0.3 });
          orb.style.background = `hsla(${28 + i * 30}, 100%, 53%, 0.3)`;
        });
        card.addEventListener('mouseleave', () => {
          gsap.to(orb, { scale: 0, opacity: 0, duration: 0.3 });
        });
        card.addEventListener('mousemove', (e) => {
          const rect = sectionRef.current?.getBoundingClientRect();
          if (rect) {
            xTo(e.clientX - rect.left - 100);
            yTo(e.clientY - rect.top - 100);
          }
        });
      });
    }

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section className={styles.processSection} ref={sectionRef}>
      <div className={styles.glowBlob1}></div>
      <div className={styles.glowBlob2}></div>

      <div className={styles.container}>
        <div className="hover-orb" style={{
          position: 'absolute', width: 200, height: 200, borderRadius: '50%', 
          pointerEvents: 'none', zIndex: 0, opacity: 0, scale: 0, 
          filter: 'blur(40px)', background: 'var(--color-orange)'
        }} />
        <div className={`process-header ${styles.sectionHeader}`}>
          <span className={styles.overline}>HOW WE WORK</span>
          <h2 className={styles.title}>
            The ShipBridge <span className={styles.highlight}>Process</span>
          </h2>
          <p className={styles.subtitle}>A seamless logistics experience from start to finish.</p>
        </div>

        <div className={styles.processWrapper}>
          {/* Background line track */}
          <div className={`process-line-container ${styles.lineContainer}`}>
            <div className={styles.lineTrack}></div>
            <div className={`progress-fill ${styles.lineFill}`}></div>
          </div>

          {/* Vertical line for mobile */}
          <div className={styles.verticalLineContainer}>
            <div className={styles.verticalLineTrack}></div>
            <div className={`progress-fill-vertical ${styles.verticalLineFill}`}></div>
          </div>

          <div className={`process-grid ${styles.processGrid}`}>
            {/* Card 1: Packing */}
            <div className={`process-card ${styles.card}`}>
              <div className={styles.stepNode}>1</div>
              <div className={styles.cardBox}>
                <svg viewBox="0 0 100 100" className={styles.icon} xmlns="http://www.w3.org/2000/svg">
                  <circle cx="36" cy="78" r="11" fill="currentColor" />
                  <path d="M23 18c-2.2 0-4 1.8-4 4s1.8 4 4 4h5.2l17.8 47.6c.7 1.8 2.4 3 4.3 3h26.7c2.2 0 4-1.8 4-4s-1.8-4-4-4H53.5L37.4 26H46c2.2 0 4-1.8 4-4s-1.8-4-4-4H23z" fill="currentColor" />
                  <rect x="44" y="30" width="30" height="30" rx="3" transform="rotate(21 44 30)" fill="currentColor" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Packing</h3>
              <p className={styles.cardDesc}>Secure packaging designed for specific cargo types.</p>
            </div>

            {/* Card 2: Moving */}
            <div className={`process-card ${styles.card}`}>
              <div className={styles.stepNode}>2</div>
              <div className={styles.cardBox}>
                <svg viewBox="0 0 100 100" className={styles.icon} xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="6.5" fill="currentColor" />
                  <path d="M28 36l3 16 M31 52l-8 20 M31 52l6 20 M30 43l12 2" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="72" cy="28" r="6.5" fill="currentColor" />
                  <path d="M72 36l-3 16 M69 52l-6 20 M69 52l8 20 M70 43l-12 2" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="42" y="40" width="16" height="15" rx="2.5" fill="currentColor" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Moving</h3>
              <p className={styles.cardDesc}>Loading and transit handling by skilled professionals.</p>
            </div>

            {/* Card 3: Shifting */}
            <div className={`process-card ${styles.card}`}>
              <div className={styles.stepNode}>3</div>
              <div className={styles.cardBox}>
                <svg viewBox="0 0 100 100" className={styles.icon} xmlns="http://www.w3.org/2000/svg">
                  <rect x="15" y="28" width="50" height="34" rx="4" fill="currentColor" />
                  <path d="M65 36h12l9 12 v14 h-21 z" fill="currentColor" />
                  <path d="M68 39h7l5 9h-12z" fill="rgba(255, 255, 255, 0.15)" />
                  <circle cx="30" cy="72" r="9" fill="currentColor" />
                  <circle cx="66" cy="72" r="9" fill="currentColor" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Shifting</h3>
              <p className={styles.cardDesc}>Pan-India transit via our optimized fleet network.</p>
            </div>

            {/* Card 4: Delivery */}
            <div className={`process-card ${styles.card}`}>
              <div className={styles.stepNode}>4</div>
              <div className={styles.cardBox}>
                <svg viewBox="0 0 100 100" className={styles.icon} xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 46c0-3.3 2.7-6 6-6h44c3.3 0 6 2.7 6 6v20c0 5.5-4.5 10-10 10H32c-5.5 0-10-4.5-10-10V46z" fill="currentColor" />
                  <path d="M22 34c0-5.5 4.5-10 10-10h15v12H22v-2z" fill="currentColor" />
                  <path d="M53 24h15c5.5 0 10 4.5 10 10v2H53V24z" fill="currentColor" />
                </svg>
              </div>
              <h3 className={styles.cardTitle}>Delivery</h3>
              <p className={styles.cardDesc}>On-time delivery and careful offloading at destination.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
