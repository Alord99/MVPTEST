import Link from 'next/link';
import ContentCard from './ContentCard';
import type { TMDBMovie } from '@/lib/tmdb';

interface ContentSectionProps {
  title: string;
  content: TMDBMovie[];
  viewAllLink: string;
}

export default function ContentSection({ title, content, viewAllLink }: ContentSectionProps) {
  return (
    <section className="py-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
          <Link
            href={viewAllLink}
            className="text-gray-400 hover:text-white flex items-center gap-2 text-sm font-semibold transition"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4">
            {content.map(item => (
              <ContentCard key={item.id} content={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

