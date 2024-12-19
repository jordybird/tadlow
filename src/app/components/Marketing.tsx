import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import CorporateHome from './CorporateHome';
import SportsHome from './SportsHome';
import FieldHome from './FieldHome';
import BrandHome from './BrandHome';

const Marketing = () => {
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Main title animation
    gsap.from(".marketing-title", {
      scrollTrigger: {
        trigger: ".marketing-title",
        start: "top center",
        end: "bottom center",
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
    });

    // Create a timeline for each section's container reveal
    const sections = gsap.utils.toArray<HTMLElement>(".marketing-section");
    sections.forEach((section) => {
      if (section) {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "center center",
          },
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 p-1 md:p-4 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="marketing-title text-4xl md:text-5xl font-bold text-center mb-20 text-[#28282B]">
          Our Marketing Services
        </h2>
        <div className="space-y-32">
          {/* Each component wrapped in a div for individual section animations */}
          <div className="marketing-section">
            <CorporateHome />
          </div>
          <div className="marketing-section">
            <SportsHome />
          </div>
          <div className="marketing-section">
            <FieldHome />
          </div>
          <div className="marketing-section">
            <BrandHome />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketing;