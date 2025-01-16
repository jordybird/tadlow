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
import Executive from './Executive';
import Celly from './CorporateCelly';
import Team from './Team';
import ProductLaunch from './ProductLaunch';

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
      Corporate and Private Events
      </h1>

      <div className="grid md:grid-cols-12 gap-8 md:gap-12 md:mb-16 ">
        {/* Content Column */}
        <div className="md:col-span-7 flex flex-col justify-between">
          <p className="hero-content text-lg text-[#28282B]/80 mb-4">
          Corporate and private events are more than just gatherings – they're powerful opportunities to create memorable experiences that strengthen your brand identity and achieve key business objectives. Our team specializes in crafting engaging events, both big and small, that align with your goals and brand message. From seamless logistics to creative design, we ensure every detail contributes to your success, creating events that truly reflect your brand.
          </p>

          <Link href="/get-started">
            <button className="cta-button bg-[#34A56F] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#34A56F]/90 transition-colors mb-6">
              Get Started
            </button>
          </Link>

          <Link href="/get-started">
            <div className="hero-content flex items-center mt-4 text-lg font-semibold text-[#28282B]/80 cursor-pointer hover:text-[#34A56F] transition-colors">
              Corporate & Private Events Starts Here
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
        <div className="brand-section"><Executive /></div>
        <div className="brand-section"><Celly /></div>
        <div className="brand-section"><Team /></div>
        <div className="brand-section"><ProductLaunch /></div>
      
        
      </div>
    </div>
  );
};

export default MainContent;
