// app/brand-development/page.tsx
'use client'

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import components with SSR disabled
const Header = dynamic(() => import('@/app/components/Header'), {
  ssr: false
});

const MainContent = dynamic(() => import('@/app/components/BrandPage/MainContent'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen animate-pulse">
      <div className="h-screen flex items-center justify-center">
        <div className="text-[#28282B] text-xl">Loading...</div>
      </div>
    </div>
  ),
});

const TapIn = dynamic(() => import('@/app/components/TapIn'), {
  ssr: false
});

const Footer = dynamic(() => import('@/app/components/Footer'), {
  ssr: false
});

export default function BrandDevelopmentPage() {
  return (
    <main className="relative">
      <Suspense fallback={<div>Loading...</div>}>
        <Header />
        <MainContent />
        <TapIn />
        <Footer />
      </Suspense>
    </main>
  );
}