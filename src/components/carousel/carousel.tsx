"use client";
import React, { useCallback } from "react";
import { EmblaCarouselType } from "embla-carousel";

import { DotButton, useDotButton } from "./carousel-dot-buttons";
import { usePrevNextButtons } from "./carousel-arrow-buttons";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

const slides = [
  { url: "/banner-1.jpg" },
  { url: "/banner-1.jpg" },
  { url: "/banner-1.jpg" },
];

const EmblaCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick
  );

  const {} = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((item, i) => (
            <div className="embla__slide shadow-md" key={i}>
              <div className="embla__slide__number">
                <Image
                  src={item.url}
                  alt="hero"
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover  rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls ">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
