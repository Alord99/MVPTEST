'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { getBackdropUrl, type TMDBMovie } from '@/lib/tmdb';

interface NetflixHeroProps {
  content?: TMDBMovie;
}

export default function NetflixHero({ content }: NetflixHeroProps) {
  const [isMuted, setIsMuted] = useState(true);

  const openStreamingLink = () => {
    if (!content) return;
    const title = content.title || content.name || '';
    const url = `https://www.netflix.com/search?q=${encodeURIComponent(title)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (!content) {
    return (
      <div className="relative h-[80vh] w-full bg-gradient-to-b from-black to-bg-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">Welcome to StreamHub</h1>
            <p className="text-2xl text-gray-300">Discover amazing content across all your streaming services</p>
          </div>
        </div>
      </div>
    );
  }

  const title = content.title || content.name || 'Featured Content';
  const rating = content.vote_average ? content.vote_average.toFixed(1) : 'N/A';

  return (
    <div className="relative h-[85vh] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={getBackdropUrl(content.backdrop_path, 'original')}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        
        {/* Gradient Overlays - Netflix Style */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-2xl space-y-6">
            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight drop-shadow-2xl">
              {title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-green-400 font-semibold">{rating} Rating</span>
              <span className="text-gray-300">
                {content.release_date ? new Date(content.release_date).getFullYear() : 
                 content.first_air_date ? new Date(content.first_air_date).getFullYear() : 
                 '2024'}
              </span>
              <span className="px-2 py-0.5 border border-gray-400 text-gray-300 text-sm">
                HD
              </span>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl text-white leading-relaxed line-clamp-3 drop-shadow-lg">
              {content.overview || 'Discover amazing content from across all streaming platforms.'}
            </p>

            {/* Buttons - Netflix Style - CLICKABLE */}
            <div className="flex gap-4 pt-4">
              <button 
                onClick={openStreamingLink}
                className="flex items-center gap-2 px-8 py-3 bg-white text-black rounded font-bold text-lg hover:bg-gray-200 transition-all transform hover:scale-105 shadow-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch Now
              </button>
              <button className="flex items-center gap-2 px-8 py-3 bg-gray-500/70 text-white rounded font-bold text-lg hover:bg-gray-500/50 transition-all backdrop-blur-sm">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Age Rating Badge - Netflix Style */}
      <div className="absolute bottom-24 right-8 px-4 py-2 border-l-4 border-gray-400 bg-black/60 backdrop-blur-sm">
        <p className="text-gray-400 text-sm font-semibold">Recommended for you</p>
      </div>
    </div>
  );
}

