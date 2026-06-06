import { SERVICES_DATA } from "@/data/services";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate dynamic SEO metadata for each service page
export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((item) => item.id === resolvedParams.id);
  
  return {
    title: service ? `${service.title} - ShipBridge Logistics` : "Service Not Found",
    description: service 
      ? `Learn more about our premium ${service.title} service. ${service.description}`
      : "Premium relocation and logistics solutions by ShipBridge.",
  };
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((item) => item.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  return (
    <div className={styles.pageContainer}>
      <Navbar />

      {/* Decorative glows */}
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

        {/* Hero Section */}
        <section className={styles.heroGrid}>
          {/* Left Details Column */}
          <div className={styles.leftContent}>
            <span className={styles.overline}>{service.subtitle}</span>
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
          </div>

          {/* Right Image Column */}
          <div className={styles.rightImageColumn}>
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
          </div>
        </section>

        {/* Dynamic Booking/Quote Form */}
        <section className={styles.bookingSection}>
          <div className={styles.formCard}>
            <div className={styles.formHeader}>
              <h3>Request a Service Quote</h3>
              <p>Fill out the form below, and our logistics experts will get in touch shortly.</p>
            </div>
            
            <form>
              <div className={styles.formGrid}>
                {/* Full Name */}
                <div className={styles.inputGroup}>
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Enter your name"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Email Address */}
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Phone Number */}
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Enter phone number"
                    className={styles.formInput}
                    required
                  />
                </div>

                {/* Service Type */}
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

                {/* Message Details */}
                <div className={`${styles.inputGroup} ${styles.inputGroupFull}`}>
                  <label htmlFor="message">Relocation / Cargo Details</label>
                  <textarea
                    id="message"
                    placeholder="Provide details about your shipment, size, origin, destination, and timeline..."
                    className={`${styles.formInput} ${styles.textareaInput}`}
                    required
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button type="submit" className={styles.submitBtn}>
                <span>Submit Request</span>
                <svg className={styles.submitArrow} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p className={styles.footerText}>
            &copy; {new Date().getFullYear()} ShipBridge Logistics. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
