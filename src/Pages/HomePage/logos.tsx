import React from 'react';

// Data for the first row of the carousel
const institutionsRow1 = [
  { name: 'Aurora International', logo: '/logos/aurora.svg' },
  { name: 'Crystal Lake School', logo: '/logos/crystal-lake.svg' },
  { name: 'Army Public school', logo: '/logos/army-public.svg' },
  { name: 'Rashtriya military school', logo: '/logos/rashtriya-military.svg' },
];

// Data for the second row (shuffled for visual variety)
const institutionsRow2 = [
  { name: 'Army Public school', logo: '/logos/army-public.svg' },
  { name: 'Rashtriya military school', logo: '/logos/rashtriya-military.svg' },
  { name: 'Aurora International', logo: '/logos/aurora.svg' },
  { name: 'Crystal Lake School', logo: '/logos/crystal-lake.svg' },
];

const TrustedBySection = () => {
  const extendedInstitutions1 = [...institutionsRow1, ...institutionsRow1];
  const extendedInstitutions2 = [...institutionsRow2, ...institutionsRow2];

  return (
    <section className="w-full bg-brand-background py-20">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-16">
        <h2 className="text-black text-center text-[48px] font-normal leading-tight max-w-4xl">
          Trusted by top educational <br /> institutions worldwide
        </h2>
        
        <div className="w-full flex flex-col gap-8">
          {/* First Scrolling Row - Left to Right */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll min-w-full">
              {extendedInstitutions1.map((item, index) => (
                <li key={index} className="flex-shrink-0 flex items-center">
                  <img src={item.logo} alt={`${item.name} logo`} className="h-12 w-12 mr-4" />
                  <span className="text-2xl text-black font-normal whitespace-nowrap">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll min-w-full">
              {extendedInstitutions1.map((item, index) => (
                <li key={index} className="flex-shrink-0 flex items-center">
                  <img src={item.logo} alt={`${item.name} logo`} className="h-12 w-12 mr-4" />
                  <span className="text-2xl text-black font-normal whitespace-nowrap">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Second Scrolling Row - Right to Left */}
          <div className="w-full inline-flex flex-nowrap overflow-hidden">
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse min-w-full">
              {extendedInstitutions2.map((item, index) => (
                <li key={index} className="flex-shrink-0 flex items-center">
                  <img src={item.logo} alt={`${item.name} logo`} className="h-12 w-12 mr-4" />
                  <span className="text-2xl text-black font-normal whitespace-nowrap">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
            <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infinite-scroll-reverse min-w-full">
              {extendedInstitutions2.map((item, index) => (
                <li key={index} className="flex-shrink-0 flex items-center">
                  <img src={item.logo} alt={`${item.name} logo`} className="h-12 w-12 mr-4" />
                  <span className="text-2xl text-black font-normal whitespace-nowrap">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;