"use client";

import React from "react";
import { Package, ClipboardList, CreditCard, Route, Truck } from "lucide-react";
import styles from "./HexagonSection.module.css";

interface VehicleRec {
  type: string;
  capacity: string;
  bestFor: string;
  icon: string;
}

interface HexCard {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
  color: "orange" | "green";
}

interface HexagonSectionProps {
  route?: {
    distanceLabel: string;
    from: { city: string; state: string };
    to: { city: string; state: string };
    sameCity: boolean;
  } | null;
  vehicles?: VehicleRec[] | null;
  serviceId?: string;
}

function getDefaultCards(serviceId?: string): HexCard[] {
  if (serviceId && ["ftl", "ptl", "express", "b2bcoloading", "ecommerce", "reverselog"].includes(serviceId)) {
    return [
      {
        icon: <Truck size={22} />,
        title: "Vehicle Matching",
        description: "AI recommends the right vehicle — LCV, 10-wheeler, container, or trailer — based on your cargo weight and route distance.",
        tag: "Fleet",
        color: "green",
      },
      {
        icon: <Route size={22} />,
        title: "Pan-India Network",
        description: "9 warehouses, 500+ partner hubs, coverage across all serviceable pincodes. Real-time GPS tracking on every shipment.",
        tag: "Network",
        color: "orange",
      },
      {
        icon: <Package size={22} />,
        title: "How We Quote",
        description: "We calculate distance and cargo variables to suggest optimal transport. Request a quote and get a detailed breakdown within hours.",
        tag: "Quoting",
        color: "green",
      },
    ];
  }

  return [
    {
      icon: <Package size={22} />,
      title: "Factors That Affect Your Quote",
      description: "Distance, cargo weight, vehicle type, floor access, packing grade, and specialty items all influence the final quote.",
      tag: "Quote",
      color: "orange",
    },
    {
      icon: <ClipboardList size={22} />,
      title: "How We Quote",
      description: "We calculate distance and cargo variables to suggest optimal transport. Request a quote and get a detailed breakdown within hours.",
      tag: "Quoting",
      color: "green",
    },
    {
      icon: <CreditCard size={22} />,
      title: "Payment Process",
      description: "Pay a small advance token online to secure booking, pay secondary balance at cargo loading, settle remaining dues post-delivery.",
      tag: "Payment",
      color: "orange",
    },
  ];
}

export default function HexagonSection({ route, vehicles, serviceId }: HexagonSectionProps) {
  const CARDS = getDefaultCards(serviceId);

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

      {/* Route Summary (if provided) */}
      {route && (
        <div className={styles.routeInfo} data-reveal>
          <div className={styles.routeInfoPins}>
            <div className={styles.routeInfoPin}>
              <span className={styles.routeInfoCity}>{route.from.city}</span>
              <span className={styles.routeInfoState}>{route.from.state}</span>
            </div>
            <span className={styles.routeInfoArrow}>→</span>
            <div className={styles.routeInfoPin}>
              <span className={styles.routeInfoCity}>{route.to.city}</span>
              <span className={styles.routeInfoState}>{route.to.state}</span>
            </div>
          </div>
          <span className={styles.routeInfoDistance}>{route.distanceLabel}</span>
        </div>
      )}

      {/* Hexagon Grid */}
      <div className={styles.hexGrid}>
        {CARDS.map((card) => {
          const isOrange = card.color === "orange";
          return (
            <div key={card.tag} className={styles.hexWrapper} data-reveal>
              <div className={`${styles.hexagon} ${isOrange ? styles.hexOrange : styles.hexGreen}`}>
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
                  <div className={`${styles.iconBadge} ${isOrange ? styles.iconBadgeOrange : styles.iconBadgeGreen}`}>
                    {card.icon}
                  </div>
                  <h3 className={styles.hexTitle}>{card.title}</h3>
                  <p className={styles.hexDesc}>{card.description}</p>
                </div>
              </div>
              <span className={`${styles.tagPill} ${isOrange ? styles.tagPillOrange : styles.tagPillGreen}`}>
                {card.tag}
              </span>
            </div>
          );
        })}
      </div>

      {/* Vehicle Recommendations (if provided) */}
      {vehicles && vehicles.length > 0 && (
        <div className={styles.vehiclesSection} data-reveal>
          <h3 className={styles.chargesTitle}>Recommended Vehicles</h3>
          <div className={styles.vehiclesGrid}>
            {vehicles.map((v) => (
              <div key={v.type} className={styles.vehicleItem}>
                <span className={styles.vehicleIcon}>{v.icon}</span>
                <div className={styles.vehicleInfo}>
                  <h4 className={styles.vehicleType}>{v.type}</h4>
                  <p className={styles.vehicleCap}>{v.capacity}</p>
                  <p className={styles.vehicleBest}>{v.bestFor}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
