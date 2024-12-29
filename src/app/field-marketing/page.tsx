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
  loading: () => <div className="p-4 animate-pulse">Loading header...</div>,
});

const BrandStrategy = dynamic(() => import('@/app/components/BrandPage/BrandStrategy'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Brand Strategy...</div>,
});

const VisualIdentity = dynamic(() => import('@/app/components/BrandPage/VisualIdentity'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Visual Identity...</div>,
});

const BrandVoice = dynamic(() => import('@/app/components/BrandPage/BrandVoice'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Brand Voice...</div>,
});

const BrandGuidelines = dynamic(() => import('@/app/components/BrandPage/BrandGuidelines'), {
  ssr: false,
  loading: () => <div className="p-4 animate-pulse">Loading Brand Guidelines...</div>,
});

const BrandActivation = dynamic(() => import('@/app/components/BrandPage/BrandActivation'), {
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
          Brand Development
        </h1>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <p className="text-lg text-[#28282B]/80 mb-4">
              Transform your brand identity with our comprehensive development solutions.
              We specialize in crafting distinctive brand experiences that resonate with
              your target audience and set you apart in today's competitive market. Our
              strategic approach ensures your brand narrative is compelling, consistent,
              and memorable across all touchpoints.
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
                Brand Identity starts here
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
          <BrandStrategy />
          <VisualIdentity />
          <BrandVoice />
          <BrandGuidelines />
          <BrandActivation />
        </div>
      </div>

      {/* TapIn Section */}
      <TapIn />

      {/* Footer */}
      <Footer />
    </main>
  );
}
