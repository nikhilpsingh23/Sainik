import Image from "next/image";

const schools = [
  {
    name: "Rashtriya Military School",
    image: "/images/img.jpg",
    desc: "Premier residential school nurturing future armed forces leaders through discipline, academics, and all-round development.",
  },
  {
    name: "Army Public School",
    image: "/images/img.jpg",
    desc: "Empowering young minds with discipline, knowledge, and values for a brighter tomorrow.",
  },
  {
    name: "Acumen Academy",
    image: "/images/img.jpg",
    desc: "Acumen Academy empowers changemakers with practical tools and leadership programs to tackle global challenges.",
  },
];

export default function SchoolsSection() {
  return (
    <section className="w-full h-[1325px] bg-white flex flex-col items-center justify-start pt-12">
      {/* Title */}
      <h2 className="text-[48px] font-regular font-poppins text-black text-center">
        Explore Best Schools Near You
      </h2>
      <p className="text-[20px] font-regular font-poppins text-black mt-2 text-center">
        Discover innovative designs that inspire learning.
      </p>

      {/* Card Container */}
      <div className="w-[1295px] h-[918px] mt-12 grid grid-cols-3 gap-x-[40px] gap-y-[40px]">
        {Array(2)
          .fill(schools)
          .flat()
          .map((school, idx) => (
            <div
              key={idx}
              className="w-[405px] h-[459px] bg-white rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] p-4 flex flex-col"
            >
              <div className="w-full h-[180px] overflow-hidden rounded-lg">
                <Image
                  src={school.image}
                  alt={school.name}
                  width={405}
                  height={180}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-[20px] font-poppins text-black font-Medium mt-4">{school.name}</h3>
              <p className="text-[16px] font-poppins font-regular text-[#3D3C3C] mt-2">{school.desc}</p>

              <div className="flex gap-2 mt-4">
                <span className="bg-[#DAEADD] text-black px-3 py-1 rounded-md text-[14px] font-medium font-poppins">
                  Education
                </span>
                <span className="bg-[#DAEADD] text-black px-3 py-1 rounded-md text-[14px] font-medium font-poppins">
                  Fees
                </span>
                <span className="bg-[#DAEADD] text-black px-3 py-1 rounded-md text-[14px] font-medium font-poppins">
                  Rating
                </span>
              </div>

              <div className="flex items-center mt-3">
                <span className="text-yellow-500 text-[25px]">★☆☆☆☆</span>
              </div>

              <div className="flex  mt-2">
              <button className="text-green-700 mt-2  text-[16px] font-regular font-poppins hover:underline">
                View Details &gt;
              </button>
                </div>
             
            </div>
          ))}
      </div>

      {/* View All Button */}
      <button className="mt-20 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
        View all
      </button>
    </section>
  );
}
