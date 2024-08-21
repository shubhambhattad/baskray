"use client";
import urlFor from "@/lib/urlFor";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProductCarouselProps {
  images: { asset: { url: string } }[];
  title: string;
  description: string;
  price: number;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ images }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        className="rounded-t-lg"
      >
        {images.map((image, index) => (
          <div key={index} className="h-[400px] relative">
            <Image
              width={1000}
              height={1000}
              quality={100}
              src={urlFor(image).url()}
              alt={`Product Image ${index}`}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
