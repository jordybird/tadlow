import React, { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Clients = () => {
  const container = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  // Note: You'll need to convert the PDF to SVG or another web-compatible format
  const logos = [
    { src: '/chick-fil-a-seeklogo-5.svg', alt: 'Chick-fil-A' },
    { src: '/atlanta-braves-26987.svg', alt: 'Atlanta Braves' },
    { src: '/atlanta-hawks-2.svg', alt: 'Atlanta Hawks' },
    { src: '/atlanta-united-fc.svg', alt: 'Atlanta United FC' },
    { src: '/atlanta-falcons-1.svg', alt: 'Atlanta Falcons' },
    { src: '/moes-southwest-grill-logo-vector.svg', alt: 'Moes Southwest Grill' },
    { src: '/childrens-healthcare-of-atlanta-seeklogo.svg', alt: 'Children\'s Healthcare of Atlanta' }, // Note: Convert from PDF to SVG
  ];

  // Double the logos array for seamless scrolling
  const doubledLogos = [...logos, ...logos];

  useGSAP(() => {
    if (!slider.current) return;

    const totalWidth = slider.current.offsetWidth / 2;
    
    gsap.to(slider.current, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      repeatDelay: 0,
      onRepeat: () => {
        gsap.set(slider.current, { x: 0 });
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className=" bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        
      </div>

      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Logo slider */}
        <div className="relative overflow-hidden">
          <div ref={slider} className="flex items-center gap-20 py-8">
            {doubledLogos.map((logo, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-24 h-16 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;