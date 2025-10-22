'use client';

import { useState } from 'react';

export default function AIDiscoverySection() {
  const [query, setQuery] = useState('');

  const suggestions = [
    'Something funny',
    'Mind-bending thriller',
    'Feel-good movie',
    'Binge-worthy series',
  ];

  const handleSearch = () => {
    // Future: AI-powered search functionality
    console.log('Searching for:', query);
  };

  return (
    <div className="relative mx-6 lg:mx-12 my-12 rounded-2xl overflow-hidden">
      {/* Gradient Background - Teal to Purple/Blue */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-800 via-blue-900 to-purple-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/40"></div>
      
      {/* Content */}
      <div className="relative px-8 md:px-16 py-12">
        {/* Title */}
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <h2 className="text-3xl font-bold text-white">AI-Powered Discovery</h2>
        </div>
        
        <p className="text-gray-300 text-lg mb-8 max-w-3xl">
          Describe what you&apos;re in the mood for, and we&apos;ll find the perfect match across all streaming services
        </p>

        {/* Search Input */}
        <div className="flex gap-4 mb-6 max-w-4xl">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='e.g., "A sci-fi show with strong female leads" or "Something like Breaking Bad"'
            className="flex-1 px-6 py-4 bg-gray-800/50 backdrop-blur-md border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/30 transition-all"
          />
          <button
            onClick={handleSearch}
            className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-bold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Find for Me
          </button>
        </div>

        {/* Suggestion Chips */}
        <div className="flex flex-wrap gap-3">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              onClick={() => setQuery(suggestion)}
              className="px-4 py-2 bg-gray-700/50 hover:bg-gray-600/50 backdrop-blur-sm border border-gray-500/30 rounded-full text-gray-300 hover:text-white text-sm font-medium transition-all hover:scale-105"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

