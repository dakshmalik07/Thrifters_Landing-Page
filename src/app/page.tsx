"use client";

import React, { useRef, useState,useMemo,useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import { Cover } from "@/components/ui/cover";
import {WorldMap} from "@/components/ui/world-map";
import{ CustomCardStack }  from "@/components/ui/features-section";
import { motion } from "motion/react";
 import { Carousel } from "@/components/ui/carousel";
import { SparklesCore } from "@/components/ui/fuckheadline";
import { FeaturesSection } from "@/components/features-section";
import { CarouselSection } from "@/components/carousel-section";
import { ShopSecondHandSection } from "@/components/shopSecond-hand-section";
import { HeroSection } from "@/components/hero-section";
import { Spotlight } from "@/components/ui/spotlight";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { WaitingList } from "@/components/waiting-list";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { db } from "@/lib/firebaseConfig";
import { collection,addDoc } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CountdownTimer } from "@/components/CountdownTimer";

import { GlobalStyles } from "@/components/CountdownTimer";

export default function Home() {

  const words = [
    {
      text: "Thrift.",
      className: "text-blue-900 dark:text-blue-500 text-6xl",
    },
    {
      text: "Flip.",
      className: "text-green-500  text-6xl",
    },
    {
      text: "Drip.",
      className: "text-blue-800 dark:text-blue-500 text-6xl",
    },
    {
      text: "Repeat.",
      className: "text-6xl",
    },
  ];

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 60);
  const targetDateISO = targetDate.toISOString(); // Example target date
  const labels = ["Days", "Hours", "Minutes", "Seconds"];

  const [active, setActive] = useState<string | null>(null);

  // Scroll References
  const featuresRef = useRef<HTMLDivElement | null>(null);
    const waitingListRef = useRef<HTMLDivElement | null>(null);

  // Smooth Scrolling Function
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };


 const placeholders = useMemo(
  () => ["e.g., dakshmalik437@gmail.com", "e.g., yash124@gmail.com"],
  []
);


const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value = e.target.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  setEmail(value);
  if (value && !emailRegex.test(value)) {
    setMessage("Invalid email address.");
  } else {
    setMessage(""); // Clear the error message if the email is valid
  }
};

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!email) {
    toast.error("Please enter your email.");
    return;
  }

  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  try {
    const docRef = await addDoc(collection(db, "waitingList"), { email });
    toast.success("You have successfully joined the waitlist!");
    setEmail(""); // Clear input field
  } catch (error) {
    console.error("Error adding document: ", error);
    toast.error("An error occurred. Please try again later.");
  }
};
  

  return (
    <div>
       {/* Toast Container */}
       <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      {/* Background Animation */}
      <BackgroundLines  className="w-full overflow-x-hidden relative ">
        {/* Navbar */}
        <div className="relative w-full flex items-center justify-center">
        <Menu setActive={setActive}  >
          <MenuItem setActive={setActive}  active={active} item="Features">
            <div>
              <p
                className="cursor-pointer text-black dark:text-white"
                onClick={() => scrollToSection(featuresRef)}
              >
                Go to Features Section
              </p>
            </div>
          </MenuItem>

          <MenuItem setActive={setActive} active={active} item="Join Us">
              <div>
                <p
                  className="cursor-pointer text-black dark:text-white"
                  onClick={() => scrollToSection(waitingListRef)} // Scroll to the waiting list section
                >
                  Join Waitlist
                </p>
              </div>
            </MenuItem>



        </Menu>
       </div>

<div className="pb-20">
  <HeroSection/>
</div>
<div>
  <ShopSecondHandSection/>
</div>

<div>
<CarouselSection />
</div>

        {/* Features Section */}

        <div ref={featuresRef}>
        
     
      <TypewriterEffectSmooth  className="flex items-center justify-center" words={words} />

          <FeaturesSection />
        </div>

     
     <div ref={waitingListRef} className="pt-10">
        {/* Join Waitlist Section with a single placeholder */}
        <WaitingList
          placeholder={placeholders}  // Pass single placeholder here
          onChange={handleChange}
          onSubmit={handleSubmit}
          
        />
        <div className="mb-8">
          <CountdownTimer targetDate={targetDateISO } labels={labels} />
        </div>
     </div>
     

      </BackgroundLines>
      
    </div>
  );
}
