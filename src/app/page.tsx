import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceTunnel from '@/components/ServiceTunnel';
import Process from '@/components/Process';
import Product from '@/components/Product';
import AboutCompany from '@/components/AboutCompany';

export const metadata: Metadata = {
  title: "ShipBridge | Premium Household, Office, Vehicle Shifting & Logistics in India",
  description: "Book reliable household shifting, office relocation, car/bike transport, warehousing, and exhibition logistics across India. Safe packing, GPS tracking, insured moves. Get your quote in 60 seconds.",
  keywords: "household shifting India, office relocation, vehicle transport, packers and movers, warehousing, exhibition logistics, safe moving services, ShipBridge",
  openGraph: {
    title: "ShipBridge | India's Premier Logistics & Relocation Platform",
    description: "Premium shifting and logistics: household, office, vehicle, storage, events. Pan-India. Insured. On time.",
    images: [{ url: "/seo/og-image.jpg" }],
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ServiceTunnel />
      <Process />
      <Product />
      <AboutCompany />
    </main>
  );
}

