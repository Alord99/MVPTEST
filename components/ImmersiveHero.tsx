'use client';

import { useState } from 'react';

const MOOD_CHIPS = [
  { label: 'Chill evening', icon: '🌙', color: 'from-purple-500 to-blue-500' },
  { label: 'Action fix', icon: '⚡', color: 'from-red-500 to-orange-500' },
  { label: 'Mind-bender', icon: '🧠', color: 'from-indigo-500 to-purple-500' },
  { label: 'Romance', icon: '💕', color: 'from-pink-500 to-rose-500' },
  { label: 'Comedy', icon: '😂', color: 'from-yellow-500 to-orange-500' },
  { label: 'Thriller', icon: '🔍', color: 'from-gray-500 to-slate-500' },
];

export default function ImmersiveHero() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMood, setSelectedMood] = useState<string | null>(null);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 nebula-bg opacity-30"></div>
      
      {/* Featured Content Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1489599804-1b4b0b0b0b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          filter: 'blur(2px) brightness(0.3)',
        }}
      />
      
      {/* Starlight Overlay */}
      <div className="absolute inset-0 starlight opacity-50"></div>
      
      {/* Glass-Morphed Search Bar */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 font-heading">
            Discover
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            Your universe of entertainment awaits
          </p>
        </div>

        {/* Floating Search Bar */}
        <div className="w-full max-w-2xl mb-8">
          <div className="glass-morph-strong rounded-2xl p-2">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search for your next favorite show..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-white placeholder-gray-400 text-lg px-4 py-3 focus:outline-none"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-amethyst to-cerulean text-white font-semibold rounded-xl hover:scale-105 transition-all duration-300 glow-soft">
                Find for Me
              </button>
            </div>
          </div>
        </div>

        {/* Mood Chips */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl">
          {MOOD_CHIPS.map((chip) => (
            <button
              key={chip.label}
              onClick={() => setSelectedMood(selectedMood === chip.label ? null : chip.label)}
              className={`mood-chip px-6 py-3 rounded-full text-white font-medium transition-all duration-300 ${
                selectedMood === chip.label 
                  ? 'bg-gradient-to-r from-amethyst to-cerulean scale-105' 
                  : 'hover:scale-105'
              }`}
            >
              <span className="mr-2">{chip.icon}</span>
              {chip.label}
            </button>
          ))}
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-amethyst rounded-full animate-float opacity-60"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-cerulean rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-electric rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll to explore</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </div>
  );
}
