'use client';
import { useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  id?: string;
}

export default function ParallaxElement({ children, speed = 1, className = "", id }: ParallaxElementProps) {
  const element = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // A negative speed makes it go up faster than scroll, positive makes it lag behind (slower).
    // The typical `yPercent` logic:
    gsap.to(element.current, {
      yPercent: -20 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: element.current,
        start: "top bottom", // when the top of the element hits the bottom of the viewport
        end: "bottom top",   // when the bottom of the element hits the top of the viewport
        scrub: true
      }
    });
  }, { scope: element });

  return (
    <div ref={element} className={className} id={id}>
      {children}
    </div>
  );
}
