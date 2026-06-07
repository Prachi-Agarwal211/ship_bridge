'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
import { useLenis } from 'lenis/react'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {
    // Sync Lenis scroll position with ScrollTrigger
    ScrollTrigger.update()
  })

  useEffect(() => {
    // Connect Lenis RAF to GSAP ticker
    function onFrame(time: number) {
      lenis?.raf(time * 1000)
    }
    gsap.ticker.add(onFrame)
    gsap.ticker.lagSmoothing(0)
    return () => gsap.ticker.remove(onFrame)
  }, [lenis])

  return <>{children}</>
}
