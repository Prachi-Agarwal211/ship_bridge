import type { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/data/services";
import cities, { INDIA_STATES } from "@/lib/indian-cities";

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

  const serviceRoutes = SERVICES_DATA.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.88,
    lastModified: service.lastUpdated ? new Date(service.lastUpdated) : currentDate,
  }));

  // Industry pages
  const industryRoutes = [
    {
      url: `${baseUrl}/industries`,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    {
      url: `${baseUrl}/industries/automotive`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/engineering`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/hitech`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/alliance`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/fmcg`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/apparel`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/healthcare`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/books`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/ecommerce`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
    {
      url: `${baseUrl}/industries/manufacturing`,
      changeFrequency: "weekly" as const,
      priority: 0.82,
    },
  ];

  // Logistics hub page
  const logisticsHub = {
    url: `${baseUrl}/services/logistics`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  };

  // Household hub page
  const householdHub = {
    url: `${baseUrl}/services/household`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  };

  // Local SEO: city pages for logistics in each city
  const cityRoutes = cities.map((city) => ({
    url: `${baseUrl}/services/logistics/${city.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: currentDate,
  }));

  // State pages
  const stateRoutes = INDIA_STATES.map((state) => ({
    url: `${baseUrl}/services/logistics/state/${state.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.65,
    lastModified: currentDate,
  }));

  return [
    ...staticRoutes.map((route) => ({
      ...route,
      lastModified: currentDate,
    })),
    logisticsHub,
    householdHub,
    ...serviceRoutes,
    ...industryRoutes,
    ...cityRoutes,
    ...stateRoutes,
  ];
}
