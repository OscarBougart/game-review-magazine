import React from 'react';

interface ScoreBadgeProps {
  score: number;
  size?: 'sm' | 'lg';
}

export default function ScoreBadge({ score, size = 'sm' }: ScoreBadgeProps) {
  const isGlowing = score >= 9;

  const baseStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#222222',
    borderWidth: size === 'lg' ? 2 : 1,
    borderStyle: 'solid',
    borderColor: '#EF9F27',
    borderRadius: 0,
    fontFamily: "'Russo One', 'Arial Black', sans-serif",
    fontWeight: 400,
    color: '#F0EBE0',
    lineHeight: 1,
    ...(size === 'lg'
      ? { fontSize: 48, padding: '12px 20px', minWidth: 80 }
      : { fontSize: 13, padding: '3px 7px' }),
    ...(isGlowing
      ? { boxShadow: '0 0 20px rgba(239, 159, 39, 0.45), 0 2px 8px rgba(0,0,0,0.7)' }
      : { boxShadow: '0 2px 8px rgba(0,0,0,0.7)' }),
  };

  return (
    <span
      style={baseStyle}
      aria-label={`Score ${score} out of 10`}
    >
      {score}
    </span>
  );
}
