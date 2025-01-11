import React from 'react';
import Image from 'next/image';

const AboutHero = () => {
  const teamMembers = [
    {
      name: "Tad Low",
      role: "Founder & CEO",
      image: "/tadlow.jpeg",
      description: "With over a decade of experience in marketing and business development, Tad brings vision and strategic direction to Mustard Seed Marketing. His innovative approach to digital marketing has helped countless businesses achieve remarkable growth."
    },
    {
      name: "Betsy Pruitt",
      role: "Marketing Coordinator",
      image: "/betsy.jpg",
      description: "Betsy's expertise in operations and client relations ensures smooth execution of all projects. Her background in strategic planning and team leadership has been instrumental in building Mustard Seed Marketing's reputation for excellence."
    },
    {
      name: "Rachel Rother",
      role: "Event Manager",
      image: "/rachel.JPEG",
      description: "As Event Manager and Team Lead, Rachel brings exceptional organizational skills and creativity to every project. Her leadership ensures flawless event execution and team coordination, delivering outstanding experiences for our clients."
    }
  ];

  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#28282B] mb-4">
            Meet our team
          </h1>
          <p className="text-lg text-[#28282B]/70 max-w-2xl mx-auto">
            Meet our passionate team of creative minds and strategic thinkers, dedicated to transforming brands and driving growth.
          </p>
        </div>

        {/* Team Grid - Modified for 3 members */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-4/5 aspect-[3/4] mb-6 rounded-xl overflow-hidden mx-auto">
                {/* Image */}
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                  priority
                />
                {/* Label overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-1 rounded-full border border-black shadow-md min-w-[200px]">
                  <h3 className="font-semibold text-[#28282B] text-sm border-b border-black pb-1 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[#28282B]/70 text-sm">
                    {member.role}
                  </p>
                </div>
              </div>
              {/* Description below image */}
              <p className="text-[#28282B]/70 text-base max-w-sm mx-auto leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutHero;