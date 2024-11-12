"use client";
import { MoveUpRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  const cards = [
    {
      title: "Website Development",
      description:
        "We create modern, responsive websites tailored to your business needs, ensuring a seamless user experience that drives engagement and conversions.",
      bgColor: "#b1f5a6",
      points: [
        "Custom Website Design",
        "E-commerce Solutions",
        "Performance Optimization",
      ],
    },
    {
      title: "Social Media Marketing",
      description:
        "Boost your brand's presence on platforms like Instagram, Facebook, and LinkedIn with our targeted social media strategies designed to increase engagement and drive conversions.",
      bgColor: "#b0fbee",
      points: [
        "Content Creation & Scheduling",
        "Paid Advertising Campaigns",
        "Analytics & Insights",
      ],
    },
    {
      title: "Search Engine Optimization (SEO)",
      description:
        "Enhance your website’s visibility on search engines with our proven SEO techniques, ensuring your business ranks higher and attracts organic traffic.",
      bgColor: "#d4a6f5",
      points: ["Keyword Optimization", "On-Page SEO", "Backlink Building"],
    },
  ];

  return (
    <div className="min-h-screen h-auto min-w-screen section" id="services" >
      <div className="bg-[url('/service-bg.png')] bg-cover flex flex-col justify-evenly w-full h-auto lg:h-[95vh] rounded-2xl">
        {/* Section Header */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:justify-between p-6 lg:p-10">
          <h1 className="text-3xl lg:text-5xl font-semibold max-w-[90vw] lg:max-w-[40vw] text-center lg:text-left">
            Driving Results with Innovative Digital Solutions
          </h1>
          <p className="text-center lg:text-right mt-5 lg:mt-0 lg:max-w-[40vw] text-lg font-light">
            At Escape Creatives, we empower brands with tailored digital
            marketing strategies and cutting-edge website solutions. Let us help
            you reach new heights with our expertise and dedication to your
            success.
          </p>
        </div>

        {/* Services Cards */}
        <div className="lg:px-10 py-5 lg:py-0 flex flex-col items-center lg:flex-row justify-evenly gap-5">
          {cards.map((card, index) => (
            <motion.div
              initial={{ y: -100 * index, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              style={{ backgroundColor: card.bgColor }}
              key={index}
              className="w-full max-w-[340px] lg:max-w-[400px] h-auto lg:h-[400px] rounded-2xl p-6 lg:p-10"
            >
              <div className="flex flex-row justify-between">
                <h1 className="text-neutral-800 font-semibold text-xl lg:text-3xl max-w-[70%] mb-5 lg:mb-7">
                  {card.title}
                </h1>
                <div className="bg-neutral-800 rounded-full h-8 w-8 lg:h-10 lg:w-10 flex justify-center items-center p-2 lg:p-3">
                  <MoveUpRight />
                </div>
              </div>
              <p className="text-xs lg:text-sm text-neutral-800 border-b-2 border-[#140909] pb-5 lg:pb-7">
                {card.description}
              </p>

              <ul className="mt-4 lg:mt-6 list-disc list-inside text-neutral-800">
                {card.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
