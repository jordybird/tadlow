'use client';

import React from 'react';
import Accordion from '../ui/Accordion';

const FAQ = () => {
  const faqItems = [
    {
      id: 1,
      title: "What industries does Mustard Seed serve?",
      content: "We work across diverse industries, including sports, retail, restaurants, and corporate brands, crafting marketing solutions that align with each industry's unique needs."
    },
    {
      id: 2,
      title: "How does Mustard Seed create memorable brand activations?",
      content: "We design innovative and experiential brand activations that captivate audiences and forge meaningful relationships with your customers."
    },
    {
      id: 3,
      title: "What is sports marketing, and how can it grow my brand?",
      content: "Sports marketing connects brands to engaged audiences through sponsorships, partnerships, and events, increasing visibility and creating lasting connections."
    },
    {
      id: 4,
      title: "How can Mustard Seed help my brand reach sports fans?",
      content: "Through strategic sponsorships, partnerships, and fan engagement events, we help your brand connect authentically with passionate sports audiences."
    },
    {
      id: 5,
      title: "What are the benefits of experiential marketing for businesses?",
      content: "Experiential marketing boosts audience engagement, strengthens brand loyalty, and drives word-of-mouth with immersive and unforgettable experiences."
    },
    {
      id: 6,
      title: "Can Mustard Seed help with nationwide or regional field marketing campaigns?",
      content: "Absolutely! We specialize in planning and executing both local and large-scale field marketing campaigns, ensuring consistent brand messaging, adherence to corporate guardrails and national campaigns, and high-quality execution at every level."
    },
    {
      id: 7,
      title: "What types of events does Mustard Seed plan for businesses?",
      content: "Mustard Seed specializes in corporate events, private employee celebrations, product launches, and sports activations, aligning each with your brand's goals and audience."
    },
    {
      id: 8,
      title: "Why choose Mustard Seed for sports marketing and event planning?",
      content: "Our faith-driven approach, focus on innovation, and commitment to creating meaningful brand experiences make us a trusted partner for businesses of all sizes."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-8">
          {/* Title */}
          <h2 className="text-4xl font-bold text-[#28282B]">
            Frequently Asked Questions
          </h2>

          {/* Accordion */}
          <div className="max-w-3xl">
            <Accordion 
              items={faqItems}
              allowMultiple={false}
              className="bg-white rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;