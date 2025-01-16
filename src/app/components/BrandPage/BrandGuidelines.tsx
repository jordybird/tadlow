"use client";

import React from 'react';
import Image from 'next/image';
import { logRender } from '../../../../utils/logger';

export default function BrandGuidelines() {
  logRender('BrandGuidelines');

  return (
    <section className="pt-0 pb-2 md:py-24 border-b mt-4 md:mt-0 border-gray-100">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="flex flex-col lg:flex-row items-start gap-2 md:gap-8">
          {/* Image Section - Left Side on desktop, bottom on mobile */}
          <div className="lg:w-1/2 lg:pr-12 w-full order-2 lg:order-1">
            <div className="relative w-full h-64 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/glassesbraves.jpg"
                alt="Visual Identity Development"
                fill
                style={{ objectFit: 'cover' }}
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Title and Text Content - Right Side on desktop, top on mobile */}
          <div className="lg:w-1/2 lg:pl-12 flex flex-col order-1 lg:order-2">
            {/* Title section */}
            <div className="mt-3 md:mt-0">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#28282B] mb-1 md:mb-6">
              Brand Guidelines Creation
              </h2>
              <div className="h-1 w-24 bg-[#34A56F] mb-6 md:mb-12" />
            </div>

            {/* Text Content */}
            <p className="text-base sm:text-lg text-[#28282B]/80 mb-2 md:mb-8">
            Think of these as your brand's rulebook for consistently using all of the amazing design and messaging elements we're creating together. We'll develop a comprehensive guide that keeps your brand identity cohesive across all platforms, from your website to social media. Consider it your secret to keeping everything on-brand.
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
        </div>
      </div>
    </section>
  );
}