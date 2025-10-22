'use client';

import { useRef } from 'react';
import Link from 'next/link';
import CuratedShowCard from './CuratedShowCard';
import type { CuratedShow } from '@/lib/curated-shows';

interface CuratedShowRowProps {
  title: string;
  shows: CuratedShow[];
  categorySlug?: string;
}

export default function CuratedShowRow({ title, shows, categorySlug }: CuratedShowRowProps) {
  const rowRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!rowRef.current) return;
    const scrollAmount = direction === 'left' ? -600 : 600;
    rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Generate slug from title if not provided
  const slug = categorySlug || title.toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

  if (!shows || shows.length === 0) {
    return null;
  }

  return (
    <div className="mb-10 group/row">
      {/* Title - Minimal Clean Design */}
      <div className="flex items-center justify-between mb-6 px-6 lg:px-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          {title}
        </h2>
      </div>

      {/* Scroll Container */}
      <div className="relative px-6 lg:px-12">
        {/* Left Arrow */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 backdrop-blur-lg rounded-full flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all border-2 border-white/30 shadow-2xl shadow-purple-500/50 hover:scale-110"
          aria-label="Scroll left"
        >
          <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards Container */}
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-scroll scrollbar-hide scroll-smooth pb-4"
        >
          {shows.map((show, index) => (
            <CuratedShowCard key={`${show.directUrl}-${index}`} show={show} />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-gradient-to-br from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 backdrop-blur-lg rounded-full flex items-center justify-center opacity-0 group-hover/row:opacity-100 transition-all border-2 border-white/30 shadow-2xl shadow-purple-500/50 hover:scale-110"
          aria-label="Scroll right"
        >
          <svg className="w-7 h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

