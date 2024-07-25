"use client";
import Script from "next/script";
import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    // Function to load the widget
    const loadWidget = () => {
      //@ts-ignore
      if (window.sociablekit) {
        //@ts-ignore
        window.sociablekit.load();
      } else {
        // If the script hasn't loaded yet, try again in 100ms
        setTimeout(loadWidget, 100);
      }
    };

    // Call the function to load the widget
    loadWidget();

    // Cleanup function
    return () => {
      // Remove the script if component unmounts
      const script = document.querySelector(
        'script[src="https://widgets.sociablekit.com/google-reviews/widget.js"]'
      );
      if (script) {
        script.remove();
      }
    };
  }, []);
  return (
    <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-4">
          <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            What our <span className="text-primary">Clients</span> says
          </h2>
        </div>

        <div className="max-h-80 overflow-auto">
          <div className="sk-ww-google-reviews" data-embed-id="25437213"></div>
          <Script src="" async defer></Script>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
