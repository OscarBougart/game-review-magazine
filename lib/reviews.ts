export type Category = 'All' | 'Action' | 'RPG' | 'Strategy' | 'Indie';

export interface Review {
  id: string;
  slug: string;
  title: string;
  developer: string;
  platform: string;
  year: number;
  category: Exclude<Category, 'All'>;
  score: number;
  excerpt: string;
  imageUrl: string;
  featured?: boolean;
}

export const CATEGORIES: Category[] = ['All', 'Action', 'RPG', 'Strategy', 'Indie'];

export const FEATURED_REVIEW: Review = {
  id: '1',
  slug: 'elden-ring',
  title: 'Elden Ring',
  developer: 'FromSoftware',
  platform: 'PC / PS5 / Xbox',
  year: 2022,
  category: 'Action',
  score: 10,
  excerpt:
    'A generation-defining open world that treats the player as an intelligent adult. Every vista earned, every death a lesson, every discovery a quiet triumph.',
  imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_hero.jpg',
  featured: true,
};

export const REVIEWS: Review[] = [
  {
    id: '2',
    slug: 'baldurs-gate-3',
    title: "Baldur's Gate 3",
    developer: 'Larian Studios',
    platform: 'PC / PS5',
    year: 2023,
    category: 'RPG',
    score: 10,
    excerpt: 'The first RPG in a decade that feels genuinely limitless. Larian built a D&D campaign that reacts to everything.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/capsule_616x353.jpg',
  },
  {
    id: '3',
    slug: 'hades-ii',
    title: 'Hades II',
    developer: 'Supergiant Games',
    platform: 'PC (Early Access)',
    year: 2024,
    category: 'Action',
    score: 9,
    excerpt: 'Supergiant somehow improved on a perfect formula. The combat is tighter, the story darker, the secrets deeper.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1145350/capsule_616x353.jpg',
  },
  {
    id: '5',
    slug: 'disco-elysium',
    title: 'Disco Elysium',
    developer: 'ZA/UM',
    platform: 'PC',
    year: 2019,
    category: 'RPG',
    score: 10,
    excerpt: "A novel disguised as an RPG. The writing alone justifies the medium's existence.",
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/632470/capsule_616x353.jpg',
  },
  {
    id: '6',
    slug: 'into-the-breach',
    title: 'Into the Breach',
    developer: 'Subset Games',
    platform: 'PC / Switch',
    year: 2018,
    category: 'Strategy',
    score: 9,
    excerpt: 'Perfect information, perfect design. Every puzzle has a solution — finding it is the entire game.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/590380/capsule_616x353.jpg',
  },
  {
    id: '7',
    slug: 'hollow-knight',
    title: 'Hollow Knight',
    developer: 'Team Cherry',
    platform: 'PC / Switch / PS4',
    year: 2017,
    category: 'Indie',
    score: 9,
    excerpt: 'An underground world built with more care than most AAA studios manage with hundred-million-dollar budgets.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/capsule_616x353.jpg',
  },
  {
    id: '8',
    slug: 'frostpunk-2',
    title: 'Frostpunk 2',
    developer: '11 bit studios',
    platform: 'PC',
    year: 2024,
    category: 'Strategy',
    score: 8,
    excerpt: 'The sequel expands the canvas — more city, more politics, more impossible choices. Harder to love, harder to put down.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1601580/capsule_616x353.jpg',
  },
  {
    id: '9',
    slug: 'neon-white',
    title: 'Neon White',
    developer: 'Angel Matrix',
    platform: 'PC / Switch',
    year: 2022,
    category: 'Indie',
    score: 8,
    excerpt: "A speedrunner's fantasy wrapped in anime schlock. The card-based movement system is one of the year's best ideas.",
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1533420/header.jpg',
  },
  {
    id: '10',
    slug: 'remnant-ii',
    title: 'Remnant II',
    developer: 'Gunfire Games',
    platform: 'PC / PS5 / Xbox',
    year: 2023,
    category: 'Action',
    score: 8,
    excerpt: 'A Soulslike shooter that earns every comparison. Procedural worlds hide secrets that reward obsessive players.',
    imageUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1282100/header.jpg',
  },
];

export const TRENDING = [...REVIEWS]
  .sort((a, b) => b.score - a.score)
  .slice(0, 5);
