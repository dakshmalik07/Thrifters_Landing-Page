import React, { memo } from "react";
import Image from "next/image";

// Define the Card type
type Card = {
  id: number;
  imageSrc: string;
  content: string;
};

// Functional component
const CardStack = ({ items }: { items: Card[] }) => {
  return (
    
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10"
      style={{ willChange: "transform" }} // GPU Acceleration
    >
      {items.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl shadow-md p-6 border border-gray-200 flex flex-col items-center justify-between"
          style={{
            backfaceVisibility: "hidden", // Helps with rendering
            perspective: 1000,
          }}
        >
          {/* Image Section */}
          <div className="w-full h-[200px] mb-4 overflow-hidden flex justify-center items-center">
            <Image
              src={card.imageSrc}
              alt={`Card ${card.id}`}
              width={300}
              height={200}
              placeholder="blur"
              blurDataURL="/placeholder.png"
              className="rounded-lg object-cover"
              loading="lazy"
              style={{ willChange: "opacity, transform" }} // GPU optimization for images
            />
          </div>

          {/* Content Section */}
          <p className="text-center text-gray-700 font-medium">
            {card.content}
          </p>
        </div>
      ))}
    </div>

  );
};

// Wrap in memo for optimization
export const CustomCardStack = memo(CardStack);