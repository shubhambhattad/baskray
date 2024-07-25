import { Button } from "./ui/button";
import Heading from "./ui/heading";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Textarea } from "./ui/textarea";

const ContactUs = () => {
  return (
    <div id="contact-us">
      <section className="bg-gray-100 mx-auto max-w-5xl" id="contact">
        <div className=" px-4 py-8 sm:px-6 lg:px-8 ">
          <div className="mb-4">
            <div className="mb-6 text-center sm:text-center md:mx-auto md:mb-12">
              <Heading title="Get in Touch" />
            </div>
          </div>
          <div className="flex items-stretch justify-center ">
            <div className="flex flex-wrap gap-5 w-full">
              <div className=" pr-6 flex-1">
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Our Office
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Third Floor, abc colony
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Balgandharav, Shivajinagar, Pune
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                        <path d="M15 7a2 2 0 0 1 2 2"></path>
                        <path d="M15 3a6 6 0 0 1 6 6"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Call Us
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        +91 982267858558
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-primary text-gray-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6"
                      >
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                        <path d="M12 7v5l3 3"></path>
                      </svg>
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                        Mail Us:
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        abc@gmail.com
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <Separator orientation="vertical" className="hidden md:block" />
              <hr className="md:hidden block text-primary" />
              <div className="card h-fit flex-1" id="form">
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <Input
                          type="text"
                          id="name"
                          placeholder="Your name"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          htmlFor="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Your email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        htmlFor="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <Textarea
                        id="textarea"
                        name="textarea"
                        cols={30}
                        rows={5}
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      ></Textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Google Maps Section */}
      <section className="bg-gray-100 mx-auto max-w-5xl py-8">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <Heading title="Our Location" />
          </div>
          <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1c2c1388aad611d%3A0xb4b05cb651fbf927!2sS%20B%%20Consulting!5e0!3m2!1sen!2sin!4v1721928417006!5m2!1sen!2sin"
              className="absolute top-0 left-0 w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-4 text-center text-gray-600">
            <p>
              Visit us at our office to discuss your financial needs in person.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
