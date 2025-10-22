'use client';

import { NETFLIX_SHOWS, HULU_SHOWS, DISNEY_SHOWS, MAX_SHOWS, PRIME_SHOWS, APPLE_SHOWS, PEACOCK_SHOWS, PARAMOUNT_SHOWS } from '@/lib/curated-shows';
import CuratedShowRow from '@/components/CuratedShowRow';

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      {/* ISUBiFY Name Section */}
      <div className="relative py-16 bg-black">
        {/* Cosmic Background */}
        <div className="absolute inset-0 bg-black">
          {/* Nebula Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-blue-900/20"></div>
          {/* Stars */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(2px 2px at 20px 30px, white, transparent),
                             radial-gradient(2px 2px at 40px 70px, white, transparent),
                             radial-gradient(1px 1px at 90px 40px, white, transparent),
                             radial-gradient(1px 1px at 130px 80px, white, transparent),
                             radial-gradient(2px 2px at 160px 30px, white, transparent)`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 100px'
          }}></div>
        </div>
        
        {/* ISUBiFY Name - Centered */}
        <div className="relative z-10 flex items-center justify-center">
          <div className="text-white text-center">
            <h1 className="text-[18rem] md:text-[24rem] font-bold font-heading">
              <span className="text-white">ISUB</span>
              <span className="text-white">i</span>
              <span className="text-white">FY</span>
              <span className="inline-block w-12 h-12 bg-magenta-500 rounded-full ml-8 animate-pulse"></span>
            </h1>
            <p className="text-6xl md:text-8xl text-white/80 mt-8 font-light">
              All Your Streaming Services in One Place
            </p>
          </div>
        </div>
        
        {/* Bottom Right Starburst */}
        <div className="absolute bottom-8 right-8 w-4 h-4 bg-white/60 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
      
      {/* Content Rows - Minimal Headers */}
      <div className="relative space-y-12 pb-20">
        <CuratedShowRow 
          title="Popular on Services You Don't Have" 
          shows={NETFLIX_SHOWS.slice(0, 10)} 
          categorySlug="popular-on-services-you-dont-have"
        />
        <CuratedShowRow 
          title="Critically Acclaimed" 
          shows={[...NETFLIX_SHOWS.slice(10, 15), ...HULU_SHOWS.slice(0, 5), ...MAX_SHOWS.slice(0, 5)]} 
          categorySlug="critically-acclaimed"
        />
        
        <CuratedShowRow 
          title="Award-Winning Content" 
          shows={[...APPLE_SHOWS.slice(0, 10), ...MAX_SHOWS.slice(5, 10)]} 
          categorySlug="award-winning-content"
        />
        <CuratedShowRow 
          title="Netflix Originals" 
          shows={NETFLIX_SHOWS.slice(0, 20)} 
          categorySlug="netflix-originals"
        />
        <CuratedShowRow 
          title="Hulu Exclusives" 
          shows={HULU_SHOWS} 
          categorySlug="hulu-exclusives"
        />
        <CuratedShowRow 
          title="Disney+ Hits" 
          shows={DISNEY_SHOWS.slice(0, 20)} 
          categorySlug="disney-plus-favorites"
        />
        <CuratedShowRow 
          title="Max Must-Watch" 
          shows={MAX_SHOWS} 
          categorySlug="max-hbo-content"
        />
      </div>
    </div>
  );
}
