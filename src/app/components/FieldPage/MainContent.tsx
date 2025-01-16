// src/app/components/BrandPage/MainContent.tsx

"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { logRender } from '../../../../utils/logger';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import Franchise from './Franchise';
import BrandAmbassador from './BrandAmbass';
import Community from './Community';
import ProductSampling from './ProductSampling';
import LocalMarket from './LocalMarket';
;
import TapIn from '../TapIn';

gsap.registerPlugin(ScrollTrigger);

const MainContent = () => {
  logRender('MainContent'); // Log render

  const mainRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!mainRef.current) return;

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
    <div ref={mainRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-32">
      {/* Hero Section */}
      <h1 className="page-title text-4xl md:text-5xl font-bold text-[#28282B] mb-6">
      Field Marketing
      </h1>

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 md:mb-16 ">
        {/* Content Column */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <p className="hero-content text-lg text-[#28282B]/80 mb-4">
          At Musard Seed marketing, we believe in the power of real-world connections. Field marketing is about going beyond screens and actively engaging with your community to create authentic interactions between your brand and your target audience. Our hands-on approach is designed to foster meaningful experiences that drive engagement and build lasting relationships with your customers. We're here to make your brand a vibrant and valued part of people's lives, right where they live, work, and play.
          </p>

          <Link href="/get-started">
            <button className="cta-button bg-[#34A56F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#34A56F]/90 transition-colors mb-6">
              Get Started
            </button>
          </Link>

          <Link href="/get-started">
            <div className="hero-content flex items-center mt-4 text-lg font-semibold text-[#28282B]/80 cursor-pointer hover:text-[#34A56F] transition-colors">
              Field Marketing Starts Here
              <ArrowRight className="ml-2" />
            </div>
          </Link>
        </div>

        {/* Image Column */}
        <div className="md:col-span-5">
          <div className="hero-image relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/turf.JPG"
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
        <div className="brand-section"><Franchise /></div>
        <div className="brand-section"><BrandAmbassador /></div>
        <div className="brand-section"><Community /></div>
        <div className="brand-section"><ProductSampling /></div>
        <div className="brand-section"><LocalMarket /></div>
        
        
      </div>
    </div>
  );
};

export default MainContent;
