import { Suspense } from "react";
import { SERVICES_DATA, getServiceDetail } from "@/data/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageClient from "./ServicePageClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic SEO metadata for each service page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((item) => item.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found - ShipBridge Logistics",
    };
  }

  const baseTitle = service.metaTitle || `${service.title} | ShipBridge Logistics India`;
  const baseDesc = service.metaDescription || `${service.description} Professional ${service.subtitle.toLowerCase()} with GPS tracking, real-time updates, full insurance, and on-time delivery. Pan-India coverage. Get instant quote.`;

  return {
    title: `${baseTitle}`,
    description: baseDesc,
    keywords: [
      service.title.toLowerCase(),
      service.subtitle.toLowerCase(),
      "freight India",
      "logistics India",
      "truck booking",
      "cargo transport",
      "B2B logistics",
      "shipbridge"
    ].join(", "),
    openGraph: {
      title: baseTitle,
      description: baseDesc,
      images: [
        {
          url: service.image,
          width: 1200,
          height: 630,
          alt: `${service.title} - ShipBridge Logistics`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: baseTitle,
      description: baseDesc,
      images: [service.image],
    },
    alternates: {
      canonical: `https://www.shipbridge.in/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((item) => item.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  // Filter 3 related services
  const relatedServices = SERVICES_DATA.filter((item) => item.id !== service.id).slice(0, 3);

  const detail = getServiceDetail(service.id);

  // JSON-LD: Breadcrumb + Service + HowTo (steps from our researched journey/process)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.shipbridge.in" },
      { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.shipbridge.in/services" },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://www.shipbridge.in/services/${service.slug}` },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "image": `https://www.shipbridge.in${service.image}`,
    "provider": {
      "@type": "Organization",
      "name": "ShipBridge Logistics",
      "url": "https://www.shipbridge.in"
    },
    "areaServed": "IN",
    "serviceType": service.subtitle,
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": `https://www.shipbridge.in/services/${service.slug}#booking-form`
    }
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How ${service.title} Works`,
    "description": `Step-by-step process for professional ${service.subtitle.toLowerCase()} with ShipBridge.`,
    "step": detail.journeySteps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.title,
      "text": step.desc,
      "url": `https://www.shipbridge.in/services/${service.slug}`
    }))
  };

  const combinedSchema = [breadcrumbSchema, serviceSchema, howToSchema];

  return (
    <>
      <Suspense fallback={<div style={{ minHeight: "100vh", background: "#0a0a0a" }} />}>
        <ServicePageClient service={service} relatedServices={relatedServices} />
      </Suspense>
      {combinedSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }}
        />
      ))}
    </>
  );
}
