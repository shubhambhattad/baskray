"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BlogPost } from "@/types";

interface BlogSliderProps {
  blogs: BlogPost[];
  autoSlideInterval?: number;
  pauseOnHover?: boolean;
}

export default function BlogSlider({
  blogs,
  autoSlideInterval = 5000,
  pauseOnHover = true,
}: BlogSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % (blogs.length - slidesToShow + 1)
    );
  }, [slidesToShow]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + (blogs.length - slidesToShow + 1)) %
        (blogs.length - slidesToShow + 1)
    );
  }, [slidesToShow]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [nextSlide, autoSlideInterval, isPaused]);

  const handleMouseEnter = () => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  };

  const handleMouseLeave = () => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString("default", { month: "long" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  return (
    <div
      className="relative w-full max-w-6xl mx-auto px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl mb-8 text-center">
        Latest Blog Posts
      </h2>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
          }}
        >
          {blogs.map((post, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 px-2`}
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <Card className="h-full">
                <CardContent className="p-4">
                  <Link href={`/blogs/${post.slug}`}>
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {formatDate(post.publishedAt)}
                    </p>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {post.metaDesc}
                    </p>
                  </Link>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={prevSlide}
        aria-label="Previous blog post"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm"
        onClick={nextSlide}
        aria-label="Next blog post"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="flex justify-center mt-6">
        {Array.from({ length: blogs.length - slidesToShow + 1 }).map(
          (_, index) => (
            <Button
              key={index}
              variant="ghost"
              size="sm"
              className={`mx-1 ${
                currentIndex === index
                  ? "bg-primary text-primary-foreground"
                  : ""
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index + 1}
            </Button>
          )
        )}
      </div>
    </div>
  );
}
