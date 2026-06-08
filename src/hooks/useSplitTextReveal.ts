'use client'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger, SplitText)

export function useSplitTextReveal() {
  const ref = useRef(null)

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const isDesktop = window.matchMedia('(min-width: 769px)').matches
    if (!isDesktop) return

    const split = new SplitText(ref.current, { type: 'lines,words' })
    gsap.from(split.words, {
      y: '110%',
      opacity: 0,
      stagger: 0.04,
      duration: 0.8,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
      }
    })
    return () => split.revert()
  }, { scope: ref })

  return ref
}
