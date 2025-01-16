"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { logRender } from '../../../utils/logger';

const Footer = () => {
  logRender('Footer');
  const [year, setYear] = useState<number>(0);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  useEffect(() => {
    if (pathname === '/about' && window.location.hash === '#faq') {
      const scrollToFAQ = () => {
        const faqSection = document.getElementById('faq');
        if (faqSection) {
          const yOffset = -100;
          const y = faqSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      };

      const timer = setTimeout(scrollToFAQ, 500);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleFAQClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === '/about') {
      const faqSection = document.getElementById('faq');
      if (faqSection) {
        const yOffset = -100;
        const y = faqSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    } else {
      router.push('/about#faq');
    }
  };

  return (
    <footer className="bg-gray-200 pt-16 pb-24"> {/* Increased bottom padding from py-16 to pt-16 pb-24 */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Services Column */}
          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/corporate-marketing" className="text-md text-gray-600 hover:text-gray-900 transition-colors">
                  Corporate & Private Events
                </Link>
              </li>
              <li>
                <Link href="/sports-marketing" className="text-md text-gray-600 hover:text-gray-900 transition-colors">
                  Sports Marketing
                </Link>
              </li>
              <li>
                <Link href="/brand-development" className="text-md text-gray-600 hover:text-gray-900 transition-colors">
                  Brand Development
                </Link>
              </li>
              <li>
                <Link href="/field-marketing" className="text-md text-gray-600 hover:text-gray-900 transition-colors">
                  Field Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-md font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-md text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a 
                  href="/about#faq"
                  onClick={handleFAQClick}
                  className="text-md text-gray-600 hover:text-gray-900 transition-colors cursor-pointer"
                >
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/newsletter" className="text-md text-gray-600 hover:text-gray-900 transition-colors">
                  Newsletter
                </Link>
              </li>
              <li>
                <Link href="/get-started" className="text-md text-gray-600 hover:text-gray-900 transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-gray-300">
          {/* Email and Copyright */}
          <div className="flex flex-col gap-4">
            <a 
              href="mailto:marketing@themustardeedmarketinggroup.com"
              className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
            >
              admin@themustardeedmarketinggroup.com
            </a>
            <div className="text-sm text-gray-500">
              © {year} Mustard Seed Marketing LLC
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            <a 
              href="https://www.instagram.com/mustard_seed_marketing/?next=%2F"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6"
            >
              <Image 
                src="/instagram.svg" 
                alt="Instagram" 
                width={23} 
                height={23} 
                className="grayscale hover:grayscale-0 transition-all"
              />
            </a>
            <a 
              href="https://www.youtube.com/@mustardseedmarketing4905"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center"
            >
              <Image 
                src="/youtube.svg" 
                alt="YouTube" 
                width={32} 
                height={32} 
                className="grayscale hover:grayscale-0 transition-all translate-y-0.5"
              />
            </a>
            <a 
              href="https://www.linkedin.com/company/mustard-seed-marketing-llc/?viewAsMember=true"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6"
            >
              <Image 
                src="/linkedin.svg" 
                alt="LinkedIn" 
                width={24} 
                height={24} 
                className="grayscale hover:grayscale-0 transition-all"
              />
            </a>
            <a 
              href="https://www.facebook.com/moremustard"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8"
            >
              <Image 
                src="/facebook.svg" 
                alt="Facebook" 
                width={30} 
                height={30} 
                className="grayscale hover:grayscale-0 transition-all"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;