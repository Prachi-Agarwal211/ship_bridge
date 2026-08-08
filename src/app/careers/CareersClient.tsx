"use client";

import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/Navbar";
import OurCulture from "@/components/OurCulture";
import styles from "./page.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function CareersClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    about: "",
  });

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isDesktop = window.matchMedia('(min-width: 769px)').matches;

    const tl = gsap.timeline();
    tl.from('.hero-elem', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power3.out',
      delay: 0.2
    });

    if (isDesktop) {
      const heroSection = containerRef.current?.querySelector(`.${styles.heroSection}`);
      const heroContent = heroSection?.querySelector(`.${styles.heroContent}`);
      if (heroSection && heroContent) {
        gsap.to(heroContent, {
          yPercent: -30,
          opacity: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: heroSection,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }

    gsap.from('.apply-section', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.apply-section',
        start: 'top 85%',
      }
    });
  }, { scope: containerRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    const subject = encodeURIComponent(`Career Application — ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nAbout Me:\n${formData.about}`
    );
    setTimeout(() => {
      window.location.href = `mailto:careers@shipbridge.in?subject=${subject}&body=${body}`;
      setFormState("sent");
    }, 600);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.pageContainer} ref={containerRef}>
      <Navbar />

      {/* Particle Background */}
      <div className={styles.particleContainer}>
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={styles.particle}
            style={{
              left: `${[15, 85, 45, 70, 25, 60, 90, 35][i]}%`,
              animationDelay: `${i * 1.8}s`,
              animationDuration: `${[13, 17, 12, 16, 14, 15, 18, 13][i]}s`
            }}
          />
        ))}
      </div>

      {/* HERO */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={`hero-elem ${styles.overline}`}>WE ARE HIRING</span>
            <h1 className={`hero-elem ${styles.heroTitle}`}>
              Build the Future of<br />
              <span className={styles.highlightOrange}>Indian Logistics</span>
            </h1>
            <p className={`hero-elem ${styles.heroSub}`}>
              We&apos;re a small team building something big. If you&apos;re passionate about logistics, technology, and making India move smarter — we want to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* CULTURE */}
      <OurCulture />

      {/* APPLICATION FORM */}
      <section className={`${styles.applySection} apply-section`}>
        <div className={styles.container}>
          <div className={styles.applyGrid}>

            {/* Left — message */}
            <div className={styles.applyLeft}>
              <span className={styles.overline}>JOIN THE CREW</span>
              <h2 className={styles.applyTitle}>
                Drop Us a <span className={styles.highlightOrange}>Line</span>
              </h2>
              <div className={styles.underlineBar}></div>
              <p className={styles.applyDesc}>
                No rigid job descriptions. No lengthy portals. Just tell us who you are, what you&apos;re great at, and how you&apos;d like to help ShipBridge grow. We review every single application.
              </p>

              <div className={styles.perksList}>
                {[
                  { icon: "⚡", text: "Fast-moving startup culture" },
                  { icon: "🌍", text: "Remote-friendly, India-first" },
                  { icon: "📈", text: "Early equity & growth path" },
                  { icon: "🛠️", text: "Work with cutting-edge tech" },
                ].map((perk, i) => (
                  <div key={i} className={styles.perkItem}>
                    <span className={styles.perkIcon}>{perk.icon}</span>
                    <span className={styles.perkText}>{perk.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div className={styles.applyCard}>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formRow}>
                  <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={styles.input}
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.inputGroup}>
                    <label className={styles.label} htmlFor="phone">Phone</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={styles.input}
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label} htmlFor="about">Tell us about yourself</label>
                  <textarea
                    id="about"
                    name="about"
                    required
                    rows={5}
                    placeholder="What do you do? What excites you about ShipBridge? Share anything — a portfolio, a resume link, or just a quick intro."
                    className={styles.textarea}
                    value={formData.about}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className={`${styles.submitBtn} global-btn`}
                  disabled={formState === "sending"}
                >
                  <span className="global-btn-text">
                    {formState === "sending"
                      ? "Opening mail client…"
                      : formState === "sent"
                      ? "Sent — Thank you!"
                      : "Send Application"}
                  </span>
                </button>

                <p className={styles.formNote}>
                  We&apos;ll get back to you within 48 hours.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
