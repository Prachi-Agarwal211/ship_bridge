'use client'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const cursor = cursorRef.current
    const follower = followerRef.current

    const onMove = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 })
      gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.15, ease: 'power2.out' })
    }

    const onHover = () => gsap.to(follower, { scale: 2.5, borderColor: '#f97316' })
    const onLeave = () => gsap.to(follower, { scale: 1, borderColor: 'rgba(249,115,22,0.5)' })

    window.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', onHover)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  )
}
