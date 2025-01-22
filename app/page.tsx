import Image from "next/image";
import Header from "./commponents/header";
export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-[80%]">
        <div className="w-1/2 flex flex-col justify-start items-start m-16">
          <h1 className={` text-[40px] text-[#000000] font-bold h-[189px] w-[496px] absolute top-[316px] left-[176px]`}>
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>

          <p className={` w-[902px] h-[147px] font-normal text-[30px] text-secondary absolute top-[533px] left-[171px] leading-[49.35px] tracking-wide`}>
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>

          <button className={` w-[288px] bg-bg text-[30px] rounded-[10px] absolute top-[730px] left-[176px] p-2 flex items-center justify-center text-white`}>
            Explore Collection
          </button>
        </div>

        <div className="w-1/2 flex justify-center items-center absolute top-[198px] left-[1164px]">
          <Image
            src="/image/image.png"
            alt="model image"
            width={462}
            height={647}
          />
        </div>
      </div>
    </div>
  );
}
