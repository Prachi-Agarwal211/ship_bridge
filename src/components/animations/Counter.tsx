'use client';
import { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CounterProps {
  from?: number;
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  ease?: string;
  scrub?: boolean;
  triggerOnScroll?: boolean;
  className?: string;
}

export default function Counter({
  from = 0,
  to,
  suffix = '',
  prefix = '',
  duration = 2,
  ease = 'power3.out',
  scrub = false,
  triggerOnScroll = true,
  className = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;
    if (!triggerOnScroll) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        triggered.current = true;
        gsap.fromTo(
          el,
          { textContent: from },
          {
            textContent: to,
            duration,
            ease,
            snap: { textContent: 1 },
            onUpdate: () => {
              el.textContent = prefix + Math.round(Number(el.textContent)).toLocaleString('en-IN') + suffix;
            },
          }
        );
      },
    });
  }, [to, from, duration, ease, triggerOnScroll, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}{from.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

export function ElasticCounter({
  to,
  suffix = '',
  prefix = '',
  className = '',
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    ScrollTrigger.create({
      trigger: el,
      start: 'top 90%',
      once: true,
      onEnter: () => {
        gsap.fromTo(
          el,
          { textContent: 0 },
          {
            textContent: to,
            duration: 2.5,
            ease: 'elastic.out(1, 0.5)',
            snap: { textContent: 1 },
            onUpdate: () => {
              el.textContent = prefix + Math.round(Number(el.textContent)).toLocaleString('en-IN') + suffix;
            },
          }
        );
      },
    });
  }, [to, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
