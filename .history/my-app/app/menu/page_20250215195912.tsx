"use client";

import React from "react";
import Image from "next/image";
import pakora from "../../public/image/pakora.png";
import cheese from "../../public/image/cheese.png";
import burger from "../../public/image/burger.png";
import icecream from "../../public/image/icecream.png";
import bread from "../../public/image/bread.png";
import sandwich from "../../public/image/sandwhich.png";

// Define the type for a menu item
interface MenuItem {
  name: string;
  description: string;

  price: number;
  currency: string;
  price_id: string;
}

const Menus: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      name: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: pakora,
      price: 12.5,
      currency: "USD",
      price_id: "price_1",
    },
    {
      name: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: cheese,
      price: 12.5,
      currency: "USD",
      price_id: "price_2",
    },
    {
      name: "Fresh Breakfast",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: burger,
      price: 12.5,
      currency: "USD",
      price_id: "price_3",
    },
    {
      name: "Italian Pizza",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: icecream,
      price: 12.5,
      currency: "USD",
      price_id: "price_4",
    },
    {
      name: "Mild Butter",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: bread,
      price: 12.5,
      currency: "USD",
      price_id: "price_5",
    },
    {
      name: "Slice Beef",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: sandwich,
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
              width={60}
              height={60}
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
