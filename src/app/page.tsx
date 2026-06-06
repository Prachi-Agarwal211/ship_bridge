import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Product from '@/components/Product';
import AboutCompany from '@/components/AboutCompany';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Product />
      <AboutCompany />
    </main>
  );
}

