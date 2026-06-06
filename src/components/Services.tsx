"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.css";
import { SERVICES_DATA, ServiceItem } from "@/data/services";

export default function Services() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const renderCard = (service: ServiceItem) => {
    const isActive = activeCard === service.id;
    return (
      <Link
        href={`/services/${service.id}`}
        key={service.id}
        className={`${styles.card} ${isActive ? styles.active : ""}`}
        onMouseEnter={() => setActiveCard(service.id)}
        onMouseLeave={() => setActiveCard(null)}
      >
        {/* Background Image */}
        <div className={styles.imageWrapper}>
          <Image
            src={service.image}
            alt={service.title}
            fill
            unoptimized
            className={styles.image}
            priority
          />
        </div>

        {/* Ambient Dark Overlay */}
        <div className={styles.overlay}></div>

        {/* Standard Content State */}
        <div className={styles.cardStandardContent}>
          {/* Card Icon placeholder representation matching the reference yellow grid icon */}
          <div className={styles.gridIcon}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h3 className={styles.cardTitle}>{service.title}</h3>
          <p className={styles.cardSubtitle}>{service.subtitle}</p>
        </div>

        {/* Expanded Detailed Hover Content State */}
        <div className={styles.cardDetailedContent}>
          <div className={styles.briefHeader}>
            <span className={styles.categoryTag}>{service.subtitle}</span>
            <h3 className={styles.detailedTitle}>{service.title}</h3>
          </div>
          
          <div className={styles.divider}></div>
          
          <p className={styles.descriptionText}>{service.description}</p>
          
          <div className={styles.rolesSection}>
            <h4 className={styles.rolesTitle}>KEY FEATURES</h4>
            <div className={styles.tagsContainer}>
              {service.tags.map((tag) => (
                <span key={tag} className={styles.tagBadge}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button className={styles.readMoreBtn}>
            <span>READ MORE</span>
            <svg
              className={styles.arrowIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </Link>
    );
  };

  return (
    <section className={styles.servicesSection} id="services">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.overline}>WHAT WE OFFER</span>
          <h2 className={styles.title}>
            Our Premium <span className={styles.highlight}>Logistics Services</span>
          </h2>
          <div className={styles.headerBar}></div>
        </div>

        {/* Unified Services Grid */}
        <div className={styles.servicesGrid}>
          {SERVICES_DATA.map(renderCard)}
        </div>
      </div>
    </section>
  );
}
