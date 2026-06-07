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

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100.0);
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
    for (int i = 0; i < 4; ++i) {
      v += a * noise(p);
      p = rot * p * 2.0 + shift;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.03; // Even slower animation

    vec2 q = vec2(fbm(uv + t * 0.2), fbm(uv + vec2(1.0)));
    vec2 r = vec2(fbm(uv + 1.0 * q + vec2(1.7, 9.2) + 0.1 * t),
                  fbm(uv + 1.0 * q + vec2(8.3, 2.8) + 0.1 * t));
    float f = fbm(uv + r);

    // Deep black/green base
    vec3 color = mix(vec3(0.01, 0.02, 0.015), vec3(0.01, 0.04, 0.02), clamp(f * f * 3.0, 0.0, 1.0));

    // Soft emerald/mint green volumetric glow
    vec2 greenQ = vec2(fbm(uv + vec2(4.0, 2.1) + t * 0.15), fbm(uv + vec2(6.1) - t * 0.1));
    color = mix(color, vec3(0.1, 0.9, 0.4), clamp(length(greenQ), 0.0, 1.0) * 0.08);
    
    // Additional deeper forest green highlights
    vec2 darkGreenQ = vec2(fbm(uv * 1.5 + t * 0.1), fbm(uv * 1.5 - t * 0.1));
    color = mix(color, vec3(0.0, 0.5, 0.2), clamp(length(darkGreenQ), 0.0, 1.0) * 0.05);

    // Mouse interaction - subtle green glow
    float mouseDist = length(uv - uMouse);
    float mouseGlow = exp(-mouseDist * mouseDist * 4.0) * 0.08;
    color += vec3(0.1, 0.9, 0.4) * mouseGlow;

    // Vignette
    float vignette = uv.x * (1.0 - uv.x) * uv.y * (1.0 - uv.y);
    vignette = pow(vignette * 15.0, 0.4);
    color *= vignette * 0.6 + 0.4;

    // Grain
    float grain = noise(uv * 300.0 + t * 10.0) * 0.015;
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
