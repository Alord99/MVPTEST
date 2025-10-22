'use client';

import { useParams } from 'next/navigation';
import { NETFLIX_SHOWS, HULU_SHOWS, DISNEY_SHOWS, MAX_SHOWS, PRIME_SHOWS, APPLE_SHOWS, PEACOCK_SHOWS, PARAMOUNT_SHOWS } from '@/lib/curated-shows';
import CuratedShowCard from '@/components/CuratedShowCard';
import Header from '@/components/Header';
import Link from 'next/link';

const CATEGORY_SHOWS = {
  'popular-on-services-you-dont-have': NETFLIX_SHOWS,
  'critically-acclaimed': [...NETFLIX_SHOWS.slice(10, 20), ...HULU_SHOWS.slice(0, 10), ...MAX_SHOWS.slice(0, 10)],
  'award-winning-content': [...DISNEY_SHOWS.slice(0, 15), ...APPLE_SHOWS.slice(0, 15)],
  'netflix-originals': NETFLIX_SHOWS.slice(0, 20),
  'hulu-exclusives': HULU_SHOWS.slice(0, 20),
  'disney-plus-favorites': DISNEY_SHOWS.slice(0, 20),
  'max-hbo-content': MAX_SHOWS.slice(0, 20),
  'prime-video-hits': PRIME_SHOWS.slice(0, 20),
  'apple-tv-plus': APPLE_SHOWS.slice(0, 20),
  'peacock-picks': PEACOCK_SHOWS.slice(0, 20),
  'paramount-plus': PARAMOUNT_SHOWS.slice(0, 20)
};

const CATEGORY_TITLES = {
  'popular-on-services-you-dont-have': 'Popular on Services You Don\'t Have',
  'critically-acclaimed': 'Critically Acclaimed',
  'award-winning-content': 'Award-Winning Content',
  'netflix-originals': 'Netflix Originals',
  'hulu-exclusives': 'Hulu Exclusives',
  'disney-plus-favorites': 'Disney+ Favorites',
  'max-hbo-content': 'Max (HBO) Content',
  'prime-video-hits': 'Prime Video Hits',
  'apple-tv-plus': 'Apple TV+ Originals',
  'peacock-picks': 'Peacock Picks',
  'paramount-plus': 'Paramount+ Content'
};

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const shows = CATEGORY_SHOWS[slug as keyof typeof CATEGORY_SHOWS] || [];
  const title = CATEGORY_TITLES[slug as keyof typeof CATEGORY_TITLES] || 'Content';

  return (
    <div className="relative bg-black min-h-screen">
      <Header />
      
      {/* Category Header */}
      <div className="pt-20 pb-8 px-6 lg:px-12">
        <div className="flex items-center gap-4 mb-6">
          <Link 
            href="/"
            className="text-gray-400 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-400">
          {shows.length} shows available
        </p>
      </div>

      {/* Shows Grid */}
      <div className="px-6 lg:px-12 pb-20">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {shows.map((show, index) => (
            <CuratedShowCard key={`${show.title}-${index}`} show={show} />
          ))}
        </div>
      </div>
    </div>
  );
}
