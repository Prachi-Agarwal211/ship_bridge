export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "household",
    title: "Household Shifting",
    subtitle: "Residential Relocation",
    description: "Our expert team handles your household shifting with the utmost care. From premium packaging of delicate glassware to secure transit and furniture layout in your new home, we make moving completely stress-free.",
    image: "/services/household.jpeg",
    tags: ["Premium Packing", "Furniture Disassembly", "Fragile Care", "Secure Transit", "Placement & Setup"]
  },
  {
    id: "office",
    title: "Office Shifting",
    subtitle: "Corporate Relocation",
    description: "Minimize downtime with our efficient workspace relocations. We specialize in packing complex server setups, high-value IT equipment, office workstations, and secure files with minimal operational disruption.",
    image: "/services/office.jpeg",
    tags: ["IT Asset Management", "Server Packing", "Document Cataloging", "After-Hours Shifting", "Cubicle Setup"]
  },
  {
    id: "warehouse",
    title: "Warehouse & Storage",
    subtitle: "Secure Warehousing",
    description: "Safe, climate-controlled, and fully insured storage solutions for your short-term or long-term inventory needs. Features 24/7 CCTV surveillance, fire prevention, and digital stock indexing.",
    image: "/services/warehouse.jpeg",
    tags: ["24/7 Surveillance", "Climate Control", "Digital Inventory", "Short/Long Term", "Fire-Safety Certified"]
  },
  {
    id: "local",
    title: "Local Shifting",
    subtitle: "Same-City Relocations",
    description: "Fast, reliable, and affordable moving services within your city. Our local teams navigate city routes efficiently to ensure your household or office belongings are safely moved on the very same day.",
    image: "/services/local.png",
    tags: ["Same-Day Delivery", "Dedicated Trucks", "Local Route Experts", "Express Packing", "Budget Friendly"]
  },
  {
    id: "vehicle",
    title: "Car & Bike Transport",
    subtitle: "Safe Vehicle Logistics",
    description: "Relocate your cars and motorcycles across long distances without adding miles or risk. We use specialized, secure auto-carriers and advanced harnessing to ensure scratch-free doorstep delivery.",
    image: "/services/vehicle.jpeg",
    tags: ["Enclosed Carriers", "GPS Tracking", "Safety Harnessing", "Damage-Free Guarantee", "Doorstep Pickup"]
  },
  {
    id: "exhibition",
    title: "Exhibition & Trade",
    subtitle: "Event Logistics",
    description: "Time-critical setup and logistics management for exhibition pavilions, trade shows, and events. We coordinate booth material transport, on-site assembly, and secure reverse logistics post-event.",
    image: "/services/exhibition.png",
    tags: ["Booth Construction Setup", "Time-Critical Delivery", "On-Site Support", "Event Coordination", "Reverse Logistics"]
  }
];
