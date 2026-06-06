"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

interface JobOpening {
  id: string;
  role: string;
  type: string;
  location: string;
  brief: string;
  responsibilities: string[];
  requirements: string[];
}

const JOB_OPENINGS: JobOpening[] = [
  {
    id: "flutter-dev",
    role: "Flutter Developer (Mobile)",
    type: "Full-time",
    location: "Remote",
    brief: "Build the customer and driver app",
    responsibilities: [
      "Develop cross-platform mobile apps for iOS and Android using Flutter & Dart.",
      "Integrate Google Maps SDK, custom GPS tracking modules, and location sync loops.",
      "Implement secure payment checkout workflows via Razorpay SDK integrations.",
      "Build responsive UI animations, micro-interactions, and caching systems."
    ],
    requirements: [
      "2+ years of production experience building high-performance Flutter mobile apps.",
      "Strong understanding of state management patterns (BLoC, Provider, Riverpod).",
      "Experience with background processes, background location tracking, and offline data sync.",
      "Familiarity with native platform channels (Swift/Kotlin/Java) is a plus."
    ]
  },
  {
    id: "fastapi-backend",
    role: "FastAPI Backend Engineer",
    type: "Full-time",
    location: "Remote",
    brief: "Build scalable logistics APIs",
    responsibilities: [
      "Design, build, and maintain highly scalable RESTful APIs using Python and FastAPI.",
      "Manage relational database schemas and queries in PostgreSQL.",
      "Configure caching layers and event-driven background queues via Redis.",
      "Implement secure authentication mechanisms using JWT and OAuth 2.0."
    ],
    requirements: [
      "3+ years of professional backend engineering experience.",
      "Expert knowledge of Python and asynchronous programming paradigms.",
      "Strong experience with PostgreSQL database optimization, indexing, and migrations.",
      "Hands-on experience with Redis, Docker, and cloud deployments (AWS/GCP)."
    ]
  },
  {
    id: "ops-manager",
    role: "Operations Manager",
    type: "Full-time",
    location: "Jaipur",
    brief: "Manage city-level logistics coordination",
    responsibilities: [
      "Coordinate local cargo operations, fleet schedules, and packers/movers tasks.",
      "Build and manage relations with local vehicle transporters and vendor hubs.",
      "Monitor daily relocation jobs to ensure peak punctuality and customer satisfaction.",
      "Streamline warehousing layouts, storage capacity indexing, and inventory logs."
    ],
    requirements: [
      "2+ years of experience in on-ground logistics, relocation, or supply chain management.",
      "Excellent communication, negotiation, and vendor-partner relations skills.",
      "Ability to make split-second routing and resource allocation decisions.",
      "Deep familiarity with Jaipur local transporter hubs."
    ]
  },
  {
    id: "marketing-exec",
    role: "Digital Marketing Executive",
    type: "Full-time",
    location: "Remote",
    brief: "SEO, performance marketing, content",
    responsibilities: [
      "Lead SEO strategies for logistics and shifting services across target locations.",
      "Configure and run high-ROI ad campaigns on Google Ads and Meta platforms.",
      "Manage social media content, brand newsletters, and local business profiles.",
      "Track acquisition metrics, client conversion costs, and analytics reporting."
    ],
    requirements: [
      "2+ years of performance marketing, growth hacking, or digital branding experience.",
      "Proven experience optimizing organic search rankings (SEO tools like Ahrefs/Semrush).",
      "Excellent copywriting, design briefing, and marketing campaign reporting skills."
    ]
  },
  {
    id: "bde-sales",
    role: "Business Development Executive",
    type: "Full-time",
    location: "Multiple cities",
    brief: "Enterprise and SME sales",
    responsibilities: [
      "Source, pitch, and onboard corporate partners, local factories, and SMEs.",
      "Manage the complete B2B sales cycle, contract negotiations, and corporate billing.",
      "Expand market presence through strategic partnerships with residential societies and developers.",
      "Meet monthly new partner acquisition targets to fuel marketplace scaling."
    ],
    requirements: [
      "1+ year of B2B sales, enterprise partnerships, or field marketing experience.",
      "Highly self-motivated with exceptional pitching and negotiation capabilities.",
      "Willingness to travel locally and engage with SME directors and warehouse operators."
    ]
  }
];

export default function CareersClient() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  
  // Form State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [whyText, setWhyText] = useState("");
  const [resumeName, setResumeName] = useState<string>("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleJobCardClick = (jobId: string) => {
    setExpandedJob((prev) => (prev === jobId ? null : jobId));
  };

  const handleApplyClick = (jobRole: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setRole(jobRole);
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setResumeName(e.target.files[0].name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      name,
      email,
      phone,
      role,
      portfolio,
      whyText,
      resumeName,
      submittedAt: new Date().toISOString()
    };

    // Simulate submission to Google Sheets API / Web App
    try {
      // Mock API call timer
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Submitting to Google Sheets Database:", submissionData);
      setIsSuccess(true);
      
      // Clear Form Fields
      setName("");
      setEmail("");
      setPhone("");
      setRole("");
      setPortfolio("");
      setWhyText("");
      setResumeName("");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Error submitting application form: ", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Particle Background */}
      <div className={styles.particleContainer}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 95}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${12 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      {/* SECTION 1: HERO */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.overline}>WE ARE HIRING</span>
            <h1 className={styles.heroTitle}>
              Build the Future of<br />
              <span className={styles.highlightOrange}>Indian Logistics</span>
            </h1>

            <p className={styles.heroSub}>
              We're a small team building something big. If you're passionate about logistics, technology, and making India move smarter — we want to hear from you.
            </p>

            <div className={styles.statRow}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>3</span>
                <span className={styles.statLabel}>Founders</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>10x</span>
                <span className={styles.statLabel}>Growing Fast</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>100%</span>
                <span className={styles.statLabel}>Remote-Friendly</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>ESOPs</span>
                <span className={styles.statLabel}>Equity Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR CULTURE */}
      <section className={styles.cultureSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>WORKING AT SHIPBRIDGE</span>
            <h2 className={styles.sectionTitle}>Our Culture</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.cultureGrid}>
            {/* Culture 1 */}
            <div className={styles.cultureCard}>
              <span className={styles.cultureIcon}>⚡</span>
              <h3 className={styles.cultureTitle}>Move Fast</h3>
              <p className={styles.cultureDesc}>We ship features, not decks. Speed and iteration are in our DNA.</p>
            </div>

            {/* Culture 2 */}
            <div className={styles.cultureCard}>
              <span className={styles.cultureIcon}>🛡️</span>
              <h3 className={styles.cultureTitle}>Own It</h3>
              <p className={styles.cultureDesc}>Everyone here is a founder at heart. We value high agency and ownership.</p>
            </div>

            {/* Culture 3 */}
            <div className={styles.cultureCard}>
              <span className={styles.cultureIcon}>🤝</span>
              <h3 className={styles.cultureTitle}>Customer First</h3>
              <p className={styles.cultureDesc}>Every product design decision starts and ends with customer empathy.</p>
            </div>

            {/* Culture 4 */}
            <div className={styles.cultureCard}>
              <span className={styles.cultureIcon}>🇮🇳</span>
              <h3 className={styles.cultureTitle}>Build for India</h3>
              <p className={styles.cultureDesc}>We're solving real-world, localized problems for real transporters & users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: OPEN POSITIONS */}
      <section className={styles.jobsSection} id="positions">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>OPPORTUNITIES</span>
            <h2 className={styles.sectionTitle}>Open Positions</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.jobsList}>
            {JOB_OPENINGS.map((job) => {
              const isActive = expandedJob === job.id;
              return (
                <div
                  key={job.id}
                  className={`${styles.jobCard} ${isActive ? styles.jobCardActive : ""}`}
                  onClick={() => handleJobCardClick(job.id)}
                >
                  <div className={styles.jobHeader}>
                    <div className={styles.jobTitleBlock}>
                      <h3 className={styles.jobRole}>{job.role}</h3>
                      <div className={styles.jobMetaRow}>
                        <span className={styles.metaLabel}>{job.type}</span>
                        <span className={`${styles.metaLabel} ${styles.metaLocation}`}>📍 {job.location}</span>
                      </div>
                    </div>
                    <div className={styles.expandTrigger}>
                      <span>{isActive ? "Collapse" : "View Details"}</span>
                      <svg
                        className={styles.expandArrow}
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
                  </div>

                  <p className={styles.jobBrief}>{job.brief}</p>

                  {/* Expanded block */}
                  {isActive && (
                    <div className={styles.jobDetails} onClick={(e) => e.stopPropagation()}>
                      <div className={styles.detailsBlock}>
                        <h5>Key Responsibilities</h5>
                        <ul>
                          {job.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                          ))}
                        </ul>
                      </div>
                      <div className={styles.detailsBlock}>
                        <h5>Requirements & Qualifications</h5>
                        <ul>
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <button
                        onClick={(e) => handleApplyClick(job.role, e)}
                        className={styles.applyLinkBtn}
                      >
                        Apply For This Role
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: APPLICATION FORM */}
      <section className={styles.formSection} id="apply-form">
        <div className={styles.container}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Submit Your Application</h2>

            <form onSubmit={handleSubmit} className={styles.formGrid}>
              
              {isSuccess && (
                <div className={styles.successBanner}>
                  🎉 Application submitted successfully! Our team will review your profile and contact you soon.
                </div>
              )}

              {/* Name */}
              <div className={styles.inputGroup}>
                <label htmlFor="applicantName">Full Name *</label>
                <input
                  type="text"
                  id="applicantName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Email */}
              <div className={styles.inputGroup}>
                <label htmlFor="applicantEmail">Email Address *</label>
                <input
                  type="email"
                  id="applicantEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Phone */}
              <div className={styles.inputGroup}>
                <label htmlFor="applicantPhone">Phone Number *</label>
                <input
                  type="tel"
                  id="applicantPhone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter 10 digit phone number"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Role Dropdown */}
              <div className={styles.inputGroup}>
                <label htmlFor="applicantRole">Role Applying For *</label>
                <select
                  id="applicantRole"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`${styles.formInput} ${styles.formSelect}`}
                  required
                >
                  <option value="">Select a position</option>
                  {JOB_OPENINGS.map((job) => (
                    <option key={job.id} value={job.role}>
                      {job.role}
                    </option>
                  ))}
                </select>
              </div>

              {/* LinkedIn URL */}
              <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                <label htmlFor="applicantLink">LinkedIn / Portfolio URL *</label>
                <input
                  type="url"
                  id="applicantLink"
                  value={portfolio}
                  onChange={(e) => setPortfolio(e.target.value)}
                  placeholder="https://linkedin.com/in/username"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Textarea bio */}
              <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                <label htmlFor="applicantWhy">Why ShipBridge? *</label>
                <textarea
                  id="applicantWhy"
                  value={whyText}
                  onChange={(e) => setWhyText(e.target.value)}
                  placeholder="Tell us why you are interested in joining ShipBridge and what makes you a great fit..."
                  className={`${styles.formInput} ${styles.textareaInput}`}
                  required
                ></textarea>
              </div>

              {/* File upload */}
              <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                <label>Resume / CV Upload *</label>
                <div className={styles.fileInputWrapper}>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    required
                  />
                  <div className={styles.fileInputLabel}>
                    {resumeName ? `📄 Selected: ${resumeName}` : "Drag & Drop or Click to Upload Resume (PDF, DOCX)"}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={styles.submitBtn}
              >
                {isSubmitting ? "Submitting Application..." : "Submit Application"}
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid #111", padding: "3rem 0", backgroundColor: "#08080a" }}>
        <div className={styles.container} style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h4 style={{ color: "#fff", marginBottom: "1rem" }}>ShipBridge Logistics</h4>
            <p style={{ color: "#9ca3af", fontSize: "0.9rem", maxWidth: "300px" }}>
              India's premier logistics and relocation aggregator platform.
            </p>
          </div>
          <div style={{ display: "flex", gap: "4rem" }}>
            <div>
              <h5 style={{ color: "#fff", marginBottom: "0.75rem", fontSize: "0.95rem" }}>Company</h5>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.85rem" }}>
                <li><Link href="/" style={{ color: "#9ca3af" }}>Home</Link></li>
                <li><Link href="/about" style={{ color: "#9ca3af" }}>About Us</Link></li>
                <li><Link href="/careers" style={{ color: "#f97316" }}>Careers</Link></li>
                <li><a href="#" style={{ color: "#9ca3af" }}>Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.container} style={{ marginTop: "3rem", paddingTop: "1.5rem", borderTop: "1px solid #1f2937", textAlign: "center", fontSize: "0.8rem", color: "#6b7280" }}>
          &copy; {new Date().getFullYear()} ShipBridge Logistics. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
