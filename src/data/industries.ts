export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  logisticsNeeds: string[];
  keyServices: string[];
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "fmcg",
    title: "FMCG & Consumer Goods",
    subtitle: "High-Volume Distribution",
    description: "End-to-end FMCG supply chain — from factory to last-mile distribution. Daily delivery cycles, seasonal demand spikes, and rural reach. ShipBridge handles 500+ FMCG deliveries daily across India.",
    icon: "🛒",
    logisticsNeeds: ["Daily fleet availability", "Rural & semi-urban reach", "Seasonal spike capacity", "Short shelf-life management", "Multi-point delivery"],
    keyServices: ["PTL", "FTL", "Warehousing", "B2B Coloading"]
  },
  {
    id: "healthcare",
    title: "Healthcare & Pharma",
    subtitle: "GDP-Compliant Cold Chain",
    description: "Temperature-controlled pharmaceutical logistics with WHO GDP compliance. Real-time IoT monitoring for vaccines, biologics, and sensitive drugs. Hyderabad-Indore pharma corridor specialist.",
    icon: "💊",
    logisticsNeeds: ["2°C–8°C cold chain", "GDP documentation", "Batch tracking & serialization", "Time-sensitive delivery", "WHO/PQS compliance"],
    keyServices: ["Express", "FTL", "Warehousing", "PTL"]
  },
  {
    id: "automotive",
    title: "Automotive & Auto Components",
    subtitle: "JIT & Sequencing Logistics",
    description: "Just-in-time delivery for assembly lines, component sequencing, and returnable packaging management. Indore-Pithampur corridor — India's Detroit — is our home turf.",
    icon: "🚗",
    logisticsNeeds: ["JIT delivery (4-hour windows)", "Component sequencing", "Returnable packaging", "Heavy part transport", "Supplier milk runs"],
    keyServices: ["FTL", "B2B Coloading", "PTL", "Warehousing"]
  },
  {
    id: "ecommerce",
    title: "E-commerce & D2C",
    subtitle: "Last-Mile & COD Fulfillment",
    description: "Complete e-commerce logistics — warehouse to customer door. COD collection, returns management, same-day delivery in 50+ cities. AI reduces RTO from 23% industry average to under 15%.",
    icon: "📦",
    logisticsNeeds: ["Same-day/next-day delivery", "COD collection & remittance", "Returns management", "Marketplace integration", "Address verification"],
    keyServices: ["Express", "Reverse Logistics", "Warehousing", "PTL"]
  },
  {
    id: "engineering",
    title: "Engineering & Heavy Industries",
    subtitle: "ODC & Industrial Freight",
    description: "Over Dimensional Cargo (ODC) transport for industrial machinery, CNC machines, transformers, and heavy equipment. Specialized hydraulic trailers and route survey.",
    icon: "⚙️",
    logisticsNeeds: ["ODC permits & escorts", "Hydraulic trailer transport", "Factory-to-site delivery", "Heavy lift capability", "Route survey & planning"],
    keyServices: ["FTL", "PTL", "Warehousing", "B2B Coloading"]
  },
  {
    id: "textiles",
    title: "Textiles & Apparels",
    subtitle: "Seasonal & Careful Handling",
    description: "Fashion logistics with seasonal demand patterns. Careful handling to prevent wrinkles and moisture damage. Fast turnaround for trend-driven supply chains.",
    icon: "👔",
    logisticsNeeds: ["Moisture-free transit", "Seasonal capacity", "Fast turnaround", "Garment-on-hanger", "Export documentation"],
    keyServices: ["PTL", "Express", "Warehousing", "FTL"]
  },
  {
    id: "chemicals",
    title: "Chemicals & Pharmaceuticals",
    subtitle: "DG Cargo & Safety Compliance",
    description: "Hazardous materials handling with proper DG classification, safety documentation (MSDS), and specialized containers. PESO and CPCB compliance for chemical transport.",
    icon: "🧪",
    logisticsNeeds: ["DG classification & docs", "MSDS documentation", "Specialized containers", "Safety training", "Insurance coverage"],
    keyServices: ["FTL", "PTL", "Warehousing", "B2B Coloading"]
  },
  {
    id: "hitech",
    title: "Hi-Tech & Electronics",
    subtitle: "High-Value Secure Transport",
    description: "Secure logistics for semiconductor components, telecom equipment, and consumer electronics. Anti-static packaging, GPS tracking, and tamper-proof delivery.",
    icon: "💻",
    logisticsNeeds: ["Anti-static packaging", "GPS tracking", "Tamper-proof transit", "Insurance for high value", "Quick customs clearance"],
    keyServices: ["Express", "FTL", "Warehousing", "PTL"]
  },
  {
    id: "alliance",
    title: "3PL & Alliance Partners",
    subtitle: "Network & Fulfillment",
    description: "White-label logistics for 3PL providers and marketplace sellers. API integration, real-time tracking, and multi-warehouse fulfillment across India.",
    icon: "🤝",
    logisticsNeeds: ["API integration", "Multi-warehouse mgmt", "Real-time tracking", "SLA management", "Scalable capacity"],
    keyServices: ["B2B Coloading", "Warehousing", "PTL", "Reverse Logistics"]
  },
  {
    id: "agriculture",
    title: "Agriculture & Food",
    subtitle: "Perishable & Cold Chain",
    description: "Cold chain for fresh produce, dairy, and processed foods. Farm-to-market logistics with temperature monitoring and minimal transit time.",
    icon: "🌾",
    logisticsNeeds: ["Cold chain transport", "Quick transit time", "Rural pickup", "FIFO management", "FSSAI compliance"],
    keyServices: ["PTL", "Express", "Warehousing", "FTL"]
  }
];
