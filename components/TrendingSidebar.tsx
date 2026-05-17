import React from 'react';
import type { Review } from '@/lib/reviews';

interface TrendingSidebarProps {
  reviews: Review[];
}

export default function TrendingSidebar({ reviews }: TrendingSidebarProps) {
  return (
    <aside aria-label="Trending reviews">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'baseline',
          justifyContent: 'space-between',
          marginBottom: 16,
          borderBottom: '1px solid #2A2A2A',
          paddingBottom: 12,
        }}
      >
        <h2
          style={{
            fontFamily: "'Russo One', 'Arial Black', sans-serif",
            fontSize: 12,
            fontWeight: 400,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#F0EBE0',
          }}
        >
          Trending
        </h2>
        <button
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: '#EF9F27',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
        >
          See all
        </button>
      </div>

      {/* List */}
      <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {reviews.map((review, idx) => (
          <li key={review.id}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                backgroundColor: 'transparent',
                border: 'none',
                borderLeft: '2px solid transparent',
                borderRadius: 0,
                padding: '8px 0 8px 8px',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'border-color 150ms ease-out, background-color 150ms ease-out',
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.borderLeftColor = '#EF9F27';
                e.currentTarget.style.backgroundColor = 'rgba(239,159,39,0.05)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.borderLeftColor = 'transparent';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
              aria-label={`${review.title}, score ${review.score} out of 10`}
            >
              {/* Rank */}
              <span
                style={{
                  fontFamily: "'Russo One', 'Arial Black', sans-serif",
                  fontSize: 20,
                  color: idx === 0 ? '#EF9F27' : '#444444',
                  minWidth: 28,
                  lineHeight: 1,
                  flexShrink: 0,
                }}
              >
                {idx + 1}
              </span>

              {/* Thumbnail */}
              <div
                style={{
                  width: 56,
                  height: 40,
                  overflow: 'hidden',
                  flexShrink: 0,
                  borderRadius: 0,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={review.imageUrl}
                  alt=""
                  aria-hidden="true"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <p
                  style={{
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#F0EBE0',
                    lineHeight: 1.3,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {review.title}
                </p>
                <p
                  style={{
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 10,
                    color: '#444444',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    marginTop: 2,
                  }}
                >
                  {review.category}
                </p>
              </div>

              {/* Score */}
              <span
                style={{
                  fontFamily: "'Russo One', 'Arial Black', sans-serif",
                  fontSize: 14,
                  color: '#EF9F27',
                  flexShrink: 0,
                }}
              >
                {review.score}
                <span style={{ fontSize: 10, color: '#444444' }}>/10</span>
              </span>
            </button>
          </li>
        ))}
      </ol>
    </aside>
  );
}
