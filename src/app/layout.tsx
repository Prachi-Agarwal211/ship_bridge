import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import { ReactLenis } from 'lenis/react';
import GSAPProvider from '@/components/providers/GSAPProvider';
import "./globals.css";

import CustomCursor from '@/components/CustomCursor';
import SceneBackgroundClient from '@/components/webgl/SceneBackgroundClient';
import { CONTACTS } from '@/data/contacts';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-poppins",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  metadataBase: new URL(CONTACTS.site.base),
  title: {
    default: "ShipBridge | India's Leading Logistics & Relocation Platform",
    template: '%s | ShipBridge India',
  },
  description: "ShipBridge India — logistics and relocation platform offering FTL, PTL, express delivery, warehousing, and household shifting across PAN India. GPS tracked, insured, instant quotes.",
  keywords: "logistics India, household shifting, office relocation, packers movers India, vehicle transport, warehousing India, exhibition logistics, Tier 2 logistics, SME logistics India, ShipBridge",
  openGraph: {
    type: "website",
    url: CONTACTS.site.base,
    siteName: CONTACTS.site.name,
    title: "ShipBridge | India's Leading Logistics & Relocation Platform",
    description: "ShipBridge India — logistics and relocation platform offering FTL, PTL, express delivery, warehousing, and household shifting across PAN India.",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${CONTACTS.site.name} | ${CONTACTS.site.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShipBridge",
    title: "ShipBridge | India's Leading Logistics & Relocation Platform",
    description: "ShipBridge India — logistics and relocation platform offering FTL, PTL, express delivery, warehousing, and household shifting across PAN India.",
    images: ["/seo/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: CONTACTS.site.base,
  },
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_TOKEN || '',
  },
  category: 'logistics',
  classification: 'Business',
  referrer: 'origin-when-cross-origin',
  formatDetection: { email: false, telephone: false },
  icons: {
    icon: [
      { url: '/logo/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/logo/favicon.ico',
    apple: '/logo/icon-192.png',
  },
  other: {
    'ai-content-declaration': 'public',
    'geo-optimized': 'true',
    'geo.region': 'IN-MP',
    'geo.placename': 'Indore, Madhya Pradesh',
  },
};

import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${CONTACTS.site.base}/#organization`,
    "name": CONTACTS.site.name,
    "alternateName": "ShipBridge India",
    "url": CONTACTS.site.base,
    "logo": `${CONTACTS.site.base}/logo/logo_new.png`,
    "description": "India's AI-powered logistics and relocation platform offering FTL, PTL, express delivery, warehousing, and household shifting across PAN India.",
    "creator": {
      "@type": "Organization",
      "name": "Reverbex Technology",
      "url": "https://reverbex.in",
      "description": "Elite Software Engineering, AI Automations, and Web Systems."
    },
    "foundingDate": "2026-05-16",
    "identifier": "QXXXXXXXX", // 🔴 Replace with real Wikidata QID after creation
    "sameAs": [
      CONTACTS.social.facebook,
      CONTACTS.social.twitter,
      CONTACTS.social.linkedin,
      CONTACTS.social.instagram,
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": CONTACTS.phone,
      "contactType": "customer service",
      "email": CONTACTS.email.general,
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"],
    },
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "knowsAbout": [
      "Logistics India",
      "Full Truck Load Freight",
      "Part Truck Load Shipping",
      "Household Moving Services",
      "Office Relocation India",
      "Warehousing Solutions",
      "Vehicle Transport India",
      "Exhibition Logistics",
      "Supply Chain Management",
    ],
    "slogan": CONTACTS.site.tagline,
  };

  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${CONTACTS.site.base}/#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        'name': 'What services does ShipBridge offer?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'ShipBridge offers FTL (Full Truck Load), PTL (Part Truck Load), express delivery, cold chain logistics, e-commerce fulfillment, warehousing, household shifting, office relocation, vehicle transport, exhibition logistics, B2B coloading, and reverse logistics — all across PAN India with GPS tracking and insurance coverage.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How do I track my ShipBridge shipment?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Enter your waybill number on the ShipBridge website or app to get real-time tracking updates. You will see the current status, estimated delivery date, and a detailed timeline of every event from pickup to delivery.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Does ShipBridge operate across India?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes, ShipBridge provides logistics and relocation services across all 29 states and union territories of India, covering 2,000+ cities with both direct and extended delivery areas.',
        },
      },
      {
        '@type': 'Question',
        'name': 'How do I get a quote from ShipBridge?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Visit the ShipBridge website and use the instant quote tool. Enter your pickup and delivery locations, shipment weight, and type of service required. You will receive a transparent, no-hidden-fee quote within seconds.',
        },
      },
      {
        '@type': 'Question',
        'name': 'Is ShipBridge insured and reliable?',
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': 'Yes. All ShipBridge shipments are insured against damage and loss. The company uses GPS-tracked fleet, AI-optimized routing, and has a 98% on-time delivery rate across 50,000+ successful moves.',
        },
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${CONTACTS.site.base}/#business`,
    "name": CONTACTS.site.name,
    "alternateName": "ShipBridge India",
    "image": `${CONTACTS.site.base}/logo/logo_new.png`,
    "url": CONTACTS.site.base,
    "telephone": CONTACTS.phone,
    "email": CONTACTS.email.general,
    "logo": `${CONTACTS.site.base}/logo/logo_new.png`,
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Bank Transfer, UPI, Credit Card",
    "areaServed": "IN",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACTS.address.street,
      "addressLocality": CONTACTS.address.city,
      "addressRegion": CONTACTS.address.region,
      "postalCode": CONTACTS.address.postalCode,
      "addressCountry": CONTACTS.address.country,
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": CONTACTS.geo.latitude,
      "longitude": CONTACTS.geo.longitude,
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      "opens": "09:00",
      "closes": "18:00",
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${CONTACTS.site.base}/#website`,
    url: CONTACTS.site.base,
    name: CONTACTS.site.name,
    description: "India's AI-powered logistics and relocation platform offering FTL, PTL, express delivery, warehousing, and household shifting across PAN India.",
    inLanguage: 'en-IN',
    publisher: { '@id': `${CONTACTS.site.base}/#organization` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '.seo-page-title',
        '.section-heading',
        '.service-description',
        '.hero-tagline',
      ],
    },
  };

  return (
    <html lang="en-IN" className="lenis lenis-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${poppins.variable} ${inter.className}`}>
        <ReactLenis root options={{ lerp: 0.08, duration: 1.2, syncTouch: false, autoRaf: false }}>
          <GSAPProvider>
            <SceneBackgroundClient />
            <svg style={{ width: 0, height: 0, position: 'absolute' }} aria-hidden="true" focusable="false">
              <linearGradient id="global-btn-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--color-green)" />
                <stop offset="100%" stopColor="var(--color-orange)" />
              </linearGradient>
            </svg>
            <CustomCursor />
            {children}
            <Footer />
          </GSAPProvider>
        </ReactLenis>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }}
        />
      </body>
    </html>
  );
}
