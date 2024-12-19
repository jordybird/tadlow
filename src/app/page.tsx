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

const Clients = dynamic(() => import('./components/Clients'), {
  ssr: false,
  loading: () => (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-40 flex items-center justify-center animate-pulse">
          <div className="text-[#28282B] text-xl">Loading...</div>
        </div>
      </div>
    </div>
  ),
});

const Marketing = dynamic(() => import('./components/Marketing'), {
  ssr: false,
  loading: () => (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[600px] flex items-center justify-center animate-pulse">
          <div className="text-[#28282B] text-xl">Loading...</div>
        </div>
      </div>
    </div>
  ),
});

const CallToActionHome = dynamic(() => import('./components/CallToActionHome'), {
  ssr: false,
  loading: () => (
    <div className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-[500px] flex items-center justify-center animate-pulse">
          <div className="text-white text-xl">Loading...</div>
        </div>
      </div>
    </div>
  ),
});

const Footer = dynamic(() => import('./components/Footer'), {
  ssr: false,
  loading: () => (
    <div className="py-12 bg-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="h-32 flex items-center justify-center animate-pulse">
          <div className="text-gray-600 text-xl">Loading...</div>
        </div>
      </div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <Clients />
      <Marketing />
      <CallToActionHome />
      <Footer />
    </main>
  );
}