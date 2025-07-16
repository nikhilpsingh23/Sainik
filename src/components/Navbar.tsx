// components/Navbar.tsx
import { ChevronDown, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

export default function Navbar() {
  return (
    <div className="bg-[#1C1F24] max-w-[1380px] h-[86px] mx-auto mt-4 rounded-[20px] flex items-center justify-between px-6 shadow-lg text-white">
      {/* Left - Logo */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <span className="text-white text-[32px] font-poppins font-bold">Sainik</span>

        {/* Schools Near You Button */}
        <button className="h-10 px-4 rounded-full bg-[#257B5A] text-white flex items-center space-x-2 hover:bg-green-800 transition">
          <FaMapMarkerAlt size={14} />
          <span className="text-sm">Schools Near You</span>
        </button>

        {/* Search Box */}
        <div className="flex items-center h-10 bg-white rounded-full pl-3 pr-4">
          <FaSearch className="text-[#257B5A] mr-2" size={14} />
          <input
            type="text"
            placeholder="Search"
            className="outline-none text-sm w-40 bg-transparent placeholder-[#257B5A] text-[#257B5A]"
          />
        </div>
      </div>

      {/* Right Section: Explore + Links */}
      <div className="flex items-center space-x-4">
        {/* Explore Dropdown */}
        <button className="h-10 px-4 rounded-full bg-[#B91C1C] text-white flex items-center space-x-2 hover:bg-red-800 transition">
          <span className="text-sm">Explore</span>
          <IoIosArrowDown size={14} />
        </button>

        {/* Add Your School */}
        <span className="text-white text-sm cursor-pointer hover:underline">
          Add Your School
        </span>

        {/* Login Button */}
        <button className="h-10 px-4 rounded-full bg-[#257B5A] text-white hover:bg-green-800 transition">
          Login
        </button>
      </div>
    </div>
  );
}
