'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Reviews', href: '/reviews' },
  { label: 'Categories', href: '/categories' },
  { label: 'Best of 2026', href: '/best-of-2026' },
  { label: 'About', href: '/about' },
];

// Inline SVG icons — no emoji, no icon library dependency
function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function NavHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const y = window.scrollY ?? window.pageYOffset ?? document.documentElement.scrollTop;
      setScrolled(y > 10);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const currentPath = usePathname();

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#111111',
          borderBottom: '1px solid #2A2A2A',
        }}
        role="banner"
      >
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '0 clamp(16px, 4vw, 48px)',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            gap: 0,
          }}
        >
          {/* Wordmark */}
          <a
            href="/"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              lineHeight: 1,
              gap: 1,
              textDecoration: 'none',
              flexShrink: 0,
              marginRight: 'auto',
              cursor: 'pointer',
            }}
            aria-label="Game Review Magazine — home"
          >
            <span
              style={{
                fontFamily: "'Libre Bodoni', Georgia, serif",
                fontSize: 18,
                fontWeight: 700,
                color: '#F0EBE0',
                letterSpacing: '0.01em',
                lineHeight: 1.1,
              }}
            >
              GAME REVIEW
            </span>
            <span
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 8,
                fontWeight: 600,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.3em',
                color: '#888888',
                lineHeight: 1,
              }}
            >
              MAGAZINE
            </span>
          </a>

          {/* Desktop nav links */}
          <nav
            aria-label="Primary navigation"
            style={{ display: 'flex', alignItems: 'center', gap: 0 }}
            className="nav-desktop"
          >
            {NAV_LINKS.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    fontFamily: "'Public Sans', system-ui, sans-serif",
                    fontSize: 12,
                    fontWeight: 600,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.1em',
                    color: isActive ? '#F0EBE0' : '#888888',
                    textDecoration: 'none',
                    padding: '8px 16px',
                    position: 'relative' as const,
                    borderBottom: isActive ? '2px solid #EF9F27' : '2px solid transparent',
                    paddingBottom: 6,
                    transition: 'color 150ms ease-out, border-color 150ms ease-out',
                    whiteSpace: 'nowrap' as const,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!isActive) e.currentTarget.style.color = '#F0EBE0';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    if (!isActive) e.currentTarget.style.color = '#888888';
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right actions */}
          <div
            style={{ display: 'flex', alignItems: 'center', gap: 8, marginLeft: 16 }}
            className="nav-actions"
          >
            {/* Search */}
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: 0,
                color: '#888888',
                cursor: 'pointer',
                transition: 'color 150ms ease-out',
                flexShrink: 0,
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.color = '#F0EBE0';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.currentTarget.style.color = '#888888';
              }}
              aria-label="Search reviews"
            >
              <SearchIcon />
            </button>

            {/* Write / Submit CTA */}
            <a
              href="/write"
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase' as const,
                letterSpacing: '0.12em',
                color: '#111111',
                backgroundColor: '#EF9F27',
                border: 'none',
                borderRadius: 0,
                padding: '0 16px',
                height: 36,
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'opacity 150ms ease-out',
                flexShrink: 0,
                whiteSpace: 'nowrap' as const,
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.opacity = '0.85';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.opacity = '1';
              }}
              className="nav-write-btn"
            >
              Write
            </a>

            {/* Hamburger — mobile only */}
            <button
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                width: 44,
                height: 44,
                backgroundColor: 'transparent',
                border: 'none',
                borderRadius: 0,
                color: '#F0EBE0',
                cursor: 'pointer',
                flexShrink: 0,
              }}
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="nav-hamburger"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 50,
          backgroundColor: '#111111',
          display: 'flex',
          flexDirection: 'column',
          padding: '0 clamp(16px, 6vw, 48px)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 250ms ease-out',
          // Hidden from assistive tech when closed
          visibility: menuOpen ? 'visible' : 'hidden',
        }}
      >
        {/* Mobile menu header row */}
        <div
          style={{
            height: 60,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid #2A2A2A',
            flexShrink: 0,
          }}
        >
          <a
            href="/"
            style={{
              fontFamily: "'Libre Bodoni', Georgia, serif",
              fontSize: 18,
              fontWeight: 700,
              color: '#F0EBE0',
              textDecoration: 'none',
            }}
            onClick={() => setMenuOpen(false)}
          >
            GAME REVIEW
          </a>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 44,
              height: 44,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: 0,
              color: '#F0EBE0',
              cursor: 'pointer',
            }}
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Mobile nav links */}
        <nav
          aria-label="Mobile navigation"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
            marginTop: 24,
            flex: 1,
          }}
        >
          {NAV_LINKS.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontFamily: "'Libre Bodoni', Georgia, serif",
                  fontSize: 28,
                  fontWeight: 700,
                  color: isActive ? '#EF9F27' : '#F0EBE0',
                  textDecoration: 'none',
                  padding: '16px 0',
                  borderBottom: '1px solid #2A2A2A',
                  cursor: 'pointer',
                  transition: 'color 150ms ease-out',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (!isActive) e.currentTarget.style.color = '#EF9F27';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (!isActive) e.currentTarget.style.color = '#F0EBE0';
                }}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Write CTA */}
        <div style={{ paddingBottom: 40, paddingTop: 32, flexShrink: 0 }}>
          <a
            href="/write"
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 13,
              fontWeight: 700,
              textTransform: 'uppercase' as const,
              letterSpacing: '0.12em',
              color: '#111111',
              backgroundColor: '#EF9F27',
              borderRadius: 0,
              padding: '16px 32px',
              display: 'inline-flex',
              alignItems: 'center',
              textDecoration: 'none',
              cursor: 'pointer',
            }}
            onClick={() => setMenuOpen(false)}
          >
            Write for us
          </a>
        </div>
      </div>

      {/* Responsive rules */}
      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-write-btn { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          #mobile-menu { display: none !important; }
        }
        a:focus-visible, button:focus-visible {
          outline: 2px solid #EF9F27;
          outline-offset: 2px;
        }
      `}</style>
    </>
  );
}
