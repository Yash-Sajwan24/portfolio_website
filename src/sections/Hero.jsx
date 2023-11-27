import {motion} from "framer-motion";
import React, {useEffect, useRef} from "react";
import Typewriter from "typewriter-effect";

const startVariants = {
	initial: {
		opacity: 0,
	},
	end: {
		opacity: 1,
		transition: {
			type: "tween",
			bounce: 0.4,
			duration: 0.4,
			delay: 1,
		},
	},
};

const options = {
  strings: [
    "    ",
    "Full-Stack Developer",
    "Open Source Developer",
    "React Specialist",
    "Next.js Developer",
    "Web Developer",
    "Astronomer",
    "App Developer",
    "Future Senior Dev",
    "Aspiring Principal Engineer",
  ],
  autoStart: true,
  loop: true,
};

function Hero() {
	const btnRef = useRef(null);

	useEffect(() => {
		let rect = btnRef.current.getBoundingClientRect();
	}, []);
	return (
    <motion.section
      id="hero"
      className="h-screen max-w-[1000px]  text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular"
      initial="initial"
      animate="end"
      variants={startVariants}
    >
      <div className="">
        <h1 className="text-theme-green mb-[15px] ml-[4px] ">
          Hi, my name is{" "}
        </h1>
      </div>
      <h2 className="name-heading font-calibreRegular text-[40px] font-bold text-theme-gray-light pt-0">
        Yash Sajwan
      </h2>
      <h3 className="text-lg md:text-2xl lg:text-3xl text-textDark mt-2">
        <Typewriter options={options} />
      </h3>
      <p className="bio max-w-[540px] mt-[20px] text-[20px] text-theme-gray-deep font-calibreRegular">
        Experienced in developing and deploying full-functional, robust and
        scalable web applications from base to production
      </p>
      <div
        ref={btnRef}
        className="flex items-center border rounded cursor-pointer w-fit mt-9 border-theme-green hover:bg-theme-green/10 text-theme-green"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Yash-Sajwan24"
          className=" px-[50px] py-[18px]"
        >
          Let's start with Github
        </a>
      </div>
    </motion.section>
  );
}

export default Hero;
