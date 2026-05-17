'use client';

import { useState } from 'react';
import { type Category, REVIEWS, TRENDING, FEATURED_REVIEW } from '@/lib/reviews';
import Hero from './Hero';
import CategoryFilter from './CategoryFilter';
import ArticleCard from './ArticleCard';
import TrendingSidebar from './TrendingSidebar';

export default function HomepageClient() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filtered =
    activeCategory === 'All'
      ? REVIEWS
      : REVIEWS.filter((r) => r.category === activeCategory);

  const grid = filtered.length > 0 ? filtered : REVIEWS;

  return (
    <>
      {/* Parallax Hero */}
      <Hero review={FEATURED_REVIEW} />

      {/* Sticky category filter */}
      <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

      {/* Main content + sidebar */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '40px clamp(16px, 4vw, 48px)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 48,
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) 280px',
            gap: 48,
            alignItems: 'start',
          }}
          className="homepage-grid"
        >
          {/* Articles column */}
          <main>
            {/* Section heading */}
            <h2
              style={{
                fontFamily: "'Russo One', 'Arial Black', sans-serif",
                fontSize: 18,
                fontWeight: 400,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: '#F0EBE0',
                marginBottom: 20,
                borderBottom: '1px solid #2A2A2A',
                paddingBottom: 12,
              }}
            >
              Latest Reviews
            </h2>

            {grid.length === 0 ? (
              <p
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 14,
                  color: '#444444',
                  padding: '40px 0',
                }}
              >
                No reviews in this category yet.
              </p>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: 16,
                }}
                className="article-grid"
              >
                {grid.map((review) => (
                  <ArticleCard key={review.id} review={review} />
                ))}
              </div>
            )}
          </main>

          {/* Trending sidebar — hidden on mobile via CSS */}
          <div className="trending-sidebar" style={{ position: 'sticky', top: 60 }}>
            <TrendingSidebar reviews={TRENDING} />
          </div>
        </div>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1024px) {
          .article-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .article-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .homepage-grid {
            grid-template-columns: 1fr !important;
          }
          .trending-sidebar {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
