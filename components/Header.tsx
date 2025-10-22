'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppStore } from '@/lib/store';
import { STREAMING_SERVICES } from '@/lib/types';

export default function Header() {
  const pathname = usePathname();
  const { activeServices } = useAppStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black border-b border-gray-800' : 'bg-black/95'
    }`}>
      <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-2">
        <div className="flex justify-between items-center">
          {/* Left - Service Pills */}
          <div className="flex items-center gap-2">
            {Object.values(STREAMING_SERVICES).slice(0, 5).map(service => {
              const isActive = activeServices.includes(service.id);
              return (
                <div
                  key={service.id}
                  className={`px-2.5 py-1.5 rounded-lg text-white text-xs font-bold transition-all cursor-pointer ${
                    isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'
                  }`}
                  style={{ backgroundColor: service.color }}
                  title={service.name}
                >
                  {service.shortName}
                </div>
              );
            })}
          </div>

          {/* Right - Manage Services Button */}
          <Link
            href="/subscriptions"
            className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm rounded-lg transition-all shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            Manage Services
          </Link>
        </div>
      </div>
    </nav>
  );
}

