// Centralized contact & location data for consistency across SEO schema, UI, forms, etc.
// Update these with real values when available. Used in layout, footer, about story alignment, etc.

export const CONTACTS = {
  email: {
    general: "contact@shipbridge.in",
    partners: "partners@shipbridge.in",
  },
  phone: "+91 98765 43210", // 🔴 Replace with real business number
  phoneTel: "+919876543210", // 🔴 Replace with real business number
  whatsapp: "919876543210", // 🔴 Replace with real WhatsApp number
  address: {
    street: "79/2, Panchal Compound, Lasudiya Mori, Dewas Naka, Vijay Nagar",
    city: "Indore",
    region: "Madhya Pradesh",
    postalCode: "452010",
    country: "IN",
    // Registered Office — matches CIN U50120MP2026PTC084212
    // Verified via MCA corporate filings (incorporation: May 16, 2026)
  },
  geo: {
    latitude: 22.7234,
    longitude: 75.8601,
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
