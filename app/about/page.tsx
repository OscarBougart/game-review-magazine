import React from 'react';

export const metadata = {
  title: 'About — Game Review Magazine',
  description:
    'Games criticism that treats the medium seriously. Who we are, what we believe, and how we score.',
};

// ── Inline SVG icons (no external dependency) ──────────────────────────────

function IconTarget() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function IconPen() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function IconShield() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function IconX() {
  return (
    <svg width="20" height="20" viewBox="0 0 300 300" fill="currentColor" aria-hidden="true">
      <path d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66" />
    </svg>
  );
}

// ── Data ────────────────────────────────────────────────────────────────────

const EDITORIAL_VALUES = [
  {
    icon: <IconTarget />,
    heading: 'Honest Scores',
    copy: 'A 10 is rare. A 5 is not an insult — it means average. We score every game as though the number will be quoted in twenty years, because it might be. No review is written to please a publisher, a PR relationship, or an embargo window.',
  },
  {
    icon: <IconPen />,
    heading: 'Long-form Writing',
    copy: "Games deserve the same critical attention as film and literature. We don't publish score summaries dressed as reviews. Every piece is written by someone who finished the game, thought about it, and has something worth reading to say about it.",
  },
  {
    icon: <IconShield />,
    heading: 'No Hype',
    copy: 'We cover announcements when they matter, not when the marketing budget demands it. We don\'t aggregate press releases. We don\'t publish "review scores" before the embargo lifts just to drive traffic. The work is the work.',
  },
] as const;

const TEAM = [
  {
    initials: 'MV',
    name: 'Marcus Vane',
    title: 'Editor in Chief',
    bio: 'Former games journalist at three print publications; has reviewed more than four hundred games across twenty years and believes Demon\'s Souls is still underscoredby most outlets that covered it.',
    tags: ['Action', 'Strategy', 'Horror'],
  },
  {
    initials: 'SP',
    name: 'Sienna Park',
    title: 'Senior Reviewer',
    bio: "Graduate of the Columbia School of Journalism who arrived via a decade of competitive speedrunning; brings statistical rigour to reviews and a deep suspicion of any game that mistakes length for depth.",
    tags: ['RPG', 'Indie', 'Platformer'],
  },
  {
    initials: 'PH',
    name: 'Priya Holst',
    title: 'Staff Writer',
    bio: 'Literary critic turned games journalist; responsible for the magazine\'s long-form features and the house rule that no review may use the phrase "a love letter to" under any circumstances.',
    tags: ['RPG', 'Adventure', 'Narrative'],
  },
] as const;

const SCORE_BANDS = [
  {
    range: '10',
    label: 'Masterpiece',
    color: '#EF9F27',
    copy: 'Given fewer than once a year. A score of ten means the game is generation-defining — that it will still be discussed and played in twenty years, and that nothing about its central design could be meaningfully improved. We have awarded it four times in the magazine\'s history.',
  },
  {
    range: '9',
    label: 'Excellent',
    color: '#EF9F27',
    copy: "The game is outstanding, close to exceptional, and likely to appear on any serious end-of-year list. A nine means buy it without hesitation. The difference between a nine and a ten is the difference between brilliant execution and a permanent contribution to the medium.",
  },
  {
    range: '7–8',
    label: 'Good',
    color: '#888888',
    copy: 'Recommended with full awareness of the caveats. An eight is a confident buy for anyone interested in the genre; a seven means the game has a specific audience it will serve very well and a broader audience it will not. The review will tell you which camp you are in.',
  },
  {
    range: '5–6',
    label: 'Average',
    color: '#888888',
    copy: 'Neither a failure nor a success. A five or six means the game does some things competently and others poorly, and that the final experience is forgettable rather than damaging. We publish these reviews because they are honest, not because we enjoy writing them.',
  },
  {
    range: '1–4',
    label: 'Poor',
    color: '#E24B4A',
    copy: 'The game fails at its central ambition in ways that cannot be overlooked. A score below five is not punishment — it is information. We do not review games below four unless they have significant cultural presence, because readers\' time is finite and the interesting question is always what is worth it.',
  },
] as const;

// ── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#111111', minHeight: '100vh', paddingTop: 60 }}>

      {/* ── 1. PAGE HEADER ───────────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid #EF9F27' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: 'clamp(56px, 7vw, 96px) clamp(24px, 5vw, 80px) clamp(40px, 5vw, 64px)',
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
            The Publication
          </span>
          <h1
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(36px, 7vw, 80px)',
              fontWeight: 700,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              color: '#F0EBE0',
              margin: 0,
              maxWidth: '20ch',
            }}
          >
            About Game Review Magazine
          </h1>
        </div>
      </div>

      {/* ── 2. MISSION STATEMENT ─────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        {/* Decorative rule */}
        <div
          style={{
            width: 40,
            height: 2,
            backgroundColor: '#EF9F27',
            marginBottom: 40,
          }}
        />

        <blockquote
          style={{
            fontFamily: "'Libre Bodoni', Georgia, serif",
            fontSize: 'clamp(19px, 2.8vw, 30px)',
            fontStyle: 'italic',
            fontWeight: 400,
            lineHeight: 1.7,
            color: 'var(--color-text-article)',
            textAlign: 'center',
            maxWidth: '26ch',
            margin: 0,
          }}
        >
          We publish games criticism for players who treat the medium seriously.
          Not previews, not hype, not algorithmic recommendation engines dressed
          as editorial — just considered, long-form writing about games as
          cultural objects, scored honestly and argued in full.
        </blockquote>

        <div
          style={{
            width: 40,
            height: 2,
            backgroundColor: '#EF9F27',
            marginTop: 40,
          }}
        />
      </div>

      {/* ── 3. WHAT WE BELIEVE ───────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 80px)',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        {/* Section label */}
        <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#EF9F27',
              display: 'block',
              marginBottom: 12,
            }}
          >
            Editorial Values
          </span>
          <h2
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(24px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#F0EBE0',
              margin: 0,
            }}
          >
            What We Believe
          </h2>
        </div>

        <div className="values-grid">
          {EDITORIAL_VALUES.map((value) => (
            <div key={value.heading} className="value-item">
              {/* Icon */}
              <div
                style={{
                  color: '#EF9F27',
                  marginBottom: 20,
                  display: 'block',
                }}
              >
                {value.icon}
              </div>

              {/* Thin amber rule */}
              <div
                style={{
                  width: 24,
                  height: 1,
                  backgroundColor: '#EF9F27',
                  marginBottom: 20,
                }}
              />

              {/* Heading */}
              <h3
                style={{
                  fontFamily: "'Libre Bodoni', Georgia, serif",
                  fontSize: 'clamp(18px, 2vw, 22px)',
                  fontWeight: 700,
                  lineHeight: 1.15,
                  color: '#F0EBE0',
                  margin: '0 0 14px',
                }}
              >
                {value.heading}
              </h3>

              {/* Copy */}
              <p
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 14,
                  fontWeight: 400,
                  lineHeight: 1.8,
                  color: '#888888',
                  margin: 0,
                }}
              >
                {value.copy}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. THE TEAM ──────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 80px)',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#EF9F27',
              display: 'block',
              marginBottom: 12,
            }}
          >
            Masthead
          </span>
          <h2
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(24px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#F0EBE0',
              margin: 0,
            }}
          >
            The Team
          </h2>
        </div>

        <div className="team-grid">
          {TEAM.map((member) => (
            <div
              key={member.initials}
              className="team-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                paddingTop: 32,
                borderTop: '1px solid #2A2A2A',
                transition: 'border-color 200ms ease-out',
              }}
            >
              {/* Avatar */}
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  backgroundColor: '#1A1A1A',
                  border: '2px solid #EF9F27',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  flexShrink: 0,
                }}
                aria-hidden="true"
              >
                <span
                  style={{
                    fontFamily: "'Russo One', 'Arial Black', sans-serif",
                    fontSize: 16,
                    color: '#EF9F27',
                    letterSpacing: '0.05em',
                    lineHeight: 1,
                  }}
                >
                  {member.initials}
                </span>
              </div>

              {/* Name + title */}
              <h3
                style={{
                  fontFamily: "'Libre Bodoni', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: '#F0EBE0',
                  margin: '0 0 4px',
                }}
              >
                {member.name}
              </h3>
              <p
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 10,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: '#EF9F27',
                  margin: '0 0 16px',
                }}
              >
                {member.title}
              </p>

              {/* Bio */}
              <p
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 13,
                  lineHeight: 1.8,
                  color: '#888888',
                  margin: '0 0 20px',
                  flex: 1,
                }}
              >
                {member.bio}
              </p>

              {/* Specialty tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: "'Public Sans', system-ui, sans-serif",
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      color: '#EF9F27',
                      border: '1px solid rgba(239,159,39,0.3)',
                      padding: '3px 8px',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 5. REVIEW METHODOLOGY ────────────────────────────────────────── */}
      <div style={{ backgroundColor: '#0D0D0D', borderTop: '1px solid #2A2A2A', borderBottom: '1px solid #2A2A2A' }}>
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 80px)',
          }}
        >
          <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            <span
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 9,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.25em',
                color: '#EF9F27',
                display: 'block',
                marginBottom: 12,
              }}
            >
              How We Score
            </span>
            <h2
              style={{
                fontFamily: "'Libre Bodoni', Georgia, serif",
                fontSize: 'clamp(24px, 4vw, 44px)',
                fontWeight: 700,
                lineHeight: 1.1,
                color: '#F0EBE0',
                margin: '0 0 20px',
              }}
            >
              Review Methodology
            </h2>
            <p
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: '#888888',
                maxWidth: '68ch',
                margin: 0,
              }}
            >
              Our scores are whole numbers from one to ten. No decimals, no half-points.
              The number is a judgement, not a calculation — and it should be
              defensible in the prose. Every reviewer plays the game to completion, or
              to a state where completion is no longer meaningful, before filing a score.
            </p>
          </div>

          {/* Score bands */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
              borderLeft: '2px solid #EF9F27',
            }}
          >
            {SCORE_BANDS.map((band, i) => (
              <div
                key={band.range}
                className="score-band"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '100px 1fr',
                  gap: 'clamp(24px, 3vw, 48px)',
                  padding: 'clamp(24px, 3vw, 36px) clamp(28px, 4vw, 48px)',
                  borderBottom: i < SCORE_BANDS.length - 1 ? '1px solid #1E1E1E' : 'none',
                  transition: 'background-color 200ms ease-out',
                }}
              >
                {/* Score + label */}
                <div style={{ flexShrink: 0 }}>
                  <span
                    style={{
                      fontFamily: "'Russo One', 'Arial Black', sans-serif",
                      fontSize: 'clamp(28px, 4vw, 40px)',
                      lineHeight: 1,
                      color: band.color,
                      display: 'block',
                      marginBottom: 6,
                    }}
                  >
                    {band.range}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Public Sans', system-ui, sans-serif",
                      fontSize: 9,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.18em',
                      color: '#444444',
                      display: 'block',
                    }}
                  >
                    {band.label}
                  </span>
                </div>

                {/* Copy */}
                <p
                  style={{
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 14,
                    lineHeight: 1.85,
                    color: '#888888',
                    margin: 0,
                    maxWidth: '64ch',
                    alignSelf: 'center',
                  }}
                >
                  {band.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 6. CONTACT ───────────────────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 80px)',
        }}
      >
        <div style={{ marginBottom: 'clamp(32px, 4vw, 48px)' }}>
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 9,
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              color: '#EF9F27',
              display: 'block',
              marginBottom: 12,
            }}
          >
            Get in Touch
          </span>
          <h2
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(24px, 4vw, 44px)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#F0EBE0',
              margin: 0,
            }}
          >
            Contact
          </h2>
        </div>

        <p
          style={{
            fontFamily: "'Public Sans', system-ui, sans-serif",
            fontSize: 14,
            lineHeight: 1.8,
            color: '#888888',
            maxWidth: '52ch',
            marginBottom: 40,
          }}
        >
          For editorial submissions, review copy requests, and press inquiries.
          We respond to every serious message — usually within two business days.
          For pitches, please include a writing sample.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Email */}
          <a
            href="mailto:editorial@gamereviewmagazine.com"
            className="contact-link"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              textDecoration: 'none',
              color: '#888888',
              transition: 'color 150ms ease-out',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                border: '1px solid #2A2A2A',
                color: '#EF9F27',
                flexShrink: 0,
                transition: 'border-color 150ms ease-out',
              }}
              className="contact-icon"
            >
              <IconMail />
            </span>
            <span
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              editorial@gamereviewmagazine.com
            </span>
          </a>

          {/* X / Twitter */}
          <a
            href="https://x.com/gamereviewmag"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 14,
              textDecoration: 'none',
              color: '#888888',
              transition: 'color 150ms ease-out',
              width: 'fit-content',
            }}
          >
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 40,
                height: 40,
                border: '1px solid #2A2A2A',
                color: '#EF9F27',
                flexShrink: 0,
                transition: 'border-color 150ms ease-out',
              }}
              className="contact-icon"
            >
              <IconX />
            </span>
            <span
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              @gamereviewmag
            </span>
          </a>
        </div>
      </div>

      {/* ── Responsive + hover rules ─────────────────────────────────────── */}
      <style>{`
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(40px, 5vw, 72px);
        }
        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: clamp(32px, 5vw, 64px);
        }
        .team-card:hover {
          border-color: #EF9F27 !important;
        }
        .score-band:hover {
          background-color: rgba(239,159,39,0.03);
        }
        .contact-link:hover {
          color: #F0EBE0 !important;
        }
        .contact-link:hover .contact-icon {
          border-color: #EF9F27 !important;
        }
        @media (max-width: 900px) {
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .team-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .team-grid {
            grid-template-columns: repeat(2, 1fr) !important;
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
