import React from "react";
import { PiHandbag } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import Link from "next/link";

const NavBar: React.FC = () => {
  return (
    <header className="bg-black shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6 relative">
        {/* Left Menu */}
        <nav className="flex flex-wrap items-center space-x-6">
          <Link href="/" className="text-white hover:text-yellow-400 font-medium">
            home
          </Link>
          <Link href="/menu" className="text-white hover:text-yellow-400 font-medium">
            menu
          </Link>
          <Link href="/blog" className="text-white hover:text-yellow-400 font-medium">
            Blog
          </Link>
          <Link href="/pages" className="text-white hover:text-yellow-400 font-medium">
            Pages
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-yellow-400 font-medium flex items-center"
          >
            about <RiArrowDropDownLine />
          </Link>
          <Link href="/shop" className="text-white hover:text-yellow-400 font-medium">
            shop
          </Link>
          <Link href="/contact" className="text-white hover:text-yellow-400 font-medium">
            contact
          </Link>
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
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="rounded-full border border-yellow-400 bg-black text-white pl-10 pr-4 py-2 focus:outline-none focus:ring focus:ring-yellow-300 w-full"
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white">
              <CiSearch />
            </div>
          </div>

          {/* Handbag Icon */}
          <div className="text-white text-2xl">
            <PiHandbag />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
