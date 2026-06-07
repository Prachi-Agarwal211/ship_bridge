'use client';
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Services.module.css";
import { SERVICES_DATA, ServiceItem } from "@/data/services";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const cards = gsap.utils.toArray('.service-card', trackRef.current);
    
    // Only apply horizontal scroll pin on non-mobile
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(trackRef.current, {
        x: () => -(trackRef.current!.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${trackRef.current!.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        }
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  const renderCard = (service: ServiceItem, index: number) => {
    return (
      <div className={`service-card ${styles.cardWrapper}`} key={service.id}>
        <div className={styles.cardNumber}>
          {String(index + 1).padStart(2, '0')}
        </div>
        <Link href={`/services/${service.id}`} className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 480px"
              placeholder="blur"
              blurDataURL="data:image/webp;base64,UklGRkIAAABXRUJQVlA4IDYAAACQAQCdASoIAAUAAUAmJaQAA3AA/v02LAAA/v8AAAAAA=="
            />
          </div>
          <div className={styles.overlay}></div>
          <div className={styles.cardContent}>
            <div className={styles.cardHeader}>
              <span className={styles.categoryTag}>{service.subtitle}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
            </div>
            
            <div className={styles.cardHoverContent}>
              <p className={styles.descriptionText}>{service.description}</p>
              <div className={styles.tagsContainer}>
                {service.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className={styles.tagBadge}>{tag}</span>
                ))}
              </div>
              <div className={styles.readMoreBtn}>
                Explore Service <span>→</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  };

  return (
    <section className={styles.servicesSection} id="services" ref={sectionRef}>
      <div className={styles.sectionHeader}>
        <div className={styles.headerContent}>
          <span className={styles.overline}>WHAT WE OFFER</span>
          <h2 className={styles.title}>
            Our Premium <br/>
            <span className={styles.highlight}>Logistics Services</span>
          </h2>
          <div className={styles.headerBar}></div>
        </div>
        
        <div className={styles.headerInfo}>
          <p>
            Asset-light infrastructure combined with deep industry expertise.
            We provide end-to-end supply chain visibility and reliability.
          </p>
          <div className={styles.dragIndicator}>
            <span>←</span> SCROLL TO EXPLORE <span>→</span>
          </div>
        </div>
      </div>

      <div className={styles.trackContainer}>
        <div className={`${styles.servicesTrack} services-track`} ref={trackRef}>
          {SERVICES_DATA.map((service, index) => renderCard(service, index))}
        </div>
      </div>
    </section>
  );
}
