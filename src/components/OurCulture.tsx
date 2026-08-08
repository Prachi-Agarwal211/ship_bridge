'use client';

import React, { useState } from 'react';

interface CultureCard {
  id: number;
  badge: string;
  title: string;
  description: string;
  icon: string;
  borderColor: string;
  glowColor: string;
  glowColorHover: string;
  dividerFrom: string;
  dividerTo: string;
  baseTransform: string;
  duration: number;
}

const cultures: CultureCard[] = [
  {
    id: 1,
    badge: "CULTURE",
    title: "Move Fast",
    description: "We ship features, not decks. Speed and iteration are in our DNA.",
    icon: "⚡",
    borderColor: "rgba(249,115,22,0.45)",
    glowColor: "rgba(249,115,22,0.25)",
    glowColorHover: "rgba(249,115,22,0.55)",
    dividerFrom: "#f97316",
    dividerTo: "#fb923c",
    baseTransform: "translateY(0px) rotateY(6deg) translateX(15px)",
    duration: 4,
  },
  {
    id: 2,
    badge: "CULTURE",
    title: "Own It",
    description: "Everyone here is a founder at heart. We value high agency and ownership.",
    icon: "🛡️",
    borderColor: "rgba(34,197,94,0.35)",
    glowColor: "rgba(34,197,94,0.18)",
    glowColorHover: "rgba(34,197,94,0.45)",
    dividerFrom: "#22c55e",
    dividerTo: "#4ade80",
    baseTransform: "translateY(-20px) rotateY(2deg) translateX(5px)",
    duration: 4.5,
  },
  {
    id: 3,
    badge: "CULTURE",
    title: "Customer First",
    description: "Every product design decision starts and ends with customer empathy.",
    icon: "🤝",
    borderColor: "rgba(249,115,22,0.30)",
    glowColor: "rgba(249,115,22,0.14)",
    glowColorHover: "rgba(249,115,22,0.40)",
    dividerFrom: "#f97316",
    dividerTo: "#fb923c",
    baseTransform: "translateY(-40px) rotateY(-2deg) translateX(-5px)",
    duration: 5,
  },
  {
    id: 4,
    badge: "CULTURE",
    title: "Build for India",
    description: "Solving real-world, localized problems for real transporters & users.",
    icon: "🇮🇳",
    borderColor: "rgba(34,197,94,0.25)",
    glowColor: "rgba(34,197,94,0.12)",
    glowColorHover: "rgba(34,197,94,0.35)",
    dividerFrom: "#22c55e",
    dividerTo: "#4ade80",
    baseTransform: "translateY(-60px) rotateY(-6deg) translateX(-15px)",
    duration: 5.5,
  },
];

export default function OurCulture() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section 
      className="relative flex flex-col items-center overflow-hidden w-full" 
      style={{
        background: '#04080a',
        padding: '96px 20px 128px',
      }}
    >
      {/* BACKGROUND GLOWS */}
      <div 
        className="absolute pointer-events-none z-0"
        style={{
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(200,70,0,0.22) 0%, transparent 65%)',
          bottom: 0,
          left: '-100px',
        }}
      />
      <div 
        className="absolute pointer-events-none z-0"
        style={{
          width: '480px',
          height: '480px',
          background: 'radial-gradient(circle, rgba(0,150,55,0.18) 0%, transparent 65%)',
          top: 0,
          right: '-100px',
        }}
      />

      {/* ANIMATED SVG WAVE LINES */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
        viewBox="0 0 680 700" 
        preserveAspectRatio="none"
      >
        <path 
          d="M-40,540 C120,480 240,560 380,490 C520,415 600,495 740,435"
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeWidth: 1.2,
            strokeDasharray: 1400,
            stroke: '#f97316',
            animation: 'waveFade 7s ease-in-out infinite',
            animationDelay: '0s',
          }}
        />
        <path 
          d="M-40,580 C130,520 250,600 390,530 C530,455 610,535 740,470"
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeWidth: 1.2,
            strokeDasharray: 1400,
            stroke: '#22c55e',
            animation: 'waveFade 7s ease-in-out infinite',
            animationDelay: '1.2s',
          }}
        />
        <path 
          d="M-40,500 C110,445 230,520 360,455 C500,380 580,460 740,400"
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeWidth: 1.2,
            strokeDasharray: 1400,
            stroke: '#f97316',
            animation: 'waveFade 7s ease-in-out infinite',
            animationDelay: '2.4s',
          }}
        />
        <path 
          d="M-40,615 C150,555 270,635 400,565 C545,488 625,568 740,505"
          style={{
            fill: 'none',
            strokeLinecap: 'round',
            strokeWidth: 1.2,
            strokeDasharray: 1400,
            stroke: '#22c55e',
            animation: 'waveFade 7s ease-in-out infinite',
            animationDelay: '3.6s',
          }}
        />
      </svg>

      {/* HEADING AREA */}
      <div className="relative z-10 flex flex-col items-center mb-16 px-4">
        <span 
          style={{
            fontSize: '11px',
            letterSpacing: '3px',
            color: '#4ade80',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: '10px',
          }}
        >
          WORKING AT SHIPBRIDGE
        </span>
        <h2 
          className="text-4xl sm:text-5xl font-extrabold text-white text-center mb-4"
          style={{
            letterSpacing: '-1px',
          }}
        >
          Our Culture
        </h2>
        <div 
          style={{
            width: '64px',
            height: '4px',
            borderRadius: '2px',
            margin: '0 auto',
            background: 'linear-gradient(90deg, #f97316, #22c55e)',
          }}
        />
      </div>

      {/* CARDS CONTAINER (RESPONSIVE GRID TO FLEX DECK) */}
      <div 
        className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-end lg:justify-center gap-8 lg:gap-0 w-full max-w-7xl px-4 lg:px-0"
        style={{ perspective: '1200px' }}
      >
        {cultures.map((card) => {
          const isHovered = hoveredId === card.id;
          
          const customStyle = {
            '--desktop-transform': card.baseTransform,
            background: 'rgba(15,22,15,0.88)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            borderRadius: '16px',
            padding: '24px 20px',
            border: `1.5px solid ${card.borderColor}`,
            boxShadow: isHovered 
              ? `0 20px 50px ${card.glowColorHover}` 
              : `0 8px 40px ${card.glowColor}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            cursor: 'pointer',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            animation: `floatCard ${card.duration}s ease-in-out infinite`,
            transform: isHovered 
              ? 'var(--base-transform) translateY(-14px)' 
              : 'var(--base-transform)',
          } as React.CSSProperties;

          return (
            <div
              key={card.id}
              style={customStyle}
              onMouseEnter={() => setHoveredId(card.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="culture-card-item w-full max-w-[280px] lg:w-[270px] min-h-[260px] lg:min-h-[340px] mx-auto lg:mx-0"
            >
              {/* TOP SECTION */}
              <div className="flex flex-col gap-4">
                <div>
                  <span 
                    style={{
                      fontSize: '10px',
                      letterSpacing: '2px',
                      color: 'rgba(255,255,255,0.50)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {card.badge}
                  </span>
                  
                  <div 
                    style={{
                      width: '48px',
                      height: '2px',
                      borderRadius: '2px',
                      background: `linear-gradient(90deg, ${card.dividerFrom}, ${card.dividerTo})`,
                      margin: '8px 0',
                    }}
                  />
                </div>
                
                <h3 
                  className="text-xl lg:text-[22px] font-extrabold text-white"
                  style={{
                    lineHeight: '1.2',
                  }}
                >
                  {card.title}
                </h3>
                
                <p 
                  className="text-[12px] lg:text-[13px] text-white/75 leading-relaxed"
                >
                  {card.description}
                </p>
              </div>

              {/* BOTTOM SECTION */}
              <div className="flex justify-end mt-[18px]">
                <div 
                  className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[20px]"
                >
                  {card.icon}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
