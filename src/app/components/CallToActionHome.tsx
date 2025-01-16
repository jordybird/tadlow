import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const CallToActionHome = () => {
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
      <div className="max-w-7xl mx-auto md:px-8 px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Content Section - Now on the left */}
          <div ref={contentRef} className="w-full md:w-1/2 text-white md:-mt-4 order-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Mustard Seed
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Mustard Seed creates unforgettable experiences through innovative brand activations, dynamic sports marketing, and expertly crafted events. We partner with clients to achieve big results, connecting their brands to audiences in meaningful ways.
            </p>
            <Link 
              href="/about"
              className="inline-block bg-black text-white px-8 py-4 rounded-full text-lg font-semibold 
                hover:bg-black/80 transition-colors shadow-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Image Section - Now on the right */}
          <div className="w-full md:w-1/2 flex justify-center order-2">
            <div className="relative w-full max-w-md">
              <img 
                src="/team.JPG"
                alt="Brand Elevation"
                className="relative w-full rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToActionHome;