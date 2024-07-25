import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className=" min-h-screen">
      <header className="bg-primary text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-2">About Bask-Ray</h1>
          <p className="text-xl">Your Trusted Partner in xyzs</p>
        </div>
      </header>

      {/* <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Who We Are
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <p className="text-gray-700 leading-relaxed">
                Welcome to S B FinWise Consulting, a premier name in the retail
                loan industry, renowned for our expertise and commitment to
                excellence. Founded on the principles of integrity and
                customer-centricity, we have emerged as a leading franchise
                specializing in mortgages, home loans, and a wide range of
                financial solutions.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                quality={100}
                width={1000}
                height={1000}
                alt="about us "
                src="/who-we-are.jpg"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Our Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-gray-700">
                  To make the loan acquisition process as seamless and
                  stress-free as possible for our clients. We aim to empower you
                  with the knowledge and tools necessary to make informed
                  financial decisions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
                <p className="text-gray-700">
                  We envision a future where securing a loan is a transparent,
                  efficient, and rewarding experience for every individual and
                  business. Our vision is to be the most trusted and preferred
                  loan consultancy.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-primary mb-6">
            What We Do
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Home Loans",
              "Commercial Property Loans",
              "Loan Against Property",
              "Lease Rental Discounting",
              "SME Loans",
              "Real Estate Consulting",
            ].map((service, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-primary mb-6">
            Our Unique Approach
          </h2>
          <div className=" rounded-lg p-8">
            <ul className="list-disc list-inside space-y-4 text-gray-700">
              <li>
                <span className="font-semibold">Customer-Centric Service:</span>{" "}
                Our team provides door-step service, ensuring convenience and
                personalized attention.
              </li>
              <li>
                <span className="font-semibold">
                  Advanced Loan Evaluation System:
                </span>{" "}
                We utilize sophisticated technology to accurately calculate your
                loan eligibility.
              </li>
              <li>
                <span className="font-semibold">
                  Integrity and Transparency:
                </span>{" "}
                We provide authentic information and advice, ensuring
                you&apos;re fully informed at every step.
              </li>
            </ul>
          </div>
        </section>
      </main> */}
    </div>
  );
};

export default AboutUs;
