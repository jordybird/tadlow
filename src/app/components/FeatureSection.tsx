import React, { useRef, useState, useEffect } from 'react';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Search, FileEdit, BarChart3, Megaphone, Share2, Users, LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

type FeatureKey = 'seo' | 'content' | 'research' | 'advertising' | 'social' | 'agency';

interface Feature {
  icon: LucideIcon;
  title: string;
  content: string;
  color: string;
  secondaryColor: string;
  accentColor: string;
}

type Features = Record<FeatureKey, Feature>;

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<FeatureKey>('seo');
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<Record<FeatureKey, HTMLDivElement | null>>({
    seo: null,
    content: null,
    research: null,
    advertising: null,
    social: null,
    agency: null
  });

  const features: Features = {
    seo: {
      icon: Search,
      title: "Search Engine Optimization",
      content: "Elevate your digital presence with our comprehensive SEO toolkit. Track rankings, analyze competitors, and optimize your content for maximum visibility.",
      color: "#2D3A3A",
      secondaryColor: "#4A5D5D",
      accentColor: "#8FAF9F"
    },
    content: {
      icon: FileEdit,
      title: "Content Strategy",
      content: "Create compelling content that resonates with your audience. Our AI-powered tools help you craft the perfect message every time.",
      color: "#39603D",
      secondaryColor: "#557C5C",
      accentColor: "#94B395"
    },
    research: {
      icon: BarChart3,
      title: "Market Analysis",
      content: "Understand your market like never before. Get deep insights into trends, competitor movements, and customer behavior.",
      color: "#3C403D",
      secondaryColor: "#5C665D",
      accentColor: "#9BA59C"
    },
    advertising: {
      icon: Megaphone,
      title: "Campaign Management",
      content: "Optimize your advertising campaigns with data-driven insights and real-time performance tracking across all channels.",
      color: "#28282B",
      secondaryColor: "#404040",
      accentColor: "#8C8C8C"
    },
    social: {
      icon: Share2,
      title: "Social Engagement",
      content: "Manage all your social platforms from one intuitive dashboard. Schedule posts, track engagement, and grow your audience.",
      color: "#4B5842",
      secondaryColor: "#687A5F",
      accentColor: "#A3B18A"
    },
    agency: {
      icon: Users,
      title: "Agency Dashboard",
      content: "A complete suite of tools designed for agencies. Manage multiple clients, track performance, and scale your operations.",
      color: "#344E41",
      secondaryColor: "#588157",
      accentColor: "#A3B18A"
    }
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    Object.entries(features).forEach(([key]) => {
      const element = contentRefs.current[key as FeatureKey];
      if (element) {
        ScrollTrigger.create({
          trigger: element,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            gsap.to(`.icon-${key}`, {
              color: features[key as FeatureKey].color,
              duration: 0.3
            });
            setActiveTab(key as FeatureKey);
          },
          onEnterBack: () => {
            gsap.to(`.icon-${key}`, {
              color: features[key as FeatureKey].color,
              duration: 0.3
            });
            setActiveTab(key as FeatureKey);
          },
          onLeave: () => {
            gsap.to(`.icon-${key}`, {
              color: 'rgb(107, 114, 128)',
              duration: 0.3
            });
          },
          onLeaveBack: () => {
            gsap.to(`.icon-${key}`, {
              color: 'rgb(107, 114, 128)',
              duration: 0.3
            });
          }
        });
      }
    });
  }, { scope: sectionRef });

  const handleTabClick = (key: FeatureKey) => {
    const element = contentRefs.current[key];
    if (element) {
      setActiveTab(key);
      
      gsap.to(`.icon-${key}`, {
        color: features[key].color,
        duration: 0.3
      });

      const headerHeight = 160;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={sectionRef} className="relative -mt-[40vh] z-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-100 p-4 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-white rounded-md h-8 w-full border border-gray-300 flex items-center px-3">
                  <span className="text-gray-400 text-sm">https://</span>
                  <span className="text-gray-600 text-sm ml-1">dashboard.marketing-tools.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 border-b border-gray-200 sticky top-0 z-50">
            <div className="flex justify-between items-center px-6">
              {(Object.entries(features) as [FeatureKey, Feature][]).map(([key, { icon: Icon, title, color }]) => (
                <button
                  key={key}
                  onClick={() => handleTabClick(key)}
                  className="group flex flex-col items-center gap-2 px-6 py-4 cursor-pointer transition-all relative"
                >
                  <div className="p-3">
                    <Icon 
                      size={28} 
                      strokeWidth={2}
                      className={`icon-${key} transition-colors duration-300`}
                      style={{ color: activeTab === key ? color : 'rgb(107, 114, 128)' }}
                    />
                  </div>
                  <span 
                    className="text-base font-semibold whitespace-nowrap transition-colors duration-300"
                    style={{ color: activeTab === key ? color : 'rgb(107, 114, 128)' }}
                  >
                    {title.split(' ')[0]}
                  </span>
                  {activeTab === key && (
                    <div 
                      className="absolute bottom-0 left-0 w-full h-0.5 transition-colors duration-300"
                      style={{ backgroundColor: color }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="overflow-y-auto" style={{ height: 'calc(100vh - 200px)' }}>
            {(Object.entries(features) as [FeatureKey, Feature][]).map(([key, feature]) => (
              <div
                key={key}
                ref={(node) => {
                  contentRefs.current[key] = node;
                }}
                className="min-h-screen p-8"
                style={{ backgroundColor: feature.color + '0D' }}
              >
                <div className="max-w-6xl mx-auto">
                  <div className="mb-8">
                    <h2 className="text-4xl font-bold mb-4" style={{ color: feature.color }}>
                      {feature.title}
                    </h2>
                    <div className="h-1 w-20 rounded" style={{ backgroundColor: feature.accentColor }}></div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-12">
                    <div className="space-y-6">
                      <p className="text-lg leading-relaxed" style={{ color: feature.secondaryColor }}>
                        {feature.content}
                      </p>
                      <div className="space-y-4">
                        <button 
                          className="w-full px-6 py-3 rounded-lg font-medium transition-colors"
                          style={{ 
                            backgroundColor: feature.color,
                            color: 'white'
                          }}
                        >
                          Get Started
                        </button>
                        <button 
                          className="w-full px-6 py-3 rounded-lg font-medium border-2 transition-colors"
                          style={{ 
                            borderColor: feature.color,
                            color: feature.color
                          }}
                        >
                          Learn More
                        </button>
                      </div>
                    </div>
                    <div className="rounded-xl p-8" style={{ backgroundColor: feature.color + '1A' }}>
                      <div className="space-y-4">
                        <div className="h-8 rounded w-3/4" style={{ backgroundColor: feature.secondaryColor + '40' }}></div>
                        <div className="h-4 rounded w-full" style={{ backgroundColor: feature.secondaryColor + '40' }}></div>
                        <div className="h-4 rounded w-5/6" style={{ backgroundColor: feature.secondaryColor + '40' }}></div>
                        <div className="h-32 rounded w-full mt-6" style={{ backgroundColor: feature.secondaryColor + '40' }}></div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="h-20 rounded" style={{ backgroundColor: feature.secondaryColor + '40' }}></div>
                          <div className="h-20 rounded" style={{ backgroundColor: feature.secondaryColor + '40' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;