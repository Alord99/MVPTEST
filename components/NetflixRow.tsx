'use client';

import { useRef, useState } from 'react';
import NetflixCard from './NetflixCard';
import type { TMDBMovie } from '@/lib/tmdb';

interface NetflixRowProps {
  title: string;
  content: TMDBMovie[];
}

export default function NetflixRow({ title, content }: NetflixRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;
    
    const scrollAmount = direction === 'left' ? -800 : 800;
    rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    
    setTimeout(() => {
      if (rowRef.current) {
        setScrollPosition(rowRef.current.scrollLeft);
      }
    }, 300);
  };

  const handleScroll = () => {
    if (rowRef.current) {
      setScrollPosition(rowRef.current.scrollLeft);
    }
  };

  const canScrollLeft = scrollPosition > 0;
  const canScrollRight = rowRef.current 
    ? scrollPosition < rowRef.current.scrollWidth - rowRef.current.clientWidth 
    : true;

  if (!content || content.length === 0) {
    return null;
  }

  return (
    <div className="relative group/row mb-12">
      {/* Title */}
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4 px-6 lg:px-12">
        {title}
      </h2>

      {/* Scroll Container */}
      <div className="relative">
        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-0 bottom-0 z-20 w-12 lg:w-16 bg-black/50 hover:bg-black/80 transition-all opacity-0 group-hover/row:opacity-100 flex items-center justify-center"
            aria-label="Scroll left"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        {/* Cards Container */}
        <div
          ref={rowRef}
          onScroll={handleScroll}
          className="flex gap-2 overflow-x-scroll scrollbar-hide px-6 lg:px-12 scroll-smooth pb-4"
        >
          {content.map((item, index) => (
            <NetflixCard key={`${item.id}-${index}`} content={item} />
          ))}
        </div>

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-0 bottom-0 z-20 w-12 lg:w-16 bg-black/50 hover:bg-black/80 transition-all opacity-0 group-hover/row:opacity-100 flex items-center justify-center"
            aria-label="Scroll right"
          >
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}

