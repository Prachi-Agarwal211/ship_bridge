'use client';
import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function ScrollRevealWrapper({ children, className = '' }: Props) {
  const ref = useScrollReveal();
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
