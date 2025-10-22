'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { CuratedShow } from '@/lib/curated-shows';
import { getShowImageCached } from '@/lib/fetch-show-images';
import { STREAMING_SERVICES } from '@/lib/types';

interface CuratedShowCardProps {
  show: CuratedShow;
}

export default function CuratedShowCard({ show }: CuratedShowCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageData, setImageData] = useState({ poster: '', backdrop: '', rating: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getShowImageCached(show.title).then(data => {
      setImageData(data);
      setLoading(false);
    });
  }, [show.title]);

  const service = STREAMING_SERVICES[show.serviceId];
  
  const handleClick = () => {
    window.open(show.directUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="group flex-shrink-0 w-[200px] md:w-[240px] cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
      title={`Watch ${show.title} on ${show.service}`}
    >
      <div className={`
        relative rounded-2xl overflow-hidden
        glass-morph
        transition-all duration-500 ease-out
        ${isHovered ? 'scale-110 shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(139,92,246,0.3)] -translate-y-4 rotate-1' : ''}
      `}>
        {/* Nebula Glow Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br from-amethyst/20 via-transparent to-cerulean/20 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
        
        {/* Poster Image */}
        <div className="relative aspect-[2/3]">
          {!loading && imageData.poster ? (
            <Image
              src={imageData.poster}
              alt={show.title}
              fill
              className={`object-cover transition-all duration-500 ${isHovered ? 'scale-110 brightness-110' : ''}`}
              sizes="(max-width: 768px) 180px, 220px"
              unoptimized
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              {loading ? (
                <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <span className="text-white text-4xl font-bold">{show.title[0]}</span>
              )}
            </div>
          )}
          
          {/* Starlight Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent transition-all duration-500 ${isHovered ? 'from-black/50' : ''}`} />
          

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-60 animate-float' : 'opacity-0'}`} style={{ animationDelay: '0s' }}></div>
            <div className={`absolute top-3/4 right-1/4 w-1 h-1 bg-amethyst rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-60 animate-float' : 'opacity-0'}`} style={{ animationDelay: '1s' }}></div>
            <div className={`absolute bottom-1/4 left-1/3 w-1 h-1 bg-cerulean rounded-full transition-opacity duration-500 ${isHovered ? 'opacity-60 animate-float' : 'opacity-0'}`} style={{ animationDelay: '2s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}