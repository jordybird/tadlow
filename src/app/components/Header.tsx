'use client'

import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-100 z-50">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-center gap-16">
        {/* All Navigation Items in a single row */}
        <a href="#" className="text-sm font-semibold text-[#28282B]">Features</a>
        <a href="#" className="text-sm font-semibold text-[#28282B]">Extension</a>
        
        {/* Center Logo */}
        <div className="flex-shrink-0">
          <img 
            src="/Mustard%20Seed%20Plant%20(1).svg" 
            alt="Logo" 
            className="w-16 h-16"
          />
        </div>

        <a href="#" className="text-sm font-semibold text-[#28282B]">Benefits</a>
        <a href="#" className="text-sm font-semibold text-[#28282B]">FAQ</a>
      </div>
    </header>
  );
};

export default Header;