// src/app/components/BrandPage/BrandGuidelines.tsx
import React from 'react';

export default function BrandGuidelines() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        {/* Empty space on the left */}
        <div className="md:col-span-5">
        </div>
        
        {/* Content on the right */}
        <div className="md:col-span-7">
          <h2 className="text-3xl font-bold text-[#28282B] mb-4">
            Brand Guidelines Creation
          </h2>
          <p className="text-lg text-[#28282B]/80 max-w-3xl">
            Maintain brand consistency with comprehensive guidelines that document your brand's 
            visual and verbal elements. Our detailed brand books ensure consistent application 
            across all touchpoints and teams.
          </p>
        </div>
      </div>
    </section>
  );
}