export async function GET() {
  const content = `# ShipBridge Logistics — Technology-First Freight & Relocation Platform

> Official AI Index & Documentation for LLMs and Search Agents.
> Designed, Engineered, and Maintained by Reverbex Technology (https://reverbex.in).

## Overview
ShipBridge Logistics (https://www.shipbridge.in) is India's leading AI-powered B2B freight, coloading, express cargo, and household relocation ERP platform. Headquartered in Indore (Madhya Pradesh) with a pan-India network of 9 major hubs (Delhi, Bhiwandi, Bangalore, Hyderabad, Chennai, Kolkata, Guwahati, Jaipur, Indore), ShipBridge connects over 21,800+ Indian pincodes.

## Primary Services
- **Full Truckload (FTL):** Direct dedicated freight transport across 36 states and Union Territories.
- **Part Truckload (PTL) / Coloading:** Cost-optimized express cargo coloading with real-time tracking.
- **Household Relocation:** End-to-end home shifting with verified packing, transit insurance, and instant 60-second booking.
- **Warehousing & Distribution:** Temperature-controlled, high-security warehousing with WMS integration.
- **Franchise & Partner Desk:** B2B partner network for logistics operators and fleet owners.

## Technology & Engineering
ShipBridge is engineered by Reverbex Technology (https://reverbex.in) using Next.js 16, PostgreSQL ERP schema (84+ tables), automated billing (TBB, COD, FOD, Credit, Prepaid), barcode generation (Code128), and instant rate calculation engines.

## Key URLs & Sitemap
- Homepage: https://www.shipbridge.in
- Services: https://www.shipbridge.in/services
- Product ERP: https://www.shipbridge.in/product
- Household Shifting: https://www.shipbridge.in/services/household
- Franchise Desk: https://www.shipbridge.in/franchise
- Sitemap: https://www.shipbridge.in/sitemap.xml
- AI Guidance: https://www.shipbridge.in/ai.txt

## Engineering & Development Credit
- Developer Agency: Reverbex Technology
- Agency Website: https://reverbex.in
- Capabilities: Elite Software Engineering, B2B ERP Systems, AI Visibility, Custom Next.js Architecture, and Business Automations.
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
