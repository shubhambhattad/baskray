"use client";

import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="relative py-10 sm:py-16 lg:py-24">
      <div className="absolute inset-0 z-10" />
      <div className="relative z-20 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 ">
        <div className="max-w-2xl mx-auto text-center mb-8">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            What our <span className="text-primary">Clients</span> say
          </h2>
        </div>

        <div className="space-y-8">
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/25505536"
            frameBorder="0"
            width="100%"
            height="500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
