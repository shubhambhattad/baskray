import EmblaCarousel from "@/components/carousel/carousel";
import Stats from "@/components/stats";

import CompanyProfile from "@/components/company-profile";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";

import ContactUs from "@/components/contact-us";

import Partners from "@/components/partners";
import Categories from "@/components/categories";
import { Blogs } from "@/components/blogs";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="max-w-7xl mx-auto mt-6 flex flex-col gap-10  sm:gap-16 lg:gap-20">
        <EmblaCarousel />
        <Stats />
        <Categories />
        <CompanyProfile />

        <Partners />
        <Blogs />
        <HowItWorks />
        <Testimonials />
        <ContactUs />
      </div>
    </div>
  );
}
