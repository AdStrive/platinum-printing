"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative page-min-h w-full overflow-hidden">
        <div
          className="absolute top-0 inset-0 w-full h-full bg-cover bg-fixed bg-center hero-img"
        ></div>
        <div className="absolute w-full h-full bg-[#5490ff36]"></div>
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
          <Image
            className=""
            src="/logo/logo-full-nobg.png"
            alt="logo-hero-image"
            width={800}
            height={800}
          />
        </div>
        <div className="absolute left-10 h-[88%] top-12 right-0 bg-[#1f36617e] backdrop-blur-[2px] rounded-bl-[46px]">
          <div className="container flex flex-col justify-center gap-14 h-full px-4 py-10">
            <div className="flex flex-col gap-6">
              <div className="md:ml-0 ml-5">
                <p className="md:text-5xl mb-5 text-3xl text-[#0e1526] font-bold">
                  Your Partner in Premium Printing
                </p>
                <p className="lg:text-7xl text-5xl whitespace-nowrap text-[#172c4f] font-extrabold">
                  Platinum Printing
                </p>
                <p className="lg:text-7xl text-5xl text-[#b0b7ba] font-extrabold">
                  Solutions
                </p>
              </div>
              <div className="lg:w-[60%] w-[90%] md:ml-0 ml-5">
                <p className="text-white lg:text-xl text-lg">
                  Platinum Printing Solutions Pvt Ltd is a leading provider of
                  premium printing products and services across Sri Lanka and
                  the UAE.
                </p>
              </div>
            </div>

            <div className="md:ml-0 ml-5">
              <button className="font-light bg-primaryBtn px-8 py-3.5 rounded-full shadow-md text-white uppercase">
                Register Now
              </button>
            </div>
          </div>
        </div>
        <div className="hidden xl:flex absolute top-0 right-0 rounded-bl-xl">
          <Image
            className="rounded-bl-xl"
            src="/logo/logo-full.png"
            alt="logo-hero-image"
            width={280}
            height={280}
          />
        </div>
      </div>
      <div className="relative page-min-h w-full overflow-hidden"></div>
    </>
  );
}
