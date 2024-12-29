import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks/useMediaQuery';

const SportsHome = () => {
  const componentRef = useRef(null);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div ref={componentRef} className="grid md:grid-cols-2 gap-8 md:gap-16 items-start px-4 md:px-0">
      {/* Content Section */}
      <div className="sports-content order-1 md:order-2">
        <div className="flex items-center justify-between mb-6">
          <Link 
            href="/sports-marketing" 
            className="text-2xl font-bold text-[#28282B] hover:text-[#34A56F] transition-colors"
          >
            Sports Marketing
          </Link>
          <Link 
            href="/sports-marketing"
            className="px-4 py-2 text-sm font-semibold text-[#34A56F] border border-[#34A56F] rounded-full hover:bg-[#34A56F] hover:text-white transition-colors"
          >
            Learn More
          </Link>
        </div>

        <p className="text-lg text-[#28282B]/80 mb-6">
          Elevate your sports events with our comprehensive marketing solutions. 
          From college sports to professional leagues, we create engaging experiences 
          that connect fans with the game. Our expertise in sports marketing helps 
          you build stronger relationships with your audience while maximizing event 
          impact and attendance.
        </p>

        <ul className="space-y-3 text-[#28282B]/70">
          <li>• Game day experience enhancement</li>
          <li>• Fan engagement strategies</li>
          <li>• Sports venue marketing</li>
          <li>• Athletic program promotion</li>
          <li>• Tournament and championship events</li>
          <li>• Sports brand development</li>
        </ul>
      </div>

      {/* Image Layout */}
      <div className="relative w-full order-2 md:order-1">
        {/* Mobile Layout - Restructured */}
        <div className="md:hidden space-y-4">
          {/* Top two images side by side */}
          <div className="grid grid-cols-2 gap-4">
            <div className="sports-images relative w-full h-[200px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/stack.jpg"
                alt="Sports Stack"
                fill
                sizes="50vw"
                className="object-cover"
                quality={90}
              />
            </div>
            <div className="sports-images relative w-full h-[200px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/collegehof.jpg"
                alt="College Hall of Fame"
                fill
                sizes="50vw"
                className="object-cover"
                quality={90}
              />
            </div>
          </div>
          
          {/* Dart image below */}
          <div className="sports-images relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/dart.jpg"
              alt="Dart Tournament"
              fill
              sizes="100vw"
              className="object-cover"
              quality={90}
              priority
            />
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden md:grid grid-cols-3 gap-4 relative h-[500px]">
          <div className="sports-images col-span-1 relative rounded-lg overflow-hidden shadow-lg h-[300px]">
            <Image
              src="/dart.jpg"
              alt="Dart Tournament"
              fill
              sizes="33vw"
              className="object-cover"
              quality={90}
              priority
            />
          </div>

          <div className="sports-images col-span-1 relative rounded-lg overflow-hidden shadow-lg h-[300px]">
            <Image
              src="/stack.jpg"
              alt="Sports Stack"
              fill
              sizes="33vw"
              className="object-cover"
              quality={90}
            />
          </div>
          
          <div className="sports-images col-span-1 relative rounded-lg overflow-hidden shadow-lg h-[300px]">
            <Image
              src="/collegehof.jpg"
              alt="College Hall of Fame"
              fill
              sizes="33vw"
              className="object-cover"
              quality={90}
            />
          </div>

          <div className="sports-images col-span-3 relative rounded-lg overflow-hidden shadow-lg h-[180px]">
            <Image
              src="/letsgohawks.jpg"
              alt="Hawks Game Event"
              fill
              sizes="100vw"
              className="object-cover"
              quality={90}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsHome;
