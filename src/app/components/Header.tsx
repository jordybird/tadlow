"use client";

import React, { useState, useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const scope = useRef(null);

  useGSAP(() => {
    if (isMenuOpen && menuRef.current && menuContentRef.current) {
      // Menu background animation
      gsap.to(menuRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        display: "block",
      });

      // Menu content animation
      gsap.from(menuContentRef.current.children, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });
    } else if (menuRef.current) {
      // Reverse animations
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (menuRef.current) {
            gsap.set(menuRef.current, { display: "none" });
          }
        },
      });
    }
  }, { scope, dependencies: [isMenuOpen] });

  return (
    <div ref={scope}>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 bg-white z-50 px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/logo.jpg"
            alt="Logo"
            className="h-16 w-auto"
          />
        </a>

        {/* Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-[#28282B] hover:text-[#28282B]/80 transition-colors text-lg font-semibold"
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </header>

      {/* Fullscreen Menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-white z-40"
        style={{ opacity: 0, display: 'none' }}
      >
        <div
          ref={menuContentRef}
          className="max-w-4xl mx-auto px-6 pt-32"
        >
          {/* Navigation Links */}
          <nav className="space-y-8">
            <a
              href="/brand-development"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              Brand Development
            </a>
            <a
              href="/sports-marketing"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              Sports Marketing
            </a>
            <a
              href="/field-marketing"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              Field Marketing
            </a>
            <a
              href="/corporate-and-private-events"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              Corporate & Private Events
            </a>
            <a
              href="/about"
              className="block text-2xl font-semibold text-[#28282B] hover:text-[#28282B]/80 transition-colors"
            >
              About
            </a>
          </nav>

          {/* CTA Buttons */}
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
