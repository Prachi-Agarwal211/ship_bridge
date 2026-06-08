import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shipbridge.in";
  const currentDate = new Date();

  // Only real existing routes. Ghost routes (/contact, /blog, /platform) removed to avoid 404s hurting SEO.
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/product`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/franchise`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ];

  const dynamicRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    changeFrequency: "weekly" as const,
    priority: 0.88,
  }));

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    ...route,
    lastModified: currentDate,
  }));
}
