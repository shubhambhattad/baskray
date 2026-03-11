import Link from "next/link";
import { Button } from "./ui/button";

const CompanyProfile = () => {
  return (
    <section className="bg-gradient-to-b from-white to-orange-50/30 py-16 lg:py-24">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-16">
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] blur-2xl group-hover:bg-primary/20 transition-all duration-500" />
            <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img
                className="w-full h-full object-cover"
                src="/banner.jpg"
                alt="Bask Ray Manufacturing Facility"
              />
            </div>

            {/* Subtle floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-200/20 rounded-full blur-3xl" />
          </div>

          <div className="lg:pl-8">

            <div className="space-y-6 text-lg leading-relaxed text-gray-600">
              <p>
                Incorporated on April 19, 2024, <span className="font-semibold text-gray-900">Bask Ray</span> is a visionary nutraceutical company dedicated to delivering premium-quality nutraceutical products across both domestic and international markets.
              </p>

              <p>
                The name “Bask Ray” is inspired by the Sanskrit word <span className="text-primary font-medium">“Bhaskar”</span>, meaning Sun — a symbol of life, energy, and rejuvenation. Together, it represents our core philosophy: To illuminate lives through innovations as pure and powerful as sunlight.
              </p>

              <p>
                As we build our presence in the wellness space, we aspire to become a trusted global partner, known for our integrity, innovation, and unwavering dedication to excellence.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <Link href="/about-us">
                <Button size="lg" className="px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-primary/30 transition-all">
                  Know More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
