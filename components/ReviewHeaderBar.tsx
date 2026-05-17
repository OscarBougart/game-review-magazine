'use client';

import React, { useState } from 'react';

interface ReviewHeaderBarProps {
  reviewer: string;
  date: string;
  slug: string;
}

function TwitterIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function ReviewHeaderBar({ reviewer, date, slug }: ReviewHeaderBarProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const url = typeof window !== 'undefined' ? window.location.href : `https://gamereviewmagazine.com/reviews/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    typeof window !== 'undefined' ? window.location.href : `https://gamereviewmagazine.com/reviews/${slug}`
  )}&text=${encodeURIComponent(`Game Review Magazine`)}`;

  return (
    <div
      style={{
        backgroundColor: '#1A1A1A',
        borderBottom: '1px solid #EF9F27',
        width: '100%',
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 clamp(24px, 5vw, 80px)',
          height: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
        }}
      >
        {/* Reviewer + date */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              color: '#F0EBE0',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {reviewer}
          </span>
          <span style={{ color: '#2A2A2A', fontSize: 14 }}>|</span>
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 11,
              color: '#888888',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
            }}
          >
            {date}
          </span>
        </div>

        {/* Share actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          <span
            style={{
              fontFamily: "'Public Sans', system-ui, sans-serif",
              fontSize: 10,
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#444444',
              marginRight: 8,
            }}
          >
            Share
          </span>

          {/* Twitter / X */}
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              color: '#888888',
              textDecoration: 'none',
              transition: 'color 150ms ease-out',
              borderRadius: 0,
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = '#F0EBE0';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.currentTarget.style.color = '#888888';
            }}
            aria-label="Share on X / Twitter"
          >
            <TwitterIcon />
          </a>

          {/* Copy link */}
          <button
            onClick={handleCopy}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 36,
              height: 36,
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: 0,
              color: copied ? '#EF9F27' : '#888888',
              cursor: 'pointer',
              transition: 'color 150ms ease-out',
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!copied) e.currentTarget.style.color = '#F0EBE0';
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
              if (!copied) e.currentTarget.style.color = '#888888';
            }}
            aria-label={copied ? 'Link copied' : 'Copy link to review'}
          >
            {copied ? <CheckIcon /> : <LinkIcon />}
          </button>
        </div>
      </div>
    </div>
  );
}
