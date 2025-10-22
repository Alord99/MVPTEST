'use client';

import { useState } from 'react';
import Image from 'next/image';
import { getPosterUrl, type TMDBMovie } from '@/lib/tmdb';
import { STREAMING_SERVICES } from '@/lib/types';

interface ModernCardProps {
  content: TMDBMovie;
}

export default function ModernCard({ content }: ModernCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const title = content.title || content.name || 'Unknown';
  const year = content.release_date || content.first_air_date || '';
  const rating = content.vote_average ? content.vote_average.toFixed(1) : 'N/A';
  
  // Randomly assign a service
  const serviceKeys = Object.keys(STREAMING_SERVICES);
  const randomService = STREAMING_SERVICES[serviceKeys[content.id % serviceKeys.length]];

  // Generate streaming link
  const streamingUrl = getStreamingUrl(randomService.id, title);

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

  const handleCardClick = () => {
    window.open(streamingUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="group flex-shrink-0 w-[180px] md:w-[220px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      {/* Card Container - Modern Glass Effect */}
      <div className={`
        relative rounded-2xl overflow-hidden
        bg-gradient-to-br from-gray-900/50 to-gray-800/50
        backdrop-blur-sm border border-white/10
        transition-all duration-300 ease-out
        ${isHovered ? 'scale-105 shadow-2xl shadow-purple-500/20' : 'shadow-lg'}
      `}>
        {/* Poster Image */}
        <div className="relative aspect-[2/3]">
          {content.poster_path ? (
            <Image
              src={getPosterUrl(content.poster_path, 'w342')}
              alt={title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 180px, 220px"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white text-4xl font-bold">{title[0]}</span>
            </div>
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          
          {/* Service Badge - Top Right with Glow - CLICKABLE */}
          <div className="absolute top-3 right-3 z-10">
            <div
              className="px-2.5 py-1 rounded-lg text-white text-xs font-bold shadow-lg backdrop-blur-md border border-white/20 hover:scale-110 transition-transform"
              style={{ 
                backgroundColor: `${randomService.color}dd`,
                boxShadow: `0 0 20px ${randomService.color}60`
              }}
              title={`Watch on ${randomService.name}`}
            >
              {randomService.shortName}
            </div>
          </div>

          {/* Rating Badge - Top Left */}
          <div className="absolute top-3 left-3 z-10">
            <div className="bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg border border-yellow-500/30">
              <div className="flex items-center gap-1">
                <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-xs font-bold">{rating}</span>
              </div>
            </div>
          </div>

          {/* Hover Content */}
          <div className={`
            absolute inset-0 flex flex-col justify-end p-4 z-10
            transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}>
            {/* Quick Action Buttons */}
            <div className="flex items-center gap-2 mb-3">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
                className="flex items-center gap-1.5 px-4 py-2 bg-white rounded-full text-black font-semibold text-sm hover:scale-110 transition-transform shadow-lg"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                Watch
              </button>
              <button 
                onClick={(e) => e.stopPropagation()}
                className="w-9 h-9 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Info Section - Always Visible */}
        <div className="p-3 bg-gradient-to-b from-gray-900/80 to-black/90 backdrop-blur-sm">
          <h3 className="text-white font-semibold text-sm line-clamp-2 mb-1 group-hover:text-purple-300 transition-colors">
            {title}
          </h3>
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-400">{year ? new Date(year).getFullYear() : '2024'}</span>
            <div className="flex items-center gap-1">
              <span className="text-green-400 font-medium">{rating} ⭐</span>
            </div>
          </div>
          {isHovered && (
            <div className="mt-2 pt-2 border-t border-white/10">
              <p className="text-xs text-gray-400">
                Click to watch on {randomService.name}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

