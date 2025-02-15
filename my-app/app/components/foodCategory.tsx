import React from 'react';
import Image from 'next/image';

const FoodCategory: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Heading Section */}
      <div className="text-center pt-8">
        <h1 className="text-yellow-500 text-2xl sm:text-3xl lg:text-4xl font-bold">
          Food Category
        </h1>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mt-4">
          <span className="text-yellow-500">Ch</span>oose Food Items
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mt-10 px-4">
        <Image
          src={'/image/Image box.png'}
          alt="Food Category Items"
          width={1350}
          height={329}
          className="w-full max-w-4xl h-auto"
        />
      </div>
    </div>
  );
};

export default FoodCategory;
