import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import cities from '@/lib/indian-cities'
import { CONTACTS } from '@/data/contacts'
import Navbar from '@/components/Navbar'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return cities.map((city) => ({ slug: city.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const city = cities.find((c) => c.slug === slug)
  if (!city) return { title: 'Logistics Services' }
  return {
    title: `Logistics Services in ${city.name}, ${city.state} | FTL, PTL, Household Shifting`,
    description: `ShipBridge offers reliable logistics in ${city.name}, ${city.state} — FTL trucking, PTL freight, express delivery, household shifting, warehousing & vehicle transport. GPS tracked, insured, instant quote. Serving ${city.name} & all nearby areas.`,
    alternates: { canonical: `https://www.shipbridge.in/services/logistics/${city.slug}` },
    openGraph: {
      title: `Logistics Services in ${city.name}, ${city.state} | ShipBridge India`,
      description: `Professional logistics in ${city.name}: FTL, PTL, express, household shifting, vehicle transport & warehousing. GPS tracked, fully insured. Get instant quote.`,
      images: [{ url: '/seo/og-image.jpg', width: 1200, height: 630, alt: `ShipBridge Logistics ${city.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Logistics Services in ${city.name}, ${city.state} | ShipBridge`,
      description: `FTL, PTL, express delivery, household shifting in ${city.name}. GPS tracked, insured.`,
      images: ['/seo/og-image.jpg'],
    },
    keywords: [
      `logistics in ${city.name}`,
      `logistics services ${city.name}`,
      `FTL services ${city.name}`,
      `truck booking ${city.name}`,
      `freight services ${city.state}`,
      `household shifting ${city.name}`,
      `packers and movers ${city.name}`,
      `warehouse storage ${city.name}`,
      `vehicle transport ${city.name}`,
      `shipbridge ${city.name}`,
    ].join(', '),
  }
}

export default async function CityLogisticsPage({ params }: Props) {
  const { slug } = await params
  const city = cities.find((c) => c.slug === slug)

  if (!city) {
    return (
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">City Not Found</h1>
          <Link href="/" className="text-[var(--color-orange)] hover:underline">Back to Home</Link>
        </div>
      </main>
    )
  }

  const nearbyCities = cities
    .filter((c) => c.stateSlug === city.stateSlug && c.slug !== city.slug)
    .slice(0, 8)

  const services = [
    { title: 'Full Truck Load (FTL)', slug: 'ftl', desc: `Book entire trucks for bulk freight in ${city.name}. Dedicated capacity, faster transit, pan-India coverage.`, icon: '🚛', badge: 'POPULAR' },
    { title: 'Part Truck Load (PTL)', slug: 'ptl', desc: `Cost-effective freight for smaller loads. Share truck space and pay only for what you ship from ${city.name}.`, icon: '📦', badge: 'BEST VALUE' },
    { title: 'Express Delivery', slug: 'express-delivery', desc: `Time-critical parcel delivery across India. Same-day/next-day options from ${city.name}. Guaranteed.`, icon: '⚡', badge: 'FASTEST' },
    { title: 'Household Shifting', slug: 'household-shifting', desc: `Door-to-door relocation in ${city.name}. Professional packing, loading, transport, unloading & setup.`, icon: '🏠', badge: 'TRUSTED' },
    { title: 'Vehicle Transport', slug: 'car-bike-transport', desc: `Car and bike shipping from ${city.name}. Open & enclosed carriers. Doorstep pickup & delivery.`, icon: '🚗', badge: 'SAFE' },
    { title: 'Warehousing', slug: 'warehouse-storage', desc: `Short & long-term storage in ${city.name}. Digital inventory, 24/7 access, insurance covered.`, icon: '🏭', badge: 'SECURE' },
  ]

  const faqItems = [
    { q: `Does ShipBridge provide logistics services in ${city.name}?`, a: `Yes, ShipBridge offers comprehensive logistics and relocation services in ${city.name}, ${city.state}. We cover FTL freight, PTL shipping, express parcel delivery, household moving, office relocation, vehicle transport, and warehousing — all with real-time GPS tracking and insurance coverage.` },
    { q: `What is the cost of FTL truck booking in ${city.name}?`, a: `FTL (Full Truck Load) pricing from ${city.name} depends on distance, cargo weight, and vehicle type. Our AI-optimized pricing starts from competitive rates. Use our route checker or call ${CONTACTS.phone} for an instant quote tailored to your shipment.` },
    { q: `How long does PTL shipping take from ${city.name}?`, a: `PTL (Part Truck Load) transit times from ${city.name}: Same-city delivery within 24 hours, inter-city up to 500km in 2-3 days, and 1000km+ in 3-5 days. We offer real-time tracking for all shipments.` },
    { q: `Do you offer household shifting services in ${city.name}?`, a: `Absolutely. ShipBridge provides end-to-end household relocation in ${city.name}. Our service includes professional packing with high-quality materials, secure loading, insured transit, and careful unloading at your new location. We handle everything from a 1BHK to a full villa.` },
    { q: `Is ShipBridge GPS tracked and insured in ${city.name}?`, a: `Yes, every ShipBridge shipment — whether FTL, PTL, express, or household — is GPS tracked in real-time and fully insured against damage and loss. Our on-time delivery rate exceeds 98% across all routes serving ${city.name}.` },
  ]

  const cityFaqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <main className="min-h-screen bg-black text-white pb-20">
      <Navbar />
      <div className="pt-32 px-4 sm:px-6 lg:px-8">
      {/* GEO Answer Block */}
      <div className="seo-page-title" style={{ display: 'none' }}>
        ShipBridge provides comprehensive logistics and relocation services in {city.name}, {city.state} — Full Truck Load (FTL) freight, Part Truck Load (PTL) shipping, express parcel delivery, household moving, office relocation, vehicle transport, and warehousing solutions with GPS tracking and insurance. Serving businesses and families across {city.name} and all nearby areas with instant quotes and 24/7 support.
      </div>

      {/* JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cityFaqSchema).replace(/</g, '\\u003c') }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          'itemListElement': [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shipbridge.in' },
            { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.shipbridge.in/services' },
            { '@type': 'ListItem', position: 3, name: 'Logistics', item: 'https://www.shipbridge.in/services/logistics' },
            { '@type': 'ListItem', position: 4, name: city.state, item: `https://www.shipbridge.in/services/logistics/state/${city.stateSlug}` },
            { '@type': 'ListItem', position: 5, name: city.name, item: `https://www.shipbridge.in/services/logistics/${city.slug}` },
          ],
        }) }}
      />

      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <span className="mx-2">›</span>
          <Link href={`/services/logistics/state/${city.stateSlug}`} className="hover:text-white transition-colors">{city.state}</Link>
          <span className="mx-2">›</span>
          <span className="text-white">{city.name}</span>
        </nav>

        {/* Hero */}
        <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]">
          Logistics Services in {city.name}, {city.state}
        </h1>

        <p className="text-gray-300 text-lg max-w-4xl mb-12 leading-relaxed">
          ShipBridge is your trusted logistics partner in <strong>{city.name}</strong>, <strong>{city.state}</strong>. From full truckload freight to household shifting, we provide end-to-end logistics solutions with <strong>real-time GPS tracking</strong>, <strong>full insurance coverage</strong>, and <strong>competitive pricing</strong>. Whether you need to move goods across town or across India, our {city.name} logistics team ensures safe, timely, and transparent service.
        </p>

        {/* Stats Counter Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { number: '50,000+', label: 'Successful Moves', icon: '✅' },
            { number: '2,000+', label: 'Cities Covered', icon: '📍' },
            { number: '98%', label: 'On-Time Delivery', icon: '⏱️' },
            { number: '24/7', label: 'Customer Support', icon: '🎧' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] rounded-xl p-5 border border-gray-800 text-center hover:border-[var(--color-orange)] transition-colors group">
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl md:text-3xl font-bold font-poppins text-[var(--color-orange)] mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
          Our Services in <span className="gradient-text">{city.name}</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}?from=&to=`}
              className="bg-[#111] rounded-xl p-6 border border-gray-800 hover:border-[var(--color-orange)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{service.icon}</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-green)] bg-[var(--color-green-muted)] px-2 py-1 rounded-full">
                  {service.badge}
                </span>
              </div>
              <h3 className="text-lg font-bold font-poppins mb-2 group-hover:text-[var(--color-orange)] transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
            </Link>
          ))}
        </div>

        {/* Nearby Cities */}
        {nearbyCities.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold font-poppins mb-6">Also Serving Near {city.name}</h2>
            <div className="flex flex-wrap gap-3">
              {nearbyCities.map((c) => (
                <Link key={c.slug} href={`/services/logistics/${c.slug}`}
                  className="bg-[#111] border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-300 hover:border-[var(--color-orange)] hover:text-white transition-all hover:-translate-y-0.5"
                >
                  {c.name}
                </Link>
              ))}
              <Link href={`/services/logistics/state/${city.stateSlug}`}
                className="bg-[var(--color-orange-muted)] border border-[var(--color-orange)]/30 rounded-lg px-4 py-2 text-sm text-[var(--color-orange)] hover:bg-[var(--color-orange)]/20 transition-all"
              >
                View All {city.state} Cities →
              </Link>
            </div>
          </div>
        )}

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            Frequently Asked Questions — <span className="gradient-text">{city.name}</span>
          </h2>
          <div className="space-y-4">
            {faqItems.map((faq, i) => (
              <details key={i} className="bg-[#111] rounded-xl border border-gray-800 group open:border-[var(--color-orange)]/30 transition-all">
                <summary className="p-5 cursor-pointer font-semibold flex items-center justify-between list-none">
                  <span className="pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 shrink-0 text-gray-400 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4 mt-0">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Get a Free Quote for {city.name}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Call us or WhatsApp for an instant quote tailored to your logistics needs in {city.name}, {city.state}. Our team is available 24/7.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACTS.phoneTel}`}
              className="global-btn"
            >
              <span className="global-btn-text">📞 Call Now</span>
            </a>
            <a href={`https://wa.me/${CONTACTS.whatsapp}?text=Hi%20ShipBridge!%20I%20need%20logistics%20services%20in%20${encodeURIComponent(city.name)}.`}
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
