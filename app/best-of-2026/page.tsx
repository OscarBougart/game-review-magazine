import { ALL_REVIEWS } from '@/lib/reviews';
import BestOf2026Client from '@/components/BestOf2026Client';

export const metadata = {
  title: 'Best Games of 2026 — Game Review Magazine',
  description: "Our editors' definitive ranking of the year's finest games.",
};

export default function BestOf2026Page() {
  const sorted = [...ALL_REVIEWS].sort((a, b) => b.score - a.score);
  const goty = sorted[0];
  const ranked = sorted.slice(1, 9);
  const honourable = sorted.slice(9);

  return (
    <BestOf2026Client goty={goty} ranked={ranked} honourable={honourable} />
  );
}
