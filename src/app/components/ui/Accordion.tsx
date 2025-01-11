"use client";

import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../../utils/utils';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

const AccordionItem = ({ title, children, isOpen, onToggle, className }: AccordionItemProps) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (contentRef.current && arrowRef.current) {
      if (isOpen) {
        gsap.to(contentRef.current, {
          height: 'auto',
          duration: 0.5,
          ease: 'power2.out',
          onStart: () => {
            gsap.to(contentRef.current, {
              opacity: 1,
              duration: 0.4,
              ease: 'power2.out',
            });
          },
        });
        gsap.to(arrowRef.current, {
          rotation: 180,
          duration: 0.4,
          ease: 'power2.out',
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          duration: 0.5,
          ease: 'power2.inOut',
          onStart: () => {
            gsap.to(contentRef.current, {
              opacity: 0,
              duration: 0.3,
              ease: 'power2.in',
            });
          },
        });
        gsap.to(arrowRef.current, {
          rotation: 0,
          duration: 0.4,
          ease: 'power2.inOut',
        });
      }
    }
  }, [isOpen]);

  return (
    <div className={cn('border-b border-gray-200', className)}>
      <button
        onClick={onToggle}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
          {title}
        </span>
        <div 
          ref={arrowRef}
          className="flex-shrink-0 ml-4 text-gray-400 group-hover:text-gray-500 transition-colors"
        >
          <ChevronDown size={24} />
        </div>
      </button>
      <div
        ref={contentRef}
        className="h-0 overflow-hidden opacity-0"
      >
        <div className="pb-6 text-base text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
};

interface AccordionProps {
  items: {
    id: string | number;
    title: string;
    content: React.ReactNode;
  }[];
  allowMultiple?: boolean;
  className?: string;
}

const Accordion = ({ items, allowMultiple = false, className }: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string | number>>(new Set());

  const toggleItem = (id: string | number) => {
    setOpenItems(prev => {
      const newOpenItems = new Set(prev);
      
      if (newOpenItems.has(id)) {
        newOpenItems.delete(id);
      } else {
        if (!allowMultiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(id);
      }
      
      return newOpenItems;
    });
  };

  return (
    <div className={cn('divide-y divide-gray-200', className)}>
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          isOpen={openItems.has(item.id)}
          onToggle={() => toggleItem(item.id)}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
};

export default Accordion;