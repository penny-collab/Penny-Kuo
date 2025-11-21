import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AgendaSection } from './components/AgendaSection';
import { CommitteeAI } from './components/CommitteeAI';

const App: React.FC = () => {
  return (
    <div className="min-h-screen pb-12 selection:bg-poster-pink selection:text-white overflow-x-hidden bg-white">
      <Header />
      <main className="space-y-8">
        <HeroSection />
        <AgendaSection />
        <CommitteeAI />
      </main>
      
      <footer className="text-center py-12 text-gray-400 text-sm bg-gray-50">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="w-2 h-2 bg-poster-blue rounded-full"></span>
          <span className="w-2 h-2 bg-poster-pink rounded-full"></span>
        </div>
        <p className="font-serif text-gray-500 font-bold">Lucas & Penny & Bobo</p>
        <p className="text-xs mt-1 opacity-60 font-mono">Protocol G-01 System</p>
      </footer>
    </div>
  );
};

export default App;