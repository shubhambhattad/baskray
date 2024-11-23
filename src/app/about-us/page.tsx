"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Rocket, Eye } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Hero />
      <Mission />
      <Stats />
      <Capabilities />
      <Directors />
      <Certifications />
    </div>
  );
}

function Hero() {
  return (
    <section className="py-20 text-center">
      <motion.h1
        className="text-5xl font-bold mb-6 text-gray-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Your Trusted Partner for Nutraceutical Manufacturing
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        We specialize in the manufacturing of high-quality nutraceutical
        products designed to support various health needs. With a focus on
        precision, safety, and quality, our state-of-the-art facility produces a
        diverse range of products to meet market demands.
      </motion.p>
    </section>
  );
}

function Mission() {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-100 to-yellow-200 text-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-yellow-800"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission & Vision
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center mb-4">
              <Rocket className="w-8 h-8 text-yellow-500 mr-4" />
              <h3 className="text-2xl font-bold text-yellow-700">Mission</h3>
            </div>
            <p className="text-gray-600">
              To enhance the quality of life by providing over 600 specialized
              nutraceutical solutions tailored to meet the diverse health needs
              of individuals. We are dedicated to producing safe, effective, and
              innovative products that support specific wellness goals,
              empowering people to take control of their health naturally.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-yellow-500"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center mb-4">
              <Eye className="w-8 h-8 text-yellow-500 mr-4" />
              <h3 className="text-2xl font-bold text-yellow-700">Vision</h3>
            </div>
            <p className="text-gray-600">
              To be the leading global provider of personalized nutraceutical
              solutions, recognized for our commitment to innovation, quality,
              and customer-centricity. We strive to continuously expand our
              product range, ensuring that individuals with varied health
              criteria can access the targeted support they need to lead
              healthier, more fulfilling lives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard title="Products Delivered" value={1000000} suffix="+" />
          <StatCard title="Clients Served" value={500} suffix="+" />
          <StatCard title="Product Variations" value={600} suffix="+" />
          <StatCard title="Employees" value={40} suffix="+" />
        </div>
      </div>
    </section>
  );
}

function StatCard({
  title,
  value,
  suffix = "",
}: {
  title: string;
  value: number;
  suffix?: string;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center text-gray-600">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-4xl font-bold text-center text-blue-600">
          <CountUp end={value} duration={2.5} separator="," />
          {suffix}
        </p>
      </CardContent>
    </Card>
  );
}

function Capabilities() {
  const capabilities = [
    {
      name: "Protein Powders",
      description:
        "Our protein powders are crafted with premium ingredients and cater to different dietary needs and fitness goals. Available in various flavours, formulations, and packaging options.",
      icon: "🥛",
    },
    {
      name: "Sachets",
      description:
        "We manufacture convenient, single-use sachets filled with essential vitamins, minerals, herbal extracts, and nutritional blends. Ideal for on-the-go consumers looking for a quick health boost.",
      icon: "📦",
    },
    {
      name: "Tablets",
      description:
        "Our high-quality tablet manufacturing process ensures precise dosage and consistent potency. We produce tablets for a wide range of health benefits, including immunity support, bone health, and overall wellness.",
      icon: "💊",
    },
    {
      name: "Liquids",
      description:
        "We specialise in the production of liquid nutraceuticals that provide fast-absorbing, easy-to-consume options. Our liquid products can be customised with various flavours and concentrations to suit different consumer preferences.",
      icon: "🧪",
    },
    {
      name: "Capsules",
      description:
        "Our encapsulated products are designed for optimal bioavailability and ease of use. We offer custom formulations, including herbal extracts, vitamins, minerals, and probiotics, tailored to meet specific health needs.",
      icon: "💊",
    },
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Manufacturing Capabilities
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-yellow transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="text-4xl mr-4">{capability.icon}</span>
                    {capability.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{capability.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Directors() {
  const directors = [
    {
      name: "Mr. Vinod Chandak",
      education: "B. Pharm, MBA",
      experience: "25 years",
      background:
        "Director at MediHymns Pharma Pvt Ltd, Meditune Lifesciences Pvt Ltd, Meditune Medexim Pvt Ltd, and Bask-ray India Pvt Ltd",
      achievements:
        "Successfully launched the concept of protein powder and innovative nutraceutical solutions for hair therapy in India",
      expertise: "Marketing, Fund Management, New Product Development",
    },
    {
      name: "Mr. Amol Tambekar",
      education: "BSc",
      experience: "25 years",
      background:
        "Director at Majstro Healthcare OPC Pvt Ltd, SS&H India Pvt Ltd, Bask Ray India Pvt Ltd",
      expertise:
        "New Customer Development and Retention, Critical Decision Management",
    },
    {
      name: "Mr. Brijesh Kulkarni",
      education: "BSc",
      experience: "27 years",
      background:
        "Sambrik Medisciences Pvt Ltd, Attune Sales Corporation, Bask Ray India Pvt Ltd",
      expertise: "Critical Decision Handling, Fund Management, Human Resource",
    },
    {
      name: "Mr. Sandeep Mahamuni",
      education: "BSc",
      experience: "27 years",
      background:
        "Sambrik Medisciences Pvt Ltd, SS&H India Pvt Ltd, Navakar Lifesciences, True Mind Healthcare Pvt Ltd, The Perfect Distributor, Bask Ray India Pvt Ltd",
      expertise: "Multitasking, Critical Fund Management, Execution",
    },
    {
      name: "Mr. Satish Patri",
      education: "BA",
      experience: "20 years",
      background: "Director at Honney Bro Pvt Ltd, Bask Ray India Pvt Ltd",
      expertise: "Technical, Fund Raising, Allocation",
    },
    {
      name: "Mr. Rohit Tiwari",
      education: "B. Pharm",
      experience: "19 years",
      background: "Director at Kregar Pharma Pvt Ltd, Bask Ray India Pvt Ltd",
      expertise: "New Business Development, Human Resource",
    },
    {
      name: "Mr. Sandeep Valsangkar",
      education: "B. Com, DBM",
      experience: "18 years",
      background:
        "Director at Sambrik Medisciences Pvt Ltd, Attune Sales Corporation, Bask Ray India Pvt Ltd",
      expertise: "Accounting",
    },
    {
      name: "Mr. Madhav Kondhe",
      education: "D. Pharm, BSc",
      experience: "14 years",
      background:
        "Director at Sambrik Medisciences Pvt Ltd, Attune Sales Corporation, Shree Rudra Agency, Bask Ray India Pvt Ltd",
      expertise: "Fund Management, Sales, Marketing",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-100 to-yellow-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Directors
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {directors.map((director, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-yellow transition-shadow duration-300">
                <CardHeader>
                  <Image
                    src={`/placeholder.svg?height=200&width=200`}
                    alt={director.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 border-4 border-yellow-400"
                  />
                  <CardTitle className="text-center text-xl font-bold text-yellow-700">
                    {director.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-yellow-600">
                      Education:
                    </span>{" "}
                    {director.education}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-yellow-600">
                      Experience:
                    </span>{" "}
                    {director.experience}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-semibold text-yellow-600">
                      Background:
                    </span>{" "}
                    {director.background}
                  </p>
                  {director.achievements && (
                    <p className="text-sm text-gray-600 mb-2">
                      <span className="font-semibold text-yellow-600">
                        Key Achievements:
                      </span>{" "}
                      {director.achievements}
                    </p>
                  )}
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-yellow-600">
                      Expertise:
                    </span>{" "}
                    {director.expertise}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  const certificates = [
    "FSSAI",
    "GST",
    "GMP",
    "ISO 9001:2015",
    "Labour License",
    "DISH License (Plant Layout Approval and Factory)",
  ];

  return (
    <section className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold mb-10 text-center text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Certifications
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Badge
                variant="outline"
                className="text-lg py-3 px-6 bg-white border-yellow-400 text-yellow-700 shadow-yellow hover:bg-yellow-100 transition-all duration-300"
              >
                {cert}
              </Badge>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
