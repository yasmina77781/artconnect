// src/components/HeroSection.js

import React from "react";

export default function HeroSection() {
  return (
    <div className="relative m-8 h-[70vh] text-white overflow-hidden rounded-3xl shadow-lg">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/public/3.jpg')" }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>
      {/* Content aligned left and stretched vertically */}
      <div className="relative z-10 flex flex-col items-start justify-between h-full text-left px-6 py-6">
        <h1 className="text-5xl md:text-6xl font-serif tracking-wide leading-tight drop-shadow-md">
          Discover <br /> Morocco's
          <br /> Heritage <br />
          through Art & <br />
          Stories
        </h1>
        <a
          className=" ml-24 px-8 py-3 bg-[#5F82C6] text-white font-semibold rounded-full shadow-lg  hover:scale-105 transform transition-transform duration-300 ease-in-out cursor-pointer" 
        >
          Explore Now
        </a>
      </div>
    </div>
  );
}
