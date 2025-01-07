"use client";

import { useState, useEffect } from "react";
import useSWR from "swr";
import Heading from "./ui/heading";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { partnersQuery } from "../../sanity/lib/queries";
import { sanityFetch } from "../../sanity/lib/fetch";

interface Partner {
  _id: string;
  name: string;
  logoUrl: string;
}

const Partners = () => {
  const { data: partners, error } = useSWR<Partner[]>("partners", () =>
    sanityFetch<Partner[]>({ query: partnersQuery })
  );

  if (error) return <div>Failed to load partners</div>;
  if (!partners) return <div>Loading...</div>;

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
            {partners.map((partner) => (
              <SwiperSlide key={partner._id}>
                <div>
                  <img
                    className="object-contain w-auto mx-auto h-24"
                    src={partner.logoUrl}
                    alt={partner.name}
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
