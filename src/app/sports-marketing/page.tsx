"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

// ──────────────────────────────────────────────────────────────────────────────
// 1. Dynamic imports for each component
//    You can define a minimal “Loading…” placeholder for each as desired.
// ──────────────────────────────────────────────────────────────────────────────
const Header = dynamic(() => import('@/app/components/Header'), {
  ssr: false,
 
});

const SportsPartnerships = dynamic(() => import('@/app/components/SportsPage/SportsPartnerships'), {
  ssr: false,
 
});

const SportsVenue = dynamic(() => import('@/app/components/SportsPage/SportsVenue'), {
  ssr: false,
  
});

const Gameday = dynamic(() => import('@/app/components/SportsPage/Gameday'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Brand Voice...</div>,
});

const Fan = dynamic(() => import('@/app/components/SportsPage/Fan'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Brand Guidelines...</div>,
});

const InGame = dynamic(() => import('@/app/components/SportsPage/InGame'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Brand Activation...</div>,
});

const TapIn = dynamic(() => import('@/app/components/TapIn'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading TapIn...</div>,
});

const Footer = dynamic(() => import('@/app/components/Footer'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading footer...</div>,
});

// ──────────────────────────────────────────────────────────────────────────────
// 2. Main Page Component
// ──────────────────────────────────────────────────────────────────────────────
export default function BrandDevelopmentPage() {
  return (
    <main className="relative">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32">
        {/* Hero Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-[#28282B] mb-6">
          Sports Marketing
        </h1>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <p className="text-lg text-[#28282B]/80 mb-4">
            We believe that every sports event, from local high schools to professional arenas, carries the potential to create unforgettable moments and foster strong community connections. Our focus is on helping you elevate your sports events, fostering stronger fan relationships and maximizing impact through carefully curated marketing strategies. We want to create experiences that are more than just events - we strive to create lasting memories.
            </p>

            {/* Get Started Button */}
            <Link href="/get-started">
              <button className="bg-[#34A56F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#34A56F]/90 transition-colors mb-6">
                Get Started
              </button>
            </Link>

            {/* Brand Identity Text */}
            <Link href="/get-started">
              <div className="flex items-center mt-4 text-lg font-semibold text-[#28282B]/80 cursor-pointer hover:text-[#34A56F] transition-colors">
                Sports Marketing starts here
                <ArrowRight className="ml-2" />
              </div>
            </Link>
          </div>

          {/* Image Column */}
          <div className="md:col-span-5">
            <div className="relative h-[300px] rounded-2xl overflow-hidden">
              <Image
                src="/brandstuff.jpg"
                alt="Brand Development"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>

        {/* Brand Development Sections */}
        <div>
          <SportsPartnerships />
          <SportsVenue />
          <Gameday />
          <Fan />
          <InGame />
        </div>
      </div>

      {/* TapIn Section */}
      <TapIn />

      {/* Footer */}
      <Footer />
    </main>
  );
}
