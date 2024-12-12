// app/page.tsx
'use client'

import React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./components/Header'), {
  ssr: false
});

const HeroSection = dynamic(() => import('./components/HeroSection'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-white animate-pulse">
      <div className="h-screen flex items-center justify-center">
        <div className="text-[#28282B] text-xl">Loading...</div>
      </div>
    </div>
  ),
});

const FeaturesSection = dynamic(() => import('./components/FeatureSection'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 animate-pulse">
      <div className="h-screen flex items-center justify-center">
        <div className="text-[#28282B] text-xl">Loading...</div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}