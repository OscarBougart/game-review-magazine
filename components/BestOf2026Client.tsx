'use client';

import React from 'react';
import type { Review } from '@/lib/reviews';
import ScoreBadge from './ScoreBadge';

// One-line editorial verdicts for the ranked list
const RANKED_VERDICTS: Record<string, string> = {
  'elden-ring':
    'The open-world game that proves exploration only matters when discovery costs something.',
  'baldurs-gate-3':
    'The RPG that finally delivers on every promise the genre has made since its inception.',
  'hades-ii':
    'A sequel that improves on something that was already as close to perfect as the genre gets.',
  'disco-elysium':
    'The best-written game ever made — a novel that happens to require a controller.',
  'into-the-breach':
    'Perfect information, perfect design: a tactical puzzle with the depth of a full strategy game.',
  'hollow-knight':
    'An underground world built with more care than most AAA titles manage with ten times the budget.',
  'frostpunk-2':
    'A city-builder that turned governance into moral weight — harder to love, impossible to put down.',
  'neon-white':
    'A speedrunning masterpiece hiding behind anime schlock, with movement design that demands obsession.',
  'remnant-ii':
    'The best argument that the Soulslike formula can survive transplantation into a shooter chassis.',
};

interface BestOf2026ClientProps {
  goty: Review;
  ranked: Review[];
  honourable: Review[];
}

function ArrowIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function RankedRow({
  review,
  rank,
  isEven,
}: {
  review: Review;
  rank: number;
  isEven: boolean;
}) {
  const verdict = RANKED_VERDICTS[review.slug] ?? review.excerpt;
  const rankStr = String(rank).padStart(2, '0');

  return (
    <a
      href={`/reviews/${review.slug}`}
      className="ranked-row"
      style={{
        display: 'grid',
        gridTemplateColumns: '64px 120px 1fr auto',
        alignItems: 'center',
        gap: 'clamp(16px, 2.5vw, 32px)',
        padding: 'clamp(20px, 2.5vw, 28px) clamp(24px, 4vw, 48px)',
        backgroundColor: isEven ? '#161616' : '#111111',
        borderBottom: '1px solid rgba(239,159,39,0.15)',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'background-color 200ms ease-out',
      }}
      aria-label={`#${rank} ${review.title}, score ${review.score} out of 10`}
    >
      {/* Rank */}
      <span
        style={{
          fontFamily: "'Russo One', 'Arial Black', sans-serif",
          fontSize: 'clamp(28px, 4vw, 44px)',
          lineHeight: 1,
          color: '#EF9F27',
          flexShrink: 0,
          opacity: 0.85,
        }}
      >
        {rankStr}
      </span>

      {/* Thumbnail */}
      <div
        style={{
          width: 'clamp(80px, 10vw, 120px)',
          aspectRatio: '16 / 9',
          overflow: 'hidden',
          flexShrink: 0,
          position: 'relative',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.imageUrl}
          alt=""
          aria-hidden="true"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transition: 'transform 300ms ease-out',
          }}
          className="ranked-thumb"
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div style={{ minWidth: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.18em',
              color: '#EF9F27',
              flexShrink: 0,
            }}
          >
            {review.category}
          </span>
          <span
            style={{
              width: 3,
              height: 3,
              borderRadius: '50%',
              backgroundColor: '#444444',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 9,
              color: '#444444',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              flexShrink: 0,
            }}
          >
            {review.developer}
          </span>
        </div>

        <h3
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 'clamp(16px, 2vw, 22px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#F0EBE0',
            margin: '0 0 8px',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {review.title}
        </h3>

        <p
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 'clamp(12px, 1.3vw, 14px)',
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#888888',
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}
        >
          {verdict}
        </p>
      </div>

      {/* Score + arrow */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 12,
          flexShrink: 0,
        }}
      >
        <ScoreBadge score={review.score} size="sm" />
        <span
          className="ranked-arrow"
          style={{
            color: '#444444',
            transition: 'color 200ms ease-out, transform 200ms ease-out',
            display: 'flex',
          }}
        >
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

function HonourableCard({ review }: { review: Review }) {
  return (
    <a
      href={`/reviews/${review.slug}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1A1A1A',
        border: '1px solid #2A2A2A',
        borderRadius: 0,
        overflow: 'hidden',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'border-color 200ms ease-out, transform 200ms ease-out',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.borderColor = '#EF9F27';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.borderColor = '#2A2A2A';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
      aria-label={`${review.title}, score ${review.score} out of 10`}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', paddingTop: '56.25%', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.imageUrl}
          alt=""
          aria-hidden="true"
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
        <div style={{ position: 'absolute', top: 8, right: 8 }}>
          <ScoreBadge score={review.score} size="sm" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '14px 16px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 9,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: '#EF9F27',
          }}
        >
          {review.category}
        </span>
        <h3
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 15,
            fontWeight: 700,
            lineHeight: 1.25,
            color: '#F0EBE0',
            margin: 0,
          }}
        >
          {review.title}
        </h3>
        <p
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 12,
            fontStyle: 'italic',
            lineHeight: 1.6,
            color: '#888888',
            margin: 0,
            flex: 1,
          }}
        >
          {RANKED_VERDICTS[review.slug] ?? review.excerpt}
        </p>
        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 10,
            color: '#444444',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
            marginTop: 8,
          }}
        >
          {review.developer} · {review.year}
        </p>
      </div>
    </a>
  );
}

export default function BestOf2026Client({ goty, ranked, honourable }: BestOf2026ClientProps) {
  return (
    <main style={{ backgroundColor: '#111111', minHeight: '100vh', paddingTop: 60 }}>

      {/* ── 1. CINEMATIC PAGE HEADER ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          height: 'clamp(420px, 55vw, 640px)',
          backgroundColor: '#0A0A0A',
        }}
      >
        {/* Background image — tinted dark */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={goty.imageUrl}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            filter: 'brightness(0.25) saturate(0.6)',
          }}
        />

        {/* Texture grain overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, rgba(17,17,17,0.6) 0%, rgba(17,17,17,0.2) 50%, rgba(17,17,17,0.8) 100%)',
          }}
        />

        {/* Hard bottom fade */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 30%, rgba(17,17,17,0.85) 75%, #111111 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            maxWidth: 1280,
            margin: '0 auto',
            left: 0,
            right: 0,
            padding: '0 clamp(24px, 5vw, 80px) clamp(40px, 5vw, 64px)',
          }}
        >
          {/* Year label */}
          <span
            style={{
              fontFamily: "'Russo One', 'Arial Black', sans-serif",
              fontSize: 'clamp(10px, 1.2vw, 13px)',
              letterSpacing: '0.35em',
              color: '#EF9F27',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: 16,
            }}
          >
            Game Review Magazine · 2026
          </span>

          {/* Main headline */}
          <h1
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(36px, 7vw, 88px)',
              fontWeight: 700,
              lineHeight: 0.95,
              color: '#F0EBE0',
              letterSpacing: '-0.02em',
              margin: '0 0 24px',
              maxWidth: '16ch',
            }}
          >
            The Best Games of 2026
          </h1>

          {/* Subheading */}
          <p
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(14px, 1.8vw, 19px)',
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.6,
              color: '#888888',
              maxWidth: '52ch',
              margin: 0,
            }}
          >
            Our editors&rsquo; definitive ranking of the year&rsquo;s finest.
          </p>
        </div>
      </div>

      {/* Amber divider */}
      <div style={{ height: 2, backgroundColor: '#EF9F27', width: '100%' }} />

      {/* ── 2. GAME OF THE YEAR ── */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(56px, 7vw, 96px) clamp(24px, 5vw, 80px) 0',
        }}
      >
        {/* Section label */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            marginBottom: 28,
          }}
        >
          <span
            style={{
              fontFamily: "'Russo One', 'Arial Black', sans-serif",
              fontSize: 10,
              letterSpacing: '0.25em',
              color: '#EF9F27',
              textTransform: 'uppercase',
            }}
          >
            № 01
          </span>
          <div style={{ flex: 1, height: 1, backgroundColor: '#2A2A2A' }} />
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: '0.2em',
              color: '#444444',
              textTransform: 'uppercase',
            }}
          >
            Top Pick
          </span>
        </div>

        {/* GOTY hero card */}
        <a
          href={`/reviews/${goty.slug}`}
          style={{
            display: 'block',
            position: 'relative',
            overflow: 'hidden',
            height: 'clamp(360px, 45vw, 560px)',
            textDecoration: 'none',
            cursor: 'pointer',
            border: '1px solid #2A2A2A',
            borderRadius: 0,
            transition: 'border-color 250ms ease-out',
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
            const img = e.currentTarget.querySelector<HTMLElement>('.goty-img');
            if (img) img.style.transform = 'scale(1.03)';
            e.currentTarget.style.borderColor = '#EF9F27';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
            const img = e.currentTarget.querySelector<HTMLElement>('.goty-img');
            if (img) img.style.transform = 'scale(1)';
            e.currentTarget.style.borderColor = '#2A2A2A';
          }}
          aria-label={`Game of the Year: ${goty.title}, score ${goty.score} out of 10`}
        >
          {/* Full-bleed image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={goty.imageUrl}
            alt=""
            aria-hidden="true"
            className="goty-img"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 400ms ease-out',
            }}
          />

          {/* Left-to-right vignette */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, rgba(17,17,17,0.95) 0%, rgba(17,17,17,0.6) 45%, rgba(17,17,17,0.1) 100%)',
            }}
          />
          {/* Bottom fade */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to bottom, transparent 20%, rgba(17,17,17,0.5) 70%, rgba(17,17,17,0.85) 100%)',
            }}
          />

          {/* Text content */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 'clamp(28px, 4vw, 56px)',
            }}
          >
            {/* GOTY badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                backgroundColor: '#EF9F27',
                padding: '6px 14px',
                marginBottom: 20,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#111111" aria-hidden="true">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <span
                style={{
                  fontFamily: "'Russo One', 'Arial Black', sans-serif",
                  fontSize: 10,
                  letterSpacing: '0.25em',
                  color: '#111111',
                  textTransform: 'uppercase',
                }}
              >
                Game of the Year
              </span>
            </div>

            {/* Genre */}
            <span
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#EF9F27',
                display: 'block',
                marginBottom: 10,
              }}
            >
              {goty.category}
            </span>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Libre Bodoni', Georgia, serif",
                fontSize: 'clamp(32px, 5.5vw, 72px)',
                fontWeight: 700,
                lineHeight: 1.0,
                color: '#F0EBE0',
                margin: '0 0 20px',
                maxWidth: '14ch',
              }}
            >
              {goty.title}
            </h2>

            {/* Editorial verdict */}
            <p
              style={{
                fontFamily: "'Libre Bodoni', Georgia, serif",
                fontSize: 'clamp(13px, 1.5vw, 17px)',
                fontStyle: 'italic',
                lineHeight: 1.75,
                color: 'var(--color-text-article)',
                maxWidth: '56ch',
                marginBottom: 28,
              }}
            >
              {goty.excerpt}
            </p>

            {/* Bottom row — score + meta */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <ScoreBadge score={goty.score} size="lg" />
              <div
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 11,
                  color: '#888888',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                }}
              >
                {goty.developer} &nbsp;·&nbsp; {goty.platform} &nbsp;·&nbsp; {goty.year}
              </div>
            </div>
          </div>
        </a>
      </div>

      {/* ── 3. RANKED LIST 2–9 ── */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(56px, 7vw, 96px) 0 0',
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '0 clamp(24px, 5vw, 80px)',
            marginBottom: 28,
          }}
        >
          <h2
            style={{
              fontFamily: "'Russo One', 'Arial Black', sans-serif",
              fontSize: 10,
              fontWeight: 400,
              letterSpacing: '0.25em',
              color: '#F0EBE0',
              textTransform: 'uppercase',
              margin: 0,
            }}
          >
            The Rankings
          </h2>
          <div style={{ flex: 1, height: 1, backgroundColor: '#2A2A2A' }} />
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 9,
              color: '#444444',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Positions 2–{ranked.length + 1}
          </span>
        </div>

        {/* Amber top border */}
        <div style={{ height: 1, backgroundColor: 'rgba(239,159,39,0.3)', marginBottom: 0 }} />

        {/* Ranked rows */}
        <div>
          {ranked.map((review, i) => (
            <RankedRow
              key={review.id}
              review={review}
              rank={i + 2}
              isEven={i % 2 === 1}
            />
          ))}
        </div>
      </div>

      {/* ── 4. HONOURABLE MENTIONS GRID ── */}
      {honourable.length > 0 && (
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: 'clamp(56px, 7vw, 96px) clamp(24px, 5vw, 80px) clamp(64px, 8vw, 112px)',
          }}
        >
          {/* Section header */}
          <div
            style={{
              marginBottom: 28,
              paddingBottom: 16,
              borderBottom: '1px solid #2A2A2A',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
              <div>
                <span
                  style={{
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 9,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em',
                    color: '#EF9F27',
                    display: 'block',
                    marginBottom: 8,
                  }}
                >
                  Editors&rsquo; Picks
                </span>
                <h2
                  style={{
                    fontFamily: "'Libre Bodoni', Georgia, serif",
                    fontSize: 'clamp(22px, 3.5vw, 36px)',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    color: '#F0EBE0',
                    margin: 0,
                  }}
                >
                  Honourable Mentions
                </h2>
              </div>
              <p
                style={{
                  fontFamily: "'Libre Bodoni', Georgia, serif",
                  fontSize: 'clamp(12px, 1.4vw, 15px)',
                  fontStyle: 'italic',
                  lineHeight: 1.6,
                  color: '#888888',
                  maxWidth: '36ch',
                  textAlign: 'right',
                  margin: 0,
                }}
              >
                Games that didn&rsquo;t make the top ranking but deserve your full attention.
              </p>
            </div>
          </div>

          {/* Grid */}
          <div className="honourable-grid">
            {honourable.map((review) => (
              <HonourableCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      )}

      {/* Responsive rules + ranked row hover */}
      <style>{`
        .honourable-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .honourable-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .honourable-grid {
            grid-template-columns: 1fr;
          }
          .ranked-row {
            grid-template-columns: 40px 72px 1fr auto !important;
            gap: 12px !important;
            padding: 16px !important;
          }
        }
        .ranked-row:hover {
          background-color: #1A1A1A !important;
        }
        .ranked-row:hover .ranked-thumb {
          transform: scale(1.06) !important;
        }
        .ranked-row:hover .ranked-arrow {
          color: #EF9F27 !important;
          transform: translateX(3px) !important;
        }
        a:focus-visible {
          outline: 2px solid #EF9F27;
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}
