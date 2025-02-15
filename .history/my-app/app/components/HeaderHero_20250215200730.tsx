
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

const HeroHeader: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-between relative p-6 md:p-10">
      {/* Social Media Icons Section */}
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 space-y-8 hidden md:flex flex-col items-center">
        <div className="w-px h-24 bg-white opacity-50" />
        <div className="space-y-4 text-white">
          <a href="#" className="text-white hover:text-blue-500">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="text-white hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-white hover:text-red-500">
            <FaPinterestP size={24} />
          </a>
        </div>
        <div className="w-px h-24 bg-white opacity-50" />
      </div>

      {/* Text Content Section */}
      <div className="flex flex-col space-y-6 max-w-xl mx-auto text-center md:text-left md:ml-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#ff9f0d] font-bold">
          It’s Quick & Amusing!
        </h2>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-extrabold leading-tight">
          <span className="text-[#FF9F0D]">Th</span>e Art Of Speed Food Quality
        </h1>
        <p className="text-white text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue.
        </p>
        <button
  onClick={() => {
    const menuSection = document.getElementById("menu");
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: "smooth" });
    }
  }}
  className="mt-4 px-6 py-3 bg-[#FF9F0D] text-white rounded-full font-semibold hover:bg-[#e68e00] transition-all max-w-[200px]"
>
  See Menu
</button>



      </div>

      {/* Image Section */}
      <div className="w-full md:w-[60%] lg:w-[50%] mt-6 md:mt-0 flex justify-center">
        <Image
          src="/image/pic.png"
          alt="image description"
          width={800}
          height={600}
          className="rounded-lg object-cover w-full h-auto"
        />
      </div>
    </div>
  );
};

export default HeroHeader;
