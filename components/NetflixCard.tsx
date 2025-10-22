'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getPosterUrl, getBackdropUrl, type TMDBMovie } from '@/lib/tmdb';
import { STREAMING_SERVICES } from '@/lib/types';

interface NetflixCardProps {
  content: TMDBMovie;
}

export default function NetflixCard({ content }: NetflixCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const title = content.title || content.name || 'Unknown';
  const year = content.release_date || content.first_air_date || '';
  const rating = content.vote_average ? content.vote_average.toFixed(1) : 'N/A';
  
  // Randomly assign a service for demo
  const serviceKeys = Object.keys(STREAMING_SERVICES);
  const randomService = STREAMING_SERVICES[serviceKeys[content.id % serviceKeys.length]];

  // Generate streaming URL
  function getStreamingUrl(serviceId: string, title: string): string {
    const baseUrls: Record<string, string> = {
      'netflix': `https://www.netflix.com/search?q=${encodeURIComponent(title)}`,
      'hulu': `https://www.hulu.com/search?q=${encodeURIComponent(title)}`,
      'disney-plus': `https://www.disneyplus.com/search?q=${encodeURIComponent(title)}`,
      'hbo-max': `https://www.max.com/search?q=${encodeURIComponent(title)}`,
      'apple-tv': `https://tv.apple.com/search?q=${encodeURIComponent(title)}`,
      'amazon-prime': `https://www.amazon.com/s?k=${encodeURIComponent(title)}&i=instant-video`,
    };
    return baseUrls[serviceId] || `https://www.netflix.com/search?q=${encodeURIComponent(title)}`;
  }

  const streamingUrl = getStreamingUrl(randomService.id, title);

  const handleCardClick = () => {
    window.open(streamingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="relative flex-shrink-0 w-[200px] md:w-[280px] lg:w-[320px] group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
      title={`Watch ${title} on ${randomService.name}`}
    >
      {/* Main Card */}
      <div className={`
        relative aspect-video rounded-md overflow-hidden
        transition-all duration-300 ease-in-out
        ${isHovered ? 'scale-125 z-50 shadow-2xl' : 'scale-100'}
      `}>
        {/* Poster Image */}
        {content.backdrop_path ? (
          <Image
            src={getBackdropUrl(content.backdrop_path, 'w780')}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 200px, (max-width: 1024px) 280px, 320px"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-900 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">{title[0]}</span>
          </div>
        )}

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Service Badge - Always Visible */}
        <div className="absolute top-2 left-2 z-10">
          <div
            className="flex items-center gap-1 px-2 py-1 rounded text-white text-xs font-bold shadow-lg"
            style={{ backgroundColor: `${randomService.color}` }}
          >
            <span className="w-2 h-2 bg-white/40 rounded-full" />
            {randomService.shortName}
          </div>
        </div>

        {/* Hover Content */}
        {isHovered && (
          <div className="absolute inset-0 flex flex-col justify-end p-4 z-10">
            {/* Title */}
            <h3 className="text-white font-bold text-lg mb-2 line-clamp-2">
              {title}
            </h3>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 mb-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
                className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full text-black font-semibold text-xs hover:bg-gray-200 transition"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="w-8 h-8 bg-gray-800/80 border-2 border-gray-400 rounded-full flex items-center justify-center hover:border-white transition"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            {/* Meta Info */}
            <div className="flex items-center gap-2 text-xs text-white mb-1">
              <span className="text-green-400 font-semibold">{rating}</span>
              <span className="text-gray-300">
                {year ? new Date(year).getFullYear() : '2024'}
              </span>
              <span className="px-1 border border-gray-400 text-gray-300">
                HD
              </span>
            </div>

            {/* Overview */}
            <p className="text-gray-300 text-xs line-clamp-2">
              {content.overview || 'No description available'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

