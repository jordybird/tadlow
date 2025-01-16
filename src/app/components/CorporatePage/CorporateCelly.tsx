// src/app/components/BrandPage/VisualIdentity.tsx

"use client";

import React from 'react';
import Image from 'next/image';
import { logRender } from '../../../../utils/logger'; // Import the logger

export default function Celly() {
  logRender('Celly'); // Log render

  return (
    <section className="pt-0 pb-2 md:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        {/* Title section with increased bottom margin */}
        <div className="text-center mt-3 md:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#28282B] mb-1 md:mb-6">
          Corporate celebrations
          </h2>
          <div className="h-1 w-24 bg-[#34A56F] mx-auto mb-6 md:mb-12" />
        </div>

        {/* Content with normal flex order on mobile */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-12">
            <p className="text-base sm:text-lg text-[#28282B]/80 mb-2 md:mb-8">
            Let us transform your next corporate gathering into an unforgettable celebration that truly reflects your team’s unique culture and accomplishments. Whether it’s a milestone event or a holiday party, we'll help you create a memorable experience for employees, clients, and partners alike.
            </p>
            <ul className="space-y-1.5 md:space-y-4 text-[#28282B]/80">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Logo design and brand mark development</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Color palette and typography selection</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Visual asset creation and design system</span>
              </li>
            </ul>
          </div>

          {/* Image - with increased height */}
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
