import React from 'react';
import type { Review } from '@/lib/reviews';
import ScoreBadge from './ScoreBadge';

interface ArticleCardProps {
  review: Review;
  featured?: boolean;
}

export default function ArticleCard({ review, featured = false }: ArticleCardProps) {
  const { title, category, score, excerpt, imageUrl, developer, year } = review;

  return (
    <article
      tabIndex={0}
      role="button"
      aria-label={`${title}, score ${score} out of 10, ${category}`}
      style={{
        backgroundColor: '#1A1A1A',
        border: '1px solid #2A2A2A',
        borderRadius: 0,
        overflow: 'visible',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        transition: 'border-color 200ms ease-out, transform 200ms ease-out',
        width: '100%',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.borderColor = '#EF9F27';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
        e.currentTarget.style.borderColor = '#2A2A2A';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Thumbnail — padding-top trick locks 16:9 regardless of source image dimensions */}
      <div style={{
        position: 'relative',
        width: '100%',
        paddingTop: featured ? '42.86%' : '56.25%', /* 21:9 = 42.86%, 16:9 = 56.25% */
        overflow: 'hidden',
        flexShrink: 0,
      }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={`${title} screenshot`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
          loading="lazy"
        />
      </div>
      {/* Score badge — outside overflow:hidden so glow isn't clipped */}
      <div style={{ position: 'absolute', top: 8, right: 8, zIndex: 10 }}>
        <ScoreBadge score={score} size="sm" />
      </div>

      {/* Content */}
      <div style={{ padding: 12, flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        {/* Genre */}
        <span
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#EF9F27',
          }}
        >
          {category}
        </span>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: featured ? 22 : 16,
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#F0EBE0',
          }}
        >
          {title}
        </h2>

        {/* Excerpt — always visible, clamped to 2 lines on grid cards */}
        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 13,
            lineHeight: 1.6,
            color: '#888888',
            display: '-webkit-box',
            WebkitLineClamp: featured ? undefined : 2,
            WebkitBoxOrient: 'vertical' as const,
            overflow: featured ? 'visible' : 'hidden',
          }}
        >
          {excerpt}
        </p>

        {/* Meta */}
        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 11,
            color: '#444444',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginTop: 'auto',
          }}
        >
          {developer} · {year}
        </p>
      </div>
    </article>
  );
}
