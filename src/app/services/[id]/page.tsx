import { SERVICES_DATA } from "@/data/services";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ServicePageClient from "./ServicePageClient";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

// Generate dynamic SEO metadata for each service page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((item) => item.id === resolvedParams.id);

  if (!service) {
    return {
      title: "Service Not Found - ShipBridge Logistics",
    };
  }

  return {
    title: `${service.title} Shifting & Transport Services - ShipBridge Logistics`,
    description: `Learn more about our premium ${service.title} shifting and transport solutions. ${service.description} Safe. Secure. Insured. On-Time door delivery.`,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((item) => item.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  // Filter 3 related services
  const relatedServices = SERVICES_DATA.filter((item) => item.id !== service.id).slice(0, 3);

  // JSON-LD Breadcrumb List
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.shipbridge.in",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.shipbridge.in/#services",
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": service.title,
        "item": `https://www.shipbridge.in/services/${service.id}`,
      },
    ],
  };

  return (
    <>
      <ServicePageClient service={service} relatedServices={relatedServices} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
