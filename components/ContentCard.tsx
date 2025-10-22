import Image from 'next/image';
import { getPosterUrl } from '@/lib/tmdb';
import type { TMDBMovie } from '@/lib/tmdb';
import { STREAMING_SERVICES } from '@/lib/types';

interface ContentCardProps {
  content: TMDBMovie;
}

export default function ContentCard({ content }: ContentCardProps) {
  const title = content.title || content.name || 'Unknown';
  const year = content.release_date || content.first_air_date || '';
  const rating = content.vote_average ? content.vote_average.toFixed(1) : 'N/A';
  
  // Randomly assign a service for demo (in real app, would come from streaming API)
  const serviceKeys = Object.keys(STREAMING_SERVICES);
  const randomService = STREAMING_SERVICES[serviceKeys[content.id % serviceKeys.length]];

  return (
    <div className="group cursor-pointer flex-shrink-0">
      <div className="relative w-[200px] md:w-[240px] transition-transform duration-300 hover:scale-105">
        {/* Poster */}
        <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-800 card-glow">
          <Image
            src={getPosterUrl(content.poster_path, 'w342')}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 200px, 240px"
          />
          
          {/* Service Badge - Bottom Right */}
          <div className="absolute bottom-3 right-3 z-10">
            <div
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-white text-xs font-bold shadow-2xl backdrop-blur-sm border border-white/20"
              style={{ 
                backgroundColor: `${randomService.color}ee`,
                boxShadow: `0 4px 12px ${randomService.color}60`
              }}
            >
              <span className="w-3 h-3 bg-white/30 rounded-full flex items-center justify-center text-[8px]">
                {randomService.shortName[0]}
              </span>
              {randomService.shortName}
            </div>
          </div>
          
          {/* Rating Badge - Top Left */}
          <div className="absolute top-2 left-2 z-10">
            <div className="bg-black/80 px-2 py-1 rounded text-white text-xs font-bold">
              ⭐ {rating}
            </div>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-3 right-3">
              <p className="text-white text-xs line-clamp-2">
                {content.overview || 'No description available'}
              </p>
            </div>
          </div>
        </div>
        
        {/* Title */}
        <h3 className="mt-3 text-base font-semibold text-white line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-gray-400">
          {year ? new Date(year).getFullYear() : 'TBA'}
        </p>
      </div>
    </div>
  );
}

