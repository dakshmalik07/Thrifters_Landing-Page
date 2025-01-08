"use client";

import React from "react";
import { CustomCardStack } from "@/components/ui/features-section";

const SHOP_SECOND_HAND_CARDS = [
  {
    id: 0,
    imageSrc: "/Un.svg",
    content:
      "According to the UN Environment Programme, 20% of global wastewater comes from textile dyeing. Because the bulk of the production is in countries with less regulation, the wastewater often finds its way to rivers and seas.",
  },
  {
    id: 1,
    imageSrc: "/TheGuardian.svg",
    content:
      "Fashion retail sites add new styles at incredibly cheap prices, normalizing overconsumption.",
  },
  {
    id: 2,
    imageSrc: "/Earth,org.svg",
    content:
      "Clothing sales doubled from 100 to 200 billion units a year, while the average number of times an item was worn decreased by 36% overall.",
  },
];

export const ShopSecondHandSection = () => {
  return (
    <div className="w-full mt-10 bg-gray-100 pb-8">
      <h2 className="text-4xl font-extrabold italic text-center text-gray-800 dark:text-black mb-6">
        Why Shop Second Hand?
      </h2>
      <div className="w-full flex justify-center items-center pb-8">
        <CustomCardStack items={SHOP_SECOND_HAND_CARDS} />
      </div>
    </div>
  );
};
