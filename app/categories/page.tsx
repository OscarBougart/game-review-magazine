import React from 'react';
import { CATEGORIES_META } from '@/lib/reviews';
import CategoriesPageClient from '@/components/CategoriesPageClient';

export const metadata = {
  title: 'Categories — Game Review Magazine',
  description: 'Browse game reviews by genre.',
};

export default function CategoriesPage() {
  const featured = CATEGORIES_META.find((c) => c.featured)!;
  const grid = CATEGORIES_META.filter((c) => !c.featured);

  return <CategoriesPageClient featured={featured} grid={grid} allCategories={CATEGORIES_META} />;
}
