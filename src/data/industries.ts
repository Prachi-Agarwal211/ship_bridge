export interface IndustryItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export const INDUSTRIES_DATA: IndustryItem[] = [
  {
    id: "apparel",
    title: "Apparels & Lifestyle",
    subtitle: "Retail & Storage Logistics",
    description: "Tailor-made logistics to suit your storage and retail needs. Seasonal distribution and return management.",
    icon: "👗"
  },
  {
    id: "books",
    title: "Books & Periodicals",
    subtitle: "Academic & Publisher Distribution",
    description: "Hassle-free logistics services for Books, Periodicals & Institutions. Safe moisture-free transit.",
    icon: "📚"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    subtitle: "Specialized Medical Logistics",
    description: "Doorstep logistics and supply chain solutions for the Healthcare and Pharmaceutical industry.",
    icon: "💊"
  },
  {
    id: "fmcg",
    title: "FMCG & Consumer Goods",
    subtitle: "Reliable Consumer Electronics",
    description: "Trusted and reliable FMCG & Consumer Electronics supply chain offerings across India.",
    icon: "🥛"
  },
  {
    id: "automotive",
    title: "Automotive",
    subtitle: "Parts & Vehicle Logistics",
    description: "Speedy, timely, and nationwide distribution of automotive parts, components, and spares.",
    icon: "🚗"
  },
  {
    id: "engineering",
    title: "Engineering",
    subtitle: "Heavy Machinery Shipping",
    description: "Build India through swift delivery of tools, machinery, and engineering supplies across every pincode.",
    icon: "⚙️"
  },
  {
    id: "hitech",
    title: "Hi-Tech",
    subtitle: "High-Value Tech Logistics",
    description: "Reliable and trusted logistics services for high-value technology and telecom components.",
    icon: "📡"
  },
  {
    id: "alliance",
    title: "Alliance Partner Management",
    subtitle: "Fulfillment & Warehousing",
    description: "Customized logistics solutions for 3PL and warehousing service providers with real-time tracking.",
    icon: "🤝"
  }
];
