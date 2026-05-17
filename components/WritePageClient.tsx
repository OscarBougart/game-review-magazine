'use client';

import React, { useState } from 'react';

const CONTRIBUTORS = [
  { name: 'Alicia Fern', title: 'Elden Ring — A World Worth Dying In' },
  { name: 'Tom Hatcher', title: 'Hollow Knight — Silence as Design Language' },
  { name: 'Yuki Mori', title: 'Disco Elysium — The Novel That Plays You Back' },
  { name: 'Daria Wolfe', title: 'Celeste — Climbing as Metaphor' },
  { name: 'Ben Chakra', title: 'Returnal — Grief in the Third Person' },
  { name: 'Lena Strauss', title: 'Hades — The Myth of Linear Progress' },
  { name: 'Cian Burke', title: 'Outer Wilds — Against Walkthroughs' },
  { name: 'Ravi Osei', title: 'Pentiment — When Art Is the Argument' },
];

const GENRES = ['Action', 'RPG', 'Strategy', 'Indie', 'Adventure', 'Simulation'];

interface FormState {
  name: string;
  email: string;
  game: string;
  genre: string;
  pitch: string;
  link: string;
}

const EMPTY: FormState = { name: '', email: '', game: '', genre: '', pitch: '', link: '' };

export default function WritePageClient() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});

  function validate(): boolean {
    const next: Partial<FormState> = {};
    if (!form.name.trim()) next.name = 'Required';
    if (!form.email.trim()) next.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email address';
    if (!form.game.trim()) next.game = 'Required';
    if (!form.genre) next.genre = 'Required';
    if (!form.pitch.trim()) next.pitch = 'Required';
    else if (form.pitch.trim().length < 40) next.pitch = 'Please give us at least a sentence or two';
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    backgroundColor: '#1A1A1A',
    color: '#F0EBE0',
    padding: '12px 16px',
    border: '1px solid #2A2A2A',
    borderRadius: 0,
    fontFamily: "'Public Sans', system-ui, sans-serif",
    fontSize: 15,
    lineHeight: 1.5,
    boxSizing: 'border-box',
    transition: 'border-color 150ms ease-out, box-shadow 150ms ease-out',
    outline: 'none',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: "'Public Sans', system-ui, sans-serif",
    fontSize: 10,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.15em',
    color: '#888888',
    marginBottom: 6,
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "'Public Sans', system-ui, sans-serif",
    fontSize: 11,
    color: '#E24B4A',
    marginTop: 4,
  };

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
            Contributor Submissions
          </p>
          <h1
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(40px, 8vw, 96px)',
              fontWeight: 700,
              lineHeight: 1.0,
              color: '#F0EBE0',
              letterSpacing: '-0.01em',
              marginBottom: 24,
            }}
          >
            WRITE FOR US
          </h1>
          <p
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(17px, 2.5vw, 22px)',
              fontStyle: 'italic',
              color: '#888888',
              lineHeight: 1.6,
              maxWidth: 560,
            }}
          >
            We publish independent voices with something real to say about games.
          </p>
        </div>
      </section>

      {/* ── WHAT WE LOOK FOR ── */}
      <section
        style={{
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px)',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 6vw, 80px)',
            alignItems: 'start',
          }}
          className="what-grid"
        >
          {/* Left: editorial copy */}
          <div>
            <h2
              style={{
                fontFamily: "'Libre Bodoni', Georgia, serif",
                fontSize: 'clamp(22px, 3vw, 32px)',
                fontWeight: 700,
                color: '#F0EBE0',
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              What we look for
            </h2>
            <div
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 15,
                lineHeight: 1.8,
                color: '#888888',
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <p>
                We're not looking for walkthrough writers or hype merchants. We want critics —
                people who finish games, think carefully about what they played, and have a
                genuine point of view worth arguing.
              </p>
              <p>
                A strong pitch has a specific angle. Not "I want to review Elden Ring" but "I
                want to write about how Elden Ring's silence functions as a design philosophy —
                and what it says about player agency." The more specific your argument, the more
                seriously we'll take it.
              </p>
              <p>
                We expect finished pieces to run{' '}
                <strong style={{ color: '#F0EBE0' }}>800 to 2,000 words</strong>. Shorter than
                that and there's rarely enough room to develop an idea properly. Longer pieces
                are welcome if the argument earns the length — but every sentence should pull
                its weight.
              </p>
              <p>
                Tone: critical and considered. We're not a hype machine, and we're not
                contrarians either. Write like a film critic who also finishes every game —
                someone with strong opinions who argues them rather than asserting them.
              </p>
              <p>
                New contributors receive full editorial credit on every piece, with a byline and
                short bio. We edit for structure and clarity, not to flatten your voice.
              </p>
            </div>
          </div>

          {/* Right: stat boxes */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              paddingTop: 8,
            }}
          >
            {[
              { value: '800–2,000', label: 'Words per piece' },
              { value: '48 hr', label: 'Response time' },
              { value: 'Full credit', label: 'Editorial byline on every piece' },
            ].map((stat) => (
              <div
                key={stat.label}
                style={{
                  backgroundColor: '#1A1A1A',
                  border: '1px solid #2A2A2A',
                  padding: 'clamp(20px, 3vw, 32px)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Libre Bodoni', Georgia, serif",
                    fontSize: 'clamp(28px, 4vw, 42px)',
                    fontWeight: 700,
                    color: '#EF9F27',
                    lineHeight: 1.1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: '#888888',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUBMISSION FORM ── */}
      <section
        style={{
          padding: 'clamp(48px, 8vw, 96px) clamp(16px, 4vw, 48px)',
          borderBottom: '1px solid #2A2A2A',
        }}
      >
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 'clamp(22px, 3vw, 32px)',
              fontWeight: 700,
              color: '#F0EBE0',
              marginBottom: 8,
              lineHeight: 1.2,
            }}
          >
            Submit a pitch
          </h2>
          <p
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 14,
              color: '#888888',
              marginBottom: 40,
              lineHeight: 1.6,
            }}
          >
            Fill in the form below. We read every submission and reply within 48 hours.
          </p>

          {submitted ? (
            <div
              style={{
                backgroundColor: '#0D0D0D',
                border: '1px solid #2A2A2A',
                borderLeft: '3px solid #EF9F27',
                padding: 'clamp(24px, 4vw, 40px)',
              }}
            >
              <p
                style={{
                  fontFamily: "'Libre Bodoni', Georgia, serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#F0EBE0',
                  marginBottom: 12,
                }}
              >
                Pitch received.
              </p>
              <p
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 15,
                  color: '#888888',
                  lineHeight: 1.7,
                }}
              >
                We'll be in touch within 48 hours. In the meantime, feel free to keep reading.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {/* Name + Email row */}
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
                  className="form-two-col"
                >
                  <div>
                    <label htmlFor="f-name" style={labelStyle}>
                      Your name <span style={{ color: '#E24B4A' }}>*</span>
                    </label>
                    <input
                      id="f-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      autoComplete="name"
                      style={{
                        ...inputStyle,
                        borderColor: errors.name ? '#E24B4A' : '#2A2A2A',
                      }}
                      className="form-input"
                    />
                    {errors.name && <p style={errorStyle}>{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="f-email" style={labelStyle}>
                      Email address <span style={{ color: '#E24B4A' }}>*</span>
                    </label>
                    <input
                      id="f-email"
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      autoComplete="email"
                      style={{
                        ...inputStyle,
                        borderColor: errors.email ? '#E24B4A' : '#2A2A2A',
                      }}
                      className="form-input"
                    />
                    {errors.email && <p style={errorStyle}>{errors.email}</p>}
                  </div>
                </div>

                {/* Game + Genre row */}
                <div
                  style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
                  className="form-two-col"
                >
                  <div>
                    <label htmlFor="f-game" style={labelStyle}>
                      Game you want to review <span style={{ color: '#E24B4A' }}>*</span>
                    </label>
                    <input
                      id="f-game"
                      type="text"
                      value={form.game}
                      onChange={(e) => handleChange('game', e.target.value)}
                      style={{
                        ...inputStyle,
                        borderColor: errors.game ? '#E24B4A' : '#2A2A2A',
                      }}
                      className="form-input"
                    />
                    {errors.game && <p style={errorStyle}>{errors.game}</p>}
                  </div>
                  <div>
                    <label htmlFor="f-genre" style={labelStyle}>
                      Genre <span style={{ color: '#E24B4A' }}>*</span>
                    </label>
                    <select
                      id="f-genre"
                      value={form.genre}
                      onChange={(e) => handleChange('genre', e.target.value)}
                      style={{
                        ...inputStyle,
                        borderColor: errors.genre ? '#E24B4A' : '#2A2A2A',
                        cursor: 'pointer',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888888' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 14px center',
                        paddingRight: 40,
                      }}
                      className="form-input"
                    >
                      <option value="" disabled style={{ backgroundColor: '#1A1A1A' }}>
                        Select a genre
                      </option>
                      {GENRES.map((g) => (
                        <option key={g} value={g} style={{ backgroundColor: '#1A1A1A' }}>
                          {g}
                        </option>
                      ))}
                    </select>
                    {errors.genre && <p style={errorStyle}>{errors.genre}</p>}
                  </div>
                </div>

                {/* Pitch */}
                <div>
                  <label htmlFor="f-pitch" style={labelStyle}>
                    Your pitch <span style={{ color: '#E24B4A' }}>*</span>
                  </label>
                  <p
                    style={{
                      fontFamily: "'Public Sans', system-ui, sans-serif",
                      fontSize: 12,
                      color: '#444444',
                      marginBottom: 8,
                    }}
                  >
                    Tell us your angle in 2–3 sentences. What's the argument you want to make?
                  </p>
                  <textarea
                    id="f-pitch"
                    value={form.pitch}
                    onChange={(e) => handleChange('pitch', e.target.value)}
                    rows={5}
                    style={{
                      ...inputStyle,
                      borderColor: errors.pitch ? '#E24B4A' : '#2A2A2A',
                      resize: 'vertical',
                      minHeight: 120,
                    }}
                    className="form-input"
                  />
                  {errors.pitch && <p style={errorStyle}>{errors.pitch}</p>}
                </div>

                {/* Link — optional */}
                <div>
                  <label htmlFor="f-link" style={labelStyle}>
                    Link to previous writing{' '}
                    <span style={{ color: '#444444', letterSpacing: '0.05em' }}>(optional)</span>
                  </label>
                  <input
                    id="f-link"
                    type="url"
                    value={form.link}
                    onChange={(e) => handleChange('link', e.target.value)}
                    placeholder="https://"
                    style={{
                      ...inputStyle,
                      color: form.link ? '#F0EBE0' : '#444444',
                    }}
                    className="form-input"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    backgroundColor: '#EF9F27',
                    color: '#111111',
                    border: 'none',
                    borderRadius: 0,
                    padding: '16px 32px',
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 13,
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    cursor: 'pointer',
                    transition: 'opacity 150ms ease-out',
                    minHeight: 52,
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.85'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  Submit Pitch
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ── PAST CONTRIBUTORS ── */}
      <section
        style={{
          padding: 'clamp(40px, 6vw, 72px) 0',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            padding: '0 clamp(16px, 4vw, 48px)',
            marginBottom: 24,
          }}
        >
          <p
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              color: '#444444',
            }}
          >
            Past contributors
          </p>
        </div>

        <div
          style={{
            display: 'flex',
            overflowX: 'auto',
            gap: 0,
            paddingBottom: 4,
            scrollbarWidth: 'none',
          }}
          className="contrib-strip"
        >
          {CONTRIBUTORS.map((c, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                borderRight: '1px solid #2A2A2A',
                padding: 'clamp(20px, 3vw, 32px) clamp(24px, 4vw, 48px)',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                minWidth: 260,
                maxWidth: 340,
              }}
            >
              <span
                style={{
                  fontFamily: "'Public Sans', system-ui, sans-serif",
                  fontSize: 11,
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: '#EF9F27',
                }}
              >
                {c.name}
              </span>
              <span
                style={{
                  fontFamily: "'Libre Bodoni', Georgia, serif",
                  fontSize: 15,
                  fontStyle: 'italic',
                  color: '#888888',
                  lineHeight: 1.4,
                }}
              >
                {c.title}
              </span>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 700px) {
          .what-grid { grid-template-columns: 1fr !important; }
          .form-two-col { grid-template-columns: 1fr !important; }
        }
        .form-input:focus {
          border-color: #EF9F27 !important;
          box-shadow: 0 0 0 3px rgba(239, 159, 39, 0.12);
        }
        .contrib-strip::-webkit-scrollbar { display: none; }
        a:focus-visible, button:focus-visible, input:focus-visible, textarea:focus-visible, select:focus-visible {
          outline: 2px solid #EF9F27;
          outline-offset: 2px;
        }
      `}</style>
    </main>
  );
}
