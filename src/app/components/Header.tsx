"use client";

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from "gsap";
import Link from 'next/link';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { logRender } from '../../../utils/logger'; // Import the logger

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  logRender('Header'); // Log render

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll handler for header height
    if (headerRef.current) {
      ScrollTrigger.create({
        start: 'top-=80',
        onUpdate: (self) => {
          const header = headerRef.current;
          if (header) {
            if (self.direction === 1) { // scrolling down
              header.classList.remove('h-24');
              header.classList.add('h-20');
            } else { // scrolling up
              header.classList.remove('h-20');
              header.classList.add('h-24');
            }
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen && menuRef.current && menuContentRef.current) {
      gsap.to(menuRef.current, {
        opacity: 1,
        display: "block",
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.from(menuContentRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    } else if (menuRef.current) {
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      });
    }
  }, [isMenuOpen]);

  return (
    <div>
      {/* Main Header */}
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 right-0 bg-white z-50 h-24 transition-all duration-300 border-b border-gray-100"
      >
        <div className="px-4 h-full flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 -ml-3">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="h-12 w-auto md:h-20"
            />
          </Link>

          {/* Desktop Navigation - Split into nav links and CTA */}
          <div className="hidden lg:flex flex-1 justify-between items-center pl-4">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8">
              <Link
                href="/brand-development"
                className="text-[#28282B] hover:text-[#28282B]/80 transition-colors text-sm font-bold"
              >
                Brand Development
              </Link>
              <Link
                href="/sports-marketing"
                className="text-[#28282B] hover:text-[#28282B]/80 transition-colors text-sm font-bold"
              >
                Sports Marketing
              </Link>
              <Link
                href="/field-marketing"
                className="text-[#28282B] hover:text-[#28282B]/80 transition-colors text-sm font-bold"
              >
                Field Marketing
              </Link>
              <Link
                href="/corporate-and-private-events"
                className="text-[#28282B] hover:text-[#28282B]/80 transition-colors text-sm font-bold"
              >
                Corporate & Private Events
              </Link>
              <Link
                href="/about"
                className="text-[#28282B] hover:text-[#28282B]/80 transition-colors text-sm font-bold"
              >
                About
              </Link>
            </div>
            
            {/* CTA Button */}
            <div>
              <Link href="/get-started">
                <button className="bg-[#34A56F] text-white px-6 py-2.5 rounded-full hover:bg-[#2A8B5D] transition-colors text-md font-bold">
                  Get Started
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[#28282B] hover:text-[#28282B]/80 transition-colors text-lg font-semibold"
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      {/* Fullscreen Menu - Mobile Only */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-white z-40 opacity-0 hidden lg:hidden"
      >
        <div
          ref={menuContentRef}
          className="max-w-4xl mx-auto px-6 pt-32"
        >
          {/* Navigation Links */}
          <nav className="space-y-8">
            <Link
              href="/brand-development"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              Brand Development
            </Link>
            <Link
              href="/sports-marketing"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              Sports Marketing
            </Link>
            <Link
              href="/field-marketing"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              Field Marketing
            </Link>
            <Link
              href="/corporate-and-private-events"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              Corporate & Private Events
            </Link>
            <Link
              href="/about"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="mt-16 space-y-4">
            <Link href="/get-started">
              <button className="w-full py-4 px-6 bg-[#34A56F] text-white rounded-full hover:bg-[#2A8B5D] transition-colors text-lg font-semibold">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
