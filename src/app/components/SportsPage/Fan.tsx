// src/app/components/BrandPage/VisualIdentity.tsx
import React from 'react';

export default function Fan() {
  return (
    <section className="py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-[#28282B] mb-6">Fan engagement strategies</h2>
        <div className="h-1 w-24 bg-[#34A56F] mb-8 mx-auto" />
        <div className="flex flex-col items-start text-left">
          <p className="text-lg text-[#28282B]/80 mb-8 max-w-3xl">
          We'll grow strategies designed to deepen fan relationships and enthusiasm for your brand. Through creative and innovative means, we’ll ensure your fans feel more connected and invested, leverage the fandom of their favorite sporting team, creating a true fan community.
          </p>
          <ul className="space-y-4 text-[#28282B]/80 max-w-3xl">
            <li className="flex items-start">
              <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-4" />
              <span>Logo design and brand mark development</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-4" />
              <span>Color palette and typography selection</span>
            </li>
            <li className="flex items-start">
              <span className="h-2 w-2 bg-[#34A56F] rounded-full mt-2 mr-4" />
              <span>Visual asset creation and design system</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
