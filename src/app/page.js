"use client";
import card from "@material-tailwind/react/theme/components/card";
import Image from "next/image";
import { useState } from "react";


const cardData = [
  {
    title: "FAST DELIVERY",
    number: "01",
    image: "/section/why-fast-delivery.png",
    description:
      "Platinum Printing Solutions Pvt Ltd guarantees swift delivery, whether for indent orders or local market needs. We ensure that your order, from the factory in China to your doorstep, maintains the highest material standards.",
  },
  {
    title: "FAST DELIVERY",
    number: "02",
    image: "/section/why-fast-delivery.png",
    description:
      "Platinum Printing Solutions Pvt Ltd guarantees swift delivery, whether for indent orders or local market needs. We ensure that your order, from the factory in China to your doorstep, maintains the highest material standards.",
  },
  {
    title: "FAST DELIVERY",
    number: "03",
    image: "/section/why-fast-delivery.png",
    description:
      "Platinum Printing Solutions Pvt Ltd guarantees swift delivery, whether for indent orders or local market needs. We ensure that your order, from the factory in China to your doorstep, maintains the highest material standards.",
  },
  {
    title: "FAST DELIVERY",
    number: "04",
    image: "/section/why-fast-delivery.png",
    description:
      "Platinum Printing Solutions Pvt Ltd guarantees swift delivery, whether for indent orders or local market needs. We ensure that your order, from the factory in China to your doorstep, maintains the highest material standards.",
  },
  {
    title: "FAST DELIVERY",
    number: "05",
    image: "/section/why-fast-delivery.png",
    description:
      "Platinum Printing Solutions Pvt Ltd guarantees swift delivery, whether for indent orders or local market needs. We ensure that your order, from the factory in China to your doorstep, maintains the highest material standards.",
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = cardData[activeIndex];
  const backCard = cardData[(activeIndex + 1) % cardData.length];


  return (
    <>
      <div className="relative page-min-h w-full overflow-hidden">
        <div
          className="absolute top-0 inset-0 w-full h-full bg-cover bg-fixed bg-center hero-img opacity-50"
        ></div>
        
      <div className="absolute top-20 mt-10 right-5 z-10 w-[100px] sm:w-[140px] md:w-[180px] lg:w-[220px] xl:w-[280px]">
        <Image
          src="/logo/logo-full.png"
          alt="logo-full"
          width={300}
          height={300}
          className="w-full h-auto rounded-md"
        />
      </div>
      <div className="absolute mt-40 right-0 left-4 sm:left-6 md:left-10 w-auto">
      <div className="container flex flex-col justify-center gap-10 h-full px-4 py-10">
        <div className="flex flex-col gap-6">
          
          {/* Headings */}
          <div className="ml-2 sm:ml-0 md:ml-0 font-poppins">
            <p className=" text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 font-bold text-[#111111]">
              Your Partner in Premium Printing
            </p>
            <p className=" text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold whitespace-nowrap text-[#152A4D]">
              Platinum Printing
            </p>
            <p className=" text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#555A5B]">
              Solutions
            </p>
          </div>

          {/* Description */}
          <div className=" mt-5 w-[95%] sm:w-[90%] lg:w-[70%] ml-2 sm:ml-0 md:ml-0 font-poppins">
            <p className=" text-md sm:text-base lg:text-xl xl:text-2xl text-[#000000] leading-relaxed">
              Platinum Printing Solutions Pvt Ltd is a leading provider of
              <br className=" hidden sm:block" />
              premium printing products and services across Sri Lanka and
              <br className="hidden sm:block" />
              the UAE.
            </p>
          </div>
        </div>
      </div>
    </div>

      </div>

      <section className="w-full px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col gap-10">
          {/* Section Title */}
          <div className="text-center">
            <h2 className="font-poppins text-3xl sm:text-5xl font-bold text-black">Our Products</h2>
            <div className="w-16 h-[2px] bg-black mx-auto mt-2" />
          </div>

          {/* Foiling Card */}
          <div className="relative bg-white border-4 border-[#76A3F6] rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            {/* Images */}
            <div className="relative w-full md:w-1/2 flex justify-center">
              <div className="relative w-[100%] sm:w-[80%] max-w-[350px]">
                <Image
                  src="/products/foiling-1.png"
                  alt="Foiling Image 1"
                  width="300"
                  height="340"
                  className=""
                />
                <Image
                  src="/products/foiling-2.png"
                  alt="Foiling Image 2"
                  width="250"
                  height="328"
                  className="absolute -bottom-6 left-8 sm:left-16 translate-x-10 "
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h3 className="font-bree text-2xl sm:text-3xl font-bold text-[#0B2C63] mb-2">FOILING</h3>
              <div className="w-12 h-[2px] bg-black mx-auto md:mx-0 mb-4" />
              <p className="font-poppins text-black mb-6 text-md sm:text-base">
                Explore our foiling categories and choose the perfect option for your needs.
                Browse and place your order today to add a premium finish to your prints!
              </p>

              <button className="flex items-center gap-2 px-5 py-2 font-poppins bg-[#152A4D] text-white text-sm rounded hover:bg-[#0a2454] transition">
                View Categories
                <span className="text-lg font-bold">➔</span>
              </button>
            </div>

            {/* Floating Button (Right Side) */}
            <div className="hidden md:block absolute -top-8 -right-4">
              <button className="w-20 h-14 rounded-md bg-[#1D4FAD] text-white shadow-lg text-lg flex items-center justify-center">
                ➔
              </button>
            </div>
          </div>
        </div>
      </section>

  <section className="w-full h-[500] bg-cover bg-center relative " style={{ backgroundImage: `url('${backCard.image}')` }}>
      <div className="bg-black opacity-60 w-full h-full absolute inset-0 z-0" />
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-4 py-24">
        <h2 className="font-bree text-4xl sm:text-5xl font-bold mb-14">About Us</h2>
        <p className="font-inria max-w-3xl text-sm sm:text-base md:text-lg mb-14">
          Platinum Printing Solution Pvt Ltd. was established with a firm <br/> commitment to serving as a comprehensive provider of printing products<br/> and services for the markets in Sri Lanka and the United Arab Emirates.
        </p>
        <button className="font-inria text-xl px-20 py-6 border border-white text-white transition">
          WHO WE ARE?
        </button>
      </div>
    </section>

    <section className="w-full px-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Section Header */}
        <div className="text-left">
          <h2 className="font-bree text-3xl sm:text-4xl font-bold text-black">Why Choose Us?</h2>
          <p className="font-poppins mt-20 text-gray-700 max-w-5xl text-sm sm:text-base">
            These key points emphasize the reliability, flexibility, and commitment of Platinum Printing Solutions Pvt Ltd as your trusted partner in the printing industry.
          </p>
        </div>
      

      {/* Fast Delivery Section */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center py-10 px-4 lg:px-0 gap-8 lg:left-40 ">
      <div className="relative flex justify-center items-center w-full max-w-6xl">

        {/* Back Card - Blurred with its own image */}
        <div
          className="absolute top-1/2 right-1/2 transform -translate-y-1/2 w-[650px] h-[450px] z-10 hidden lg:block bg-cover bg-center overflow-hidden shadow-md"
          style={{ backgroundImage: `url('${backCard.image}')` }}
        > 
          <div className="w-full h-full filter blur-sm scale-[1.03]">
          <div className="w-full h-full bg-black/60 backdrop-blur-md p-5 flex flex-col justify-between">
          
            {/* Inner Content Card */}
            <div className="relative z-10 m-6 sm:m-8 h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] rounded-2xl border-[4px] border-white p-6 sm:p-8 bg-black/70 flex flex-col justify-between">
              {/* Header */}
              <div className="flex items-start justify-between mb-6 sm:mb-8">
                <div className="flex-1">
                  <h1 className="font-poppins text-white text-3xl sm:text-3xl md:text-5xl font-bold mb-2">
                    {backCard.title}
                  </h1>
                  <div className="mt-10 w-20 h-1.5 bg-white" />
                </div>
                <div className="font-poppins text-white text-6xl sm:text-7xl font-bold">{backCard.number}</div>
              </div>

              {/* Paragraph box */}
              <div className="bg-[#CED7E6] rounded-2xl rounded-br-[40px] p-4 sm:p-6">
                <p className="font-inter text-black text-sm sm:text-base md:text-sm leading-relaxed">
                  {backCard.description}
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

          {/* Main Card - Clear image with drop shadow */}
          <div
            className="relative z-20 w-[650px] h-[450px] bg-cover bg-center shadow-lg overflow-hidden"
            style={{ backgroundImage: `url('${activeCard.image}')` }}
          >
            <div className="absolute inset-0 bg-black opacity-30 z-0"/>
            {/* Inner Content Card */}
            <div className="relative z-10 m-6 sm:m-8 h-[calc(100%-3rem)] sm:h-[calc(100%-4rem)] rounded-2xl border-[4px] border-white p-6 sm:p-8 bg-black/70 flex flex-col justify-between">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <h1 className="font-poppins text-white text-3xl sm:text-3xl md:text-5xl font-bold mb-2">
                    {activeCard.title}
                  </h1>
                  <div className="mt-10 w-20 h-1.5 bg-white" />
                </div>  
                <div className="font-poppins text-white text-6xl sm:text-7xl font-bold">
                  {activeCard.number}
                </div>
              </div>

              {/* Paragraph box */}
              <div className="bg-[#CED7E6] rounded-2xl rounded-br-[40px] p-4 sm:p-6">
                <p className="font-inter text-black text-sm sm:text-base md:text-sm leading-relaxed">
                  {activeCard.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {cardData.map((_, index) => (
            <button 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                activeIndex === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>


    {/* Contact Section */}
    <section className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/contact/contact-bg.jpg')", 
        }}>
      {/* Opacity Layer */}
      <div className="absolute inset-0 bg-white opacity-30 z-[1]" />

      <div className="relative z-[2]">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between">
        <div>
          <h2 className="font-poppins text-4xl sm:text-6xl  text-[#152A4D] ">
            Get in Touch with <br />
            <span className="font-poppins text-[#193F85]">Platinum Printing</span>
          </h2>
          <p className="font-bree mt-10 text-black text-sm sm:text-base ">
            We’re here to assist with all your printing needs! Whether you’re looking for premium printing solutions,
            <br />personalized designs, or specialized finishes, our team is ready to help. Contact us today to discuss your project or for more information about our wide range of services.
          </p>
          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            <a href="https://facebook.com" target="_blank">
              <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" className="w-6 h-6" alt="Facebook" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <img src="https://www.svgrepo.com/show/448234/linkedin.svg" className="w-6 h-6" alt="LinkedIn" />
            </a>
            <a
              href="https://twitter.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <img src="/icons/twitter.png" alt="Twitter" className="w-6 h-6" />
            </a>
           <a href="">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Mail_%28iOS%29.svg/1200px-Mail_%28iOS%29.svg.png" alt="Email" className="w-6 h-6" />
            </a>
           <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
                alt="Location"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
        <img src="/logo/logo-full-nobg.png" alt="Logo" className="w-80 h-80 mt-10 lg:-mt-20 lg:self-start"/>
      </div>
    </div>

      {/* Inquiry Form Section */}
      <div className="relative z-10  px-4 sm:px-0 lg:px-0">
      <div className="relative bg-[#424242] bg-opacity-80 rounded-tr-[200px] px-6 sm:px-12 py-12 shadow-lg">

        <div className="max-w-6xl mx-auto">
            {/* Heading Section */}
            <h3 className="text-3xl sm:text-4xl font-bree font-bold text-white mb-4">
              Have Questions or Need Assistance?
            </h3>
            <div className="w-24 h-1.5 bg-white mb-6" />
            <p className="font-bree text-white text-sm sm:text-base max-w-3xl leading-relaxed font-medium">
              If you have any questions, need help with your order, or want to share feedback, feel free to send us a message. 
              Our team is here to assist you and will get back to you as soon as possible. We value your input and look forward to hearing from you!
            </p>

            {/* Form Card inside the gray block */}
            <div className="bg-white text-black max-w-3xl mx-auto p-8 shadow-md mt-14">
              <form className="space-y-6">
                <input type="text" placeholder="Name" className="font-poppins w-full p-3 border rounded" />
                <input type="email" placeholder="Email" className="font-poppins w-full p-3 border rounded" />
                <input type="tel" placeholder="Phone Number" className="font-poppins w-full p-3 border rounded" />
                <textarea placeholder="Message" rows={4} className="font-poppins w-full p-3 border rounded"></textarea>
                <button
                  type="submit"
                  className="bg-[#193F85] text-white px-8 py-2 rounded shadow font-poppins"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </section>

    {/* Footer */}
      <footer className="bg-[#1d2c5e] text-white px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 items-start">
          
          {/* Logo and Explore */}
          <div className="flex flex-col items-start">
            <img
              src="/logo/logo-full.png"
              alt="Platinum Printing Logo"
              className="w-36 mb-6"
            />
            <h4 className="font-poppins text-lg  tracking-wide mb-2">EXPLORE</h4>
            <ul className="text-sm space-y-1 ">
              <li><a href="#" className="font-poppins  hover:underline">About Us</a></li>
              <li><a href="#" className="font-poppins  hover:underline">Our Products</a></li>
              <li><a href="#" className="font-poppins hover:underline">Contact Us</a></li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="text-lg font-poppins tracking-wide mb-4">LOCATIONS</h4>
            <div className="text-sm space-y-4">
              <div>
                <p className="font-poppins">HEAD OFFICE</p>
                <p>72/2, Charles Lane, Rawathawatte,<br />Moratuwa, 10400,<br />Sri Lanka</p>
              </div>
              <div>
                <p className="font-poppins">BRANCH OFFICE</p>
                <p>Dubai Investment Park 2. RITAJ<br />Community, Block E,<br />Dubai, UAE</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-poppins tracking-wide mb-4">CONTACT</h4>
            <ul className="text-sm space-y-3 font-poppins">
              <li className="flex items-start gap-2">
                <span className="text-lg">📞</span> +94 777 324 121
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">📞</span> +94 775 558 657
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">✉️</span> info@platinumps.net
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">🌐</span> www.platinumps.net
              </li>
              <li className="flex items-start gap-2">
                <span className="text-lg">📞</span> +971 554 861 671 (UAE)
              </li>
            </ul>
          </div>
        </div>
      </footer>


    
    </>
  );
}
