"use client";

import React from "react";
import { Carousel } from "@/components/ui/carousel";
import { SparklesCore } from "@/components/ui/fuckheadline";

export const CarouselSection = () => {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-8xl text-3xl lg:text-6xl font-bold text-center text-white relative  z-20">
        F*CK FAST FASHION, SHOP SECOND HAND.
      </h1>
      <div className="w-[50rem] h-40 relative">

        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
   

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
      <div >
        <Carousel
          items={[
            { src: "/acmilan.jpg", alt: "Image 1" },
            { src: "/nikethrift.jpg", alt: "Image 2" },
            { src: "/caps.jpg", alt: "Image 3" },
            { src: "/y2k.jpg", alt: "Image 4" },
            { src: "/retro.jpg", alt: "Image 5" },
            { src: "/watches.jpg", alt: "Image 6" },
            { src: "/shoes.jpg", alt: "Image 7" },
            { src: "/nikehoddie.jpg", alt: "Image 8" },
            { src: "/chains.jpg", alt: "Image 9" },
          ]}
        />
      </div>
    </div>
  );
};
