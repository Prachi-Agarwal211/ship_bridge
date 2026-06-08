'use client'
import { useRef, RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options = {}, customRef?: RefObject<T | null>) {
  const internalRef = useRef<T | null>(null)
  const containerRef = customRef ?? internalRef

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const yVal = isMobile ? 20 : 60;
    const durationVal = isMobile ? 0.6 : 0.9;
    const startVal = isMobile ? 'top 92%' : 'top 85%';

    const elements = gsap.utils.toArray<HTMLElement>('[data-reveal]', containerRef.current)
    elements.forEach((el) => {
      gsap.fromTo(el,
        { y: yVal, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: durationVal,
          ease: isMobile ? 'power2.out' : 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: startVal,
            toggleActions: 'play none none none',
          },
          ...options
        }
      )
    })
  }, { scope: containerRef })

  return containerRef
}
