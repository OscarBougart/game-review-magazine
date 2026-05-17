'use client';

import React from 'react';
import type { CategoryMeta } from '@/lib/reviews';
import { ALL_REVIEWS } from '@/lib/reviews';

interface CategoriesPageClientProps {
  featured: CategoryMeta;
  grid: CategoryMeta[];
  allCategories: CategoryMeta[];
}

function CategoryCard({ category, reviewCount }: { category: CategoryMeta; reviewCount: number }) {
  return (
    <a
      href={`/categories/${category.slug}`}
      style={{
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        aspectRatio: '16 / 9',
        textDecoration: 'none',
        cursor: 'pointer',
        border: '1px solid #2A2A2A',
        borderRadius: 0,
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
        const img = e.currentTarget.querySelector<HTMLElement>('.cat-img');
        const overlay = e.currentTarget.querySelector<HTMLElement>('.cat-overlay');
        if (img) img.style.transform = 'scale(1.05)';
        if (overlay) overlay.style.backgroundColor = 'rgba(17,17,17,0.65)';
        e.currentTarget.style.borderColor = '#EF9F27';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
        const img = e.currentTarget.querySelector<HTMLElement>('.cat-img');
        const overlay = e.currentTarget.querySelector<HTMLElement>('.cat-overlay');
        if (img) img.style.transform = 'scale(1)';
        if (overlay) overlay.style.backgroundColor = 'rgba(17,17,17,0.45)';
        e.currentTarget.style.borderColor = '#2A2A2A';
      }}
      aria-label={`Browse ${category.name} reviews — ${reviewCount} review${reviewCount !== 1 ? 's' : ''}`}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={category.imageUrl}
        alt=""
        aria-hidden="true"
        className="cat-img"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transition: 'transform 300ms ease-out',
        }}
        loading="lazy"
      />

      {/* Dark gradient overlay */}
      <div
        className="cat-overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.45) 60%, rgba(17,17,17,0.2) 100%)',
          transition: 'background-color 300ms ease-out',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '20px 20px 18px',
        }}
      >
        {/* Review count badge */}
        <span
          style={{
            display: 'inline-block',
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 9,
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.18em',
            color: '#111111',
            backgroundColor: '#EF9F27',
            padding: '3px 8px',
            marginBottom: 10,
          }}
        >
          {reviewCount} {reviewCount === 1 ? 'Review' : 'Reviews'}
        </span>

        {/* Category name */}
        <h3
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 'clamp(20px, 2.5vw, 28px)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#F0EBE0',
            margin: 0,
          }}
        >
          {category.name}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 12,
            lineHeight: 1.5,
            color: '#888888',
            marginTop: 6,
            margin: '6px 0 0',
          }}
        >
          {category.description}
        </p>
      </div>
    </a>
  );
}

export default function CategoriesPageClient({
  featured,
  grid,
  allCategories,
}: CategoriesPageClientProps) {
  const REVIEW_COUNTS: Record<string, number> = Object.fromEntries(
    allCategories.map((cat) => [
      cat.slug,
      ALL_REVIEWS.filter((r) => r.category.toLowerCase() === cat.name.toLowerCase()).length,
    ])
  );

  return (
    <main
      style={{
        backgroundColor: '#111111',
        minHeight: '100vh',
        paddingTop: 60,
      }}
    >
      {/* PAGE HEADER */}
      <div
        style={{
          borderBottom: '1px solid #EF9F27',
          backgroundColor: '#111111',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: 'clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px) clamp(32px, 4vw, 56px)',
          }}
        >
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 10,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#EF9F27',
              display: 'block',
              marginBottom: 16,
            }}
          >
            Browse
          </span>
          <h1
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(40px, 7vw, 80px)',
              fontWeight: 700,
              lineHeight: 1.0,
              color: '#F0EBE0',
              letterSpacing: '-0.01em',
              margin: '0 0 16px',
            }}
          >
            Categories
          </h1>
          <p
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 'clamp(14px, 1.6vw, 17px)',
              fontWeight: 400,
              lineHeight: 1.65,
              color: '#888888',
              maxWidth: '52ch',
              margin: 0,
            }}
          >
            Browse reviews by genre. Every category is a different argument for why games matter.
          </p>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(40px, 5vw, 72px) clamp(24px, 5vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'clamp(48px, 6vw, 80px)',
        }}
      >
        {/* FEATURED CATEGORY */}
        <section aria-label={`Featured category: ${featured.name}`}>
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 16,
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: '1px solid #2A2A2A',
            }}
          >
            <h2
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#F0EBE0',
                margin: 0,
              }}
            >
              Featured This Week
            </h2>
            <span
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                color: '#444444',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {featured.name}
            </span>
          </div>

          <a
            href={`/categories/${featured.slug}`}
            style={{
              display: 'block',
              position: 'relative',
              overflow: 'hidden',
              textDecoration: 'none',
              cursor: 'pointer',
              height: 'clamp(320px, 40vw, 480px)',
              border: '1px solid #2A2A2A',
              borderRadius: 0,
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              const img = e.currentTarget.querySelector<HTMLElement>('.feat-img');
              if (img) img.style.transform = 'scale(1.03)';
              e.currentTarget.style.borderColor = '#EF9F27';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              const img = e.currentTarget.querySelector<HTMLElement>('.feat-img');
              if (img) img.style.transform = 'scale(1)';
              e.currentTarget.style.borderColor = '#2A2A2A';
            }}
            aria-label={`Explore ${featured.name} reviews`}
          >
            {/* Background image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={featured.imageUrl}
              alt=""
              aria-hidden="true"
              className="feat-img"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 300ms ease-out',
              }}
            />

            {/* Left vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, rgba(17,17,17,0.92) 0%, rgba(17,17,17,0.5) 50%, rgba(17,17,17,0.15) 100%)',
              }}
            />
            {/* Bottom fade */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to bottom, transparent 30%, rgba(17,17,17,0.6) 70%, rgba(17,17,17,0.9) 100%)',
              }}
            />

            {/* Content */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 'clamp(24px, 3vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 16,
              }}
            >
              <span
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 9,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#111111',
                  backgroundColor: '#EF9F27',
                  padding: '4px 10px',
                }}
              >
                {REVIEW_COUNTS[featured.slug] ?? 0} Reviews
              </span>

              <div>
                <h3
                  style={{
                    fontFamily: "'Libre Bodoni', Georgia, serif",
                    fontSize: 'clamp(28px, 5vw, 56px)',
                    fontWeight: 700,
                    lineHeight: 1.05,
                    color: '#F0EBE0',
                    margin: '0 0 12px',
                    maxWidth: '12ch',
                  }}
                >
                  {featured.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 'clamp(13px, 1.4vw, 16px)',
                    lineHeight: 1.7,
                    color: 'var(--color-text-article)',
                    maxWidth: '52ch',
                    margin: 0,
                  }}
                >
                  {featured.featuredDescription}
                </p>
              </div>

              {/* CTA */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#111111',
                  backgroundColor: '#EF9F27',
                  padding: '12px 24px',
                  borderRadius: 0,
                  transition: 'opacity 150ms ease-out',
                  pointerEvents: 'none',
                }}
              >
                Explore {featured.name}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </div>
          </a>
        </section>

        {/* CATEGORY GRID */}
        <section aria-label="All categories">
          <div
            style={{
              display: 'flex',
              alignItems: 'baseline',
              marginBottom: 20,
              paddingBottom: 12,
              borderBottom: '1px solid #2A2A2A',
            }}
          >
            <h2
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#F0EBE0',
                margin: 0,
              }}
            >
              All Genres
            </h2>
          </div>

          <div className="category-grid">
            {allCategories.map((cat) => (
              <CategoryCard
                key={cat.slug}
                category={cat}
                reviewCount={REVIEW_COUNTS[cat.slug] ?? 0}
              />
            ))}
          </div>
        </section>
      </div>

      <style>{`
        .category-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        @media (max-width: 900px) {
          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .category-grid {
            grid-template-columns: 1fr;
          }
        }
        a:focus-visible {
          outline: 2px solid #EF9F27;
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}
