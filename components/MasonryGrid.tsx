'use client';

import { CuratedShow } from '@/lib/curated-shows';
import CuratedShowCard from './CuratedShowCard';

interface MasonryGridProps {
  shows: CuratedShow[];
  title: string;
}

export default function MasonryGrid({ shows, title }: MasonryGridProps) {
  return (
    <div className="mb-16">
      {/* Section Header */}
      <div className="px-6 lg:px-12 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 font-heading">
          {title}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-amethyst to-cerulean rounded-full"></div>
      </div>

      {/* Masonry Grid */}
      <div className="px-6 lg:px-12">
        <div className="masonry-grid">
          {shows.map((show, index) => (
            <div 
              key={`${show.title}-${index}`} 
              className="masonry-item animate-slideInLeft"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="content-card">
                <CuratedShowCard show={show} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
