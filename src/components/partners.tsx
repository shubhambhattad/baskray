"use client";
import Heading from "./ui/heading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const logoUrls = [
  "/",
  // "/partners/logo-2.jpeg",
  // "/partners/logo-8.jpeg",
  // "/partners/logo-1.jpg",
  // "/partners/logo-6.jpg",
  // "/partners/logo-10.jpg",
  // "/partners/logo-3.png",
  // "/partners/logo-4.png",
  // "/partners/logo-5.png",
  // "/partners/logo-7.png",
  // "/partners/logo-9.png",
  // "/partners/logo-11.png",
  // "/partners/logo-12.png",
  // "/partners/logo-14.png",
  // "/partners/logo-15.png",
  // "/partners/logo-13.webp",
];

const Partners = () => {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <Heading title="Choice of Partners" />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 mt-10">
        <div>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={2}
            spaceBetween={10}
            pagination={{
              type: "fraction",
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
            }}
          >
            {logoUrls.map((item, i) => (
              <SwiperSlide key={i}>
                <div>
                  <img
                    className="object-contain w-auto mx-auto h-24"
                    src={item}
                    alt=""
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Partners;
