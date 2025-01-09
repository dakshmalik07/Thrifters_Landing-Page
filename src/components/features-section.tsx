"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";

export const FeaturesSection = () => {
  return (
    <div className="flex flex-wrap justify-center gap-20 mt-8">
    
               <CardContainer className="inter-var">
                 <CardBody className="bg-gray-50 group/card dark:bg-black border w-72 rounded-xl p-6">
                   <CardItem
                     translateZ="50"
                     className="text-xl font-bold text-neutral-600 dark:text-white"
                   >
                     Image-First Listings
                   </CardItem>
                   <CardItem translateZ="100" className="mt-4">
                     <Image
                      src="/thrift.jpg"
                       alt="image first listings"
                       width="300"
                       height="200"
                       className="rounded-xl"
                     />
                   </CardItem>
                   <CardItem
                     translateZ="60"
                     className="text-sm text-neutral-500 mt-2 dark:text-neutral-300"
                   >
                     Upload clear photos of your products for quick visibility.
                   </CardItem>
                 </CardBody>
               </CardContainer>
     
               
     
               {/* Card 5: Thrift & Drip Accessories */}
               <CardContainer className="inter-var">
                 <CardBody className="bg-gray-50 group/card dark:bg-black border w-72 rounded-xl p-6">
                   <CardItem
                     translateZ="50"
                     className="text-xl font-bold text-neutral-600 dark:text-white "
                   >
                     Thrift & Drip Accessories
                   </CardItem>
                   <CardItem translateZ="100" className="mt-4">
                     <Image
                       src="/image.png"
                       alt="thrift accessories"
                       width="300"
                       height="200"
                       className="rounded-xl"
                     />
                   </CardItem>
                   <CardItem
                     translateZ="60"
                     className="text-sm text-neutral-500 mt-2 dark:text-neutral-300  pt-8"
                   >
                     Thrift shoes, clothes, and cool accessories at affordable prices . Sellers also decide their own pricing—no limits.
                   </CardItem>
                 </CardBody>
               </CardContainer>
     
               {/* Card 6: Connect Buyers & Sellers */}
               <CardContainer className="inter-var">
                 <CardBody className="bg-gray-50 group/card dark:bg-black border w-72 rounded-xl p-6">
                   <CardItem
                     translateZ="50"
                     className="text-xl font-bold text-neutral-600 dark:text-white "
                   >
                     Connect Buyers & Sellers
                   </CardItem>
                   <CardItem translateZ="100" className="mt-4">
                     <Image
                       src="/store.webp"
                       alt="connect buyers and sellers"
                       width="300"
                       height="200" 
                       className="rounded-xl"
                     />
                   </CardItem>
                   <CardItem
                     translateZ="60"
                     className="text-sm text-neutral-500 mt-2 dark:text-neutral-300"
                   >
                     A platform that connects Gen Z buyers and sellers seamlessly.
                   </CardItem>
                 </CardBody>
               </CardContainer>
    </div>
  );
};
