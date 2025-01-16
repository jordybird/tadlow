// src/app/components/BrandPage/BrandVoice.tsx

"use client";

import React from 'react';
import { logRender } from '../../../../utils/logger'; // Import the logger

export default function Community() {
  logRender('Community'); // Log render

  return (
    <section className="pt-0 pb-2 md:py-24 border-b mt-8 md:mt-0 border-gray-100 mb-8 md:mb-0">
      <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
        <div className="grid md:grid-cols-12 gap-2 md:gap-16 items-start">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <div className="text-left mt-3 md:mt-0">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#28282B] mb-1 md:mb-6">
                Community outreach events
                </h2>
                <div className="h-1 w-24 bg-[#34A56F] mb-3 md:mb-6" />
              </div>
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-base sm:text-lg leading-relaxed text-[#28282B]/80 mb-2 md:mb-8">
            We believe in connecting with communities on a human level, not just as consumers. We'll help you organize meaningful community outreach events that not only showcase your brand’s mission, but also create genuine positive impact and give back to those communities that matter most to you.
            </p>
            <ul className="space-y-1.5 md:space-y-4 text-[#28282B]/80">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Tone of voice development and guidelines</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Key messaging framework creation</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-3" />
                <span>Brand story and narrative development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
