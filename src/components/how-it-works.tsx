const HowItWorks = () => {
  const steps = [
    {
      title: "Customer-Centric Approach",
      description:
        "We listen, innovate, and deliver tailored solutions that meet your unique needs and exceed expectations.",
    },
    {
      title: "Integrity & Transparency",
      description:
        "We operate with honesty, ethics, and openness, ensuring trust and accountability in every interaction.",
    },
    {
      title: "Quality-Driven Process",
      description:
        "From formulation to packaging, our stringent quality controls ensure purity, potency, and compliance with global standards.",
    },
    {
      title: "Innovative Solutions",
      description:
        "Our expert R&D team crafts science-backed formulations, leveraging cutting-edge technology to bring your product vision to life.",
    },
    {
      title: "Seamless Collaboration",
      description:
        "We partner closely with you, ensuring timely delivery and flexibility to meet your business goals.",
    },
  ];

  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            At our nutraceutical manufacturing facility, we&apos;re committed to
            delivering excellence in every step:
          </p>
        </div>

        <div className="mt-12 lg:mt-20">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-primary rounded-full shadow">
                  <span className="text-xl font-semibold text-primary">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  {step.title}
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
