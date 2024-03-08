"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
// import aboutImage from ''
  


const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-auto lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2 ">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/about.jpg"
              alt=""
              width={200}
              height={200}
              className="w-56 h-56 rounded-full object-cover"
            />
            {/* biography title */}
            <h1 className="font-bold text-2xl">Biography</h1>
            {/* biography description */}
            <p className="text-lg">
              A motivated and creative individual seeking to embark on a
              fulfilling career. With a strong willingness to learn and grow, I
              am eager to take on new challenges and opportunities. As a
              self-starter, I possess excellent problem-solving skills and have
              a proven ability to work well under pressure. While I may be new
              to the workforce, I am committed to delivering high-quality work
              and contributing to the success of any team I am a part of. I am
              confident that my positive attitude, adaptability, and strong work
              ethic will make me a valuable asset to any organization.
            </p>
            {/* biography quote */}
            <span className="italic text-gray-300">
              I don&apos;t follow best practices. I set them!
            </span>
            {/* biography sign */}
            <div className="self-end">
              <Image src="/sign.png" alt="sign" height={300} width={200} />
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#e0bb49"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#e0bb49" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#e0bb49"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skill title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Skills
            </motion.h1>

            {/* skill list */}
            <motion.div
              className=" flex gap-4 flex-wrap"
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              // transition={{ delay: 0.2 }}
            >
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                HTML&CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800 hover:text-gray-500 font-bold">
                React.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Version Control
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                SEO
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Redux
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Regex
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                npm.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Github
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Node.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Webpack
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Styled Component
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Tailwind css
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                jQuery
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Git
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                API
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                JSON
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Adobe Illustrator
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Adobe PremierePro
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                1C
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                MS Office
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                PropTypes
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-yellow-400 text-gray-800  hover:text-gray-500 font-bold">
                Agile
              </div>
            </motion.div>
            <br />
            {/*skill scroll svg */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#e0bb49"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#e0bb49" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#e0bb49"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>

          {/* experience container  */}
          <div
            className="flex flex-col gap-12 justify-center  pb-48"
            ref={experienceRef}
          >
            {/* experience title */}
            <motion.h2
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              Experience
            </motion.h2>
            {/* experience list */}

            <motion.div
              className=""
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {/* experience list item 1*/}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3 ">
                  {/* job title */}
                  <div className="p-3 bg-white text-gray-900 font-semibold rounded-b-lg rounded-s-lg ">
                    Project Manager at UP Teach
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    Here, with my team, we manage projects and websites for
                    customers.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-sm font-semibold">2024-Present</div>
                  {/* job company */}
                  <div className="p-1 rounded text-sm bg-white font-semibold text-gray-800 w-fit">
                    UP Teach / Garage Academy
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6 flex justify-center">
                  {/* line */}
                  <div className="w-1 bg-gray-600 h-full rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-gray-900 -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3"></div>
              </div>

              {/* experience list item 2*/}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3 "></div>
                {/* Center */}
                <div className="w-1/6 flex justify-center ">
                  {/* line */}
                  <div className="w-1 bg-gray-600 h-full rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-gray-900 -left-2"></div>
                  </div>
                </div>
                {/* Right */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="p-3 bg-white text-gray-900 font-semibold rounded-b-lg rounded-tr-lg ">
                    Project Manager at UPTeach
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    Here, with my team, we manage projects and websites for
                    customers.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-sm font-semibold">2024-Present</div>
                  {/* job company */}
                  <div className="p-1 rounded text-sm bg-white font-semibold text-gray-800 w-fit">
                    UP Teach / Garage Academy
                  </div>
                </div>
              </div>

              {/* experience list item 3*/}
              <div className="flex justify-between h-48 ">
                {/* left */}
                <div className="w-1/3 ">
                  {/* job title */}
                  <div className="p-3 bg-white text-gray-900 font-semibold rounded-b-lg rounded-s-lg ">
                    Project Manager at UPTeach
                  </div>
                  {/* job desc */}
                  <div className="p-3 text-sm italic">
                    Here, with my team, we manage projects and websites for
                    customers.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-sm font-semibold">2024-Present</div>
                  {/* job company */}
                  <div className="p-1 rounded text-sm bg-white font-semibold text-gray-800 w-fit">
                    UP Teach / Garage Academy
                  </div>
                </div>
                {/* Center */}
                <div className="w-1/6  flex justify-center">
                  {/* line */}
                  <div className="w-1 bg-gray-600 h-full rounded relative">
                    {/* circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-yellow-400 bg-gray-900 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
