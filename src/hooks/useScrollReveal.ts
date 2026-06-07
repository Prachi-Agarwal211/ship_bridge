'use client'
import { useRef, RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useScrollReveal(options = {}, customRef?: RefObject<any>) {
  const containerRef = customRef || useRef(null)

  useGSAP(() => {
    const elements = gsap.utils.toArray('[data-reveal]', containerRef.current)
    elements.forEach((el: any) => {
      gsap.fromTo(el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          ...options
        }
      )
    })
  }, { scope: containerRef })

  return containerRef
}
