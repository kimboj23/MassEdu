import React, { useEffect, useState } from 'react';
import styles from './WaveAnimation.module.css';

/**
 * WaveAnimation Component
 * Minimalist wave pattern animation that appears on scroll
 * Uses repeating geometric patterns for clean, accessible design
 */
export default function WaveAnimation() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate wave animation based on scroll position
  const waveOpacity = Math.min(scrollY / 300, 0.4);
  const isVisible = scrollY > 30;

  if (!isVisible) return null;

  return (
    <div className={styles.waveContainer} aria-hidden="true">
      {/* Wave pattern layer 1a - Primary color (first red line moving right) */}
      <svg
        className={styles.wavePattern}
        style={{
          opacity: waveOpacity,
          transform: `translateX(${scrollY * 0.15}px)`,
        }}
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wave-pattern-1a"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* First red wave arc */}
            <path
              d="M0,100 Q50,80 100,100 T200,100"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              opacity="0.3"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern-1a)" />
      </svg>

      {/* Wave pattern layer 1b - Primary color (second red line moving left) */}
      <svg
        className={styles.wavePattern}
        style={{
          opacity: waveOpacity,
          transform: `translateX(${-scrollY * 0.15}px)`,
        }}
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wave-pattern-1b"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Second red wave arc */}
            <path
              d="M0,120 Q50,100 100,120 T200,120"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="1.5"
              opacity="0.2"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern-1b)" />
      </svg>

      {/* Wave pattern layer 2 - Creative color */}
      <svg
        className={styles.wavePattern}
        style={{
          opacity: waveOpacity,
          transform: `translateX(${-scrollY * 0.1}px)`,
        }}
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wave-pattern-2"
            x="0"
            y="0"
            width="150"
            height="150"
            patternUnits="userSpaceOnUse"
          >
            {/* Offset wave arcs */}
            <path
              d="M0,75 Q37.5,55 75,75 T150,75"
              fill="none"
              stroke="var(--color-creative)"
              strokeWidth="2.5"
              opacity="0.4"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern-2)" />
      </svg>

      {/* Wave pattern layer 3 - Growth color */}
      <svg
        className={styles.wavePattern}
        style={{
          opacity: waveOpacity * 0.8,
          transform: `translateX(${scrollY * 0.05}px)`,
        }}
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="wave-pattern-3"
            x="0"
            y="0"
            width="180"
            height="180"
            patternUnits="userSpaceOnUse"
          >
            {/* Gentle wave curves */}
            <path
              d="M0,90 Q45,70 90,90 T180,90"
              fill="none"
              stroke="var(--color-growth)"
              strokeWidth="2"
              opacity="0.35"
            />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#wave-pattern-3)" />
      </svg>
    </div>
  );
}
