import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceTunnel from '@/components/ServiceTunnel';
import Process from '@/components/Process';
import Product from '@/components/Product';
import AboutCompany from '@/components/AboutCompany';

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

