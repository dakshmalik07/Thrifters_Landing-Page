'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CountdownTimerProps {
  targetDate: string; // Format: 'YYYY-MM-DDTHH:mm:ss'
  labels: string[]; // Labels for days, hours, minutes, seconds
}

// Calculates the time left until the target date
const calculateTimeLeft = (targetDate: Date): number[] => {
  const difference = targetDate.getTime() - new Date().getTime();
  return difference > 0
    ? [
        Math.floor(difference / (1000 * 60 * 60 * 24)), // Days
        Math.floor((difference / (1000 * 60 * 60)) % 24), // Hours
        Math.floor((difference / (1000 * 60)) % 60), // Minutes
        Math.floor((difference / 1000) % 60), // Seconds
      ]
    : [0, 0, 0, 0];
};

export const CountdownTimer = ({ targetDate, labels }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<number[]>([0, 0, 0, 0]); // Default static values for SSR
  const prevTimeLeft = useRef(timeLeft);

  useEffect(() => {
    // Start calculating time only on the client
    const target = new Date(targetDate);
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target));
      prevTimeLeft.current = timeLeft;
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-4 w-full max-w-4xl mx-auto">
      {timeLeft.map((num, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center bg-zinc-950 text-white rounded-lg shadow-md p-4"
        >
          <div className="relative w-16 h-16 md:w-24 md:h-24 flex items-center justify-center bg-black rounded-lg shadow-lg">
            <span
              className={`text-2xl md:text-4xl font-bold transition-transform ${
                num !== prevTimeLeft.current[index] ? 'animate-flip' : ''
              }`}
            >
              {String(num).padStart(2, '0')}
            </span>
          </div>
          <p className="text-xs md:text-sm text-gray-400 uppercase">{labels[index]}</p>
        </div>
      ))}
    </div>
  );
};

// Tailwind CSS Keyframe for Flip Animation
export const GlobalStyles = () => (
  <style>
    {`
      @keyframes flip {
        0% {
          transform: rotateX(0deg);
        }
        100% {
          transform: rotateX(180deg);
        }
      }
      .animate-flip {
        animation: flip 1s forwards;
      }
    `}
  </style>
);
