import { notFound } from 'next/navigation';
import { getReviewDetail, getRelatedReviews, ALL_REVIEWS } from '@/lib/reviews';
import ReviewHero from '@/components/ReviewHero';
import ReviewHeaderBar from '@/components/ReviewHeaderBar';
import ReviewBody from '@/components/ReviewBody';

interface ReviewPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ALL_REVIEWS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = getReviewDetail(slug);
  if (!review) return {};
  return {
    title: `${review.title} Review — Game Review Magazine`,
    description: review.excerpt,
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { slug } = await params;
  const review = getReviewDetail(slug);
  if (!review) notFound();

  const related = getRelatedReviews(review.relatedSlugs);

  return (
    <main style={{ backgroundColor: '#111111', minHeight: '100vh' }}>
      <ReviewHero review={review} />
      <ReviewHeaderBar reviewer={review.reviewer} date={review.publishedDate} slug={slug} />
      <ReviewBody review={review} related={related} />
    </main>
  );
}
