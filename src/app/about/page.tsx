'use client';

import React, { useRef } from 'react';
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

const FAQ = dynamic(() => import('@/app/components/AboutPage/FAQ'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading FAQ...</div>,
});

const TapIn = dynamic(() => import('@/app/components/TapIn'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading TapIn...</div>,
});

const Footer = dynamic(() => import('@/app/components/Footer'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Footer...</div>,
});

const Contact = dynamic(() => import('@/app/components/Contact'), {
  ssr: false
});

export default function AboutPage() {
  // Add ref for Contact component visibility
  const faqRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative">
      <Header />
      <AboutHero />
      <div ref={faqRef}>
        <FAQ />
      </div>
      <TapIn />
      <Footer />
      <Contact targetRef={faqRef} />
    </main>
  );
}