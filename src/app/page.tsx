import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Tracker from '@/components/Tracker';
import RouteChecker from '@/components/RouteChecker';
import ServicesShowcase from '@/components/ServicesShowcase';
import Process from '@/components/Process';
import Product from '@/components/Product';
import AboutCompany from '@/components/AboutCompany';

export const metadata: Metadata = {
  title: "ShipBridge | FTL, PTL, Express Freight & Logistics Pan-India",
  description: "Book Full Truck Load (FTL), Part Truck Load (PTL), express delivery, cold chain, e-commerce logistics, and warehousing across India. AI-optimized routing, GPS tracking, insured shipments. Get instant quote.",
  keywords: "FTL truck booking, PTL freight, part truck load, full truck load, express delivery India, logistics India, freight forwarding, cold chain logistics, e-commerce logistics, warehouse storage, B2B coload, ShipBridge",
  openGraph: {
    title: "ShipBridge | India's AI-Powered Freight & Logistics Platform",
    description: "FTL, PTL, Express, Cold Chain, E-commerce logistics. Pan-India. GPS tracked. Insured. Instant quote.",
    images: [{ url: "/seo/og-image.jpg" }],
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Tracker />
      <ServicesShowcase />
      <RouteChecker />
      <Process />
      <Product />
      <AboutCompany />
    </main>
  );
}

