import React, { useState, useEffect, RefObject } from 'react';
import Image from 'next/image';
import { InlineWidget } from 'react-calendly';

interface ContactProps {
  targetRef: RefObject<HTMLDivElement | null>;
}

const Contact = ({ targetRef }: ContactProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, [targetRef]);

  return (
    <>
      <div
        className={`
          fixed bottom-8 right-8 z-50 
          transition-all duration-300 
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        `}
        aria-label="Contact Us"
        role="button"
        onClick={() => setShowCalendly(!showCalendly)}
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            setShowCalendly(!showCalendly);
          }
        }}
      >
        <div className="cursor-pointer hover:scale-110">
          <Image
            src="/contact.png"
            alt="Contact Us"
            width={60}
            height={60}
            className="rounded-full shadow-lg"
            priority
          />
        </div>
      </div>

      {showCalendly && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowCalendly(false)}
        >
          <div
            className="bg-white rounded-lg p-4 max-w-lg w-full shadow-xl"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setShowCalendly(false)}
            >
              &times;
            </button>
            <InlineWidget
              url="https://calendly.com/tad-themustardseedmarketinggroup"
              styles={{ height: '600px' }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Contact;
