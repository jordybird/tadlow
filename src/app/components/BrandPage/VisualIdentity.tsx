// src/app/components/BrandPage/VisualIdentity.tsx
import React from 'react';

export default function VisualIdentity() {
  return (
    <section className="py-16">
      <div className="grid md:grid-cols-12 gap-8 md:gap-12">
        {/* Empty space on the left */}
        <div className="md:col-span-5">
        </div>
        
        {/* Content on the right */}
        <div className="md:col-span-7">
          <h2 className="text-3xl font-bold text-[#28282B] mb-4">
            Visual Identity Development
          </h2>
          <p className="text-lg text-[#28282B]/80 max-w-3xl">
            Create a distinctive visual language that captures your brand's essence. From logos and 
            color palettes to typography and imagery, we craft cohesive visual systems that make 
            your brand instantly recognizable.
          </p>
        </div>
      </div>
    </section>
  );
}