'use client';

import Image from 'next/image';
import { useState } from 'react';
import { categories } from './productData'; // or wherever you keep your data

const CategoryCarousel = () => {
  const [index, setIndex] = useState(0);
  const total = categories.length;
  const current = categories[index];

  const goPrev = () => setIndex((index - 1 + total) % total);
  const goNext = () => setIndex((index + 1) % total);

  return (
    <div className="relative mt-6 px-4 sm:px-10 flex flex-col items-center justify-center">
      {/* Image Card */}
      <div className="relative w-[700px] h-[400px] rounded overflow-hidden shadow-lg">
        <Image
          src={current.image}
          alt={current.name}
          fill
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold font-bree mb-2">
            {current.name.toUpperCase()}
          </h2>
          <div className="w-16 h-[2px] bg-white mb-4" />
          <p className="max-w-2xl font-poppins text-sm sm:text-base">
            {current.description}
          </p>
        </div>
      </div>

      {/* Pagination + Arrows BELOW */}
      <div className="relative w-full flex items-center justify-center mt-6">
        {/* Left Arrow */}
        <button
          onClick={goPrev}
          className="absolute left-[calc(50%-140px)] bg-[#0B2C63] text-white w-10 h-10 rounded-full shadow hover:bg-[#0A1C3F]"
        >
          ←
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {categories.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full ${
                i === index ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goNext}
          className="absolute right-[calc(50%-140px)] bg-[#0B2C63] text-white w-10 h-10 rounded-full shadow hover:bg-[#0A1C3F]"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
