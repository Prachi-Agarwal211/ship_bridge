import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
  title: "ShipBridge Logistics | Apka Bhrosa, Humari Pahechan.",
  description: "ShipBridge is India's premier logistics and relocation platform. Household shifting, office moving, vehicle transport, warehousing, and exhibition logistics. Safe. Reliable. On-Time.",
  keywords: "logistics India, household shifting, office relocation, packers movers India, vehicle transport, warehousing India, exhibition logistics, Tier 2 logistics, SME logistics India, ShipBridge",
  openGraph: {
    type: "website",
    url: "https://www.shipbridge.in",
    siteName: "ShipBridge Logistics",
    title: "ShipBridge Logistics | Apka Bhrosa, Humari Pahechan.",
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
    title: "ShipBridge Logistics | Apka Bhrosa, Humari Pahechan.",
    description: "ShipBridge is India's premier logistics and relocation platform. Household shifting, office moving, vehicle transport, warehousing, and exhibition logistics. Safe. Reliable. On-Time.",
    images: ["/seo/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.shipbridge.in",
  },
};

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
    "logo": "https://www.shipbridge.in/hero%20section/logo.jpeg",
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
    "image": "https://www.shipbridge.in/hero%20section/logo.jpeg",
    "url": "https://www.shipbridge.in",
    "telephone": "+91-XXXXXXXXXX",
    "logo": "https://www.shipbridge.in/hero%20section/logo.jpeg",
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
    <html lang="en">
      <body className={inter.className}>
        {children}
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
