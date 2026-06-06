"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "What is the minimum investment?",
    answer: "You can start your franchise journey with ShipBridge for as low as ₹50k–1 Lakh as a Transporter Partner. Area Agent models start around ₹2–5 Lakhs, and City Partners range from ₹5–10 Lakhs depending on the target region size."
  },
  {
    question: "Do I need logistics experience?",
    answer: "No prior logistics background is required. We provide a 15-day intensive onboarding training program covering all customer booking flows, fleet allocations, driver management, safety protocols, and operations dashboards."
  },
  {
    question: "How does revenue sharing work?",
    answer: "ShipBridge operates on a transparent revenue-sharing model. City Partners and Area Agents receive a competitive commission percentage on every booking originating from or completed in their territory, processed via direct monthly payouts."
  },
  {
    question: "What tech support do I get?",
    answer: "Franchise partners get full enterprise access to our complete product suite: the Customer App listing, the Operations Admin Portal (lead CRM, tracking, invoice engines), and the RISHVA driver navigation system."
  },
  {
    question: "How long does onboarding take?",
    answer: "Our standardized onboarding workflow takes 15 days. This includes document KYC verification, area eligibility assessment, agreement signing, operations training, and platform profile activation."
  }
];

export default function FranchiseClient() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Form State
  const [name, setName] = useState("");
  const [cityState, setCityState] = useState("");
  const [investment, setInvestment] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFaqClick = (index: number) => {
    setExpandedFaq((prev) => (prev === index ? null : index));
  };

  const handleApplyClick = () => {
    const formElement = document.getElementById("apply-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      name,
      cityState,
      investment,
      occupation,
      phone,
      email,
      message,
      submittedAt: new Date().toISOString()
    };

    // Simulate Google Sheets submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Submitting Franchise Request to Google Sheets:", submissionData);
      setIsSuccess(true);

      // Clear Form Fields
      setName("");
      setCityState("");
      setInvestment("");
      setOccupation("");
      setPhone("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Error submitting franchise form:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Background Glow Blobs */}
      <div className={`${styles.glowBlob} ${styles.glowOrange}`} style={{ top: "10%", right: "5%", width: "500px", height: "500px" }}></div>
      <div className={`${styles.glowBlob} ${styles.glowGreen}`} style={{ top: "30%", left: "5%", width: "600px", height: "600px" }}></div>
      <div className={`${styles.glowBlob} ${styles.glowOrange}`} style={{ bottom: "15%", right: "8%", width: "550px", height: "550px" }}></div>

      {/* SECTION 1: HERO */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.overline}>PARTNERSHIP OPPORTUNITIES</span>
            <h1 className={styles.heroTitle}>
              Become a ShipBridge<br />
              <span className={styles.highlightOrange}>Franchise Partner</span>
            </h1>

            <p className={styles.heroSub}>
              Join India's fastest-growing logistics network. Start your own ShipBridge franchise with low investment, full tech support, and a proven operating model.
            </p>

            <div className={styles.ctaButtons}>
              <button onClick={handleApplyClick} className={styles.ctaFilled}>
                Apply for Franchise
              </button>
              <button className={styles.ctaOutlined}>
                Download Brochure
              </button>
            </div>

            <div className={styles.statChips}>
              <div className={styles.statChip}>₹5L+ Monthly Revenue Potential</div>
              <div className={styles.statChip}>15-Day Onboarding</div>
              <div className={styles.statChip}>Zero Inventory Required</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY FRANCHISE WITH US */}
      <section className={styles.whySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>WHY PARTNER WITH US</span>
            <h2 className={styles.sectionTitle}>Why Franchise With Us</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.whyGrid}>
            {/* Card 1 */}
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>💰</span>
              <h3 className={styles.whyCardTitle}>Low Capital Entry</h3>
              <p className={styles.whyCardDesc}>Start your franchise business with as low as ₹2–5 Lakhs initial capital investment.</p>
            </div>

            {/* Card 2 */}
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>💻</span>
              <h3 className={styles.whyCardTitle}>Complete Tech Suite</h3>
              <p className={styles.whyCardDesc}>Full workspace access to ShipBridge customer apps, operations portals, and vendor routing clients.</p>
            </div>

            {/* Card 3 */}
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>📈</span>
              <h3 className={styles.whyCardTitle}>Proven Brand</h3>
              <p className={styles.whyCardDesc}>Leverage ShipBridge's growing brand reputation and standardized operational credibility.</p>
            </div>

            {/* Card 4 */}
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>📣</span>
              <h3 className={styles.whyCardTitle}>Marketing Support</h3>
              <p className={styles.whyCardDesc}>Access target localized digital campaigns, SEO tools, and WhatsApp marketing templates.</p>
            </div>

            {/* Card 5 */}
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>🎓</span>
              <h3 className={styles.whyCardTitle}>Training Program</h3>
              <p className={styles.whyCardDesc}>Benefit from a 15-day intensive onboarding training program with ongoing operations assistance.</p>
            </div>

            {/* Card 6 */}
            <div className={styles.whyCard}>
              <span className={styles.whyIcon}>🤝</span>
              <h3 className={styles.whyCardTitle}>Revenue Sharing</h3>
              <p className={styles.whyCardDesc}>Transparent commission structure with direct, hassle-free monthly payout schemes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: FRANCHISE MODEL */}
      <section className={styles.modelSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>PARTNER TIERS</span>
            <h2 className={styles.sectionTitle}>Franchise Models</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.modelGrid}>
            {/* City Partner */}
            <div className={styles.modelCard}>
              <h3 className={styles.modelTier}>City Partner</h3>
              <p className={styles.modelSub}>Manage a full city cluster — vehicles, drivers, customer leads, and local warehousing hubs.</p>
              
              <div className={styles.modelStatBlock}>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Investment Range:</span>
                  <span className={styles.modelStatValue}>₹5 – 10 Lakhs</span>
                </div>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Revenue Potential:</span>
                  <span className={styles.modelStatValue}>₹5L+ / Month</span>
                </div>
              </div>

              <ul className={styles.modelFeaturesList}>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Full city cluster franchise rights</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Real-time dispatch control desk</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Direct corporate B2B leads</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Regional hub warehousing tools</span>
                </li>
              </ul>
            </div>

            {/* Area Agent */}
            <div className={styles.modelCard}>
              <h3 className={styles.modelTier}>Area Agent</h3>
              <p className={styles.modelSub}>Cover a district or local area — generate shifting leads, schedule services, and coordinate local pickups.</p>
              
              <div className={styles.modelStatBlock}>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Investment Range:</span>
                  <span className={styles.modelStatValue}>₹2 – 5 Lakhs</span>
                </div>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Revenue Potential:</span>
                  <span className={styles.modelStatValue}>₹2L+ / Month</span>
                </div>
              </div>

              <ul className={styles.modelFeaturesList}>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Dedicated sector booking rights</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Customer app profile listing</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Marketing collateral & banners</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>On-ground operations training</span>
                </li>
              </ul>
            </div>

            {/* Transporter Partner */}
            <div className={styles.modelCard}>
              <h3 className={styles.modelTier}>Transporter</h3>
              <p className={styles.modelSub}>Bring your own fleet of trucks or delivery vehicles directly into the ShipBridge logistics grid.</p>
              
              <div className={styles.modelStatBlock}>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Investment Range:</span>
                  <span className={styles.modelStatValue}>₹50k – 1 Lakh</span>
                </div>
                <div className={styles.modelStatItem}>
                  <span className={styles.modelStatLabel}>Revenue Potential:</span>
                  <span className={styles.modelStatValue}>₹1.5L+ / Month</span>
                </div>
              </div>

              <ul className={styles.modelFeaturesList}>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>RISHVA vendor application access</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Daily automated job assignments</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Google Maps navigation routing</span>
                </li>
                <li className={styles.modelFeatureItem}>
                  <span className={styles.checkmarkIcon}>✓</span>
                  <span>Instant POD digital payout triggers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW TO APPLY */}
      <section className={styles.applySection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>APPLICATION FLOW</span>
            <h2 className={styles.sectionTitle}>How To Apply</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.processStrip}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h4 className={styles.stepTitle}>Apply Online</h4>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h4 className={styles.stepTitle}>Eligibility Check</h4>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h4 className={styles.stepTitle}>Agreement Signing</h4>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h4 className={styles.stepTitle}>Training Program</h4>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>5</div>
              <h4 className={styles.stepTitle}>Go Live</h4>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: LEAD FORM */}
      <section className={styles.formSection} id="apply-form">
        <div className={styles.container}>
          <div className={styles.formCard}>
            <h2 className={styles.formTitle}>Apply for Franchise</h2>

            <form onSubmit={handleSubmit} className={styles.formGrid}>
              
              {isSuccess && (
                <div className={styles.successBanner}>
                  <span className={styles.checkmarkWrapper}>✓</span>
                  <span>Request submitted successfully! Our expansion manager will reach out with the brochure pack.</span>
                </div>
              )}

              {/* Name */}
              <div className={styles.inputGroup}>
                <label htmlFor="franchiseName">Full Name *</label>
                <input
                  type="text"
                  id="franchiseName"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* City/State */}
              <div className={styles.inputGroup}>
                <label htmlFor="franchiseCity">City / State *</label>
                <input
                  type="text"
                  id="franchiseCity"
                  value={cityState}
                  onChange={(e) => setCityState(e.target.value)}
                  placeholder="Jaipur, Rajasthan"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Investment Capacity */}
              <div className={styles.inputGroup}>
                <label htmlFor="franchiseInvestment">Investment Capacity *</label>
                <select
                  id="franchiseInvestment"
                  value={investment}
                  onChange={(e) => setInvestment(e.target.value)}
                  className={`${styles.formInput} ${styles.formSelect}`}
                  required
                >
                  <option value="">Select capital range</option>
                  <option value="50k-1L">₹50,000 – ₹1 Lakh (Transporter)</option>
                  <option value="2L-5L">₹2 Lakhs – ₹5 Lakhs (Area Agent)</option>
                  <option value="5L-10L">₹5 Lakhs – ₹10 Lakhs (City Partner)</option>
                  <option value="10L+">₹10 Lakhs+ (Regional Hub)</option>
                </select>
              </div>

              {/* Current Occupation */}
              <div className={styles.inputGroup}>
                <label htmlFor="franchiseOccupation">Current Occupation *</label>
                <input
                  type="text"
                  id="franchiseOccupation"
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)}
                  placeholder="Business owner, driver, manager, etc."
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Phone */}
              <div className={styles.inputGroup}>
                <label htmlFor="franchisePhone">Phone Number *</label>
                <input
                  type="tel"
                  id="franchisePhone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="10 digit phone number"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Email */}
              <div className={styles.inputGroup}>
                <label htmlFor="franchiseEmail">Email Address *</label>
                <input
                  type="email"
                  id="franchiseEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className={styles.formInput}
                  required
                />
              </div>

              {/* Message */}
              <div className={`${styles.inputGroup} ${styles.formGridFull}`}>
                <label htmlFor="franchiseMsg">Message / Queries</label>
                <textarea
                  id="franchiseMsg"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Provide additional details about your business background or target regions..."
                  className={`${styles.formInput} ${styles.textareaInput}`}
                ></textarea>
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

      {/* SECTION 6: FAQ SECTION */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>HELP DESK</span>
            <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
            <div className={styles.underlineBar}></div>
          </div>

          <div className={styles.faqList}>
            {FAQ_DATA.map((faq, index) => {
              const isActive = expandedFaq === index;
              return (
                <div
                  key={index}
                  className={`${styles.faqItem} ${isActive ? styles.faqItemActive : ""}`}
                  onClick={() => handleFaqClick(index)}
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
                <li><Link href="/careers" style={{ color: "#9ca3af" }}>Careers</Link></li>
                <li><Link href="/franchise" style={{ color: "#f97316" }}>Franchise</Link></li>
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
