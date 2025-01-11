// src/app/components/BrandPage/BrandStrategy.tsx
import React from 'react';

export default function SportsPartnerships() {
  return (
    <section className="py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <div className="sticky top-32">
              <h2 className="text-4xl font-bold text-[#28282B] mb-6">Sports partnership contract negotiation</h2>
              <div className="h-1 w-24 bg-[#34A56F] mb-6" />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-lg leading-relaxed text-[#28282B]/80 mb-8">
            We'll help you navigate the complex landscape of sports partnerships to secure mutually beneficial agreements. Our approach involves strategic planning, thorough research, and skillful negotiation to ensure your brand alignment and partnership objectives are fully met. We'll work to craft contracts that will drive engagement, enhance brand visibility, and generate long-term value for your organization and partners alike. Together we’ll maximize the potential of your alliances to achieve shared success and build lasting connections.
            </p>
            <ul className="space-y-4 text-[#28282B]/80">
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-4" />
                <span>Market positioning and competitive analysis</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-4" />
                <span>Target audience definition and segmentation</span>
              </li>
              <li className="flex items-start">
                <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-4" />
                <span>Brand value proposition development</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}