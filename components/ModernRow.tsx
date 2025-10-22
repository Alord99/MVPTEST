'use client';

import { useRef } from 'react';
import ModernCard from './ModernCard';
import type { TMDBMovie } from '@/lib/tmdb';

interface ModernRowProps {
  title: string;
  content: TMDBMovie[];
}

export default function ModernRow({ title, content }: ModernRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;
    const scrollAmount = direction === 'left' ? -600 : 600;
    rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div className="mb-10 group/row">
      {/* Title with Modern Accent */}
      <div className="flex items-center gap-3 mb-5 px-6 lg:px-12">
        <div className="w-1 h-6 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {title}
        </h2>
        <div className="h-px flex-1 bg-gradient-to-r from-gray-700 to-transparent" />
      </div>

      {/* Scroll Container */}
      <div className="relative px-6 lg:px-12">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all border border-white/10 shadow-xl"
          aria-label="Scroll left"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth pb-4"
        >
          {content.map((item, index) => (
            <ModernCard key={`${item.id}-${index}`} content={item} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black/60 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all border border-white/10 shadow-xl"
          aria-label="Scroll right"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

