import React from "react";
import Image from "next/image";

function Menus() {
  const menuItems = [
    {
      name: "Lettuce Leaf",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: "/images/pakora.png",
      price: 12.5,
      currency: "USD",
      price_id: "price_1",
    },
    {
      name: "Glow Cheese",
      description: "Lacus nisi, et ac dapibus velit in consequat.",
      image: "/images/cheese.png",
      price: 12.5,
      currency: "USD",
      price_id: "price_2",
    },
    // Add more items...
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5 py-10">
      {menuItems.map((item) => (
        <div
          key={item.price_id}
          className="flex flex-col bg-[#1a1a1a] p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <div className="flex items-center">
            <div className="relative w-16 h-16">
              <Image
                className="rounded-full object-cover"
                src={item.image}
                alt={item.name}
                width={64}
                height={64}
              />
            </div>
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
}

export default Menus;
