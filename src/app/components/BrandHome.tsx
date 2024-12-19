import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const BrandHome = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start px-4 md:px-0">
      {/* Images Section - Left side on desktop, hidden on mobile */}
      <div className="order-2 md:order-1 hidden md:block">
        <div className="relative h-[500px]">
          <div className="brand-images absolute top-16 left-0 w-3/5 aspect-square rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
              <Image 
                src="/wheel.jpg" 
                alt="Brand Development"
                fill
                sizes="50vw"
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </div>
          <div className="brand-images absolute bottom-10 right-0 w-3/5 aspect-square rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
              <Image 
                src="/eatmore.jpg" 
                alt="Brand Strategy"
                fill
                sizes="50vw"
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Section - Right side */}
      <div className="brand-content order-1 md:order-2">
        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/brand" 
            className="text-2xl font-bold text-[#28282B] hover:text-[#34A56F] transition-colors"
          >
            Brand Development
          </Link>
          <Link 
            href="/brand"
            className="px-4 py-2 text-sm font-semibold text-[#34A56F] border border-[#34A56F] rounded-full hover:bg-[#34A56F] hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>

        <p className="text-lg text-[#28282B]/80 mb-6">
          Transform your brand identity with our comprehensive development solutions. 
          We craft distinctive brand experiences that resonate with your target audience 
          and set you apart in today's competitive market. Our strategic approach 
          ensures your brand narrative is compelling, consistent, and memorable across 
          all touchpoints.
        </p>

        <ul className="space-y-3 text-[#28282B]/70">
          <li>• Brand strategy and positioning</li>
          <li>• Visual identity development</li>
          <li>• Brand voice and messaging</li>
          <li>• Brand guidelines creation</li>
          <li>• Brand activation campaigns</li>
          <li>• Brand experience design</li>
        </ul>
      </div>
    </div>
  );
};

export default BrandHome;
