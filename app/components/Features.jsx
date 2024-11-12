"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <div className="min-h-screen min-w-screen section" id="features" >
      <div className="w-[95vw] h-auto">
        {/* Header Section */}
        <div className="w-full flex flex-col lg:flex-row justify-start items-start lg:justify-between p-6 lg:p-10">
          <h1 className="text-3xl lg:text-5xl font-semibold max-w-[90vw] text-neutral-950 lg:max-w-[40vw] text-center lg:text-left">
            Transforming Ideas into Digital Experiences.
          </h1>
          <p className="text-center lg:text-right mt-5 text-neutral-900 lg:mt-0 lg:max-w-[40vw] text-lg font-light">
            At Escape Creatives, we blend innovation with strategy to deliver
            tailored solutions that elevate your brand's digital presence. Our
            focus is on creating engaging and impactful experiences that
            resonate with your audience.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="flex flex-col lg:flex-row w-full gap-6 p-10">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-neutral-950 h-auto lg:h-[30vh] flex justify-center flex-col w-full py-5 px-10 rounded-3xl"
          >
            <h1 className="text-3xl font-semibold text-white mb-5">
              100% Client Satisfaction
            </h1>
            <p className="text-white mt-3 max-w-[90%]">
              We prioritize client success with our tailored solutions, ensuring
              every project aligns with your vision. Our dedicated team is here
              to turn your ideas into reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='bg-neutral-950 h-[30vh] w-full bg-[url("/feature-image-1.png")] bg-cover py-5 px-10 rounded-3xl'
          >
            {/* Placeholder for future image */}
          </motion.div>
        </div>

        {/* Additional Features Section */}
        <div className="flex flex-col lg:flex-row gap-5 p-10 -my-5">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-transparent border-[1px] border-neutral-950 rounded-2xl h-fit p-5"
          >
            <h1 className="text-neutral-900 font-semibold text-2xl mb-8">
              Creative Strategies
            </h1>
            <p className="text-neutral-700 text-sm">
              Our team leverages creative thinking to develop marketing
              strategies that captivate and convert. We focus on achieving
              results that help your brand stand out.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className='bg-transparent bg-[url("/feature-image-2.png")] bg-cover bg-top rounded-2xl h-fit p-5'
          >
            <h1 className="text-neutral-900 font-semibold text-2xl invisible mb-8">
              Innovative Design
            </h1>
            <p className="text-neutral-700 text-sm invisible">
              Blending creativity with technology to create visually compelling
              and user-friendly designs tailored to your business goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-violet-300 rounded-2xl h-fit p-5"
          >
            <h1 className="text-neutral-900 font-semibold text-2xl mb-8">
              Reliable Support
            </h1>
            <p className="text-neutral-700 text-sm">
              We are committed to providing ongoing support and maintenance,
              ensuring your digital assets remain optimized and up-to-date.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Features;
