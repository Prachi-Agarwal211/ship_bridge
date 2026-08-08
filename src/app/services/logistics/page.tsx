import type { Metadata } from 'next'
import Link from 'next/link'
import cities, { INDIA_STATES } from '@/lib/indian-cities'
import Navbar from '@/components/Navbar'
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper'

export const metadata: Metadata = {
  title: 'Logistics Services in All Cities & States | ShipBridge India',
  description: 'ShipBridge provides FTL, PTL, express delivery, household shifting, warehousing, and vehicle transport across 50+ cities and 31 states in India. GPS tracked, insured, instant quote.',
  alternates: { canonical: 'https://www.shipbridge.in/services/logistics' },
  openGraph: {
    title: 'Logistics Services Across India | ShipBridge',
    description: 'FTL, PTL, express, household shifting, warehousing, vehicle transport — serving 50+ cities, 31 states. GPS tracked, insured.',
    images: [{ url: '/seo/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Logistics Services Across India | ShipBridge',
    description: 'FTL, PTL, express, household shifting — serving 50+ cities, 31 states.',
    images: ['/seo/og-image.jpg'],
  },
  keywords: 'logistics India, logistics services, FTL India, PTL India, household shifting, freight services, truck booking, transport services India, ShipBridge',
}

// Group states by region for better UX
const REGIONS = [
  { name: 'North India', states: ['Delhi', 'Haryana', 'Punjab', 'Uttar Pradesh', 'Uttarakhand', 'Himachal Pradesh', 'Jammu and Kashmir', 'Rajasthan', 'Chandigarh'] },
  { name: 'South India', states: ['Karnataka', 'Tamil Nadu', 'Kerala', 'Andhra Pradesh', 'Telangana', 'Goa', 'Puducherry'] },
  { name: 'East India', states: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand', 'Assam', 'Arunachal Pradesh', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Sikkim', 'Tripura'] },
  { name: 'West & Central India', states: ['Maharashtra', 'Gujarat', 'Madhya Pradesh', 'Chhattisgarh'] },
]

export default function LogisticsHubPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shipbridge.in' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://www.shipbridge.in/services' },
      { '@type': 'ListItem', position: 3, name: 'Logistics', item: 'https://www.shipbridge.in/services/logistics' },
    ],
  }

  return (
    <ScrollRevealWrapper>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-20">
        {/* GEO Answer Block */}
        <div className="seo-page-title" style={{ display: 'none' }}>
          ShipBridge provides comprehensive logistics and relocation services across 50+ cities and 31 states in India — including FTL freight, PTL shipping, express delivery, household moving, office relocation, vehicle transport, and warehousing with GPS tracking and insurance. Serving every major Indian city from Mumbai to Guwahati, Chennai to Srinagar.
        </div>

        {/* JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Logistics by City & State</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]">
            Logistics Services Across India
          </h1>
          <p className="text-gray-300 text-lg max-w-4xl mb-6 leading-relaxed">
            ShipBridge provides end-to-end logistics and relocation services across <strong>50+ cities</strong> and <strong>31 states</strong> in India. Find your city for FTL trucking, PTL freight, express delivery, household shifting, vehicle transport, and warehousing solutions — all with real-time GPS tracking and insurance coverage.
          </p>

          <p className="text-gray-400 mb-12">
            {cities.length} major cities • {INDIA_STATES.length} states &amp; UTs • 21,800+ serviceable pincodes
          </p>

          {/* Region Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {[
              { number: `${cities.length}+`, label: 'Cities Served', icon: '📍' },
              { number: `${INDIA_STATES.length}`, label: 'States & UTs', icon: '🗺️' },
              { number: '21,800+', label: 'Serviceable Pincodes', icon: '📮' },
              { number: '50,000+', label: 'Successful Moves', icon: '✅' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#111] rounded-xl p-5 border border-gray-800 text-center hover:border-[var(--color-orange)] transition-colors">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <div className="text-2xl md:text-3xl font-bold font-poppins text-[var(--color-orange)] mb-1">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* States by Region */}
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            States &amp; Regions <span className="gradient-text">We Serve</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {REGIONS.map((region) => (
              <div key={region.name} className="bg-[#111] rounded-2xl p-6 border border-gray-800">
                <h3 className="text-lg font-bold font-poppins mb-4 text-[var(--color-orange)]">{region.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {region.states.map((stateName) => {
                    const stateData = INDIA_STATES.find((s) => s.name === stateName)
                    const citiesInState = cities.filter((c) => c.state === stateName)
                    return stateData ? (
                      <Link key={stateData.slug} href={`/services/logistics/state/${stateData.slug}`}
                        className="group bg-[#1a1a22] border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-300 hover:border-[var(--color-orange)] hover:text-white transition-all hover:-translate-y-0.5"
                      >
                        {stateData.name}
                        <span className="text-gray-500 text-xs ml-1.5">({citiesInState.length})</span>
                      </Link>
                    ) : null
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* All Cities */}
          <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-8">
            All <span className="gradient-text">Cities</span> We Serve
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

          {/* CTA */}
          <div className="glass-card p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold font-poppins mb-4">Need Logistics Anywhere in India?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">Call us or WhatsApp for an instant quote for logistics services in any city across India.</p>
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
