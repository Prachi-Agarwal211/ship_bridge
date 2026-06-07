"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import type { ServiceItem } from "@/data/services";

interface PageClientProps {
  service: ServiceItem;
  relatedServices: ServiceItem[];
}

export default function ServicePageClient({ service, relatedServices }: PageClientProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Form States
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // Dynamic Shifting details states
  const [propertyType, setPropertyType] = useState("");
  const [numRooms, setNumRooms] = useState("");
  const [floorLevel, setFloorLevel] = useState("");
  const [liftAvailable, setLiftAvailable] = useState("");

  const [buildingType, setBuildingType] = useState("");
  const [workstations, setWorkstations] = useState("");
  const [serverRoom, setServerRoom] = useState("");

  const [vehicleType, setVehicleType] = useState("");
  const [vehicleMake, setVehicleMake] = useState("");
  const [vehicleModel, setVehicleModel] = useState("");
  const [vehicleInsurance, setVehicleInsurance] = useState("");

  const [storageCategory, setStorageCategory] = useState("");
  const [storageDuration, setStorageDuration] = useState("");

  const [exhibitionDate, setExhibitionDate] = useState("");
  const [exhibitionVenue, setExhibitionVenue] = useState("");
  const [exhibitionStallSize, setExhibitionStallSize] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const toggleFaq = (index: number) => {
    setExpandedFaq((prev) => (prev === index ? null : index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setIsSuccess(false);

    const leadData = {
      serviceId: service.id,
      serviceTitle: service.title,
      fullName,
      email,
      phone,
      message,
      // dynamic properties
      propertyType,
      numRooms,
      floorLevel,
      liftAvailable,
      buildingType,
      workstations,
      serverRoom,
      vehicleType,
      vehicleMake,
      vehicleModel,
      vehicleInsurance,
      storageCategory,
      storageDuration,
      exhibitionDate,
      exhibitionVenue,
      exhibitionStallSize,
      submittedAt: new Date().toISOString()
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit quote request. Please try again.");
      }

      setIsSuccess(true);

      // Clear common fields
      setFullName("");
      setEmail("");
      setPhone("");
      setMessage("");

      // Clear dynamic fields
      setPropertyType("");
      setNumRooms("");
      setFloorLevel("");
      setLiftAvailable("");
      setBuildingType("");
      setWorkstations("");
      setServerRoom("");
      setVehicleType("");
      setVehicleMake("");
      setVehicleModel("");
      setVehicleInsurance("");
      setStorageCategory("");
      setStorageDuration("");
      setExhibitionDate("");
      setExhibitionVenue("");
      setExhibitionStallSize("");
    } catch (err: any) {
      console.error("Error submitting lead:", err);
      setSubmitError(err.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // 1. DYNAMIC CONFIGURATIONS FOR CHECKS / FAQS / FLOWS / JOURNEYS
  const serviceConfig: {
    [key: string]: {
      whyPill: string;
      journeySteps: { icon: string; title: string; desc: string }[];
      flowSteps: { icon: string; title: string; brief: string }[];
      whatWeDo: string[];
      whatYouNeed: string[];
      faqs: { question: string; answer: string }[];
    };
  } = {
    household: {
      whyPill: "Door-to-door Premium Packing",
      journeySteps: [
        { icon: "🔎", title: "Survey Check", desc: "Digital or physical inventory lookup" },
        { icon: "📦", title: "Premium Packing", desc: "Multi-layer wrap & box protection" },
        { icon: "🚛", title: "Safe Transit", desc: "Closed-container transport trucks" },
        { icon: "🏠", title: "Room Setup", desc: "Unpacking & furniture alignment" }
      ],
      flowSteps: [
        { icon: "📍", title: "Pickup Details", brief: "Provide address, floors, and lift access" },
        { icon: "🚚", title: "Drop Details", brief: "Provide destination address info" },
        { icon: "📦", title: "Item Inventory", brief: "List furniture and electronics room-by-room" },
        { icon: "🚛", title: "Vehicle Details", brief: "Select container truck sizes" },
        { icon: "🏺", title: "Fragile Items", brief: "Specify delicate items and glassware" },
        { icon: "🛡️", title: "Service Options", brief: "Select Premium or Standard wrap grade" },
        { icon: "📅", title: "Schedule", brief: "Select preferred shifting date/time" },
        { icon: "🚀", title: "Submit", brief: "Confirm details and submit lead" }
      ],
      whatWeDo: [
        "Multi-layer bubble wrapping for all fragile glass and chinaware.",
        "Custom furniture packaging with foam sheets and corner guards.",
        "Heavy item loading, unloading, and alignment inside the new home.",
        "Systematic wardrobe box packing to prevent wrinkles in clothing."
      ],
      whatYouNeed: [
        "Keep cash, jewelry, and personal ID documents in your personal carry-on.",
        "Defrost and dry out refrigerators 24 hours prior to shifting.",
        "Acquire societal permission gate passes for entry/exit.",
        "Label boxes containing items you need immediately after arrival."
      ],
      faqs: [
        { question: "How do you handle fragile items?", answer: "We use bubble wrap, foam sheets, and high-quality corrugated boxes for all fragile items. They are labeled clearly and loaded into secure vehicle zones." },
        { question: "Do you disassemble furniture?", answer: "Yes, our trained packers handle disassembly of beds, wardrobes, and tables at pickup, and reassemble them at the destination." },
        { question: "Is my stuff insured?", answer: "We offer optional comprehensive transit insurance options covering damage and loss, so you move with peace of mind." },
        { question: "How long does it take?", answer: "Shifting durations depend on size and distance. Local moves are finished same-day, while interstate shifts take 2 to 5 days." }
      ]
    },
    office: {
      whyPill: "Weekend & After-Hours Shifting Available",
      journeySteps: [
        { icon: "🏢", title: "IT Audit", desc: "Desktop & server setup assessment" },
        { icon: "⚡", title: "Tech Packing", desc: "Anti-static bubble wrap safety" },
        { icon: "🚚", title: "Off-Hours Move", desc: "Overnight/weekend transit to limit downtime" },
        { icon: "💻", title: "Workspace Setup", desc: "Placement and desktop wiring setup" }
      ],
      flowSteps: [
        { icon: "🏢", title: "Address Details", brief: "Source and destination office locations" },
        { icon: "💻", title: "Item Details", brief: "Tables, chairs, and desk cabinets list" },
        { icon: "⚡", title: "IT/Electronics", brief: "Servers, switches, systems catalog" },
        { icon: "📋", title: "Inventory", brief: "Secure tags for business files and archives" },
        { icon: "🛡️", title: "Service Options", brief: "Standard shifting or server transport setup" },
        { icon: "📅", title: "Schedule", brief: "Finalize weekend/night shift timings" }
      ],
      whatWeDo: [
        "Anti-static bubble wrapping for servers, workstations, and network switches.",
        "Systematic numbering and labeling of desks, drawers, and document bins.",
        "Out-of-hours shifting options to keep downtime at absolute zero.",
        "Desktop setup and wiring arrangements at the new corporate location."
      ],
      whatYouNeed: [
        "Back up all critical databases and server configurations.",
        "Catalog and lock confidential business records in security boxes.",
        "Direct employee personal items to be taken home prior to move day.",
        "Arrange lift usage permissions with building management."
      ],
      faqs: [
        { question: "Can you work after office hours?", answer: "Yes! We schedule corporate shifts during weekends or after-hours to ensure zero disruption to your daily operations." },
        { question: "How do you handle server equipment?", answer: "We use double-thick anti-static bubble wrap and dedicated IT crates. Servers are handled and configured by specialized tech handlers." },
        { question: "What about confidential documents?", answer: "We provide secure, numbered document crates and catalog tags to trace confidential office files throughout transit." },
        { question: "What's included in the quote?", answer: "Our B2B quotes cover disassembly, packing supplies, vehicle transit, unloading, assembly, and GST invoice details." }
      ]
    },
    warehouse: {
      whyPill: "24/7 CCTV & Climate Controlled Slots",
      journeySteps: [
        { icon: "🚚", title: "Safe Pickup", desc: "Professional logistics retrieval from your site" },
        { icon: "🏷️", title: "Safe Crate", desc: "Secure barcoded packing & cataloging" },
        { icon: "🔒", title: "CCTV Slots", desc: "Monitored, humidity-controlled compartments" },
        { icon: "📦", title: "Retrieval", desc: "Doorstep delivery on demand" }
      ],
      flowSteps: [
        { icon: "📍", title: "Pickup Details", brief: "Address and pickup schedule details" },
        { icon: "🏭", title: "Storage Type", brief: "Climate-regulated or normal lock slots" },
        { icon: "📦", title: "Item Details", brief: "Detailed barcode list of stored crates" },
        { icon: "📅", title: "Schedule & Submit", brief: "Finalize storage duration and confirm" }
      ],
      whatWeDo: [
        "Dedicated, humidity-regulated clean storage slots.",
        "Digital cataloging and barcode indexing of all incoming crates.",
        "24/7 CCTV tracking with structural security protocols and guards.",
        "Flexible scheduling for partial or full retrieval transits."
      ],
      whatYouNeed: [
        "Categorize and clean items before sending them to storage.",
        "Compile a list of high-value items requiring climate control.",
        "Finalize insurance selections for long-term inventory storage.",
        "Secure keys and locks for custom container spaces."
      ],
      faqs: [
        { question: "How secure is the warehouse?", answer: "Our storage hubs feature 24/7 CCTV surveillance, fire prevention alarms, digital stock indexes, and security guards." },
        { question: "Is climate control available?", answer: "Yes, we provide humidity-regulated climate control slots for delicate inventory, documents, and wooden furniture items." },
        { question: "Can I access my items anytime?", answer: "Retrieval requests can be scheduled 24 hours in advance via our admin client or call support team." },
        { question: "Are my goods insured?", answer: "Yes, storage items are comprehensively covered by fire and theft insurance options." }
      ]
    },
    local: {
      whyPill: "Fast, Budget-Friendly Same-Day Moves",
      journeySteps: [
        { icon: "📱", title: "3-Min Booking", desc: "Submit details & choose a local truck option" },
        { icon: "📦", title: "Tape & Wrap", desc: "Quick basic wrap protection for transport" },
        { icon: "🚚", title: "Direct Transit", desc: "Direct route shifting via local transporter" },
        { icon: "🏁", title: "Quick Delivery", desc: "Same-day doorstep placement and alignment" }
      ],
      flowSteps: [
        { icon: "📍", title: "Select Service", brief: "Configure local distance limits" },
        { icon: "🚚", title: "Pickup Details", brief: "Source address and floor level notes" },
        { icon: "📦", title: "Item Details", brief: "Furniture list and boxes details" },
        { icon: "🚛", title: "Vehicle Details", brief: "Select Tata Ace, Bolero, or Containers" },
        { icon: "📅", title: "Schedule", brief: "Choose move date and morning slots" },
        { icon: "🚀", title: "Submit", brief: "Verify checklist and submit lead" }
      ],
      whatWeDo: [
        "Rapid same-day loading, short-haul transport, and unloading.",
        "Budget-friendly pricing packages tailored for local relocations.",
        "Experienced drivers navigating city-specific load zones and routes.",
        "Basic packing with high-strength cargo wrap and tapes."
      ],
      whatYouNeed: [
        "Measure doorways and elevators to check if large furniture fits.",
        "Block parking slots for cargo trucks at both pickup and drop points.",
        "Keep small loose items in bags to speed up packaging.",
        "Secure entry permissions from local resident associations."
      ],
      faqs: [
        { question: "How fast can you complete a local move?", answer: "Local moves are completed on the same day. Booking takes under 3 minutes, and transit typically takes 1 to 4 hours." },
        { question: "Is packing included in local shifting?", answer: "Yes! Our local packing package includes bubble wrap, tape, and boxes for fragile and electronic items." },
        { question: "Can I book on weekends?", answer: "Yes, weekend slots are highly active. We recommend booking 3 days in advance to secure preferred morning timings." },
        { question: "What size truck will be used?", answer: "We select trucks (Tata Ace, Mahindra Bolero, or 14-foot containers) depending on the volume of items declared in the inventory." }
      ]
    },
    vehicle: {
      whyPill: "Scratch-Free Enclosed Auto Carriers",
      journeySteps: [
        { icon: "📋", title: "Condition Check", desc: "Multi-point digital scratch inspection report" },
        { icon: "🔒", title: "Carrier Safe", desc: "Side-wall harnesses inside enclosed carrier" },
        { icon: "🛰️", title: "GPS Transit", desc: "Real-time transport tracking notifications" },
        { icon: "🔑", title: "Safe Handover", desc: "Inspection match verification on delivery" }
      ],
      flowSteps: [
        { icon: "📍", title: "Select Vehicle", brief: "Specify Car, Bike, or Scooter transit" },
        { icon: "🚚", title: "Pickup Address", brief: "Doorstep pickup address log" },
        { icon: "📋", title: "Make & Model", brief: "Brand, registration, status logs" },
        { icon: "🚛", title: "Carrier Select", brief: "Open carrier or Enclosed trailer" },
        { icon: "📅", title: "Schedule", brief: "Finalize transit dates" },
        { icon: "🚀", title: "Submit", brief: "Review transit terms and submit" }
      ],
      whatWeDo: [
        "Doorstep vehicle pickup and transport in dedicated car-carriers.",
        "High-strength wheel harnessing and side-wall stabilization.",
        "Complete structural scratch checks with digital condition reports.",
        "Live GPS transit mapping links sent directly to your phone."
      ],
      whatYouNeed: [
        "Keep fuel levels below 1/4th tank to meet carrier load guidelines.",
        "Clean the vehicle so scratch inspections are clear.",
        "Remove personal belongings and accessories from the vehicle.",
        "Prepare photocopies of RC book, insurance, and owner ID papers."
      ],
      faqs: [
        { question: "How is my vehicle transported?", answer: "We use dedicated enclosed auto-carriers or secure open carriers with safety harnessing to prevent movement during transit." },
        { question: "Is transit insurance included?", answer: "Yes, all vehicle transits include standard structural damage and scratch coverage." },
        { question: "Do I need to empty the fuel tank?", answer: "We recommend keeping the fuel level below 1/4th tank for safety regulations during vehicle transport." },
        { question: "What documents are required?", answer: "You need to provide copies of the vehicle Registration Certificate (RC), insurance papers, and owner ID." }
      ]
    },
    exhibition: {
      whyPill: "Time-Critical Setup & Reverse Logistics",
      journeySteps: [
        { icon: "⏱️", title: "Safe Transport", desc: "Express delivery timed to stall setup schedule" },
        { icon: "🛠️", title: "Setup Help", desc: "Dedicated crew assisting loading & stand setups" },
        { icon: "🏢", title: "Buffer Hold", desc: "Temporary warehousing before & after show times" },
        { icon: "🔄", title: "Return Logistics", desc: "Dismantling and safe return transport" }
      ],
      flowSteps: [
        { icon: "📍", title: "Event Setup", brief: "Enter show date and timings" },
        { icon: "🚚", title: "Venue Destination", brief: "Hall number, stall address logs" },
        { icon: "📦", title: "Exhibit Inventory", brief: "Stall panels, displays, brochure index" },
        { icon: "🚛", title: "Transit Carrier", brief: "Express delivery scheduler selection" },
        { icon: "📅", title: "Schedule", brief: "On-site unloading time frame" },
        { icon: "🚀", title: "Submit", brief: "Submit event logistics form" }
      ],
      whatWeDo: [
        "Direct time-critical transport of stalls, banners, and brochures.",
        "On-site event crew assisting with loading and stand installations.",
        "Secure warehouse storage buffer slots before and after show times.",
        "Complete reverse packing and return logistics to home warehouses."
      ],
      whatYouNeed: [
        "Finalize booth structural specifications and unloading timelines.",
        "Apply for event organizer gate passes and unloading permit slots.",
        "Pack delicate exhibit electronics in custom flight cases.",
        "Provide contact lists of booth managers present at the venue."
      ],
      faqs: [
        { question: "Do you coordinate setup at the venue?", answer: "Yes, our exhibition event crew coordinates on-site booth transport, loading, and structural setup." },
        { question: "What transit speed options do you have?", answer: "We offer express time-critical transport slots to guarantee deliveries match event setup timelines." },
        { question: "Do you handle reverse logistics?", answer: "Yes, we coordinate packing, dismantle, and return logistics back to your warehouse post-event." },
        { question: "What if the event gets rescheduled?", answer: "We offer flexible scheduling and safe storage buffer slots if event timings are altered." }
      ]
    }
  };

  const currentConfig = serviceConfig[service.id] || serviceConfig.household;

  return (
    <div className={styles.pageContainer}>
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
          <div className={styles.leftContent}>
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
          <div className={styles.imageCard}>
            <Image
              src={service.image}
              alt={service.title}
              fill
              unoptimized
              className={styles.image}
              priority
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </section>

        {/* SECTION 2: SERVICE FLOW */}
        <section className={styles.flowSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>STEP BY STEP</span>
            <h2 className={styles.sectionTitle}>Our Shifting Process</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.flowTimeline}>
            {currentConfig.flowSteps.map((step, index) => (
              <div key={step.title} className={styles.flowCard}>
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
            <div className={styles.includedCard}>
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
            <div className={styles.includedCard}>
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

        {/* SECTION 4: PRICING GUIDE */}
        <section className={styles.pricingSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>TRANSPARENT TARIFF</span>
            <h2 className={styles.sectionTitle}>How Pricing Works</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.pricingGrid}>
            {/* Card 1 */}
            <div className={styles.pricingCard}>
              <span className={styles.pricingCardIcon}>📊</span>
              <h4 className={styles.pricingCardTitle}>Factors That Affect Price</h4>
              <p className={styles.pricingCardDesc}>
                Pricing is determined by transport distance, volume size (number of rooms/workstations), floor height, lift access availability, and packaging quality.
              </p>
            </div>

            {/* Card 2 */}
            <div className={styles.pricingCard}>
              <span className={styles.pricingCardIcon}>📋</span>
              <h4 className={styles.pricingCardTitle}>How We Quote</h4>
              <p className={styles.pricingCardDesc}>
                We calculate distance and packaging variables to suggest correct transport carrier options. Our quote details structural splits, taxes, and service margins.
              </p>
            </div>

            {/* Card 3 */}
            <div className={styles.pricingCard}>
              <span className={styles.pricingCardIcon}>💳</span>
              <h4 className={styles.pricingCardTitle}>Payment Process</h4>
              <p className={styles.pricingCardDesc}>
                Pay a small advance token online to secure booking date, pay the secondary balance at cargo loading pickup, and settle remaining dues post-delivery.
              </p>
            </div>
          </div>

          <div className={styles.pricingNote}>
            * Final quote provided after a free consultation call
          </div>
        </section>

        {/* SECTION 5: ENHANCED FORM */}
        <section className={styles.bookingSection} id="booking-form">
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h3>Request a Service Quote</h3>
              <p>Provide shipment parameters, and our logistics experts will compile custom quotes.</p>
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

                {/* Service Type (disabled indicator) */}
                <div className={styles.inputGroup}>
                  <label htmlFor="serviceType">Service Selected</label>
                  <input
                    type="text"
                    id="serviceType"
                    value={service.title}
                    disabled
                    className={styles.formInput}
                  />
                </div>

                {/* DYNAMIC SHIFTING FIELDS SPECIFIC TO SERVICE */}
                {service.id === "household" && (
                  <>
                    <div className={styles.inputGroup}>
                      <label htmlFor="propertyType">Property Type *</label>
                      <select
                        id="propertyType"
                        value={propertyType}
                        onChange={(e) => setPropertyType(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select property type</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Villa">Villa</option>
                        <option value="Independent House">Independent House</option>
                        <option value="Society">Society</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="numRooms">Number of Rooms *</label>
                      <select
                        id="numRooms"
                        value={numRooms}
                        onChange={(e) => setNumRooms(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select size</option>
                        <option value="1 BHK">1 BHK</option>
                        <option value="2 BHK">2 BHK</option>
                        <option value="3 BHK">3 BHK</option>
                        <option value="4 BHK+">4 BHK+</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="floorLevel">Floor Level *</label>
                      <select
                        id="floorLevel"
                        value={floorLevel}
                        onChange={(e) => setFloorLevel(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select floor</option>
                        <option value="Ground Floor">Ground Floor</option>
                        <option value="1-5 Floor">1-5 Floor</option>
                        <option value="5-10 Floor">5-10 Floor</option>
                        <option value="Above 10 Floor">Above 10 Floor</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="liftAvailable">Lift Available *</label>
                      <select
                        id="liftAvailable"
                        value={liftAvailable}
                        onChange={(e) => setLiftAvailable(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select option</option>
                        <option value="Yes">Yes, Lift is Available</option>
                        <option value="No">No, Lift is Not Available</option>
                      </select>
                    </div>
                  </>
                )}

                {service.id === "office" && (
                  <>
                    <div className={styles.inputGroup}>
                      <label htmlFor="buildingType">Building Type *</label>
                      <select
                        id="buildingType"
                        value={buildingType}
                        onChange={(e) => setBuildingType(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select building type</option>
                        <option value="Commercial Building">Commercial Building</option>
                        <option value="IT Park">IT Park</option>
                        <option value="Co-working Space">Co-working Space</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="workstations">Number of Workstations *</label>
                      <input
                        type="number"
                        id="workstations"
                        value={workstations}
                        onChange={(e) => setWorkstations(e.target.value)}
                        placeholder="e.g. 25"
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="serverRoom">Server Shifting Required? *</label>
                      <select
                        id="serverRoom"
                        value={serverRoom}
                        onChange={(e) => setServerRoom(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select option</option>
                        <option value="Yes">Yes, Server Room included</option>
                        <option value="No">No, standard workstations only</option>
                      </select>
                    </div>
                  </>
                )}

                {service.id === "vehicle" && (
                  <>
                    <div className={styles.inputGroup}>
                      <label htmlFor="vehicleType">Vehicle Type *</label>
                      <select
                        id="vehicleType"
                        value={vehicleType}
                        onChange={(e) => setVehicleType(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select vehicle type</option>
                        <option value="Car">Car / Sedan / SUV</option>
                        <option value="Bike">Motorcycle / Bike</option>
                        <option value="Scooter">Scooter / Scooty</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="vehicleMake">Vehicle Brand / Make *</label>
                      <input
                        type="text"
                        id="vehicleMake"
                        value={vehicleMake}
                        onChange={(e) => setVehicleMake(e.target.value)}
                        placeholder="e.g. Honda, Maruti Suzuki"
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="vehicleModel">Vehicle Model *</label>
                      <input
                        type="text"
                        id="vehicleModel"
                        value={vehicleModel}
                        onChange={(e) => setVehicleModel(e.target.value)}
                        placeholder="e.g. Unicorn, Swift"
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="vehicleInsurance">Transit Insurance Required? *</label>
                      <select
                        id="vehicleInsurance"
                        value={vehicleInsurance}
                        onChange={(e) => setVehicleInsurance(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select option</option>
                        <option value="Yes">Yes, include transit insurance</option>
                        <option value="No">No, basic liability only</option>
                      </select>
                    </div>
                  </>
                )}

                {service.id === "warehouse" && (
                  <>
                    <div className={styles.inputGroup}>
                      <label htmlFor="storageCategory">Item Category *</label>
                      <select
                        id="storageCategory"
                        value={storageCategory}
                        onChange={(e) => setStorageCategory(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select category</option>
                        <option value="Household Items">Household Items</option>
                        <option value="Office Inventory">Office Inventory</option>
                        <option value="Industrial Cargo">Industrial Cargo</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="storageDuration">Storage Duration Needed *</label>
                      <select
                        id="storageDuration"
                        value={storageDuration}
                        onChange={(e) => setStorageDuration(e.target.value)}
                        className={`${styles.formInput} ${styles.formSelect}`}
                        required
                      >
                        <option value="">Select duration</option>
                        <option value="1 Month">1 Month</option>
                        <option value="3 Months">3 Months</option>
                        <option value="6 Months">6 Months</option>
                        <option value="12 Months+">12 Months+</option>
                      </select>
                    </div>
                  </>
                )}

                {service.id === "exhibition" && (
                  <>
                    <div className={styles.inputGroup}>
                      <label htmlFor="exhibitionDate">Event / Show Date *</label>
                      <input
                        type="date"
                        id="exhibitionDate"
                        value={exhibitionDate}
                        onChange={(e) => setExhibitionDate(e.target.value)}
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="exhibitionVenue">Venue Name *</label>
                      <input
                        type="text"
                        id="exhibitionVenue"
                        value={exhibitionVenue}
                        onChange={(e) => setExhibitionVenue(e.target.value)}
                        placeholder="e.g. Pragati Maidan, JECC"
                        className={styles.formInput}
                        required
                      />
                    </div>

                    <div className={styles.inputGroup}>
                      <label htmlFor="exhibitionStallSize">Stall Dimensions / Size *</label>
                      <input
                        type="text"
                        id="exhibitionStallSize"
                        value={exhibitionStallSize}
                        onChange={(e) => setExhibitionStallSize(e.target.value)}
                        placeholder="e.g. 3m x 3m, 6m x 6m"
                        className={styles.formInput}
                        required
                      />
                    </div>
                  </>
                )}

                {/* Message Details */}
                <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
                  <label htmlFor="message">Relocation / Cargo Details *</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Provide details about your shipment, size, origin, destination, and timeline..."
                    className={`${styles.formInput} ${styles.textareaInput}`}
                    required
                  ></textarea>
                </div>
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

        {/* SECTION 6: FAQ ACCORDION */}
        <section className={styles.faqSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>HELP DESK</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.faqList}>
            {currentConfig.faqs.map((faq, index) => {
              const isActive = expandedFaq === index;
              return (
                <div
                  key={faq.question}
                  className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className={styles.faqQuestionBlock}>
                    <h4 className={styles.faqQuestion}>{faq.question}</h4>
                    <svg
                      className={styles.faqArrow}
                      viewBox="0 0 24 24"
                      width="18"
                      height="18"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      fill="none"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>

                  {isActive && (
                    <div className={styles.faqAnswer}>
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7: RELATED SERVICES STRIP */}
        <section className={styles.relatedSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>ADDITIONAL SOLUTIONS</span>
            <h2 className={styles.sectionTitle}>You May Also Need</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.relatedGrid}>
            {relatedServices.map((relService) => (
              <Link
                key={relService.id}
                href={`/services/${relService.id}`}
                className={styles.relatedCard}
              >
                <span className={styles.relatedOverline}>{relService.subtitle}</span>
                <h4 className={styles.relatedTitle}>{relService.title}</h4>
                <p className={styles.relatedDesc}>
                  {relService.description.slice(0, 100)}...
                </p>
              </Link>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
}
