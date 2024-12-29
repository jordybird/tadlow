'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import each component with SSR disabled
const Header = dynamic(() => import('@/app/components/Header'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Header...</div>,
});

const AboutHero = dynamic(() => import('@/app/components/AboutPage/AboutHero'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading About Hero...</div>,
});

const TapIn = dynamic(() => import('@/app/components/TapIn'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading TapIn...</div>,
});

const Footer = dynamic(() => import('@/app/components/Footer'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Footer...</div>,
});

export default function AboutPage() {
  return (
    <main className="relative">
      <Header />
      <AboutHero />
      <TapIn />
      <Footer />
    </main>
  );
}
