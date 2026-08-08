import { Metadata } from 'next'
import Link from 'next/link'
import cities, { INDIA_STATES } from '@/lib/indian-cities'
import { CONTACTS } from '@/data/contacts'
import Navbar from '@/components/Navbar'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return INDIA_STATES.map((state) => ({ slug: state.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const state = INDIA_STATES.find((s) => s.slug === slug)
  if (!state) return { title: 'Logistics Services' }
  const stateCityCount = cities.filter((c) => c.stateSlug === slug).length
  return {
    title: `Logistics Services in ${state.name} | FTL, PTL, Household Shifting`,
    description: `ShipBridge offers reliable logistics across ${state.name} — FTL trucking, PTL freight, express delivery, household shifting, warehousing & vehicle transport. GPS tracked, insured, instant quote. Serving ${stateCityCount}+ cities in ${state.name}.`,
    alternates: { canonical: `https://www.shipbridge.in/services/logistics/state/${state.slug}` },
    openGraph: {
      title: `Logistics Services in ${state.name} | ShipBridge India`,
      description: `Professional logistics across ${state.name}: FTL, PTL, express, household shifting, vehicle transport & warehousing. GPS tracked, fully insured. Serving all major cities.`,
      images: [{ url: '/seo/og-image.jpg', width: 1200, height: 630, alt: `ShipBridge Logistics ${state.name}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Logistics Services in ${state.name} | ShipBridge`,
      description: `FTL, PTL, express delivery & household shifting across ${state.name}. GPS tracked, insured.`,
      images: ['/seo/og-image.jpg'],
    },
    keywords: `logistics ${state.name}, FTL ${state.name}, truck booking ${state.name}, freight services ${state.name}, household shifting ${state.name}, packers and movers ${state.name}, transport services ${state.name}, shipbridge ${state.name}`,
  }
}

export default async function StateLogisticsPage({ params }: Props) {
  const { slug } = await params
  const state = INDIA_STATES.find((s) => s.slug === slug)
  const stateCities = cities.filter((c) => c.stateSlug === slug)

  if (!state) {
    return (
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">State Not Found</h1>
          <Link href="/" className="text-[var(--color-orange)] hover:underline">Back to Home</Link>
        </div>
      </main>
    )
  }

  const faqItems = [
    { q: `Does ShipBridge provide logistics services across ${state.name}?`, a: `Yes, ShipBridge offers comprehensive logistics and relocation services across ${state.name}, covering ${stateCities.length}+ cities. Services include FTL freight, PTL shipping, express delivery, household moving, office relocation, vehicle transport, and warehousing — all with GPS tracking and insurance.` },
    { q: `What are the major cities ShipBridge serves in ${state.name}?`, a: `ShipBridge serves all major cities in ${state.name} including ${stateCities.slice(0, 6).map(c => c.name).join(', ')}${stateCities.length > 6 ? `, and ${stateCities.length - 6}+ more cities` : ''}. We provide door-to-door pickup and delivery across the state.` },
    { q: `How do I get an FTL truck in ${state.name}?`, a: `Booking an FTL truck in ${state.name} is simple. Enter your origin and destination pincodes on our website, get instant pricing and vehicle recommendations, and book online. Call ${CONTACTS.phone} for immediate assistance.` },
    { q: `Do you offer household shifting across ${state.name}?`, a: `Absolutely. ShipBridge provides complete household relocation across ${state.name} — professional packing, insured transit, GPS tracking, and careful unpacking. We serve families moving within cities, between cities, and even across state lines.` },
    { q: `Is ShipBridge available in remote areas of ${state.name}?`, a: `Yes, ShipBridge has one of the deepest last-mile networks in India. We serve both direct delivery areas (DDA) and extended delivery areas (ODA) across ${state.name}, covering even remote towns and villages. Additional charges may apply for ODA locations.` },
  ]

  const stateFaqSchema = {
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
        ShipBridge provides comprehensive logistics and relocation services across {state.name} including Full Truck Load (FTL) freight, Part Truck Load (PTL) shipping, express parcel delivery, household moving, office relocation, vehicle transport, and warehousing solutions with GPS tracking and insurance coverage. Serving {stateCities.length}+ cities across {state.name}.
      </div>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(stateFaqSchema).replace(/</g, '\\u003c') }}
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
            { '@type': 'ListItem', position: 4, name: state.name, item: `https://www.shipbridge.in/services/logistics/state/${state.slug}` },
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
          <span className="text-white">{state.name}</span>
        </nav>

        {/* Hero */}
        <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]">
          Logistics Services in {state.name}
        </h1>

        <p className="text-gray-300 text-lg max-w-4xl mb-12 leading-relaxed">
          ShipBridge is your trusted logistics partner across <strong>{state.name}</strong>. We provide end-to-end logistics solutions in <strong>{stateCities.length}+ cities</strong> — from full truckload freight to household shifting, all with <strong>real-time GPS tracking</strong>, <strong>full insurance</strong>, and <strong>competitive pricing</strong>. Whether you&apos;re in a metro or a remote town, we deliver.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { number: `${stateCities.length}+`, label: 'Cities Served', icon: '📍' },
            { number: '50,000+', label: 'Successful Moves', icon: '✅' },
            { number: '98%', label: 'On-Time Delivery', icon: '⏱️' },
            { number: '24/7', label: 'Customer Support', icon: '🎧' },
          ].map((stat) => (
            <div key={stat.label} className="bg-[#111] rounded-xl p-5 border border-gray-800 text-center hover:border-[var(--color-orange)] transition-colors">
              <span className="text-2xl mb-2 block">{stat.icon}</span>
              <div className="text-2xl md:text-3xl font-bold font-poppins text-[var(--color-orange)] mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Cities Grid */}
        {stateCities.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-6">
              Cities We Serve in <span className="gradient-text">{state.name}</span>
            </h2>
            <div className="flex flex-wrap gap-3">
              {stateCities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/services/logistics/${city.slug}`}
                  className="bg-[#111] border border-gray-700 rounded-lg px-4 py-2.5 text-sm text-gray-300 hover:border-[var(--color-orange)] hover:text-white transition-all hover:-translate-y-0.5"
                >
                  {city.name}
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Services */}
        <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
          Our Services in <span className="gradient-text">{state.name}</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {[
            { title: 'Full Truck Load (FTL)', icon: '🚛', desc: `Book entire trucks for bulk freight across ${state.name}. Ideal for large shipments and inter-city transport.` },
            { title: 'Part Truck Load (PTL)', icon: '📦', desc: `Share truck space for smaller loads. Cost-effective freight shipping across ${state.name}.` },
            { title: 'Express Delivery', icon: '⚡', desc: `Time-critical parcel delivery across ${state.name}. Same-day and next-day options available.` },
            { title: 'Household Shifting', icon: '🏠', desc: `Door-to-door relocation across ${state.name}. Full packing, loading, transport, and unloading.` },
            { title: 'Warehousing', icon: '🏭', desc: `Storage and inventory management across ${state.name}. Short-term and long-term options.` },
            { title: 'Vehicle Transport', icon: '🚗', desc: `Car and bike shipping across ${state.name}. Open and enclosed carriers available.` },
          ].map((service, i) => (
            <div key={i} className="bg-[#111] rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all hover:-translate-y-0.5">
              <span className="text-3xl mb-3 block">{service.icon}</span>
              <h3 className="text-lg font-bold font-poppins mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            Frequently Asked Questions — <span className="gradient-text">{state.name}</span>
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
                <div className="px-5 pb-5 text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-4">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Get a Free Quote for {state.name}</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Call us or WhatsApp for an instant quote for logistics services anywhere in {state.name}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={`tel:${CONTACTS.phoneTel}`} className="global-btn"><span className="global-btn-text">📞 Call Now</span></a>
            <a href={`https://wa.me/${CONTACTS.whatsapp}?text=Hi%20ShipBridge!%20I%20need%20logistics%20in%20${encodeURIComponent(state.name)}.`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">💬 WhatsApp</a>
          </div>
        </div>
      </div>
      </div>
    </main>
  )
}
