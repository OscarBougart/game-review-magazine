import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import NavHeader from '@/components/NavHeader';

export const metadata: Metadata = {
  title: 'Game Review Magazine',
  description: 'Dark editorial gaming publication with cinematic reviews and a trusted 1–10 scoring system.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased" style={{ backgroundColor: '#111111', color: '#F0EBE0' }}>
        <NavHeader />
        {children}
      </body>
    </html>
  );
}
