'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec2 vUv;

  float hash(vec2 p) {
    p = fract(p * vec2(234.34, 435.345));
    p += dot(p, p + 34.23);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.4; // Slightly faster for visible movement
    
    // Create organic flowing coordinates
    vec2 p1 = vec2(noise(uv * 1.5 + t * 0.2), noise(uv * 2.0 - t * 0.15));
    vec2 p2 = vec2(noise(uv * 2.5 - t * 0.1), noise(uv * 1.5 + t * 0.2));
    
    // Base color: Deep absolute black
    vec3 color = vec3(0.00, 0.01, 0.005);
    
    // Deep dark green base flow - widened area but reduced brightness
    float baseMask = smoothstep(0.2, 0.85, noise(uv * 2.0 + p1 * 2.0));
    color = mix(color, vec3(0.015, 0.1, 0.04), baseMask * 0.6);
    
    // Mid-green body
    float midGreen = smoothstep(0.35, 0.9, noise(uv * 3.0 - p2 * 1.5));
    color = mix(color, vec3(0.02, 0.18, 0.08), midGreen * 0.5);
    
    // Smooth, creative flowing volumetric highlights instead of distinct "random lines"
    float flowNoise = noise(uv * 2.5 + p2 * 1.5 - p1 * 1.0 + t * 0.3);
    // Soft, glowing bright spots that morph organically
    float volumetricLight = smoothstep(0.4, 0.9, flowNoise);
    // Masked to the base fluid to look like internal glowing energy
    volumetricLight *= smoothstep(0.1, 0.7, baseMask);
    
    // Add a subtle moving color shift (dark green to bright neon green) to the highlights
    vec3 glowColor = mix(vec3(0.05, 0.4, 0.15), vec3(0.1, 0.7, 0.3), noise(uv * 4.0 + t));
    color += glowColor * volumetricLight * 0.45;

    // Mouse interaction - very subtle
    float mouseDist = length(uv - uMouse);
    float mouseGlow = exp(-mouseDist * mouseDist * 18.0) * 0.02;
    color += vec3(0.1, 0.4, 0.2) * mouseGlow;

    // Vignette
    float vignette = uv.x * (1.0 - uv.x) * uv.y * (1.0 - uv.y);
    vignette = pow(vignette * 15.0, 0.3);
    color *= vignette * 0.8 + 0.2;

    // Subtle cinematic grain
    float grain = (fract(sin(dot(uv, vec2(12.9898, 78.233) * 2.0)) * 43758.5453) - 0.5) * 0.025;
    color += grain;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0.5, 0.5) },
  }), []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = 1 - e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(({ clock }) => {
    uniforms.uTime.value = clock.getElapsedTime();
    uniforms.uMouse.value.x += (mouse.current.x - uniforms.uMouse.value.x) * 0.05;
    uniforms.uMouse.value.y += (mouse.current.y - uniforms.uMouse.value.y) * 0.05;
  });

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

export default function SceneBackground() {
  const [showGL, setShowGL] = useState(false);

  useEffect(() => {
    const isMobile = /iPhone|Android/i.test(navigator.userAgent);
    const hasGoodHardware = navigator.hardwareConcurrency > 2;
    setShowGL(!isMobile || hasGoodHardware);
  }, []);

  if (!showGL) return null;

  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
      }}
      camera={{ position: [0, 0, 1], fov: 75 }}
      gl={{ antialias: false, alpha: false, powerPreference: 'low-power' }}
      dpr={[1, 1.5]}
      frameloop="always"
    >
      <ShaderPlane />
    </Canvas>
  );
}
