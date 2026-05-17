import React from 'react';
import type { ReviewDetail, Review } from '@/lib/reviews';
import ScoreBadge from './ScoreBadge';

interface ReviewBodyProps {
  review: ReviewDetail;
  related: Review[];
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <span
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 11,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#888888',
          }}
        >
          {label}
        </span>
        <span
          style={{
            fontFamily: "'Russo One', 'Arial Black', sans-serif",
            fontSize: 14,
            color: '#EF9F27',
          }}
        >
          {value}
        </span>
      </div>
      {/* Track */}
      <div
        style={{
          height: 2,
          backgroundColor: '#2A2A2A',
          width: '100%',
          position: 'relative',
        }}
      >
        {/* Fill */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${value * 10}%`,
            backgroundColor: '#EF9F27',
            transition: 'width 600ms ease-out',
          }}
        />
      </div>
    </div>
  );
}

function RelatedCard({ review }: { review: Review }) {
  return (
    <a
      href={`/reviews/${review.slug}`}
      style={{
        display: 'flex',
        gap: 12,
        alignItems: 'flex-start',
        textDecoration: 'none',
        backgroundColor: '#1A1A1A',
        border: '1px solid #2A2A2A',
        borderRadius: 0,
        padding: 12,
        transition: 'border-color 150ms ease-out',
        cursor: 'pointer',
      }}
      onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.borderColor = '#EF9F27';
      }}
      onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.currentTarget.style.borderColor = '#2A2A2A';
      }}
      aria-label={`Read ${review.title} review`}
    >
      {/* Thumbnail */}
      <div
        style={{
          width: 72,
          height: 48,
          flexShrink: 0,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={review.imageUrl}
          alt=""
          aria-hidden="true"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      </div>

      {/* Info */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 10,
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#EF9F27',
            marginBottom: 4,
          }}
        >
          {review.category}
        </p>
        <p
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1.3,
            color: '#F0EBE0',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {review.title}
        </p>
        <p
          style={{
            fontFamily: "'Russo One', 'Arial Black', sans-serif",
            fontSize: 12,
            color: review.score >= 9 ? '#EF9F27' : '#888888',
            marginTop: 4,
          }}
        >
          {review.score}
          <span style={{ fontFamily: "'Public Sans', system-ui, sans-serif", fontSize: 10, color: '#444444' }}>/10</span>
        </p>
      </div>
    </a>
  );
}

export default function ReviewBody({ review, related }: ReviewBodyProps) {
  const { scoreBreakdown } = review;

  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: 'clamp(40px, 5vw, 64px) clamp(24px, 5vw, 80px)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 300px',
          gap: 'clamp(40px, 5vw, 72px)',
          alignItems: 'start',
        }}
        className="review-layout"
      >
        {/* ── MAIN BODY COLUMN ── */}
        <article>
          {/* Opening verdict — large italic serif pull-quote style */}
          <p
            className="review-opening"
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(18px, 2.2vw, 22px)',
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.75,
              color: '#C4BDB4',
              marginBottom: 40,
              paddingBottom: 40,
              borderBottom: '1px solid #2A2A2A',
            }}
          >
            {review.openingVerdict}
          </p>

          {/* Body paragraphs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {review.body.map((paragraph, i) => {
              // Insert pull quote before the last paragraph
              const isBeforeLast = i === review.body.length - 2;
              return (
                <React.Fragment key={i}>
                  <p
                    style={{
                      fontFamily: "'Libre Bodoni', Georgia, serif",
                      fontSize: 17,
                      fontWeight: 400,
                      lineHeight: 1.85,
                      color: '#C4BDB4',
                      marginBottom: 28,
                    }}
                  >
                    {paragraph}
                  </p>
                  {isBeforeLast && (
                    <blockquote
                      style={{
                        fontFamily: "'Libre Bodoni', Georgia, serif",
                        fontSize: 'clamp(20px, 2.8vw, 28px)',
                        fontStyle: 'italic',
                        fontWeight: 700,
                        lineHeight: 1.5,
                        color: '#EF9F27',
                        margin: '24px 0 40px',
                        padding: '24px 0',
                        borderTop: '2px solid #EF9F27',
                        borderBottom: '2px solid #EF9F27',
                        borderLeft: 'none',
                        borderRight: 'none',
                      }}
                    >
                      &ldquo;{review.pullQuote}&rdquo;
                    </blockquote>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Verdict section */}
          <div
            style={{
              marginTop: 48,
              paddingTop: 32,
              borderTop: '1px solid #2A2A2A',
            }}
          >
            <span
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                color: '#EF9F27',
                display: 'block',
                marginBottom: 16,
              }}
            >
              Verdict
            </span>
            <p
              style={{
                fontFamily: "'Libre Bodoni', Georgia, serif",
                fontSize: 17,
                lineHeight: 1.85,
                color: '#C4BDB4',
                marginBottom: 28,
                maxWidth: '68ch',
              }}
            >
              {review.verdict}
            </p>
            <ScoreBadge score={review.score} size="lg" />
          </div>
        </article>

        {/* ── SIDEBAR COLUMN ── */}
        <aside
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 32,
            position: 'sticky',
            top: 76,
          }}
          className="review-sidebar"
        >
          {/* Score Breakdown */}
          <div
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #2A2A2A',
              borderRadius: 0,
              padding: '20px 20px 24px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#F0EBE0',
                marginBottom: 20,
                paddingBottom: 12,
                borderBottom: '1px solid #2A2A2A',
              }}
            >
              Score Breakdown
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <ScoreBar label="Gameplay" value={scoreBreakdown.gameplay} />
              <ScoreBar label="Visuals" value={scoreBreakdown.visuals} />
              <ScoreBar label="Audio" value={scoreBreakdown.audio} />
              <ScoreBar label="Longevity" value={scoreBreakdown.longevity} />
            </div>
          </div>

          {/* Game Info Card */}
          <div
            style={{
              backgroundColor: '#1A1A1A',
              border: '1px solid #2A2A2A',
              borderRadius: 0,
              padding: '20px 20px 24px',
            }}
          >
            <h2
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#F0EBE0',
                marginBottom: 16,
                paddingBottom: 12,
                borderBottom: '1px solid #2A2A2A',
              }}
            >
              Game Info
            </h2>
            <dl style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {(
                [
                  ['Developer', review.developer],
                  ['Publisher', review.publisher],
                  ['Platform', review.platform],
                  ['Genre', review.category],
                  ['Released', String(review.year)],
                ] as [string, string][]
              ).map(([label, value]) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    gap: 12,
                  }}
                >
                  <dt
                    style={{
                      fontFamily: "'Public Sans', system-ui, sans-serif",
                      fontSize: 10,
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: '#444444',
                      flexShrink: 0,
                    }}
                  >
                    {label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "'Public Sans', system-ui, sans-serif",
                      fontSize: 12,
                      color: '#888888',
                      textAlign: 'right',
                    }}
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* You Might Also Like */}
          {related.length > 0 && (
            <div>
              <h2
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#F0EBE0',
                  marginBottom: 12,
                  paddingBottom: 12,
                  borderBottom: '1px solid #2A2A2A',
                }}
              >
                You Might Also Like
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {related.slice(0, 2).map((r) => (
                  <RelatedCard key={r.id} review={r} />
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 900px) {
          .review-layout {
            grid-template-columns: 1fr !important;
          }
          .review-sidebar {
            position: static !important;
            order: -1;
          }
        }
        @media (max-width: 640px) {
          .review-opening {
            font-size: 17px !important;
          }
        }
      `}</style>
    </div>
  );
}
