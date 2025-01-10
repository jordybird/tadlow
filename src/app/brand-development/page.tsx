"use client";

import React, { useRef, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { CustomEase } from "gsap/CustomEase";
import { ExpoScaleEase } from "gsap/EasePack";
import { Flip } from "gsap/Flip";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { TextPlugin } from "gsap/TextPlugin";

// Register all GSAP plugins
gsap.registerPlugin(
  useGSAP,
  Flip,
  ScrollTrigger,
  ScrollToPlugin,
  MotionPathPlugin,
  TextPlugin,
  ExpoScaleEase,
  CustomEase
);

// Dynamic imports with loading states
const Header = dynamic(() => import('@/app/components/Header'), {
  ssr: false,
});

const BrandStrategy = dynamic(() => import('@/app/components/BrandPage/BrandStrategy'), {
  ssr: false,
});

const VisualIdentity = dynamic(() => import('@/app/components/BrandPage/VisualIdentity'), {
  ssr: false,
});

const BrandVoice = dynamic(() => import('@/app/components/BrandPage/BrandVoice'), {
  ssr: false,
});

const BrandGuidelines = dynamic(() => import('@/app/components/BrandPage/BrandGuidelines'), {
  ssr: false,
});

const BrandActivation = dynamic(() => import('@/app/components/BrandPage/BrandActivation'), {
  ssr: false,
});

const BrandExperience = dynamic(() => import('@/app/components/BrandPage/BrandExperience'), {
  ssr: false,
});

const TapIn = dynamic(() => import('@/app/components/TapIn'), {
  ssr: false,
});

const Footer = dynamic(() => import('@/app/components/Footer'), {
  ssr: false,
});

export default function BrandDevelopmentPage() {
  const mainRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    // Initial page load animation
    const tl = gsap.timeline();
    
    tl.from(".page-title", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    })
    .from(".hero-content", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2
    }, "-=0.5")
    .from(".hero-image", {
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .from(".cta-button", {
      scale: 0.9,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.5");

    // Scroll animations for content sections
    gsap.from(".brand-section", {
      scrollTrigger: {
        trigger: ".brand-section",
        start: "top 80%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3
    });

  }, { scope: mainRef });

  return (
    <main ref={mainRef} className="relative">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32">
        {/* Hero Section */}
        <h1 className="page-title text-4xl md:text-5xl font-bold text-[#28282B] mb-6">
          Brand Development
        </h1>

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16">
          {/* Content Column */}
          <div className="md:col-span-7 flex flex-col justify-between">
            <p className="hero-content text-lg text-[#28282B]/80 mb-4">
              You have a vision, a story to tell, and a brand that's just waiting to shine. 
              We're here to help you bring that to life, crafting a brand identity that's 
              not just visually appealing but truly resonates with your audience. Our goal 
              is to help you stand out in today's crowded marketplace. We'll work closely 
              with you to create a brand narrative that's compelling, consistent, and 
              unforgettable across every touchpoint.
            </p>

            <Link href="/get-started">
              <button className="cta-button bg-[#34A56F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#34A56F]/90 transition-colors mb-6">
                Get Started
              </button>
            </Link>

            <Link href="/get-started">
              <div className="hero-content flex items-center mt-4 text-lg font-semibold text-[#28282B]/80 cursor-pointer hover:text-[#34A56F] transition-colors">
                Brand Identity starts here
                <ArrowRight className="ml-2" />
              </div>
            </Link>
          </div>

          {/* Image Column */}
          <div className="md:col-span-5">
            <div className="hero-image relative h-[300px] rounded-2xl overflow-hidden">
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
        <div className="brand-sections">
          <div className="brand-section"><BrandStrategy /></div>
          <div className="brand-section"><VisualIdentity /></div>
          <div className="brand-section"><BrandVoice /></div>
          <div className="brand-section"><BrandGuidelines /></div>
          <div className="brand-section"><BrandActivation /></div>
          <div className="brand-section"><BrandExperience /></div>
        </div>
      </div>

      {/* TapIn Section */}
      <div className="brand-section">
        <TapIn />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}