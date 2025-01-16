// src/app/components/BrandPage/BrandActivation.tsx

"use client";

import React from 'react';
import { logRender } from '../../../../utils/logger'; // Import the logger

export default function LocalMarket() {
  logRender('LocalMarket'); // Log render

  return (
    <section className="pt-0 pb-2 md:py-24 mt-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-3 sm:px-0 lg:px-0">
        <div className="grid md:grid-cols-12 gap-2 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <div className="text-left mt-3 md:mt-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#28282B] mb-1 md:mb-6">
                Local market penetration
                </h2>
                <div className="h-1 w-24 bg-[#34A56F] mb-3 md:mb-6" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg leading-relaxed text-[#28282B]/80 mb-2 md:mb-8">
            We understand that every community is unique, and we believe in working alongside your team to create effective market penetration strategies that speak directly to specific regional audiences. We'll help you deeply connect and establish a strong presence in your desired local markets, growing your presence and sales.
            </p>
            <ul className="space-y-1.5 md:space-y-4 text-[#28282B]/80">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Campaign strategy and execution</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Event and experiential marketing</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Brand launch and relaunch campaigns</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
