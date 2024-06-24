// carousel.tsx
"use client"
import React, { useState } from 'react';
import Image from 'next/image';

export const Carousel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden">
      {children}
    </div>
  );
};

export const CarouselContent: React.FC<{ children: React.ReactNode; currentIndex: number }> = ({ children, currentIndex }) => {
  return (
    <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
      {children}
    </div>
  );
};

export const CarouselItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-w-full h-64 flex-shrink-0">
      {children}
    </div>
  );
};

export const CarouselPrevious: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2">
      Prev
    </button>
  );
};

export const CarouselNext: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2">
      Next
    </button>
  );
};
