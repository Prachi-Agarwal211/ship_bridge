'use client';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface VideoChapter {
  src: string;
  poster?: string;
  start: string;
  end: string;
}

const CHAPTERS: VideoChapter[] = [
  { src: '/hero section/video.mp4', poster: '/hero section/logo.jpeg', start: 'top top', end: '+=200vh' },
];

export default function VideoBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useGSAP(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    // Fade out video opacity based on scroll — chapters 1-3 (Hero, Tracker, Pincode)
    gsap.to(video, {
      opacity: 0,
      scale: 1.1,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top top',
        end: '+=300vh',
        scrub: 1,
      },
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/hero section/logo.jpeg"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          filter: 'brightness(0.45) saturate(0.8)',
        }}
      >
        <source src={CHAPTERS[0].src} type="video/mp4" />
      </video>
      <div
        className="noise-overlay"
        style={{ zIndex: 1, position: 'absolute', inset: 0 }}
      />
      <div
        className="grid-bg"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          opacity: 0.3,
        }}
      />
    </div>
  );
}
