'use client';

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/app/components/Header'), {
  ssr: false,
  loading: () => <div className="min-h-[80px] bg-white flex items-center justify-center animate-pulse" />
});

const HeroSection = dynamic(() => import('@/app/components/HeroSection'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-white animate-pulse flex items-center justify-center" />
});

const Clients = dynamic(() => import('@/app/components/Clients'), {
  ssr: false,
  loading: () => <div className="py-24 bg-white animate-pulse flex items-center justify-center" />
});

const Marketing = dynamic(() => import('@/app/components/Marketing'), {
  ssr: false,
  loading: () => <div className="py-24 bg-white animate-pulse flex items-center justify-center" />
});

const CallToActionHome = dynamic(() => import('@/app/components/CallToActionHome'), {
  ssr: false,
  loading: () => <div className="py-24 bg-black animate-pulse flex items-center justify-center" />
});

const Footer = dynamic(() => import('@/app/components/Footer'), {
  ssr: false,
  loading: () => <div className="py-12 bg-gray-200 animate-pulse flex items-center justify-center" />
});

const Contact = dynamic(() => import('@/app/components/Contact'), {
  ssr: false
});

export default function Home() {
  // Explicitly type the ref as HTMLDivElement with non-null assertion
  const marketingRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <Clients />
      <div ref={marketingRef} id="marketing-section">
        <Marketing />
      </div>
      <CallToActionHome />
      <Footer />
      <Contact targetRef={marketingRef} />
    </main>
  );
}