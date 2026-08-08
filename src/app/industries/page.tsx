import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper'

export const metadata: Metadata = {
  title: 'Industries We Serve | ShipBridge Logistics India',
  description: 'ShipBridge serves 8+ industries including automotive, engineering, hi-tech, healthcare, FMCG, apparel, alliance partners, and publishing. Custom logistics solutions for every sector.',
  alternates: { canonical: 'https://www.shipbridge.in/industries' },
  openGraph: {
    title: 'Industries We Serve | ShipBridge Logistics',
    description: 'Customized logistics solutions for automotive, engineering, hi-tech, healthcare, FMCG, apparel, publishing, and more.',
    images: [{ url: '/seo/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries We Serve | ShipBridge Logistics',
    description: 'Industry-specific logistics solutions across India.',
    images: ['/seo/og-image.jpg'],
  },
}

const industries = [
  { name: 'Automotive & Spares', slug: 'automotive', desc: 'Vendor Managed Inventory (VMI), assembly line-ready deliveries, After Market spares distribution across India.', icon: '🚗', color: 'from-blue-500 to-cyan-500' },
  { name: 'Engineering & Electronics', slug: 'engineering', desc: 'Time-definite logistics, secure heavy machinery transport, reverse logistics for engineering tools sector.', icon: '⚙️', color: 'from-gray-500 to-slate-400' },
  { name: 'Hi-Tech & Telecom', slug: 'hitech', desc: 'Secure damage-free handling, material handling equipment, rapid components distribution.', icon: '💻', color: 'from-purple-500 to-indigo-500' },
  { name: 'Alliance Partner (3PL)', slug: 'alliance', desc: 'Customized 3PL logistics, warehouse management, network expansion for logistics partners.', icon: '🤝', color: 'from-teal-500 to-emerald-500' },
  { name: 'FMCG & Consumer Electronics', slug: 'fmcg', desc: 'Direct-to-dealer distribution, Sunday/holiday deliveries, shelf replenishment across India.', icon: '🛒', color: 'from-orange-500 to-red-500' },
  { name: 'Apparel & Lifestyle', slug: 'apparel', desc: 'Stock2Shelf retail replenishment, mall fulfillment, reverse returns for fashion brands.', icon: '👕', color: 'from-pink-500 to-rose-500' },
  { name: 'Healthcare & Pharma', slug: 'healthcare', desc: 'Direct2MR sample distribution, temperature-controlled cargo, time-critical pharmaceutical logistics.', icon: '💊', color: 'from-green-500 to-emerald-500' },
  { name: 'Books & Periodicals', slug: 'books', desc: 'Secure time-definite shipping for publishers, libraries, academic institutions, and exam materials.', icon: '📚', color: 'from-amber-500 to-yellow-500' },
]

export default function IndustriesHubPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.shipbridge.in' },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: 'https://www.shipbridge.in/industries' },
    ],
  }

  return (
    <ScrollRevealWrapper>
      <Navbar />
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Industries</span>
          </nav>

          <h1 className="text-4xl md:text-6xl font-bold font-poppins mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]">
            Industries We Serve
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mb-12">
            ShipBridge provides customized logistics and supply chain solutions across 8+ industries. Each solution is tailored to the unique requirements of your sector — from automotive VMI to pharmaceutical Direct2MR sample distribution.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}
                className="group bg-[#111] rounded-2xl p-6 border border-gray-800 hover:border-[var(--color-orange)] transition-all duration-300 hover:-translate-y-1"
              >
                <span className="text-3xl mb-3 block">{ind.icon}</span>
                <h2 className="text-lg font-bold font-poppins mb-2 group-hover:text-[var(--color-orange)] transition-colors">{ind.name}</h2>
                <p className="text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
                <span className="inline-block mt-4 text-sm text-[var(--color-orange)] font-semibold group-hover:underline">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </ScrollRevealWrapper>
  )
}
