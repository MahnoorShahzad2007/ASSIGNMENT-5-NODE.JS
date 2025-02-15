import Image from "next/image";
import salad from "../../public/image/salad.png";
import MenusComponent from "./Menus.jsx";
import chefone from "../../public/image/chefone.png";
import cheftwo from "../../public/image/cheftwo.png";
import chefthree from "../../public/image/chefthree.png";
import cheffour from "../../public/image/cheffour.png";
import whatclientsays from "../../public/image/whatclientsays.png";
import { Button } from "@/components/ui/button";

function MenuPage() {
  return (
    <>
      {/* Menu Section */}
      <section className="bg-[#131212] text-white pt-5">
        <div className="flex flex-col items-center">
          <h3 className="text-[#FF9F0D] text-xl pb-5">Choose & Pick</h3>
          <h1 className="text-5xl font-bold pb-8 text-center">
            <span className="text-[#ffab2e]">Fr</span>om Our Menu
          </h1>
        </div>

        <div className="flex flex-wrap justify-center gap-6 font-bold text-lg pb-10">
          <span className="text-[#FF9F0D]">Breakfast</span>
          <span>Lunch</span>
          <span>Dinner</span>
          <span>Dessert</span>
          <span>Drink</span>
          <span>Snack</span>
          <span>Soups</span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 px-5">
          <Image
            className="rounded-lg"
            src={salad}
            width={400}
            height={400}
            alt="Fresh salad with vegetables"
          />
          <div className="flex flex-wrap justify-center gap-5">
            <MenusComponent />
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <section className="bg-[#131212] text-white py-10">
        <div className="flex flex-col items-center">
          <h3 className="text-[#FF9F0D] text-xl pb-5">Chefs</h3>
          <h1 className="text-5xl font-bold pb-10 text-center">
            <span className="text-[#ffab2e]">Me</span>et Our Chef
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
          {[chefone, cheftwo, chefthree, cheffour].map((chef, index) => (
            <Image
              key={index}
              className="rounded-lg"
              src={chef}
              alt={`Chef ${index + 1}`}
              width={200}
              height={200}
            />
          ))}
        </div>

        <div className="py-10 flex justify-center">
          <Button className="py-4 px-8 border border-[#FF9F0D] rounded-full text-lg">
            See More
          </Button>
        </div>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-[#131212] h-full text-white flex justify-center py-10 px-5">
        <Image
          className="rounded-lg max-w-full"
          src={whatclientsays}
          alt="What clients say"
        />
      </section>

      {/* Blog Section */}
      <section className="bg-[#131212] h-full text-white py-10">
        <div className="flex flex-col items-center">
          <h3 className="text-[#FF9F0D] text-xl pb-5">Blog Part</h3>
          <h1 className="text-5xl font-bold pb-10 text-center">
            <span className="text-[#ffab2e]">La</span>test News & Blog
          </h1>
        </div>
      </section>
    </>
  );
}

export default MenuPage;
