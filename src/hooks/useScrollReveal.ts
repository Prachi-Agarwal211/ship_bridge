'use client'
import { useRef, RefObject } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type RevealType = 
  | 'fade-up'      // default — slides up + fades
  | 'slide-left'   // slides in from left
  | 'slide-right'  // slides in from right
  | 'clip'         // clip-path wipe reveal
  | 'scale'        // scales from center
  | 'blur'         // blur → clear
  | 'rotate'       // 3D rotate in
  | 'split-chars'  // SplitText character stagger
  | 'stagger'      // stagger children sequentially

function getRevealVars(type: RevealType, isMobile: boolean): { from: gsap.TweenVars; to: gsap.TweenVars } {
  const yAmt = isMobile ? 20 : 60
  const xAmt = isMobile ? 30 : 80
  const dur = isMobile ? 0.6 : 0.9

  switch (type) {
    case 'slide-left':
      return {
        from: { x: -xAmt, opacity: 0 },
        to: { x: 0, opacity: 1, duration: dur, ease: 'power3.out' },
      }
    case 'slide-right':
      return {
        from: { x: xAmt, opacity: 0 },
        to: { x: 0, opacity: 1, duration: dur, ease: 'power3.out' },
      }
    case 'clip':
      return {
        from: { clipPath: 'inset(0 0 100% 0)', opacity: 0 },
        to: { clipPath: 'inset(0 0 0% 0)', opacity: 1, duration: dur * 1.3, ease: 'power3.inOut' },
      }
    case 'scale':
      return {
        from: { scale: 0.85, opacity: 0 },
        to: { scale: 1, opacity: 1, duration: dur, ease: 'power3.out' },
      }
    case 'blur':
      return {
        from: { filter: 'blur(12px)', opacity: 0 },
        to: { filter: 'blur(0px)', opacity: 1, duration: dur * 1.2, ease: 'power2.out' },
      }
    case 'rotate':
      return {
        from: { rotateX: -45, y: yAmt * 0.5, opacity: 0, transformPerspective: 600 },
        to: { rotateX: 0, y: 0, opacity: 1, duration: dur * 1.2, ease: 'power3.out' },
      }
    case 'split-chars':
      return {
        from: { y: yAmt, opacity: 0 },
        to: { y: 0, opacity: 1, duration: dur, ease: 'power3.out' },
      }
    case 'fade-up':
    default:
      return {
        from: { y: yAmt, opacity: 0 },
        to: { y: 0, opacity: 1, duration: dur, ease: 'power3.out' },
      }
  }
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(options = {}, customRef?: RefObject<T | null>) {
  const internalRef = useRef<T | null>(null)
  const containerRef = customRef ?? internalRef

  useGSAP(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const startVal = isMobile ? 'top 92%' : 'top 85%';

    const elements = gsap.utils.toArray<HTMLElement>('[data-reveal]', containerRef.current)
    elements.forEach((el) => {
      const revealType = (el.getAttribute('data-reveal') || 'fade-up') as RevealType
      const { from, to } = getRevealVars(revealType, isMobile)

      gsap.fromTo(el, from, {
        ...to,
        scrollTrigger: {
          trigger: el,
          start: startVal,
          toggleActions: 'play none none none',
        },
        ...options
      })

      // For split-chars, also animate child text with SplitText-like stagger
      if (revealType === 'split-chars') {
        const textEl = el.querySelector('h1, h2, h3, h4, p') as HTMLElement
        if (textEl) {
          const words = textEl.textContent?.split(' ') || []
          textEl.innerHTML = words.map((w, i) => 
            `<span class="reveal-word" style="display:inline-block;opacity:0;transform:translateY(${isMobile ? 10 : 30}px)">${w}</span>`
          ).join(' ')
          
          gsap.to(textEl.querySelectorAll('.reveal-word'), {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.5 : 0.7,
            stagger: 0.04,
            ease: 'power3.out',
            delay: 0.15,
            scrollTrigger: {
              trigger: el,
              start: startVal,
              toggleActions: 'play none none none',
            },
          })
        }
      }

      // For stagger type, animate children sequentially
      if (revealType === 'stagger') {
        const children = gsap.utils.toArray<HTMLElement>(':scope > *', el)
        gsap.fromTo(children,
          { y: isMobile ? 15 : 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: isMobile ? 0.5 : 0.7,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: startVal,
              toggleActions: 'play none none none',
            },
          }
        )
      }
    })
  }, { scope: containerRef })

  return containerRef
}
