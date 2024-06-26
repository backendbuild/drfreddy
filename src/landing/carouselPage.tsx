"use client"
import React, { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"; // Adjust the import path as necessary
import Image from 'next/image';

const CarouselPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { src: '/images/puspol.png', alt: 'Image 1' },
    { src: '/images/pusdok.png', alt: 'Image 2' },
    { src: '/images/puska.png', alt: 'Image 3' },
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]); // Only reset the interval when the currentIndex changes

  return (
    <div className="m-24">
      <Carousel>
        <CarouselContent currentIndex={currentIndex}>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="relative flex items-center justify-center">
                <Image src={image.src} alt={image.alt} width={1200} height={800} objectFit="cover" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={handlePrevious} />
        <CarouselNext onClick={handleNext} />
      </Carousel>
    </div>
  );
}

export default CarouselPage;
