// src/app/components/BrandPage/BrandGuidelines.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import { logRender } from '../../../../utils/logger'; // Import the logger

export default function BrandGuidelines() {
  logRender('BrandGuidelines'); // Log render

  return (
    <section className="pt-0 pb-2 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-8">
        {/* Title section with increased bottom margin */}
        <div className="text-center mt-3 md:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#28282B] mb-1 md:mb-6">
            Brand Guidelines Creation
          </h2>
          <div className="h-1 w-24 bg-[#34A56F] mx-auto mb-6 md:mb-12" />
        </div>

        {/* Content with reversed order on mobile */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-2 md:gap-8 mb-6">
          {/* Image */}
          <div className="lg:w-1/2 lg:pr-12 w-full">
            <div className="relative w-full h-48 sm:h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/glassesbraves.jpg"
                alt="Brand Guidelines Creation"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 lg:pl-12">
            <p className="text-base sm:text-lg text-[#28282B]/80 mb-2 md:mb-8">
              Think of these as your brand's rulebook for consistently using all of the amazing design and messaging elements we're creating together. We'll develop a comprehensive guide that keeps your brand identity cohesive across all platforms, from your website to social media. Consider it your secret to keeping everything on-brand.
            </p>
            <ul className="space-y-1.5 md:space-y-4 text-[#28282B]/80">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Brand standards and usage guidelines</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Design system documentation</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Asset library and templates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
