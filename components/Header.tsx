import React from 'react';
import { EVENT_DETAILS } from '../constants';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-4 z-50 px-4 pointer-events-none">
      <div className="max-w-fit mx-auto bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/50 px-6 py-2 flex items-center gap-3 pointer-events-auto">
          <div className="flex -space-x-1">
            <div className="w-3 h-3 bg-poster-blue rounded-full"></div>
            <div className="w-3 h-3 bg-poster-pink rounded-full"></div>
          </div>
          <h1 className="text-xs md:text-sm font-serif font-bold text-gray-800 tracking-wide">
            {EVENT_DETAILS.title}
          </h1>
      </div>
    </header>
  );
};