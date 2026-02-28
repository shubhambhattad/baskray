import Link from "next/link";
import { Button } from "./ui/button";

const CompanyProfile = () => {
  return (
    <section className=" bg-white ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-24 gap-y-12">
          <div className="relative lg:mb-12">
            <img
              className="absolute -right-0 -bottom-8 xl:-bottom-12 xl:-right-4"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/dots-pattern.svg"
              alt=""
            />
            <div className="pl-12 pr-6">
              <img
                className="relative"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/content/3/girl-working-on-laptop.jpg"
                alt=""
              />
            </div>
            <div className="absolute left-0 pr-12 bottom-8 xl:bottom-20">
              <div className="max-w-xs bg-orange-500 rounded-lg sm:max-w-md xl:max-w-md">
                <div className="px-3 py-4 sm:px-5 sm:py-8">
                  <div className="flex items-start">
                    <p className="text-3xl sm:text-4xl">👋</p>
                    <blockquote className="ml-5">
                      <p className="text-sm font-medium text-white sm:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        ”
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="2xl:pl-16">
            <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl lg:leading-tight uppercase">
              Who We Are
            </h2>
            <p className="text-base leading-relaxed text-gray-900 mt-9">
              We&apos;re a leading nutraceutical manufacturing facility committed to
              crafting premium, science-backed supplements that fuel healthier
              lives. With cutting-edge technology and stringent quality controls,
              we partner with global brands to deliver innovative health solutions
              that meet the highest standards of purity, potency, and efficacy.
            </p>
            <p className="mt-6 text-base leading-relaxed text-gray-900">
              Our facility adheres to stringent international standards, including
              HACCP, USFDA, HALAL, and ISO 22000:2018, ensuring the highest levels
              of quality, safety, and compliance. Backed by a dedicated R&D team.
            </p>
            <Link href="/about-us">
              <Button className="mt-4">Know More</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfile;
