import React, { useRef, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const Clients = () => {
  const container = useRef<HTMLDivElement>(null);
  const slider = useRef<HTMLDivElement>(null);

  const logos = [
    { src: '/chick-fil-a-seeklogo-5.svg', alt: 'Chick-fil-A' },
    { src: '/atlanta-braves-26987.svg', alt: 'Atlanta Braves' },
    { src: '/atlanta-hawks-2.svg', alt: 'Atlanta Hawks' },
    { src: '/atlanta-united-fc.svg', alt: 'Atlanta United FC' },
    { src: '/atlanta-falcons-1.svg', alt: 'Atlanta Falcons' },
    { src: '/moes-southwest-grill-logo-vector.svg', alt: 'Moes Southwest Grill' },
    { src: '/childrens-healthcare-of-atlanta-seeklogo.svg', alt: 'Children\'s Healthcare of Atlanta' },
  ];

  useEffect(() => {
    if (!slider.current) return;

    const animate = () => {
      const currentPosition = Number(gsap.getProperty(slider.current, "xPercent")) || 0;

      if (currentPosition <= -100) {
        gsap.set(slider.current, { xPercent: 0 });
      }

      gsap.to(slider.current, {
        xPercent: "-=0.08", // Moderate speed
        duration: 0.016,
        ease: "none",
        onComplete: animate
      });
    };

    animate();

    return () => {
      if (slider.current) {
        gsap.killTweensOf(slider.current);
      }
    };
  }, []);

  return (
    <section ref={container} className="bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
      </div>

      <div className="relative w-full">
        {/* Gradient overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Logo slider */}
        <div className="relative overflow-hidden">
          <div ref={slider} className="flex items-center gap-8 md:gap-20 py-8">
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`first-${index}`} 
                className="flex-shrink-0 w-20 md:w-24 h-12 md:h-16 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
            
            {/* Second set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`second-${index}`} 
                className="flex-shrink-0 w-20 md:w-24 h-12 md:h-16 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}

            {/* Third set of logos */}
            {logos.map((logo, index) => (
              <div 
                key={`third-${index}`} 
                className="flex-shrink-0 w-20 md:w-24 h-12 md:h-16 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
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