import { notFound } from 'next/navigation';
import { CATEGORIES_META, getReviewsByCategory, getCategoryMeta } from '@/lib/reviews';
import ArticleCard from '@/components/ArticleCard';

export async function generateStaticParams() {
  return CATEGORIES_META.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getCategoryMeta(slug);
  if (!meta) return {};
  return {
    title: `${meta.name} Reviews — Game Review Magazine`,
    description: meta.description,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const meta = getCategoryMeta(slug);
  if (!meta) notFound();

  const reviews = getReviewsByCategory(slug);

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
          position: 'relative',
          overflow: 'hidden',
          height: 'clamp(240px, 30vw, 360px)',
          borderBottom: '1px solid #EF9F27',
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={meta.imageUrl}
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
        />
        {/* Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(17,17,17,0.88) 0%, rgba(17,17,17,0.5) 60%, rgba(17,17,17,0.2) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 20%, rgba(17,17,17,0.8) 100%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            maxWidth: 1280,
            margin: '0 auto',
            padding: 'clamp(24px, 3vw, 48px) clamp(24px, 5vw, 80px)',
          }}
        >
          <a
            href="/categories"
            className="cat-back-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#888888',
              textDecoration: 'none',
              marginBottom: 16,
              transition: 'color 150ms ease-out',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            All Categories
          </a>
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
            Genre
          </span>
          <h1
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(32px, 6vw, 64px)',
              fontWeight: 700,
              lineHeight: 1.05,
              color: '#F0EBE0',
              margin: '0 0 10px',
            }}
          >
            {meta.name}
          </h1>
          <p
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 'clamp(13px, 1.4vw, 16px)',
              lineHeight: 1.65,
              color: 'var(--color-text-article)',
              maxWidth: '52ch',
              margin: 0,
            }}
          >
            {meta.description}
          </p>
        </div>
      </div>

      {/* REVIEW GRID */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 80px)',
        }}
      >
        {/* Section header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'baseline',
            justifyContent: 'space-between',
            marginBottom: 28,
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
            {reviews.length > 0 ? `${reviews.length} Review${reviews.length !== 1 ? 's' : ''}` : 'No Reviews Yet'}
          </h2>
          {reviews.length > 0 && (
            <span
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                color: '#444444',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              {meta.name}
            </span>
          )}
        </div>

        {reviews.length === 0 ? (
          <div
            style={{
              textAlign: 'center',
              padding: 'clamp(64px, 10vw, 120px) 0',
            }}
          >
            <p
              style={{
                fontFamily: "'Libre Bodoni', Georgia, serif",
                fontSize: 'clamp(18px, 2.5vw, 24px)',
                fontStyle: 'italic',
                color: '#888888',
                marginBottom: 24,
              }}
            >
              No reviews in this category yet.
            </p>
            <a
              href="/categories"
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: '#111111',
                backgroundColor: '#EF9F27',
                padding: '12px 24px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                borderRadius: 0,
                transition: 'opacity 150ms ease-out',
              }}
            >
              Browse Other Categories
            </a>
          </div>
        ) : (
          <div className="cat-review-grid">
            {reviews.map((review) => (
              <ArticleCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </div>

      <style>{`
        .cat-review-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        @media (max-width: 900px) {
          .cat-review-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 560px) {
          .cat-review-grid {
            grid-template-columns: 1fr;
          }
        }
        .cat-back-link:hover { color: #EF9F27 !important; }
        a:focus-visible {
          outline: 2px solid #EF9F27;
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}
