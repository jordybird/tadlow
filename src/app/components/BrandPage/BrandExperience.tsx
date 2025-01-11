// src/app/components/BrandPage/BrandExperience.tsx

"use client";

import React from "react";
import Image from "next/image";
import { logRender } from '../../../../utils/logger'; // Import the logger

export default function BrandExperience() {
  logRender('BrandExperience'); // Log render

  return (
    <section className="pt-0 pb-2 md:py-24 md:mt-0 mt-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        {/* Title section with increased bottom margin */}
        <div className="text-center mt-3 md:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#28282B] mb-1 md:mb-6">
            Brand Experience Design
          </h2>
          <div className="h-1 w-24 bg-[#34A56F] mx-auto mb-6 md:mb-12" />
        </div>

        {/* Content with normal flex order on mobile */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 md:gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 lg:pr-12">
            <p className="text-base sm:text-lg text-[#28282B]/80 mb-2 md:mb-8">
              It's about more than just looking good – it's about feeling good, too.
              We will carefully craft the customer experience from initial contact to
              long-term loyalty. Let's design experiences that create lasting, positive
              memories, turning your customers into loyal brand advocates.
            </p>
            <ul className="space-y-1.5 md:space-y-4 text-[#28282B]/80">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Customer journey mapping and optimization</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Touchpoint strategy and design</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Brand interaction frameworks</span>
              </li>
            </ul>
          </div>

          {/* Image - with small top margin on mobile */}
          <div className="lg:w-1/2 lg:pl-12 w-full mt-4 lg:mt-0">
            <div className="relative w-full h-64 sm:h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/funstuffhappenshere.JPG"
                alt="Brand Experience Design"
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
