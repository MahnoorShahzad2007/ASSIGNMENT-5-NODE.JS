import React from "react";
import { PiHandbag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavBar: React.FC = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 relative">
        {/* Left Menu */}
        <nav className="flex items-center space-x-6">
          <a href="#" className="text-white hover:text-yellow-400 font-medium">
            Home
          </a>
          <a href="#" className="text-white hover:text-yellow-400 font-medium">
            Menu
          </a>
          <a href="#" className="text-white hover:text-yellow-400 font-medium">
            Blog
          </a>
          <a href="#" className="text-white hover:text-yellow-400 font-medium">
            Pages
          </a>
          <a href="#" className="text-white hover:text-yellow-400 font-medium flex items-center">
            About <RiArrowDropDownLine />
          </a>
          <a href="#" className="text-white hover:text-yellow-400 font-medium">
            Shop
          </a>
          <a href="#" className="text-white hover:text-yellow-400 font-medium">
            Contact
          </a>
        </nav>

        {/* Middle Title */}
        <div className="absolute inset-x-0 top-2 text-center">
          <h1 className="text-2xl font-bold">
            <span className="text-yellow-400">Food</span>
            <span className="text-white">tuck</span>
          </h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="relative text-white">
            <input
              type="text"
              placeholder="Search..."
              className="relative rounded-full border border-yellow-400 bg-black text-white pl-10 pr-4 py-2 focus:outline-none focus:ring focus:ring-yellow-300"
              />  
              <div className="absolute top-3 right-2">
              <CiSearch />
              </div>
          </div>

          {/* Handbag Icon */}
         <div className="text-white
         "> <PiHandbag /> </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
