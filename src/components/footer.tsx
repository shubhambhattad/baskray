// components/Footer.js
import { navigation, supportLinks } from "@/constants/navigation";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="py-10  sm:pt-16 lg:pt-24 w-full">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-4 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            <Image
              className="h-20 w-auto"
              quality={100}
              src="/bask-ray-logo.png"
              height={80}
              width={200}
              alt="logo"
            />

            <p className="text-base leading-relaxed text-gray-600 mt-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates doloribus nobis esse assumenda sit sunt consequuntur
              libero quod
            </p>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-2 ">
            <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
              Links
            </p>

            <ul className="mt-6 flex gap-4 flex-wrap">
              {navigation.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="flex text-base text-black transition-all duration-200 hover:text-primary focus:text-primary"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-200" />

        <a
          href="https://www.priyamit.co.in/home"
          target="_blank"
          className="text-sm text-center text-primary flex items-center justify-center"
        >
          <span className="mx-2">
            All rights reserved.Priyam IT Services Private Limited
          </span>
        </a>
      </div>
    </section>
  );
};

export default Footer;
