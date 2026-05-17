'use client';

import { type Category, CATEGORIES } from '@/lib/reviews';

interface CategoryFilterProps {
  active: Category;
  onChange: (cat: Category) => void;
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <nav
      role="tablist"
      aria-label="Filter reviews by category"
      style={{
        position: 'sticky',
        top: 60,
        zIndex: 20,
        backgroundColor: '#111111',
        borderBottom: '1px solid #2A2A2A',
        overflowX: 'auto',
        scrollbarWidth: 'none',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: '0 24px',
          gap: 0,
          maxWidth: 1280,
          margin: '0 auto',
        }}
      >
        {CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(cat)}
              style={{
                fontFamily: "'Public Sans', system-ui, sans-serif",
                fontSize: 10,
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: isActive ? '#F0EBE0' : '#888888',
                backgroundColor: 'transparent',
                border: 'none',
                borderBottom: isActive ? '2px solid #EF9F27' : '2px solid transparent',
                padding: '14px 18px',
                minHeight: 44,
                minWidth: 44,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'color 150ms ease-out, border-color 150ms ease-out',
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </nav>
  );
}
