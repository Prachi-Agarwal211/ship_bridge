"use client";

import React from "react";
import { Package, ClipboardList, CreditCard } from "lucide-react";
import styles from "./HexagonSection.module.css";

interface HexCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  color: "orange" | "green";
}

const CARDS: HexCard[] = [
  {
    icon: <Package size={22} />,
    title: "Factors That Affect Price",
    description:
      "Number of rooms & inventory volume, floor & lift access, distance + city traffic, packing grade, specialty items (piano, art, antiques)",
    tag: "Pricing",
    color: "orange",
  },
  {
    icon: <ClipboardList size={22} />,
    title: "How We Quote",
    description:
      "We calculate distance and packaging variables to suggest correct transport carrier options. Quote includes structural splits, taxes, and service margins.",
    tag: "Quoting",
    color: "green",
  },
  {
    icon: <CreditCard size={22} />,
    title: "Payment Process",
    description:
      "Pay a small advance token online to secure booking, pay secondary balance at cargo loading pickup, settle remaining dues post-delivery.",
    tag: "Payment",
    color: "orange",
  },
];

export default function HexagonSection() {
  return (
    <section className="py-16 md:py-24">
      {/* Section Header */}
      <div className="text-center mb-12 md:mb-16" data-reveal>
        <span className="block text-[0.8rem] font-bold tracking-[2px] uppercase text-[#E8610A] mb-3">
          How It Works
        </span>
        <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] font-extrabold text-white mb-2">
          Simple, Transparent Process
        </h2>
        <div className="w-[70px] h-[4px] bg-[#E8610A] rounded-sm mx-auto" />
      </div>

      {/* Hexagon Grid */}
      <div className={styles.hexGrid}>
        {CARDS.map((card) => {
          const isOrange = card.color === "orange";
          return (
            <div key={card.tag} className={styles.hexWrapper} data-reveal>
              {/* Hexagon Shape */}
              <div
                className={`${styles.hexagon} ${isOrange ? styles.hexOrange : styles.hexGreen}`}
              >
                {/* SVG glow overlay for hover */}
                <svg
                  className={styles.glowOverlay}
                  viewBox="0 0 200 230"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon
                    points="100,0 200,57.5 200,172.5 100,230 0,172.5 0,57.5"
                    fill="none"
                    stroke={isOrange ? "#E8610A" : "#1E6B2E"}
                    strokeWidth="4"
                    className={styles.glowPolygon}
                  />
                </svg>

                <div className={styles.hexContent}>
                  {/* Icon Badge */}
                  <div
                    className={`${styles.iconBadge} ${isOrange ? styles.iconBadgeOrange : styles.iconBadgeGreen}`}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3 className={styles.hexTitle}>{card.title}</h3>

                  {/* Description */}
                  <p className={styles.hexDesc}>{card.description}</p>
                </div>
              </div>

              {/* Pill Tag */}
              <span
                className={`${styles.tagPill} ${isOrange ? styles.tagPillOrange : styles.tagPillGreen}`}
              >
                {card.tag}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
