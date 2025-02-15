import React from 'react'

import Image from "next/image";
import { WineIcon } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row gap-12 items-center">
        {/* Image Section */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          
        <Image className='bg-black w-full space-y-5'
        src={'/image/f1.png'}
        alt="image description"
        width={1320}
        height={716}
      />

      <Image 
      src={'/image/f2.png'}
      alt='img desc'
      width={1923}
      height={400}
      />

          </div>

        {/* Text Section */}
        <div className="lg:w-1/2">
          <h2 className="text-yellow-400 text-4xl font-medium">Why Choose Us</h2>
          <h3 className="text-3xl font-bold text-white mt-2 leading-tight">
            Extra Ordinary Taste <br /> And Experienced
          </h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <div className="grid grid-cols-3 gap-4 mt-8">
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-black">
                🍔
              </div>
              <span className="block mt-2">Fast Food</span>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-black">
                🍲
              </div>
              <span className="block mt-2">Lunch</span>
            </div>
            <div className="text-center">
              <div className="bg-yellow-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-black">
                🍷
              </div>
              <span className="block mt-2">Dinner</span>
            </div>
          </div>
          <div className="mt-3 flex items-center bg-white pl-6 pt-4 pb-5">
            <span className="text-yellow-400 text-4xl font-bold">30+</span>
            <span className="ml-4 text-black">
              Years of <br />
              <strong>Experience</strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;