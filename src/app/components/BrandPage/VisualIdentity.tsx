"use client";

import React from 'react';
import Image from 'next/image';
import { logRender } from '../../../../utils/logger';

export default function VisualIdentity() {
  logRender('VisualIdentity');

  return (
    <section className="pt-0 pb-2 md:py-24 border-b mt-4 md:mt-0 border-gray-100">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        {/* Title section centered on mobile, right-aligned on desktop */}
        <div className="mb-6 md:mb-12 text-center lg:text-right">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#28282B] mb-1 md:mb-6">
            Visual Identity Development
          </h2>
          <div className="h-1 w-24 bg-[#34A56F] mx-auto lg:ml-auto lg:mr-0" /> {/* Center on mobile, right on desktop */}
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-2 md:gap-8">
          {/* Text Content on the left */}
          <div className="lg:w-1/2 lg:pr-12 flex flex-col">
            <p className="text-base sm:text-lg text-[#28282B]/80 mb-2 md:mb-8">
              It's time to craft a look that captures the essence of your brand. We'll create everything from a logo that leaves a lasting impression to a cohesive visual language that will instantly be identifiable as you. Think of it as your brand's "personality" expressed through design.
            </p>
            <ul className="space-y-1.5 md:space-y-4 text-[#28282B]/80 mb-8 lg:mb-0">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Logo design and brand mark development</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Color palette and typography selection</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3 flex-shrink-0" />
                <span>Visual asset creation and design system</span>
              </li>
            </ul>
          </div>

          {/* Image Section on the right */}
          <div className="lg:w-1/2 lg:pl-12 w-full">
            <div className="relative w-full h-64 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/transformer.jpg"
                alt="Visual Identity Development"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}