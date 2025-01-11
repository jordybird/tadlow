"use clien";

import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';
import { logRender } from '../../../utils/logger'; // Import the logger

gsap.registerPlugin(ScrollTrigger);

const GetStartedCallToAction = () => {
  logRender('TapIn'); // Log render

  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (!section || !content) return;

    gsap.from(content.children, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out"
    });

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="w-full bg-[#34A56F] relative">
      <div className="max-w-7xl mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Image Section - Changes order and size on mobile */}
          <div className="w-full md:w-1/2 flex justify-center order-last md:order-first mt-8 md:mt-0">
            <div className="relative w-full max-w-none md:max-w-xl px-0 md:px-4">
              <img 
                src="/team.JPG"
                alt="Brand Elevation"
                className="w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="w-full md:w-1/2 text-white md:-mt-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Get Started With Mustard Seed
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Discover how we empower brands to achieve their goals with cutting-edge strategies and innovative solutions.
            </p>
            <Link 
              href="/get-started"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold 
                hover:bg-black/80 transition-colors shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedCallToAction;
