import React, { useState, useRef, useEffect, TouchEvent } from 'react';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { gsap } from 'gsap';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: '/statefarm.jpg',
    title: 'Mustard Seed Marketing',
    buttonText: 'Get Started',
    buttonLink: '/get-started',
  },
  {
    id: 2,
    image: '/texas.jpg',
    title: 'Elevate Your Game: Mustard Seed Sports Marketing',
    buttonText: 'Learn More',
    buttonLink: '/sports-marketing',
  },
  {
    id: 3,
    image: '/brandstuff.jpg',
    title: 'Build your brand',
    description:
      "Brand Ambassadors who deliver. Increase brand engagement and drive sales with our proven program.",
    buttonText: 'Learn More',
    buttonLink: '/brand-development',
  },
  {
    id: 4,
    type: 'grid',
    images: ['/hawks.jpg', '/chick-fil-a.jpg', '/dj.JPG', '/catering.JPG'],
    title: 'Corporate events delivered by Mustard Seed',
    description: 'Transform your corporate events into unforgettable experiences.',
    buttonText: 'Learn More',
    buttonLink: '/corporate-and-private-events',
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const prevSlideRef = useRef(null);
  const nextSlideRef = useRef(null);
  const isAnimatingRef = useRef(false);
  
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const minSwipeDistance = 50;

  const nextSlideFunc = () => {
    if (isAnimatingRef.current) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlideFunc = () => {
    if (isAnimatingRef.current) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    if (isAnimatingRef.current) return;
    setCurrentSlide(index);
  };

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (isAnimatingRef.current) return;

    const swipeDistance = touchEndX.current - touchStartX.current;
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) return;

    if (Math.abs(swipeDistance) >= minSwipeDistance) {
      if (swipeDistance > 0) {
        prevSlideFunc();
      } else {
        nextSlideFunc();
      }
    }
  };

  useEffect(() => {
    const tl = gsap.timeline({
      onStart: () => {
        isAnimatingRef.current = true;
      },
      onComplete: () => {
        isAnimatingRef.current = false;
      },
    });

    const currentSlideContent = prevSlideRef.current;
    const newSlideContent = nextSlideRef.current;

    tl.to(currentSlideContent, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.inOut',
    })
      .to(
        sliderRef.current,
        {
          x: `${-currentSlide * 100}%`,
          duration: 0.6,
          ease: 'power2.inOut',
        },
        0
      )
      .fromTo(
        newSlideContent,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
        0.3
      );

    return () => {
      tl.kill();
    };
  }, [currentSlide]);

  return (
    <section className="pt-32 pb-8 bg-white px-4 md:pt-32 md:pb-16 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <div 
            ref={sliderRef} 
            className="flex touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="min-w-full relative h-[500px] md:h-[600px]"
              >
                <div className="absolute inset-0">
                  {slide.type === 'grid' ? (
                    <div className="grid grid-cols-2 grid-rows-2 gap-1 h-full">
                      {slide.images?.map((image, i) => (
                        <div key={i} className="relative w-full h-full">
                          <img
                            src={image}
                            alt={`Event ${i + 1}`}
                            className="absolute inset-0 w-full h-full object-cover"
                            draggable="false"
                          />
                        </div>
                      ))}
                    </div>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  )}
                </div>

                <div className="absolute inset-0 bg-black/60 md:bg-black/40" />

                <div className="relative h-full px-6 md:px-12">
                  <div
                    className="h-full flex flex-col justify-between md:justify-start md:pt-32 slide-content"
                    ref={index === currentSlide ? nextSlideRef : null}
                  >
                    <div className="flex-1 flex flex-col justify-center md:justify-start">
                      <h1 className="text-4xl md:text-7xl font-bold mb-4 md:mb-6 text-white max-w-3xl">
                        {slide.title}
                      </h1>

                      {slide.description && (
                        <p className="text-lg md:text-xl mb-4 md:mb-8 text-white/90 max-w-2xl">
                          {slide.description}
                        </p>
                      )}

                      <div className="hidden md:block">
                        <Link 
                          href={slide.buttonLink}
                          className="bg-[#34A56F] hover:bg-[#2A8B5D] text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-block"
                        >
                          {slide.buttonText}
                        </Link>
                      </div>
                    </div>

                    <div className="block md:hidden mb-8">
                      <Link 
                        href={slide.buttonLink}
                        className="bg-[#34A56F] hover:bg-[#2A8B5D] text-white px-6 py-3 rounded-full text-lg font-semibold transition-colors inline-block"
                      >
                        {slide.buttonText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
          <div className="flex gap-2 mb-4 md:mb-0">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 md:w-2.5 md:h-2.5 rounded-full transition-colors ${
                  currentSlide === index
                    ? 'bg-[#34A56F]'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={prevSlideFunc}
              className="transition-colors text-gray-400 hover:text-[#34A56F] md:block hidden"
              aria-label="Previous Slide"
            >
              <ChevronLeftCircle size={38} />
            </button>
            <button
              onClick={nextSlideFunc}
              className="transition-colors text-gray-400 hover:text-[#34A56F] md:block hidden"
              aria-label="Next Slide"
            >
              <ChevronRightCircle size={38} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;