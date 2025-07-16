'use client';

import Image from 'next/image';
import { useState } from 'react';

const statesData = [
  {
    name: 'Maharashtra',
    map: '/homePage/maharashtra.png',
    schools: [
        {
            name: 'Sainik School Balachadi',
            logo: '/homePage/school.png',
          },
          {
            name: 'Rashtriya Military School, Dholpur',
            logo: '/homePage/school.png',
          },
    ],
  },
  {
    name: 'Rajasthan',
    map: '/homePage/maharashtra.png',
    schools: [
        {
            name: 'Sainik School Balachadi',
            logo: '/homePage/school.png',
          },
          {
            name: 'Rashtriya Military School, Dholpur',
            logo: '/homePage/school.png',
          },
    ],
  },
  {
    name: 'Gujrat',
    map: '/homePage/maharashtra.png',
    schools: [
      {
        name: 'Sainik School Balachadi',
        logo: '/homePage/school.png',
      },
      {
        name: 'Rashtriya Military School, Dholpur',
        logo: '/homePage/school.png',
      },
    ],
  },
  {
    name: 'Madhya Pradesh',
    map: '/homePage/maharashtra.png',
    schools: [
        {
            name: 'Sainik School Balachadi',
            logo: '/homePage/school.png',
          },
          {
            name: 'Rashtriya Military School, Dholpur',
            logo: '/homePage/school.png',
          },
    ],
  },
  {
    name: 'Arunachal Pradesh',
    map: '/homePage/maharashtra.png',
    schools: [
        {
            name: 'Sainik School Balachadi',
            logo: '/homePage/school.png',
          },
          {
            name: 'Rashtriya Military School, Dholpur',
            logo: '/homePage/school.png',
          },
    ],
  },
  {
    name: 'Arunachal Pradesh',
    map: '/homePage/maharashtra.png',
    schools: [
        {
            name: 'Sainik School Balachadi',
            logo: '/homePage/school.png',
          },
          {
            name: 'Rashtriya Military School, Dholpur',
            logo: '/homePage/school.png',
          },
    ],
  },
];

const NationwideFootprint = () => {
  const [activeState, setActiveState] = useState<number | null>(null);

  return (
    <section className=" max-w-full bg-[#1C1F24] mx-auto px-4 py-16 ">
      <div className="w-[1306px] h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Left Column - State Cards */}
        <div className="space-y-4">
          {statesData.map((state, idx) => {
            const isActive = activeState === idx;
            return (
              <div
                key={idx}
                className={`w-[662px] bg-white rounded-xl shadow-md transition-all duration-300 overflow-hidden`}
              >
                {/* Clickable Header */}
                <div
    className="flex items-center justify-between px-6 py-4 cursor-pointer"
    onClick={() => setActiveState(isActive ? null : idx)}
  >
    <h3
      className={`font-regular font-poppins text-black transition-all duration-300 ${
        isActive ? 'text-[24px]' : 'text-[18px]'
      }`}
    >
      {state.name}
    </h3>
    <Image
      src={state.map}
      alt={state.name}
      width={isActive ? 64 : 40} // conditional width
      height={isActive ? 64 : 40} // conditional height
      className={`object-contain transition-all duration-300`}
    />
  </div>

                {/* Expandable Content */}
                {isActive && state.schools.length > 0 && (
                  <div className="grid grid-cols-2 gap-4 px-6 pb-6">
                    {state.schools.map((school, sIdx) => (
                      <div
                        key={sIdx}
                        className="w-[230px] h-[120px] bg-[#1C1C1C] text-white rounded-xl shadow-lg flex items-center px-4"
                      >
                        <Image
                          src={school.logo}
                          alt={school.name}
                          width={40}
                          height={40}
                          className="mr-4 object-contain"
                        />
                        <p className="text-[14px] font-regular font-poppins leading-tight">
                          {school.name}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Column - Title + Map */}
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[42px] font-regular font-poppins text-white mb-4">
            Nationwide Footprint
          </h2>
          <p className="text-[20px] font-regular font-poppins text-white mb-6">
            Sainik Schools are strategically located across states to provide equal opportunity
            and access to disciplined, defense-oriented education.
          </p>
          <Image
            src="/homePage/map.png" // Replace with your actual map path
            alt="India Map"
            width={550}
            height={450}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default NationwideFootprint;
