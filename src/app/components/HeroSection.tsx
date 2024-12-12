'use client'

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HeroSection = () => {
  const scope = useRef(null);
  const contentRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    
    tl.from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(".hero-description", {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .from(".cta-button", {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.2");
  }, { scope });

  return (
    <div ref={scope} className="min-h-screen bg-white pt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div ref={contentRef} className="text-center py-20">
          <h1 className="hero-title text-6xl font-bold mb-6 text-[#28282B]">
            Transform Your Digital Presence
          </h1>
          <p className="hero-description text-xl text-[#28282B]/80 max-w-2xl mx-auto mb-8">
            We blend cutting-edge technology with creative excellence to deliver 
            marketing solutions that drive real business growth and engage your 
            audience in meaningful ways.
          </p>
          <button className="cta-button bg-[#28282B] hover:bg-[#28282B]/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;