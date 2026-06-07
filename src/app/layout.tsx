import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ReactLenis } from 'lenis/react';
import GSAPProvider from '@/components/providers/GSAPProvider';
import "./globals.css";

import CustomCursor from '@/components/CustomCursor';
import SceneBackgroundClient from '@/components/webgl/SceneBackgroundClient';

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f97316",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shipbridge.in"),
  title: "ShipBridge | India's Premier Logistics & Relocation Platform",
  description: "ShipBridge is India's premier logistics and relocation platform. Household shifting, office moving, vehicle transport, warehousing, and exhibition logistics. Safe. Reliable. On-Time.",
  keywords: "logistics India, household shifting, office relocation, packers movers India, vehicle transport, warehousing India, exhibition logistics, Tier 2 logistics, SME logistics India, ShipBridge",
  openGraph: {
    type: "website",
    url: "https://www.shipbridge.in",
    siteName: "ShipBridge Logistics",
    title: "ShipBridge | India's Premier Logistics & Relocation Platform",
    description: "ShipBridge is India's premier logistics and relocation platform. Household shifting, office moving, vehicle transport, warehousing, and exhibition logistics. Safe. Reliable. On-Time.",
    images: [
      {
        url: "/seo/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ShipBridge Logistics | Apka Bhrosa, Humari Pahechan.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ShipBridge",
    title: "ShipBridge | India's Premier Logistics & Relocation Platform",
    description: "ShipBridge is India's premier logistics and relocation platform. Household shifting, office moving, vehicle transport, warehousing, and exhibition logistics. Safe. Reliable. On-Time.",
    images: ["/seo/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.shipbridge.in",
  },
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN',
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
    "name": "ShipBridge Logistics",
    "url": "https://www.shipbridge.in",
    "logo": "https://www.shipbridge.in/logo/logo_new.png",
    "sameAs": [
      "https://www.facebook.com/ShipBridgeLogistics",
      "https://twitter.com/ShipBridge",
      "https://www.linkedin.com/company/shipbridge-logistics",
      "https://www.instagram.com/shipbridgelogistics"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ShipBridge Logistics",
    "image": "https://www.shipbridge.in/logo/logo_new.png",
    "url": "https://www.shipbridge.in",
    "telephone": "+91-XXXXXXXXXX",
    "logo": "https://www.shipbridge.in/logo/logo_new.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Plot No. 12, Sector 18",
      "addressLocality": "Gurugram",
      "addressRegion": "Haryana",
      "postalCode": "122015",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4744,
      "longitude": 77.0652
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en" className="lenis lenis-smooth">
      <body className={inter.className}>
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
      </body>
    </html>
  );
}
