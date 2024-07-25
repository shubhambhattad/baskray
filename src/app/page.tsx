import EmblaCarousel from "@/components/carousel/carousel";
import Stats from "@/components/stats";

import CompanyProfile from "@/components/company-profile";
import HowItWorks from "@/components/how-it-works";
import Testimonials from "@/components/testimonials";

import ContactUs from "@/components/contact-us";
import ServicesPage from "./services/page";
import EMICalculatorHome from "@/components/emi-calculator";
import Partners from "@/components/partners";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <div className="max-w-7xl mx-auto mt-6 flex flex-col gap-10  sm:gap-16 lg:gap-20">
        <EmblaCarousel />
        <Stats />
        <ServicesPage />
        <CompanyProfile />

        <Partners />
        <HowItWorks />
        <Testimonials />
        <ContactUs />
      </div>
    </div>
  );
}
