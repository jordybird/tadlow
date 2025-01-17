import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const CorporateHome = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-16 items-start  md:px-0">
      {/* Desktop version with offset images - Now on the left */}
      {!isMobile && (
        <div className="relative h-[500px] hidden md:block">
          <div className="corporate-images absolute top-16 left-0 w-3/5 aspect-square rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
              <Image 
                src="/chick.jpg" 
                alt="Corporate Event 1"
                fill
                sizes="50vw"
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          </div>
          <div className="corporate-images absolute bottom-16 right-0 w-3/5 aspect-square rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
              <Image 
                src="/brave.jpg" 
                alt="Corporate Event 2"
                fill
                sizes="50vw"
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
        </div>
      )}

      {/* Content section */}
      <div className="corporate-content w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 w-full">
          <Link 
            href="/corporate-and-private-events" 
            className="text-xl md:text-2xl font-bold text-[#28282B] hover:text-[#34A56F] transition-colors"
          >
            Corporate & Private Events
          </Link>
          <Link 
            href="/corporate-and-private-events"
            className="w-full sm:w-auto text-center px-6 py-3 sm:px-4 sm:py-2 text-sm font-semibold text-[#34A56F] border border-[#34A56F] rounded-full hover:bg-[#34A56F] hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>

        <p className="text-base md:text-lg text-[#28282B]/80 mb-6">
          Transform your corporate gatherings into unforgettable experiences. Our team 
          specializes in crafting engaging events that align with your brand identity 
          and business objectives. From product launches to team-building activities, 
          we ensure every detail contributes to your success.
        </p>

        <ul className="space-y-4 text-[#28282B]/70 mb-8 md:mb-0">
          {[
            'Executive conferences and seminars',
            'Product launch events',
            'Team building experiences',
            'Corporate celebrations'
          ].map((item, index) => (
            <li key={index} className="flex items-center min-h-[44px] text-base md:text-lg">
              <span className="mr-2">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile version with single image - Now below text */}
      {isMobile && (
        <div className="relative w-full h-[400px] md:hidden">
          <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
            <Image 
              src="/brave.jpg"
              alt="Corporate Event"
              fill
              sizes="100vw"
              className="object-cover"
              quality={90}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CorporateHome;