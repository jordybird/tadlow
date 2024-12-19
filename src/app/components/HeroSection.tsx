import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import { gsap } from 'gsap';

const slides = [
  {
    id: 1,
    image: '/awards.JPG',
    title: 'Mustard Seed Marketing',
    buttonText: 'Get Started',
  },
  {
    id: 2,
    image: '/statefarm.jpg',
    title: 'Marketing your sporting events with Mustard Seed',
    buttonText: 'Learn More',
  },
  {
    id: 3,
    image: '/brandstuff.jpg',
    title: 'Build your brand',
    description:
      "Amplify your brand's impact with our professional Brand Ambassador services. Let us bring your brand to life and create meaningful customer experiences.",
    buttonText: 'Start Now',
  },
  {
    id: 4,
    type: 'grid',
    images: ['/hawks.jpg', '/chick-fil-a.jpg', '/dj.JPG', '/catering.JPG'],
    title: 'Corporate events delivered by Mustard Seed',
    description: 'Transform your corporate events into unforgettable experiences.',
    hasEmailInput: true,
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const prevSlideRef = useRef(null);
  const nextSlideRef = useRef(null);
  const isAnimatingRef = useRef(false);

  const nextSlideFunc = () => {
    if (isAnimatingRef.current) return;
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlideFunc = () => {
    if (isAnimatingRef.current) return;
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
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
        {/* Carousel Container */}
        <div className="relative overflow-hidden rounded-2xl bg-black">
          <div ref={sliderRef} className="flex">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="min-w-full relative h-[400px] md:h-[600px]"
              >
                <div className="absolute inset-0">
                  {slide.type === 'grid' ? (
                    <div className="grid grid-cols-2 gap-1 h-full">
                      {slide.images?.map((image, i) => (
                        <img
                          key={i}
                          src={image}
                          alt={`Event ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      ))}
                    </div>
                  ) : (
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover opacity-90"
                    />
                  )}
                </div>

                <div className="absolute inset-0 bg-black/40" />

                <div className="relative h-full px-6 md:px-12">
                  <div
                    className="h-full flex flex-col justify-center slide-content"
                    ref={index === currentSlide ? nextSlideRef : null}
                  >
                    <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6 text-white max-w-3xl">
                      {slide.title}
                    </h1>

                    {slide.description && (
                      <p className="text-base md:text-xl mb-4 md:mb-8 text-white/90 max-w-2xl">
                        {slide.description}
                      </p>
                    )}

                    {slide.hasEmailInput ? (
                      <div className="flex flex-col md:flex-row gap-2 md:gap-4 max-w-xl">
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="flex-1 px-4 md:px-6 py-3 md:py-4 rounded-full text-base md:text-lg"
                        />
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-colors">
                          Get Access
                        </button>
                      </div>
                    ) : slide.buttonText && (
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-colors w-fit">
                        {slide.buttonText}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
          {/* Navigation Dots */}
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

          {/* Navigation Arrows (Visible on Desktop) */}
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
