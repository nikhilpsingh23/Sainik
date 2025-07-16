// components/Navbar.tsx
import { ChevronDown, MapPin, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="bg-[#1C1F24] max-w-[1380px] h-[86px] mx-auto mt-4 rounded-[20px] flex items-center justify-between px-6 shadow-lg text-white">
      {/* Left - Logo */}
      <h1 className="text-[32px] font-bold text-white">Sainik</h1>

      {/* Center - Buttons */}
      <div className="flex gap-4">
        {/* Schools Near You */}
        <button className="flex items-center h-10 gap-2 px-4 py-2 rounded-full bg-[#257B5A] hover:bg-green-800 transition">
          <MapPin size={16} />
          <span className="text-sm">Schools Near You</span>
        </button>

        {/* Search Box */}
        <div className="flex items-center h-10 gap-2 px-4 py-2 rounded-full bg-white text-green-800 w-[200px]">
          <Search size={16} />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Right - Explore, Add, Login */}
      <div className="flex items-center gap-6">
        {/* Explore Dropdown */}
        <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-red-700 hover:bg-red-800 transition text-white">
          Explore <ChevronDown size={16} />
        </button>

        {/* Add Your School */}
        <span className="text-gray-300 text-sm cursor-pointer hover:text-white">
          Add Your School
        </span>

        {/* Login */}
        <button className="px-4 py-2 rounded-full bg-[#257B5A] hover:bg-green-800 transition text-white">
          Login
        </button>
      </div>
    </div>
  );
}
