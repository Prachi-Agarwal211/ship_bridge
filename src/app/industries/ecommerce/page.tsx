import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper"
import HeroScrollFade from "@/components/HeroScrollFade"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "E-Commerce Logistics Solutions | ShipBridge India",
    description: "ShipBridge offers end-to-end e-commerce logistics: last-mile delivery, fulfillment, reverse returns, and real-time tracking for D2C brands and online retailers across India.",
    alternates: { canonical: 'https://www.shipbridge.in/industries/ecommerce' },
    openGraph: {
      title: "E-Commerce Logistics Solutions | ShipBridge",
      description: "Last-mile delivery, fulfillment, reverse logistics for e-commerce. Real-time tracking, pan-India coverage.",
      images: [{ url: "/industries/ecommerce_hero.png" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "E-Commerce Logistics | ShipBridge",
      description: "End-to-end e-commerce logistics across India.",
      images: ["/industries/ecommerce_hero.png"],
    },
  }
}

export default function EcommerceIndustryPage() {
  return (
    <ScrollRevealWrapper>
      <Navbar />
      <HeroScrollFade>
        <section className="relative h-[80vh] min-h-[600px] flex items-center">
          <Image src="/industries/ecommerce_hero.png" alt="E-Commerce Logistics" fill priority className="object-cover" />
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.3) 100%)',
          }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl p-8 md:p-12 rounded-2xl"
              style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-orange)]">E-COMMERCE LOGISTICS</span>
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mt-4 mb-6">
                Powering <span className="gradient-text">Online Retail</span> Across India
              </h1>
              <p className="text-gray-300 text-lg">End-to-end e-commerce logistics solutions: last-mile delivery, warehouse fulfillment, reverse returns, and real-time tracking for D2C brands and online retailers.</p>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: '🚚', title: 'Last-Mile Delivery', desc: 'Reach every corner of India with our extensive delivery network. Real-time tracking and proof of delivery for every order.' },
            { icon: '📦', title: 'Fulfillment & Warehousing', desc: 'Smart warehousing with inventory management, pick-pack-ship, and automated order processing across multiple hubs.' },
            { icon: '🔄', title: 'Reverse Logistics', desc: 'Hassle-free returns management. Pre-approved pickups, quality checks, and seamless integration with your return portal.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#111] rounded-2xl p-8 border border-gray-800 hover:border-[var(--color-orange)] transition-all hover:-translate-y-1">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold font-poppins mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Ready to Scale Your E-Commerce?</h2>
          <p className="text-gray-400 mb-8">Get custom e-commerce logistics solutions for your brand.</p>
          <Link href="/services/household#booking-form?industry=ecommerce" className="global-btn"><span className="global-btn-text">Get E-Commerce Quote</span></Link>
        </div>
      </div>

      {/* BREADCRUMB JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shipbridge.in" },
            { "@type": "ListItem", "position": 2, "name": "Industries", "item": "https://www.shipbridge.in/industries" },
            { "@type": "ListItem", "position": 3, "name": "E-Commerce", "item": "https://www.shipbridge.in/industries/ecommerce" },
          ]
        }) }}
      />
    </ScrollRevealWrapper>
  )
}
