'use client';

import { useRef, useState, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import MagneticButton from '@/components/animations/MagneticButton';
import styles from './Process.module.css';

gsap.registerPlugin(ScrollTrigger);

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Instant Booking',
    desc: 'Enter your locations, inventory size, and preferred date to get a transparent quote.',
    x: 10, y: 15, align: 'left'
  },
  {
    num: '02',
    title: 'Precision Packing',
    desc: 'Our specialized crew arrives with industrial-grade materials to securely pack everything.',
    x: 70, y: 40, align: 'right'
  },
  {
    num: '03',
    title: 'Secure Transit',
    desc: 'Your assets move in our GPS-tracked fleet. You receive a live tracking link.',
    x: 20, y: 65, align: 'left'
  },
  {
    num: '04',
    title: 'Doorstep Setup',
    desc: 'We place the heavy furniture where you want it and clear away the packing debris.',
    x: 80, y: 90, align: 'right'
  }
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile to render a completely different phone-optimized experience
  // while keeping 100% original laptop/desktop structure + animations untouched.
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 769);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useScrollReveal({}, containerRef);
  
  useGSAP(() => {
    if (!containerRef.current) return;

    // Only run the complex desktop/laptop SVG timeline animations on larger screens.
    // This protects the original laptop structure and GSAP ScrollTrigger animations
    // from running (or querying hidden elements) on mobile.
    const isDesktop = window.matchMedia('(min-width: 769px)').matches;
    if (!isDesktop) return;

    // Draw the SVG path on scroll (desktop only)
    const path = document.querySelector('.timeline-path') as SVGPathElement;
    if (path) {
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.process-timeline',
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: 1,
        }
      });
    }

    // Fade up the steps as the line reaches them (desktop only)
    gsap.utils.toArray<HTMLElement>('.step-marker-container').forEach((el) => {
      gsap.fromTo(el,
        { scale: 0, opacity: 0, y: 30 },
        {
          scale: 1, opacity: 1, y: 0,
          duration: 0.6,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          }
        }
      );
    });

  }, { scope: containerRef });

  return (
    <section className={styles.section} id="process" ref={containerRef}>
      <div className={styles.container}>
        
        {/* Left Sticky Header */}
        <div className={styles.headerColumn}>
          <div className={styles.stickyHeader} data-reveal>
            <span className={styles.overline}>SHIP BRIDGE OPERATION</span>
            <h2 className={styles.title}>
              Move like clockwork.
            </h2>
            <p className={styles.subtitle}>
              Four steps. No surprises. Every move is GPS-tracked, every box is inventoried, every delivery is confirmed. You see exactly what we see, in real time.
            </p>
            <MagneticButton strength={25}>
              <button className={`${styles.ctaButton} global-btn`}>
                <span className="global-btn-text">Book Now</span>
              </button>
            </MagneticButton>
          </div>
        </div>

        {/* Right Timeline Column */}
        <div className={`process-timeline ${styles.timelineColumn}`}>
          
          {/* SVG Background Path */}
          <div className={styles.svgWrapper}>
            <svg 
              className={styles.timelineSvg} 
              viewBox="0 0 100 100" 
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-orange)" />
                  <stop offset="50%" stopColor="var(--color-green)" />
                  <stop offset="100%" stopColor="var(--color-orange)" />
                </linearGradient>
              </defs>
              <path 
                className="timeline-path"
                d="M 0,15 L 10,15 C 40,15 40,40 70,40 C 100,40 50,65 20,65 C -10,65 50,90 80,90 L 100,90" 
                fill="none" 
                stroke="url(#lineGrad)" 
                strokeWidth="0.4"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          {/* HTML Nodes for the Steps */}
          {PROCESS_STEPS.map((step) => (
            <div 
              key={step.num} 
              className={`step-marker-container ${styles.stepNode}`}
              style={{ top: `${step.y}%`, left: `${step.x}%` }}
            >
              {/* The glowing dot on the path */}
              <div className={styles.dot} />
              
              {/* The massive background number */}
              <div className={styles.massiveNumber} style={{ 
                [step.align === 'left' ? 'left' : 'right']: '20px'
              }}>
                {step.num}
              </div>
              
              {/* The content card */}
              <div className={`${styles.stepContent} ${step.align === 'left' ? styles.alignLeft : styles.alignRight}`}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}

        </div>

        {/* Phone-native recreation: completely different vertical design for mobile.
            Only rendered on small screens so laptop/desktop DOM + structure + all GSAP animations
            remain 100% untouched and original. */}
        {isMobile && (
          <div className={styles.mobileSteps}>
            <div className={styles.mobileStepsHeader}>
              <span className={styles.overline}>THE FLOW, SIMPLIFIED</span>
              <h3 className={styles.mobileStepsTitle}>How it works on your phone</h3>
            </div>
            <ol className={styles.mobileStepsList}>
              {PROCESS_STEPS.map((step, index) => (
                <li key={index} className={styles.mobileStep}>
                  <span className={styles.mobileStepNum}>{step.num}</span>
                  <div>
                    <div className={styles.mobileStepTitle}>{step.title}</div>
                    <p className={styles.mobileStepDesc}>{step.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
            <MagneticButton strength={25}>
              <button 
                className={`${styles.ctaButton} global-btn`} 
                onClick={() => window.location.href = '/services/household#booking-form'}
                aria-label="Start booking a move"
              >
                <span className="global-btn-text">Start Your Move</span>
              </button>
            </MagneticButton>
          </div>
        )}
      </div>
    </section>
  );
}
