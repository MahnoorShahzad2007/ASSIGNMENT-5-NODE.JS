"use client";
<section id="menu" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10">
  {/* Menu items go here */}
</section>

import React from "react";
import Image from "next/image";

// Define the type for a menu item
interface MenuItem {
  name: string;
  description: string;
  image: string; // Use string type for image paths
  price: number;
  currency: string;
  price_id: string;
}

const Menus: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      name: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: "/image/pakora.png",
      price: 12.5,
      currency: "USD",
      price_id: "price_1",
    },
    {
      name: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: "/image/cheese.png",
      price: 12.5,
      currency: "USD",
      price_id: "price_2",
    },
    {
      name: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: "/image/burger.png",
      price: 12.5,
      currency: "USD",
      price_id: "price_3",
    },
    {
      name: "Italian Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: "/image/icecream.png",
      price: 12.5,
      currency: "USD",
      price_id: "price_4",
    },
    {
      name: "Mild Butter",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: "/image/bread.png",
      price: 12.5,
      currency: "USD",
      price_id: "price_5",
    },
    {
      name: "Slice Beef",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: "/image/sandwhich.png",
      price: 12.5,
      currency: "USD",
      price_id: "price_6",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10">
      {menuItems.map((item) => (
        <div
          key={item.price_id}
          className="flex flex-col bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center">
            <Image
              className="rounded-full"
              src={item.image}
              alt={item.name}
              width={200}
              height={200}
            />
            <div className="pl-4">
              <h2 className="text-lg font-bold text-white">{item.name}</h2>
              <p className="text-sm text-gray-400">{item.description}</p>
              <span className="text-[#FF9F0D] font-semibold">
                {item.price}$
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menus;
