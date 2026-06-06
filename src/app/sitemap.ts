import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.shipbridge.in";
  const currentDate = new Date();

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
      url: `${baseUrl}/contact`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      changeFrequency: "daily" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/platform`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  const dynamicRoutes = [
    "household",
    "office",
    "warehouse",
    "local",
    "vehicle",
    "exhibition",
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    ...route,
    lastModified: currentDate,
  }));
}
