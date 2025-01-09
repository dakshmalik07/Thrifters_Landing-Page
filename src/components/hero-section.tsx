"use client";

import React from "react";
import { Cover } from "@/components/ui/cover";

export const HeroSection = () => {
  return (
    <div className="sm:flex-row sm:px-16 ">
      <h1 className="text-5xl md:text-6xl lg:text-8xl font-extrabold max-w-7xl mx-auto text-center mt-10 relative z-20 py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-600 dark:from-neutral-800 dark:via-white dark:to-white">
        JOIN THE THRIFT REVOLUTION <br /> with <Cover>Thrifters</Cover>
      </h1>
    </div>
  );
};
