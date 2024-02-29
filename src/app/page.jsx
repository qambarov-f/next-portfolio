"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/*image container*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/main.png"
            alt=""
            fill
            quality={100}
            className="object-contain"
          />
        </div>
        {/*text container*/}
        <div className="h-1/2  lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <h1 className="text-gray-300 text-4xl md:text-6xl font-bold ">
            Developing code experience, coding future.
          </h1>
          {/* description */}
          <p className="text-gray-300 md:text-xl ">
            Enhance your coding experience while shaping your future. Step into
            the world of tomorrow&apos;s coding by crafting creative solutions.
            Explore my portfolio and learn more about my projects.
          </p>
          {/* buttons */}
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring-1 ring-yellow-400 bg-yellow-400 text-gray-900 font-bold">
              View my work
            </button>
            <button className="p-4 rounded-lg ring-1 ring-yellow-400 font-bold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
