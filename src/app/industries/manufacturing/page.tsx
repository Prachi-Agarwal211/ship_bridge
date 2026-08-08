import type { Metadata } from "next"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import ScrollRevealWrapper from "@/components/ScrollRevealWrapper"
import HeroScrollFade from "@/components/HeroScrollFade"

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Manufacturing & Industrial Logistics Solutions | ShipBridge India",
    description: "ShipBridge offers specialized manufacturing logistics: raw material supply chain, finished goods distribution, just-in-time delivery, and warehouse management for industrial manufacturers across India.",
    alternates: { canonical: 'https://www.shipbridge.in/industries/manufacturing' },
    openGraph: {
      title: "Manufacturing & Industrial Logistics | ShipBridge",
      description: "Specialized logistics for manufacturing: raw materials, finished goods, JIT delivery, warehousing.",
      images: [{ url: "/industries/manufacturing_hero.png" }],
    },
    twitter: {
      card: 'summary_large_image',
      title: "Manufacturing Logistics | ShipBridge",
      description: "End-to-end manufacturing logistics across India.",
      images: ["/industries/manufacturing_hero.png"],
    },
  }
}

export default function ManufacturingIndustryPage() {
  return (
    <ScrollRevealWrapper>
      <Navbar />
      <HeroScrollFade>
        <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#111] to-[#0f0d0b]" />
          <div className="absolute inset-0 mesh-bg" />
          <div className="absolute inset-0 opacity-20" style={{
            background: 'radial-gradient(ellipse at 30% 50%, #f97316 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, #22c55e 0%, transparent 60%)',
            filter: 'blur(60px)',
          }} />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl p-8 md:p-12 rounded-2xl"
              style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(16px)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <span className="text-sm font-bold uppercase tracking-widest text-[var(--color-orange)]">MANUFACTURING LOGISTICS</span>
              <h1 className="text-4xl md:text-5xl font-bold font-poppins mt-4 mb-6">
                Moving <span className="gradient-text">Indian Manufacturing</span> Forward
              </h1>
              <p className="text-gray-300 text-lg">Specialized logistics for manufacturing: raw material procurement, finished goods distribution, just-in-time delivery, and integrated warehouse management across India.</p>
            </div>
          </div>
        </section>
      </HeroScrollFade>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            { icon: '🏭', title: 'Raw Material Supply Chain', desc: 'Efficient procurement and delivery of raw materials to manufacturing plants. Containerized transport, GPS tracking, and scheduled deliveries.' },
            { icon: '📦', title: 'Finished Goods Distribution', desc: 'Pan-India distribution of finished products from factory to warehouse, distributor, or retailer. FTL, PTL, and express options.' },
            { icon: '⏱️', title: 'Just-in-Time Delivery', desc: 'Time-definite JIT delivery services to keep your production lines running. Integrated with your supply chain schedule.' },
          ].map((item, i) => (
            <div key={i} className="bg-[#111] rounded-2xl p-8 border border-gray-800 hover:border-[var(--color-orange)] transition-all hover:-translate-y-1">
              <span className="text-3xl mb-4 block">{item.icon}</span>
              <h3 className="text-xl font-bold font-poppins mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Optimize Your Manufacturing Supply Chain</h2>
          <p className="text-gray-400 mb-8">Get custom manufacturing logistics solutions for your plant.</p>
          <Link href="/services/household#booking-form?industry=manufacturing" className="global-btn"><span className="global-btn-text">Get Manufacturing Quote</span></Link>
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
            { "@type": "ListItem", "position": 3, "name": "Manufacturing", "item": "https://www.shipbridge.in/industries/manufacturing" },
          ]
        }) }}
      />
    </ScrollRevealWrapper>
  )
}
