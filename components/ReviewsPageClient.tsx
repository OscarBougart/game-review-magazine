'use client';

import React, { useState, useMemo } from 'react';
import { ALL_REVIEWS } from '@/lib/reviews';
import type { Review, Category } from '@/lib/reviews';
import ArticleCard from './ArticleCard';
import ScoreBadge from './ScoreBadge';

type SortKey = 'latest' | 'highest' | 'lowest' | 'az';

const GENRE_FILTERS: Array<Exclude<Category, 'All'> | 'All'> = [
  'All', 'Action', 'RPG', 'Strategy', 'Indie', 'Adventure', 'Simulation',
];

const PAGE_SIZE = 9;

function FeaturedStrip({ review }: { review: Review }) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={`/reviews/${review.slug}`}
      className="featured-strip-grid"
      style={{
        display: 'grid',
        gridTemplateColumns: '60% 40%',
        textDecoration: 'none',
        color: 'inherit',
        backgroundColor: '#1A1A1A',
        border: '1px solid #2A2A2A',
        borderRadius: 0,
        overflow: 'hidden',
        transition: 'border-color 200ms ease-out',
        borderColor: hovered ? '#EF9F27' : '#2A2A2A',
        cursor: 'pointer',
        minHeight: 280,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`Editor's Choice: ${review.title}, score ${review.score} out of 10`}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.imageUrl}
          alt={`${review.title} screenshot`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            transform: hovered ? 'scale(1.03)' : 'scale(1)',
            transition: 'transform 300ms ease-out',
          }}
          loading="lazy"
        />
        {/* Right-side fade into content */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, transparent 60%, #1A1A1A)',
          }}
        />
      </div>

      {/* Content */}
      <div
        style={{
          padding: 'clamp(24px, 3vw, 40px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          justifyContent: 'center',
        }}
      >
        {/* Badge */}
        <span
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 9,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            color: '#111111',
            backgroundColor: '#EF9F27',
            padding: '3px 8px',
            alignSelf: 'flex-start',
          }}
        >
          Editor's Choice
        </span>

        {/* Category */}
        <span
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.14em',
            color: '#EF9F27',
          }}
        >
          {review.category}
        </span>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 'clamp(20px, 2.5vw, 30px)',
            fontWeight: 700,
            lineHeight: 1.15,
            color: '#F0EBE0',
          }}
        >
          {review.title}
        </h2>

        {/* Excerpt */}
        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 14,
            lineHeight: 1.7,
            color: '#888888',
          }}
        >
          {review.excerpt}
        </p>

        {/* Score + CTA row */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 4 }}>
          <ScoreBadge score={review.score} size="sm" />
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              color: hovered ? '#F0EBE0' : '#EF9F27',
              transition: 'color 150ms ease-out',
            }}
          >
            Read Review →
          </span>
        </div>
      </div>
    </a>
  );
}

export default function ReviewsPageClient() {
  const [activeGenre, setActiveGenre] = useState<typeof GENRE_FILTERS[number]>('All');
  const [sort, setSort] = useState<SortKey>('latest');
  const [page, setPage] = useState(1);

  // Highest-scored review (excluding featured hero — Elden Ring) for the strip
  const featuredStrip = useMemo(() => {
    return [...ALL_REVIEWS]
      .sort((a, b) => b.score - a.score)
      .find((r) => !r.featured) ?? ALL_REVIEWS[0];
  }, []);

  const filtered = useMemo(() => {
    let list = activeGenre === 'All'
      ? ALL_REVIEWS
      : ALL_REVIEWS.filter((r) => r.category === activeGenre);

    switch (sort) {
      case 'highest': list = [...list].sort((a, b) => b.score - a.score); break;
      case 'lowest':  list = [...list].sort((a, b) => a.score - b.score); break;
      case 'az':      list = [...list].sort((a, b) => a.title.localeCompare(b.title)); break;
      default:        list = [...list].sort((a, b) => b.id.localeCompare(a.id, undefined, { numeric: true })); break;
    }
    return list;
  }, [activeGenre, sort]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function changeGenre(g: typeof GENRE_FILTERS[number]) {
    setActiveGenre(g);
    setPage(1);
  }

  function changeSort(s: SortKey) {
    setSort(s);
    setPage(1);
  }

  return (
    <main style={{ backgroundColor: '#111111', minHeight: '100vh', paddingTop: 60 }}>
      {/* ── PAGE HEADER ── */}
      <section
        style={{
          backgroundColor: '#111111',
          borderBottom: '1px solid #EF9F27',
          padding: 'clamp(20px, 4vw, 48px) clamp(16px, 4vw, 48px) clamp(40px, 6vw, 72px)',
        }}
      >
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#EF9F27',
              marginBottom: 16,
            }}
          >
            Game Review Magazine
          </p>
          <h1
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(48px, 10vw, 112px)',
              fontWeight: 700,
              lineHeight: 0.95,
              color: '#F0EBE0',
              letterSpacing: '-0.02em',
              marginBottom: 24,
            }}
          >
            REVIEWS
          </h1>
          <p
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontStyle: 'italic',
              color: '#888888',
              lineHeight: 1.6,
            }}
          >
            Every game we've covered, scored and dissected.
          </p>
        </div>
      </section>

      {/* ── FILTER + SORT BAR (sticky) ── */}
      <div
        style={{
          position: 'sticky',
          top: 60, // NavHeader height
          zIndex: 20,
          backgroundColor: '#111111',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 clamp(16px, 4vw, 48px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 16,
            height: 52,
          }}
        >
          {/* Genre chips */}
          <nav
            aria-label="Filter reviews by genre"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 0,
              overflowX: 'auto',
              scrollbarWidth: 'none',
              flexShrink: 1,
            }}
            className="filter-chips"
          >
            {GENRE_FILTERS.map((g) => {
              const isActive = g === activeGenre;
              return (
                <button
                  key={g}
                  onClick={() => changeGenre(g)}
                  aria-pressed={isActive}
                  style={{
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: isActive ? '#F0EBE0' : '#888888',
                    backgroundColor: 'transparent',
                    border: 'none',
                    borderBottom: isActive ? '2px solid #EF9F27' : '2px solid transparent',
                    padding: '0 14px',
                    height: 52,
                    cursor: 'pointer',
                    transition: 'color 150ms ease-out, border-color 150ms ease-out',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = '#F0EBE0'; }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = '#888888'; }}
                >
                  {g}
                </button>
              );
            })}
          </nav>

          {/* Sort dropdown */}
          <select
            value={sort}
            onChange={(e) => changeSort(e.target.value as SortKey)}
            aria-label="Sort reviews"
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 11,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#888888',
              backgroundColor: '#111111',
              border: '1px solid #2A2A2A',
              borderRadius: 0,
              padding: '0 32px 0 12px',
              height: 36,
              cursor: 'pointer',
              outline: 'none',
              appearance: 'none',
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 10px center',
              flexShrink: 0,
            }}
            className="sort-select"
          >
            <option value="latest">Latest</option>
            <option value="highest">Highest Scored</option>
            <option value="lowest">Lowest Scored</option>
            <option value="az">A–Z</option>
          </select>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <main
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(16px, 4vw, 48px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 48,
        }}
      >
        {/* Featured strip — only when showing All + not filtered */}
        {activeGenre === 'All' && (
          <div>
            <p
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#444444',
                marginBottom: 16,
              }}
            >
              Featured
            </p>
            <FeaturedStrip review={featuredStrip} />
          </div>
        )}

        {/* Grid area */}
        <div>
          {/* Review count */}
          <p
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#444444',
              marginBottom: 24,
            }}
          >
            Showing {filtered.length} review{filtered.length !== 1 ? 's' : ''}
            {activeGenre !== 'All' ? ` in ${activeGenre}` : ''}
          </p>

          {/* Empty state */}
          {filtered.length === 0 ? (
            <div
              style={{
                padding: 'clamp(48px, 8vw, 96px) 24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                textAlign: 'center',
              }}
            >
              <p
                style={{
                  fontFamily: "'Libre Bodoni', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#F0EBE0',
                }}
              >
                No reviews found in this category yet.
              </p>
              <p
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 14,
                  color: '#444444',
                  lineHeight: 1.6,
                }}
              >
                We're working on it. Check back soon.
              </p>
              <button
                onClick={() => changeGenre('All')}
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#EF9F27',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  marginTop: 4,
                  textDecoration: 'underline',
                  textUnderlineOffset: 3,
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="reviews-grid">
              {paginated.map((review) => (
                <ArticleCard key={review.id} review={review} />
              ))}
            </div>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <nav
            aria-label="Review pages"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 0,
              borderTop: '1px solid #2A2A2A',
              paddingTop: 32,
            }}
          >
            {/* Prev */}
            <PaginationBtn
              label="← Prev"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              active={false}
            />

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PaginationBtn
                key={n}
                label={String(n)}
                onClick={() => setPage(n)}
                disabled={false}
                active={n === page}
              />
            ))}

            {/* Next */}
            <PaginationBtn
              label="Next →"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              active={false}
            />
          </nav>
        )}
      </main>

      <style>{`
        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .reviews-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 860px) {
          .featured-strip { grid-template-columns: 1fr !important; }
        }
        .filter-chips::-webkit-scrollbar { display: none; }
        .sort-select:focus {
          border-color: #EF9F27 !important;
          box-shadow: 0 0 0 3px rgba(239, 159, 39, 0.12);
        }
        a:focus-visible, button:focus-visible, select:focus-visible {
          outline: 2px solid #EF9F27;
          outline-offset: 2px;
        }
        @media (max-width: 760px) {
          .featured-strip-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}

interface PaginationBtnProps {
  label: string;
  onClick: () => void;
  disabled: boolean;
  active: boolean;
}

function PaginationBtn({ label, onClick, disabled, active }: PaginationBtnProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-current={active ? 'page' : undefined}
      style={{
        fontFamily: "'Public Sans', system-ui, sans-serif",
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: disabled ? '#2A2A2A' : active ? '#EF9F27' : hovered ? '#F0EBE0' : '#888888',
        backgroundColor: 'transparent',
        border: active ? '1px solid #EF9F27' : '1px solid transparent',
        borderRadius: 0,
        padding: '8px 14px',
        minWidth: 40,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'color 150ms ease-out, border-color 150ms ease-out',
        pointerEvents: disabled ? 'none' : 'auto',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </button>
  );
}
