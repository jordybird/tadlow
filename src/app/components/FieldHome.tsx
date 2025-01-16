import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const FieldHome = () => {
  const componentRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div ref={componentRef} className="grid md:grid-cols-2 gap-8 md:gap-16 items-start  md:px-0">
      {/* Content Section - Always on the left */}
      <div className="field-content order-1">
        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/field-marketing" 
            className="text-2xl font-bold text-[#28282B] hover:text-[#34A56F] transition-colors"
          >
            Field Marketing
          </Link>
          <Link 
            href="/field-marketing"
            className="px-4 py-2 text-sm font-semibold text-[#34A56F] border border-[#34A56F] rounded-full hover:bg-[#34A56F] hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>

        <p className="text-lg text-[#28282B]/80 mb-6">
          Connect with your community through impactful field marketing initiatives. 
          Our hands-on approach creates meaningful interactions between your brand 
          and your target audience. We specialize in creating authentic experiences 
          that drive engagement and build lasting relationships with your customers.
        </p>

        <ul className="space-y-3 text-[#28282B]/70">
          <li>• Brand ambassador programs</li>
          <li>• Street team activations</li>
          <li>• Guerrilla marketing campaigns</li>
          <li>• Community outreach events</li>
          <li>• Product sampling initiatives</li>
          <li>• Local market penetration</li>
        </ul>
      </div>

      {/* Image Section - Always on the right */}
      <div className="relative w-full order-2">
        {/* Mobile Layout */}
        <div className="md:hidden">
          <div className="field-image relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/giving.jpg"
              alt="Field Marketing Event"
              fill
              sizes="100vw"
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block relative">
          <div className="field-image relative w-full aspect-square max-h-[450px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/giving.jpg"
              alt="Field Marketing Event"
              fill
              sizes="50vw"
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldHome;
