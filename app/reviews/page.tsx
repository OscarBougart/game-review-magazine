import ReviewsPageClient from '@/components/ReviewsPageClient';

export const metadata = {
  title: 'Reviews — Game Review Magazine',
  description: "Every game we've covered, scored and dissected. Filter by genre, sort by score.",
};

export default function ReviewsPage() {
  return <ReviewsPageClient />;
}
