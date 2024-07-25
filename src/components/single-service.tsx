import Image from "next/image";
import React from "react";
import { PortableText } from "@portabletext/react";
import { RichTextComponent } from "./RichTextComponent";

const SingleService = ({ service }: any) => {
  return (
    <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
      <div className="xl:w-2/6 lg:w-2/5 w-80 ">
        <Image
          className="w-full"
          alt="img of a girl posing"
          width={1000}
          height={1000}
          src={service.imageURL}
        />
      </div>

      <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
        <div className="border-b border-gray-200 pb-6">
          <p className="text-sm leading-none text-gray-600">Home Loans</p>
          <h1
            className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
          >
            {service.title}
          </h1>
        </div>

        <div>
          {service?.description ? (
            <PortableText
              value={service.description}
              components={RichTextComponent}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SingleService;
