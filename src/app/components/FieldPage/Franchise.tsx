// src/app/components/BrandPage/BrandStrategy.tsx

"use client";

import React from 'react';
import { logRender } from '../../../../utils/logger'; // Import the logger

export default function Franchise() {
  logRender('Franchise'); // Log render

  return (
    <section className="pt-0 pb-2 md:py-24 border-b mt-8 md:mt-0 border-gray-100">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="grid md:grid-cols-12 gap-2 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <div className="text-left mt-3 md:mt-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#28282B] mb-1 md:mb-6">
                Franchise and Local Co-op Management
                </h2>
                <div className="h-1 w-24 bg-[#34A56F] mb-3 md:mb-6" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg leading-relaxed text-[#28282B]/80 mb-2 md:mb-8">
            We specialize in aligning your franchise and local co-op efforts with corporate and national marketing plans to ensure brand consistency and maximum impact. We'll work closely with your locations to facilitate their local engagement, all while ensuring they can activate and tailor national and corporate campaigns to connect with their unique communities, building strong and unified brand experiences everywhere you operate.
            </p>
            <ul className="space-y-1.5 md:space-y-4 text-[#28282B]/80">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Market positioning and competitive analysis</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Target audience definition and segmentation</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Brand value proposition development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
