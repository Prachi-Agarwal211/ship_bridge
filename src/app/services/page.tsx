import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES_DATA } from '@/data/services';

export const metadata: Metadata = {
  title: 'ShipBridge Services – FTL, PTL, Express & More',
  description: 'Explore ShipBridge logistics services including Full Truck Load, Part Truck Load, Express Delivery, Household Shifting, Warehouse Storage, and more.',
  alternates: {
    canonical: 'https://www.shipbridge.in/services',
  }
};

export default function ServicesPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": SERVICES_DATA.map((service, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://www.shipbridge.in/services/${service.slug}`
    }))
  };

  return (
    <>
      <main className="min-h-screen bg-black text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-green)] to-[var(--color-orange)]">
              Our Services
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Comprehensive logistics and relocation solutions tailored for individuals, SMEs, and enterprises across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service) => (
              <div 
                key={service.slug} 
                className="bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-colors duration-300 flex flex-col"
              >
                <div className="relative h-56 w-full">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    unoptimized={service.image.endsWith('.svg')}
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-semibold text-[var(--color-orange)] tracking-wider uppercase mb-2">
                    {service.subtitle}
                  </div>
                  <h2 className="text-2xl font-bold font-poppins mb-3">
                    {service.title}
                  </h2>
                  <p className="text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex items-center justify-between">
                    <Link 
                      href={`/services/${service.slug}`}
                      className="text-sm font-semibold text-white hover:text-[var(--color-green)] transition-colors"
                    >
                      View details &rarr;
                    </Link>
                    <Link 
                      href={`/services/${service.slug}#booking-form`}
                      className="text-sm font-semibold bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors"
                    >
                      Request quote
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema).replace(/</g, '\\u003c') }}
      />
    </>
  );
}
