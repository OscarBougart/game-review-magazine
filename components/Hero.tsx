'use client';

import React, { useEffect, useRef } from 'react';
import type { Review } from '@/lib/reviews';
import ScoreBadge from './ScoreBadge';

interface HeroProps {
  review: Review;
}

export default function Hero({ review }: HeroProps) {
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
      aria-label={`Featured review: ${review.title}`}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        backgroundColor: '#111111',
      }}
    >
      {/* Parallax image — oversized so translateY never reveals background */}
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

      {/* Left vignette — keeps right side of image breathing */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(17,17,17,0.85) 0%, rgba(17,17,17,0.4) 45%, transparent 70%)',
          zIndex: 1,
        }}
      />
      {/* Bottom fade — hard stop to #111111 so no gap on scroll */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.7) 70%, #111111 100%)',
          zIndex: 1,
        }}
      />

      {/* Content — full-width positioner, inner div constrains the text block */}
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
          padding: '0 clamp(24px, 5vw, 80px) 48px',
        }}
      >
        {/* Genre tag */}
        <span
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#EF9F27',
            display: 'block',
            marginBottom: 12,
          }}
        >
          {review.category}
        </span>

        {/* Title */}
        <h1
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 'clamp(32px, 6vw, 72px)',
            fontWeight: 700,
            lineHeight: 1.05,
            color: '#F0EBE0',
            marginBottom: 16,
            maxWidth: '14ch',
          }}
        >
          {review.title}
        </h1>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 16,
            fontWeight: 400,
            lineHeight: 1.65,
            color: '#C4BDB4',
            marginBottom: 28,
            maxWidth: '52ch',
          }}
        >
          {review.excerpt}
        </p>

        {/* Score + CTA row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            flexWrap: 'wrap',
          }}
        >
          <ScoreBadge score={review.score} size="lg" />

          <button
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#F0EBE0',
              backgroundColor: 'transparent',
              border: '1px solid #F0EBE0',
              borderRadius: 0,
              padding: '12px 24px',
              minHeight: 44,
              cursor: 'pointer',
              transition: 'border-color 150ms ease-out, color 150ms ease-out',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.borderColor = '#EF9F27';
              e.currentTarget.style.color = '#EF9F27';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.currentTarget.style.borderColor = '#F0EBE0';
              e.currentTarget.style.color = '#F0EBE0';
            }}
            aria-label={`Read full review of ${review.title}`}
          >
            Read Review
          </button>
        </div>

        {/* Meta */}
        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 11,
            color: '#888888',
            marginTop: 20,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {review.developer} &nbsp;·&nbsp; {review.platform} &nbsp;·&nbsp; {review.year}
        </p>
      </div>
      </div>
    </section>
  );
}
