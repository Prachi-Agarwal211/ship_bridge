import type { Metadata } from 'next'
import Link from 'next/link'
import cities, { INDIA_STATES } from '@/lib/indian-cities'
import Navbar from '@/components/Navbar'
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper'

export const metadata: Metadata = {
  title: 'Household Shifting & Relocation Services Across India | ShipBridge',
  description: 'ShipBridge offers professional household shifting, local moves, office relocation, vehicle transport, exhibition logistics, and warehousing across 50+ cities in India. Premium packing, GPS tracking, fully insured — stress-free relocation.',
  alternates: { canonical: 'https://www.shipbridge.in/services/household' },
  openGraph: {
    title: 'Household & Relocation Services Across India | ShipBridge',
    description: 'Professional household shifting, local moves, office relocation, vehicle transport, and warehousing — serving 50+ cities across India. Premium packing, GPS tracked, fully insured.',
    images: [{ url: '/seo/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Household & Relocation Services Across India | ShipBridge',
    description: 'Professional household shifting, local moves, office relocation — serving 50+ cities. Premium packing, GPS tracked.',
    images: ['/seo/og-image.jpg'],
  },
  keywords: 'household shifting India, packers and movers, local shifting, office relocation, vehicle transport, car bike transport India, exhibition logistics, warehouse storage, relocation services India, ShipBridge household shifting',
}

const HOUSEHOLD_SERVICES = [
  {
    slug: 'household-shifting',
    title: 'Household Shifting',
    subtitle: 'Residential Relocation',
    description: 'Door-to-door premium packing and relocation for homes. Multi-layer bubble wrapping for fragile items, furniture disassembly & reassembly, secure transit, and room-wise setup at your new home.',
    image: '/services/household.jpeg',
    icon: '🏠',
    badge: 'POPULAR',
    href: '/services/household-shifting',
  },
  {
    slug: 'local-shifting',
    title: 'Local Shifting',
    subtitle: 'Same-City Moves',
    description: 'Fast, affordable same-day moving within your city. Tata Ace to container trucks for any load size. Basic packing included, dedicated local route experts, and doorstep delivery.',
    image: '/services/local.png',
    icon: '🏘️',
    badge: 'BEST VALUE',
    href: '/services/local-shifting',
  },
  {
    slug: 'office-shifting',
    title: 'Office Shifting',
    subtitle: 'Corporate Relocation',
    description: 'Zero-downtime corporate relocations. Anti-static packing for servers & IT equipment, document cataloging, after-hours shifting options, and full workstation setup at the new location.',
    image: '/services/office.jpeg',
    icon: '🏢',
    badge: 'CORPORATE',
    href: '/services/office-shifting',
  },
  {
    slug: 'car-bike-transport',
    title: 'Car & Bike Transport',
    subtitle: 'Vehicle Logistics',
    description: 'Safe enclosed-carrier transport for cars, bikes, and commercial vehicles. Scratch-free guarantee, GPS tracking, digital condition reports, and doorstep pickup & delivery across India.',
    image: '/services/vehicle.jpeg',
    icon: '🚗',
    badge: 'INSURED',
    href: '/services/car-bike-transport',
  },
  {
    slug: 'exhibition-trade-logistics',
    title: 'Exhibition & Trade',
    subtitle: 'Event Logistics',
    description: 'Time-critical setup and logistics for exhibitions, trade shows, and events. Booth material transport, on-site assembly, buffer warehousing, and reverse logistics post-event.',
    image: '/services/exhibition.png',
    icon: '🎪',
    badge: 'TIME-CRITICAL',
    href: '/services/exhibition-trade-logistics',
  },
  {
    slug: 'warehouse-storage',
    title: 'Warehouse & Storage',
    subtitle: 'Secure Warehousing',
    description: 'Climate-controlled, fully insured storage for short or long-term needs. 24/7 CCTV surveillance, digital inventory with barcode indexing, and flexible partial retrieval on demand.',
    image: '/services/warehouse.jpeg',
    icon: '🏭',
    badge: 'SECURE',
    href: '/services/warehouse-storage',
  },
]

const FAQS = [
  {
    q: 'What services are included in household shifting?',
    a: 'ShipBridge household shifting includes multi-layer bubble wrapping for fragile items, custom furniture packaging with foam sheets and corner guards, furniture disassembly and reassembly, secure loading and insured transit, and room-wise setup at your new home. We handle everything from a 1BHK to a full villa.',
  },
  {
    q: 'How does vehicle transport work?',
    a: 'We use enclosed auto-carriers with side-wall harnessing to transport cars and bikes scratch-free. Every vehicle gets a digital condition inspection before loading, real-time GPS tracking during transit, and a matching inspection on delivery. Default is enclosed carriers for cars; open carriers available for bikes on request.',
  },
  {
    q: 'Can you shift my office during weekends or after hours?',
    a: 'Yes — we specialize in zero-downtime corporate moves. Most office relocations happen Friday night through Sunday, or overnight on weekdays. We handle anti-static packing for servers and IT equipment, document cataloging with chain-of-custody, and full workstation setup at the new location.',
  },
  {
    q: 'What is the difference between household shifting and local shifting?',
    a: 'Household shifting is for inter-city or long-distance moves and includes premium packing, insured transit, and room setup. Local shifting is for same-city moves — typically same-day, more budget-friendly, with basic packing included. Both are GPS tracked and fully handled by our professional crew.',
  },
  {
    q: 'Do you provide packing materials?',
    a: 'Yes — all packing materials are included: multi-layer bubble wrap, foam sheets, corner guards, wardrobe boxes for clothing, specialized cartons for kitchen items, and heavy-duty tape. Premium bubble wrap and custom crates for fragile/valuable items are available as add-ons.',
  },
]

export default function HouseholdHubPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shipbridge.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.shipbridge.in/services' },
      { '@type': 'ListItem', position: 3, name: 'Household & Relocation', item: 'https://www.shipbridge.in/services/household' },
    ],
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <ScrollRevealWrapper>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-20">
        {/* GEO Answer Block */}
        <div className="seo-page-title" style={{ display: 'none' }}>
          ShipBridge provides comprehensive household and relocation services across 50+ cities and 31 states in India — including household shifting, local moving, office relocation, vehicle transport, exhibition logistics, and warehousing. All services include professional packing, real-time GPS tracking, full insurance coverage, and 24/7 customer support. Serving families and businesses across every major Indian city from Mumbai to Guwahati, Chennai to Srinagar.
        </div>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Household & Relocation</span>
          </nav>

          {/* Hero */}
          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]">
            Household &amp; Relocation Services
          </h1>
          <p className="text-gray-300 text-lg max-w-4xl mb-6 leading-relaxed">
            ShipBridge offers end-to-end relocation and household services across <strong>50+ cities</strong> and <strong>31 states</strong> in India. From shifting your home to moving your office, transporting your car to storing your goods — we handle every move with premium packing, real-time GPS tracking, and full insurance coverage.
          </p>

          <p className="text-gray-400 mb-12">
            {cities.length} major cities • {INDIA_STATES.length} states &amp; UTs • 50,000+ successful moves
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { number: '4,800+', label: 'Household Moves', icon: '🏠' },
              { number: '9,100+', label: 'Local Shifts', icon: '🏘️' },
              { number: '3,200+', label: 'Vehicles Moved', icon: '🚗' },
              { number: '98%', label: 'On-Time Delivery', icon: '✅' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#111] rounded-xl p-5 border border-gray-800 text-center hover:border-[var(--color-orange)] transition-colors">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <div className="text-2xl md:text-3xl font-bold font-poppins text-[var(--color-orange)] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Service Cards */}
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            Our <span className="gradient-text">Relocation Services</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {HOUSEHOLD_SERVICES.map((s) => (
              <Link key={s.slug} href={s.href}
                className="group bg-[#111] rounded-2xl border border-gray-800 p-6 hover:border-[var(--color-orange)] transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{s.icon}</span>
                  {s.badge && (
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-[var(--color-orange)]/20 text-[var(--color-orange)] px-3 py-1 rounded-full">
                      {s.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold font-poppins mb-1 group-hover:text-[var(--color-orange)] transition-colors">{s.title}</h3>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">{s.subtitle}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
                <p className="text-[var(--color-orange)] text-sm font-semibold mt-4 group-hover:translate-x-1 transition-transform">Learn more →</p>
              </Link>
            ))}
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-3 mb-16">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group bg-[#111] rounded-xl border border-gray-800 overflow-hidden accordion-smooth">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer text-gray-200 font-medium hover:text-white transition-colors list-none">
                  <span>{faq.q}</span>
                  <span className="text-gray-500 group-open:rotate-180 transition-transform text-xl leading-none">▼</span>
                </summary>
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* Cities We Serve */}
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            Relocation Services in <span className="gradient-text">Your City</span>
          </h2>
          <div className="flex flex-wrap gap-3 mb-16">
            {[...cities].sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
              <Link
                key={city.slug}
                href={`/services/logistics/${city.slug}`}
                className="bg-[#111] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-300 hover:border-[var(--color-orange)] hover:text-white transition-all hover:-translate-y-0.5"
              >
                {city.name}
                <span className="text-gray-500 text-xs ml-1.5">, {city.state}</span>
              </Link>
            ))}
          </div>

          {/* Support Services */}
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            Also Available <span className="gradient-text">Near You</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <Link href="/services/full-truck-load-services"
              className="bg-[#111] rounded-2xl border border-gray-800 p-6 hover:border-[var(--color-green)] transition-all hover:-translate-y-0.5"
            >
              <span className="text-3xl block mb-3">🚛</span>
              <h3 className="text-lg font-bold font-poppins mb-1">Full Truck Load (FTL)</h3>
              <p className="text-sm text-gray-400">Need to move large items or bulk goods alongside your relocation? Dedicated truck, point-to-point delivery.</p>
            </Link>
            <Link href="/services/part-truck-load-services"
              className="bg-[#111] rounded-2xl border border-gray-800 p-6 hover:border-[var(--color-green)] transition-all hover:-translate-y-0.5"
            >
              <span className="text-3xl block mb-3">📦</span>
              <h3 className="text-lg font-bold font-poppins mb-1">Part Truck Load (PTL)</h3>
              <p className="text-sm text-gray-400">Pay only for the space you use. Perfect for shipping extra household items or small business goods.</p>
            </Link>
          </div>

          {/* CTA */}
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Ready to Make Your Move?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Get a free, no-obligation quote for your household shift, office relocation, or vehicle transport. Our team will call you back within 15 minutes.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+919876543210" className="global-btn"><span className="global-btn-text">📞 Call Now</span></a>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </main>
    </ScrollRevealWrapper>
  )
}
