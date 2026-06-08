// Centralized contact & location data for consistency across SEO schema, UI, forms, etc.
// Update these with real values when available. Used in layout, footer, about story alignment, etc.

export const CONTACTS = {
  email: {
    general: "contact@shipbridge.in",
    partners: "partners@shipbridge.in",
  },
  phone: "+91 98765 43210", // Replace with real number
  phoneTel: "+919876543210", // For tel: links (no spaces/hyphens)
  whatsapp: "919876543210", // For wa.me without +
  address: {
    street: "Plot No. 12, Sector 18",
    city: "Gurugram",
    region: "Haryana",
    postalCode: "122015",
    country: "IN",
    // Note: Founding story in About says Indore, MP (2026). Keep HQ here or sync as needed.
  },
  geo: {
    latitude: 28.4744,
    longitude: 77.0652,
  },
  social: {
    facebook: "https://www.facebook.com/ShipBridgeLogistics",
    twitter: "https://twitter.com/ShipBridge",
    linkedin: "https://www.linkedin.com/company/shipbridge-logistics",
    instagram: "https://www.instagram.com/shipbridgelogistics",
  },
  site: {
    base: "https://www.shipbridge.in",
    name: "ShipBridge Logistics",
    tagline: "Aapka Bharosa, Humari Pahechan",
  },
} as const;

export type Contacts = typeof CONTACTS;
