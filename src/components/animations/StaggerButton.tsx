'use client';
import Link from 'next/link';

interface StaggerButtonProps {
  text: string;
  href: string;
  variant?: 'shipper' | 'carrier';
}

const charStyle: React.CSSProperties = {
  display: 'inline-block',
  transition: 'transform 0.5s cubic-bezier(0.125, 0.425, 0.270, 1.000)',
};

const hiddenCharStyle: React.CSSProperties = {
  ...charStyle,
  position: 'absolute',
  left: 0,
  top: 0,
  transform: 'translateY(110%)',
};

export default function StaggerButton({ text, href, variant = 'shipper' }: StaggerButtonProps) {
  const chars = text.split('').map((c) => (c === ' ' ? '\u00A0' : c));
  const isOrange = variant === 'shipper';

  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-bold text-base transition-all duration-500"
      style={{
        background: isOrange
          ? 'linear-gradient(135deg, #f97316, #ea580c)'
          : 'linear-gradient(135deg, #22c55e, #16a34a)',
        color: '#fff',
        minWidth: 180,
      }}
    >
      <span className="relative" style={{ lineHeight: 1.2, height: '1.2em', overflow: 'hidden' }}>
        {chars.map((char, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-500 group-hover:-translate-y-[110%]"
            style={{
              ...charStyle,
              transitionDelay: `${i * 0.035}s`,
              transitionTimingFunction: 'cubic-bezier(0.125, 0.425, 0.270, 1.000)',
            }}
          >
            {char}
          </span>
        ))}
        {chars.map((char, i) => (
          <span
            key={`h-${i}`}
            className="inline-block transition-transform duration-500 translate-y-[110%] group-hover:translate-y-0"
            style={{
              ...hiddenCharStyle,
              transitionDelay: `${i * 0.035}s`,
              transitionTimingFunction: 'cubic-bezier(0.125, 0.425, 0.270, 1.000)',
              position: 'absolute',
              left: `${chars.slice(0, i).reduce((acc, c) => acc + (c === '\u00A0' ? 0.3 : 0.6), 0)}em`,
            }}
          >
            {char}
          </span>
        ))}
      </span>
    </Link>
  );
}
