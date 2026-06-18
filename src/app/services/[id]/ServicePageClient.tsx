"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import HexagonSection from "@/components/HexagonSection";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./page.module.css";
import type { ServiceItem } from "@/data/services";
import { SERVICES_DATA, getServiceDetail } from "@/data/services";

interface RouteData {
  route: {
    from: { oda: boolean; city: string; state: string };
    to: { oda: boolean; city: string; state: string };
    fromPin: string;
    toPin: string;
    distanceKm: number;
    distanceLabel: string;
    sameCity: boolean;
    sameState: boolean;
  };
  vehicles?: {
    type: string;
    capacity: string;
    bestFor: string;
    icon: string;
  }[];
}

interface PageClientProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export default function ServicePageClient({ service, relatedServices }: PageClientProps) {
  const revealRef = useScrollReveal();
  const searchParams = useSearchParams();
  const fromPin = searchParams.get("from");
  const toPin = searchParams.get("to");

  const [routeData, setRouteData] = useState<RouteData | null>(null);
  const [routeLoading, setRouteLoading] = useState(false);

  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedServiceId, setSelectedServiceId] = useState(service.id);
  const [showComments, setShowComments] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // FAQ accordion
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Fetch route data when pincodes are present
  useEffect(() => {
    if (fromPin && toPin && fromPin !== toPin) {
      setRouteLoading(true);
      fetch(`/api/route-check?from=${fromPin}&to=${toPin}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success && data.route) {
            setRouteData(data);
          }
        })
        .catch(() => {})
        .finally(() => setRouteLoading(false));
    }
  }, [fromPin, toPin]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setIsSuccess(false);

    const leadData = {
      serviceId: selectedServiceId,
      serviceTitle: SERVICES_DATA.find(s => s.id === selectedServiceId)?.title || service.title,
      fullName,
      email,
      phone,
      message,
      fromPin: fromPin || undefined,
      toPin: toPin || undefined,
      routeInfo: routeData?.route ? {
        from: `${routeData.route.from.city}, ${routeData.route.from.state}`,
        to: `${routeData.route.to.city}, ${routeData.route.to.state}`,
        distance: routeData.route.distanceLabel,
      } : undefined,
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request. Please try again.");
      }

      setIsSuccess(true);
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setShowComments(false);
    } catch (err: unknown) {
      console.error("Error submitting lead:", err);
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      setSubmitError(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentConfig = getServiceDetail(service.id);

  return (
    <div className={styles.pageContainer} ref={revealRef}>
      <Navbar />

      {/* Decorative Glow Blobs */}
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>

      <main className={styles.container}>
        {/* Back Link */}
        <Link href="/" className={styles.backLink}>
          <svg className={styles.backArrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Back to Home</span>
        </Link>

        {/* HERO SECTION */}
        <section className={styles.heroGrid}>
          {/* Left Details Column */}
          <div className={styles.leftContent} data-reveal>
            <div className={styles.overlineWrapper}>
              <span className={styles.overline}>{service.subtitle}</span>
              <span className={styles.whyPill}>Why This Service? &bull; {currentConfig.whyPill}</span>
            </div>
            <h1 className={styles.title}>
              Our Premium <br />
              <span className={styles.titleHighlight}>{service.title}</span>
            </h1>
            <div className={styles.titleBar}></div>
            <p className={styles.description}>{service.description}</p>

            {/* Route Info Banner (if pincodes present) */}
            {fromPin && toPin && (
              <div className={styles.routeBanner}>
                {routeLoading ? (
                  <span>Loading route details...</span>
                ) : routeData?.route ? (
                  <>
                    <span className={styles.routeBannerPin}>{routeData.route.fromPin}</span>
                    <span className={styles.routeBannerCity}>{routeData.route.from.city}</span>
                    <span className={styles.routeBannerArrow}>→</span>
                    <span className={styles.routeBannerPin}>{routeData.route.toPin}</span>
                    <span className={styles.routeBannerCity}>{routeData.route.to.city}</span>
                    <span className={styles.routeBannerDist}>{routeData.route.distanceLabel}</span>
                  </>
                ) : (
                  <span>Route details unavailable</span>
                )}
              </div>
            )}

            {/* Key Features Tags */}
            <h4 className={styles.tagsTitle}>Service Inclusions & Features</h4>
            <div className={styles.tagsGrid}>
              {service.tags.map((tag) => (
                <span key={tag} className={styles.tagBadge}>
                  {tag}
                </span>
              ))}
            </div>

            {/* Customer Journey Steps Strip */}
            <div className={styles.journeyStrip}>
              <h4 className={styles.journeyTitle}>Customer Journey Timeline</h4>
              <div className={styles.journeyTimeline}>
                {currentConfig.journeySteps.map((step, idx) => (
                  <div key={step.title} className={styles.journeyStep}>
                    <div className={styles.journeyStepLeft}>
                      <span className={styles.journeyIcon}>{step.icon}</span>
                    </div>
                    <div className={styles.journeyStepRight}>
                      <div className={styles.journeyMeta}>
                        <span className={styles.journeyNumber}>Step 0{idx + 1}</span>
                        <h5 className={styles.journeyStepTitle}>{step.title}</h5>
                      </div>
                      <p className={styles.journeyStepDesc}>{step.desc}</p>
                    </div>
                    {idx < currentConfig.journeySteps.length - 1 && (
                      <span className={styles.journeyArrow}>➔</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className={styles.imageCard} data-reveal>
            <Image
              src={service.image}
              alt={service.title}
              fill
              className={styles.image}
              priority
              sizes="(max-width: 1200px) 100vw, 45vw"
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </section>

        {/* SECTION 2: SERVICE FLOW */}
        <section className={styles.flowSection}>
          <div className={styles.sectionHeader} data-reveal>
            <span className={styles.sectionLabel}>STEP BY STEP</span>
            <h2 className={styles.sectionTitle}>Our Process</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.flowTimeline}>
            {currentConfig.flowSteps.map((step, index) => (
              <div key={step.title} className={styles.flowCard} data-reveal>
                <div className={styles.flowHeader}>
                  <span className={styles.flowNumber}>{index + 1}</span>
                  <span className={styles.flowIcon}>{step.icon}</span>
                </div>
                <h4 className={styles.flowCardTitle}>{step.title}</h4>
                <p className={styles.flowCardDesc}>{step.brief}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: WHAT'S INCLUDED */}
        <section className={styles.includedSection}>
          <div className={styles.includedGrid}>
            {/* What We Do */}
            <div className={styles.includedCard} data-reveal>
              <div className={styles.includedCardHeader}>
                <span className={styles.includedCardIcon}>✅</span>
                <h3 className={styles.includedCardTitle}>What We Do</h3>
              </div>
              <ul className={styles.checklist}>
                {currentConfig.whatWeDo.map((item) => (
                  <li key={item} className={styles.checklistItem}>
                    <span className={styles.checkIconGreen}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What You Need to Prepare */}
            <div className={styles.includedCard} data-reveal>
              <div className={styles.includedCardHeader}>
                <span className={styles.includedCardIcon}>📋</span>
                <h3 className={styles.includedCardTitle}>What You Need to Prepare</h3>
              </div>
              <ul className={styles.checklist}>
                {currentConfig.whatYouNeed.map((item) => (
                  <li key={item} className={styles.checklistItem}>
                    <span className={styles.checkIconOrange}>★</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4: HOW IT WORKS — HEXAGON CARDS */}
        <HexagonSection
          route={routeData?.route ? {
            distanceLabel: routeData.route.distanceLabel,
            from: routeData.route.from,
            to: routeData.route.to,
            sameCity: routeData.route.sameCity,
          } : null}
          vehicles={routeData?.vehicles || null}
          serviceId={service.id}
        />

        {/* SECTION 5: ENHANCED FORM */}
        <section className={styles.bookingSection} id="booking-form">
          <div className={styles.formCard} data-reveal>
            <div className={styles.formHeader}>
              <h3>Request a Service Quote</h3>
              <p>
                {fromPin && toPin && routeData?.route
                  ? `Shipping from ${routeData.route.from.city} to ${routeData.route.to.city} — ${routeData.route.distanceLabel}. Provide your details for a custom quote.`
                  : "Provide shipment parameters, and our logistics experts will compile custom quotes."
                }
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                
                {isSuccess && (
                  <div className={styles.successBanner}>
                    <span className={styles.checkmarkWrapper}>✓</span>
                    <span>Quote request submitted! Our service team will call you back within 15 minutes.</span>
                  </div>
                )}

                {submitError && (
                  <div className={styles.errorBanner}>
                    <span>⚠️ {submitError}</span>
                  </div>
                )}

                {/* Full Name */}
                <div className={styles.inputGroup}>
                  <label htmlFor="fullName">Full Name *</label>
                  <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Email Address */}
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Service Type (Selectable) */}
                <div className={styles.inputGroup}>
                  <label htmlFor="serviceType">Service Selected *</label>
                  <select
                    id="serviceType"
                    value={selectedServiceId}
                    onChange={(e) => setSelectedServiceId(e.target.value)}
                    className={`${styles.formInput} ${styles.formSelect}`}
                    required
                  >
                    <optgroup label="Freight Services">
                      {SERVICES_DATA.filter(s => ["ftl", "ptl", "express", "b2bcoloading", "ecommerce"].includes(s.id)).map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Relocation Services">
                      {SERVICES_DATA.filter(s => ["household", "office", "warehouse", "local", "vehicle", "exhibition"].includes(s.id)).map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </optgroup>
                    <optgroup label="Support Services">
                      {SERVICES_DATA.filter(s => ["reverselog"].includes(s.id)).map((s) => (
                        <option key={s.id} value={s.id}>{s.title}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Add Comments Toggle Button */}
                {!showComments && (
                  <div className={`${styles.inputGroup} ${styles.inputGroupFull} flex justify-start my-2`}>
                    <button
                      type="button"
                      onClick={() => setShowComments(true)}
                      className="text-sm font-semibold text-[#22c55e] hover:text-[#1b9e4b] transition-colors flex items-center gap-1 bg-transparent border-none cursor-pointer"
                    >
                      <span>+ Add Comments</span>
                    </button>
                  </div>
                )}

                {/* Message / Comments Details */}
                {showComments && (
                  <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
                    <label htmlFor="message">Comments / Special Requirements</label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Add any comments, special requirements or additional details here..."
                      className={`${styles.formInput} ${styles.textareaInput}`}
                    ></textarea>
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <button type="submit" disabled={isSubmitting} className={`${styles.submitBtn} global-btn`}>
                {isSubmitting ? (
                  <span className="global-btn-text">Submitting Request...</span>
                ) : (
                  <>
                    <span className="global-btn-text">Submit Request</span>
                    <svg className={styles.submitArrow} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </section>

        {/* SECTION 7: RELATED SERVICES STRIP */}
        <section className={styles.relatedSection}>
          <div className={styles.sectionHeader} data-reveal>
            <span className={styles.sectionLabel}>ADDITIONAL SOLUTIONS</span>
            <h2 className={styles.sectionTitle}>You May Also Need</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.relatedGrid}>
            {relatedServices.map((relService) => (
              <Link
                key={relService.id}
                href={`/services/${relService.id}${fromPin && toPin ? `?from=${fromPin}&to=${toPin}` : ''}`}
                className={styles.relatedCard}
                data-reveal
              >
                <div className={styles.relatedThumb} style={{ backgroundImage: `url(${relService.image})` }} aria-hidden />
                <span className={styles.relatedOverline}>{relService.subtitle}</span>
                <h4 className={styles.relatedTitle}>{relService.title}</h4>
                <p className={styles.relatedDesc}>
                  {relService.description.slice(0, 100)}...
                </p>
                <span className={styles.relatedCta}>Explore →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
