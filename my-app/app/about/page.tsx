import React from "react";
import Image from "next/image";

const AboutPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
      {/* Left Section - Text Content */}
      <div className="md:w-1/2 space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-[#ff9f0d]">
          About Us
        </h1>
        <h2 className="text-3xl md:text-4xl text-white font-semibold">
          <span className="text-[#ff9f0d]">We</span> Create the Best Foody
          Products
        </h2>
        <p className="text-white text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla. Lacus nisi, et ac
          dapibus sit eu velit in consequat. Urna, elit augue urna, vitae
          feugiat pretium donec id elementum. Ultrices mattis sed vitae mus
          risus.
        </p>
        <ul className="list-disc text-white space-y-2 ml-5">
          <li>Lacus nisi, et ac dapibus sit eu velit in consequat.</li>
          <li>Quisque diam pellentesque bibendum non dui volutpat fringilla.</li>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-[#ff9f0d] text-white font-semibold rounded-full hover:bg-[#e68e00] transition-all">
          Read More
        </button>
      </div>

      {/* Right Section - Images */}
      <div className="md:w-1/2 flex flex-col items-center space-y-6 mt-8 md:mt-0">
        <Image
          src="/image/eggs.png"
          alt="Eggs image"
          width={660}
          height={330}
          className="rounded-lg"
        />
        <div className="flex space-x-6">
          <Image
            src="/image/chicken.png"
            alt="Chicken image"
            width={322}
            height={194}
            className="rounded-lg"
          />
          <Image
            src="/image/sandwhich.png"
            alt="Sandwich image"
            width={322}
            height={194}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

