'use client';
import { useState, useEffect } from 'react';

const AboutUs = () => {
  const slides = [
    { id: 1, text: 'Slide 1', bgColor: 'bg-red-500' },
    { id: 2, text: 'Slide 2', bgColor: 'bg-blue-500' },
    { id: 3, text: 'Slide 3', bgColor: 'bg-green-500' },
    { id: 4, text: 'Slide 4', bgColor: 'bg-yellow-500' },
    { id: 5, text: 'Slide 5', bgColor: 'bg-purple-500' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className={`page-min-h relative text-black overflow-hidden`}>
        <div className="absolute top-10 inset-0 w-full h-full bg-cover bg-fixed bg-center about-us-img"></div>
        <div className="absolute bg-[#111111b6] top-10 left-0 w-full h-full">
          <div className="px-5 container h-full flex flex-col justify-center items-center">
            <div className="h-[60%] lg:h-[50%] flex flex-col justify-between items-center lg:gap-14 gap-10">
              <h2 className="lg:text-5xl text-4xl font-bold text-white/90">
                About Us
              </h2>
              <p className="xl:text-xl text-md font-medium text-white/75 text-justify">
                At Platinum Company, we believe in delivering excellence that
                shines as bright as our name. With a commitment to unmatched
                quality and innovative solutions we strive to elevate industries
                and enrich lives. Our passion for perfection drives uS to
                provide products and services that not only meet but exceed
                expectations, ensuring that every interaction embodies the
                essence of reliability and trust, Join us on a journey where
                every detail matters, and experience the timeless value that
                only Platinum can offer.
              </p>
              <div className="uppercase bg-[#111111dc] text-white/80 px-12 py-4 border border-white/80">
                Who We Are?
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`page-min-h relative flex items-center text-black overflow-hidden`}
      >
        <div className="relative w-full container h-full overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-700"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {slides.map((slide) => (
              <div
                key={slide.id}
                className={`w-full flex-shrink-0 h-[600px] flex justify-center items-center ${slide.bgColor}`}
              >
                <h2 className="text-white text-3xl font-bold">{slide.text}</h2>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="mt-5 flex justify-center items-center space-x-3">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-white' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
