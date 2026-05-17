'use client';

import React, { useEffect, useRef } from 'react';
import type { ReviewDetail } from '@/lib/reviews';
import ScoreBadge from './ScoreBadge';

interface ReviewHeroProps {
  review: ReviewDetail;
}

export default function ReviewHero({ review }: ReviewHeroProps) {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        if (imgRef.current) {
          const offset = window.scrollY * 0.35;
          imgRef.current.style.setProperty('--parallax-offset', `${offset}px`);
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      aria-label={`Hero for ${review.title}`}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        backgroundColor: '#111111',
      }}
    >
      {/* Parallax image */}
      <div
        ref={imgRef}
        className="parallax-image"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: '-20%',
          height: '140%',
          backgroundImage: `url(${review.imageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
        role="img"
        aria-label={`${review.title} cover art`}
      />

      {/* Left vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(17,17,17,0.9) 0%, rgba(17,17,17,0.5) 50%, transparent 75%)',
          zIndex: 1,
        }}
      />
      {/* Bottom fade to solid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 30%, rgba(17,17,17,0.75) 65%, #111111 100%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 clamp(24px, 5vw, 80px) 52px',
          }}
        >
          {/* Genre tag */}
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#EF9F27',
              display: 'block',
              marginBottom: 14,
            }}
          >
            {review.category} Review
          </span>

          {/* Title */}
          <h1
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(36px, 6vw, 80px)',
              fontWeight: 700,
              lineHeight: 1.02,
              color: '#F0EBE0',
              marginBottom: 28,
              maxWidth: '16ch',
            }}
          >
            {review.title}
          </h1>

          {/* Score badge */}
          <div style={{ marginBottom: 20 }}>
            <ScoreBadge score={review.score} size="lg" />
          </div>

          {/* Publisher · Platform · Year */}
          <p
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 11,
              color: '#888888',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            {review.publisher} &nbsp;·&nbsp; {review.platform} &nbsp;·&nbsp; {review.year}
          </p>
        </div>
      </div>
    </section>
  );
}
