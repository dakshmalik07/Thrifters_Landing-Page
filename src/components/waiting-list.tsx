// components/ui/join-waitlist-section.tsx

import React from "react";


import { Spotlight } from "./ui/spotlight";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";

interface WaitingListProps {         
  placeholder: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const WaitingList= ({placeholder, onChange, onSubmit }: WaitingListProps) => (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.80] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Join the waitlist
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          We’re all about circular fashion—quality pieces that live three lives or more. Fashion that’s unique, personal, and a bold stand against the harm of fast fashion.
          <br />
          A shift is happening. People are questioning where their clothes come from and the real price of single-use fashion.
          <br />
          By empowering mindful consumers and redefining style, we see a future where wardrobes are filled with recycled and remade treasures. No more stigma—just sustainable, standout fashion.
        </p>
        <div className="mt-8">
        <PlaceholdersAndVanishInput
          placeholders={placeholder}
          onChange={onChange}
          onSubmit={onSubmit}
        />

        
        </div>
      </div>
    </div>
  );


