'use client';

import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Truck, Package, Snowflake, ShoppingCart, 
  Warehouse, Repeat, Home, Car, 
  Presentation, ArrowLeftRight, Briefcase, MapPin
} from 'lucide-react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const services = [
  // Phase 1
  { id: 1, title: 'FTL Transport', description: 'Full Truck Load for massive cargo, ensuring dedicated capacity and faster transit times pan-India.', icon: Truck, image: '/services/ftl-transport.svg' },
  { id: 2, title: 'PTL Transport', description: 'Part Truck Load solutions offering cost-effective freight shipping for smaller volume cargo.', icon: Package, image: '/services/ptl-transport.svg' },
  { id: 3, title: 'Express Delivery', description: 'Time-critical express freight forwarding via air and surface for urgent shipments.', icon: Repeat, image: '/services/express-delivery.svg' },
  { id: 4, title: 'Cold Chain', description: 'Temperature-controlled logistics for perishables, pharmaceuticals, and sensitive goods.', icon: Snowflake, image: '/services/cold-chain.svg' },
  // Phase 2
  { id: 5, title: 'E-Commerce', description: 'End-to-end e-commerce fulfillment, last-mile delivery, and return management.', icon: ShoppingCart, image: '/services/e-commerce.svg' },
  { id: 6, title: 'Warehouse Storage', description: 'Secure, tech-enabled warehousing and distribution centers across major Indian hubs.', icon: Warehouse, image: '/services/warehouse-rack.svg' },
  { id: 7, title: 'B2B Coload', description: 'Optimized co-loading solutions for B2B enterprises to maximize efficiency and reduce costs.', icon: MapPin, image: '/services/b2b-network.svg' },
  { id: 8, title: 'Household Shifting', description: 'Professional, damage-free relocation services for homes and corporate offices.', icon: Home, image: '/services/household.jpeg' },
  // Phase 3
  { id: 9, title: 'Vehicle Logistics', description: 'Safe and insured transportation for two-wheelers, cars, and commercial vehicles.', icon: Car, image: '/services/vehicle.jpeg' },
  { id: 10, title: 'Exhibition & Trade', description: 'Specialized handling and time-definite delivery for exhibitions and trade shows.', icon: Presentation, image: '/services/exhibition.png' },
  { id: 11, title: 'Reverse Logistics', description: 'Efficient product returns and exchange management to improve your customer satisfaction.', icon: ArrowLeftRight, image: '/services/reverse-logistics.svg' },
  { id: 12, title: 'Project Cargo', description: 'Heavy and over-dimensional cargo (ODC) handling for industrial and infrastructure projects.', icon: Briefcase, image: '/services/project-cargo.svg' },
];

const bentoLayouts = [
  "md:col-span-2 md:row-span-1", // Large horizontal
  "md:col-span-1 md:row-span-2", // Tall vertical
  "md:col-span-1 md:row-span-1", // Small square
  "md:col-span-1 md:row-span-1"  // Small square
];

// Helper to render the content of a cell for a specific phase
const CellContent = ({ service, phaseClass }: { service: any, phaseClass: string }) => {
  const Icon = service.icon;
  return (
    <div className={`${phaseClass} absolute inset-0 group overflow-hidden w-full h-full`}>
      {/* Background Image */}
      <Image 
        src={service.image} 
        alt={service.title} 
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        unoptimized
      />
      {/* Always-on gradient for title readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
      
      {/* Hover dark overlay to make text pop */}
      <div className="absolute inset-0 bg-[#000000]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-between h-full w-full z-10">
        <div className="w-14 h-14 rounded-full bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-orange)] shadow-[var(--shadow-glow)] transition-all duration-500 group-hover:scale-110 group-hover:border-[var(--color-orange)]">
          <Icon size={24} />
        </div>
        
        <div className="mt-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 font-syne transform transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.3,1)] group-hover:-translate-y-2">
            {service.title}
          </h3>
          
          {/* Smooth auto-height transition using CSS grid rows */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-[cubic-bezier(0.25,1,0.3,1)]">
            <div className="overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
              <p className="text-neutral-300 leading-relaxed text-sm md:text-base pb-2 font-poppins">
                {service.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ServicesShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const isDesktop = window.matchMedia('(min-width: 768px)').matches;

    if (!isDesktop) {
      // Simple fade up for mobile
      gsap.from('.bento-cell', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });
      return;
    }

    // Desktop: Pin and 3-Phase Animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'center center',
        end: '+=400%', // Lots of scroll room for 3 phases
        pin: true,
        scrub: 1,
      },
    });

    // Initial state setup
    gsap.set('.phase-1', { opacity: 1, y: 0 });
    gsap.set('.phase-2', { opacity: 0, y: 50 });
    gsap.set('.phase-3', { opacity: 0, y: 50 });
    gsap.set('.progress-1', { width: '100%' });

    // Transition: Phase 1 -> Phase 2
    tl.to('.phase-1', { y: -50, opacity: 0, duration: 1, stagger: 0.1 })
      .to('.progress-2', { width: '100%', duration: 0.5 }, '<')
      .to('.phase-2', { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, '<0.4')
      .to({}, { duration: 0.5 }); // Hold

    // Transition: Phase 2 -> Phase 3
    tl.to('.phase-2', { y: -50, opacity: 0, duration: 1, stagger: 0.1 })
      .to('.progress-3', { width: '100%', duration: 0.5 }, '<')
      .to('.phase-3', { y: 0, opacity: 1, duration: 1, stagger: 0.1 }, '<0.4')
      .to({}, { duration: 0.5 }); // Hold at the end

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef} 
      className="relative w-full min-h-screen bg-transparent flex items-center justify-center py-24 z-10"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header & Progress */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--color-text)] font-syne mb-2">Our Capabilities</h2>
            <p className="text-[var(--color-text-muted)] font-poppins text-lg">12 logistics solutions engineered for scale.</p>
          </div>
          
          <div className="hidden md:flex gap-3">
            <div className="w-16 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-orange)] w-0 progress-1"></div>
            </div>
            <div className="w-16 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-green)] w-0 progress-2"></div>
            </div>
            <div className="w-16 h-1.5 bg-[var(--color-border)] rounded-full overflow-hidden">
              <div className="h-full bg-[var(--color-orange)] w-0 progress-3"></div>
            </div>
          </div>
        </div>

        {/* Desktop Bento Grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 gap-6 h-[65vh]">
          {bentoLayouts.map((layoutClass, cellIndex) => (
            <div 
              key={`cell-${cellIndex}`} 
              className={`bento-cell relative overflow-hidden bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[2rem] shadow-[var(--shadow-card)] transition-colors duration-500 hover:border-[var(--color-orange-muted)] ${layoutClass}`}
            >
              <CellContent service={services[0 + cellIndex]} phaseClass="phase-1" />
              <CellContent service={services[4 + cellIndex]} phaseClass="phase-2" />
              <CellContent service={services[8 + cellIndex]} phaseClass="phase-3" />
            </div>
          ))}
        </div>

        {/* Mobile Fallback: Simple scrolling list */}
        <div className="md:hidden flex flex-col gap-6">
          {services.map((service) => (
            <div key={service.id} className="bento-cell relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden h-64">
              <Image 
                src={service.image} 
                alt={service.title} 
                fill
                sizes="100vw"
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/90 via-[#050505]/50 to-transparent"></div>
              
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="w-12 h-12 rounded-full bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-orange)] mb-4 shadow-lg">
                  <service.icon size={20} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-syne">{service.title}</h3>
                <p className="text-neutral-300 text-sm line-clamp-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
