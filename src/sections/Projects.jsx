import React from "react";
import {motion, Variants} from "framer-motion";

import {animateSection} from "../utils/animateSection";

import {data} from "../data/projects.js";
const projects = data.projects;

const cardVariants = (percent) => {
	return {
		offscreen: {
			width: 0,
		},
		onscreen: {
			width: `${percent}%`,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 0.8,
			},
		},
	};
};

function Projects() {
	return (
    <section
      id="projects"
      className="py-[80px] sm:py-[100px] max-w-[1000px]   text-white/25 flex flex-col justify-center   mx-auto font-sfMonoRegular overflow-x-hidden"
    >
      <div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
        <div className="text-theme-green flex items-center text-[15px] sm:text-[20px]">
          04.{" "}
        </div>
        <h1 className="text-theme-gray-light  min-w-fit ml-[10px] text-[26px] sm:text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">
          Some things I've built
        </h1>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="project-box flex flex-col  justify-center items-center min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium mb-[40px] sm:mb-[100px]"
        >
          <div
            className={`flex flex-row justify-start ${
              index % 2 !== 0 ? "sm:justify-start" : "sm:justify-end"
            } w-full relative lg:mt-[50px] `}
          >
            <div
              className={`absolute  top-1/2 translate-y-[-50%] ${
                index % 2 !== 0 && "flex justify-end"
              } object-cover  w-full h-full sm:w-fit sm:h-fit opacity-20 sm:opacity-100`}
            >
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:max-w-[60%] h-full image-top  "
              >
                <div className="image-cover w-full h-full sm:w-fit sm:h-fit  ">
                  <img
                    src={project.img}
                    alt="JobbedIn home page"
                    className="object-cover w-full h-full sm:w-fit sm:h-fit "
                  />
                </div>
              </a>
            </div>
            <div
              className={`w-full sm:max-w-[70%] md:max-w-[60%] lg:max-w-[50%] p-6 sm:p-0 flex flex-col items-start ${
                index % 2 !== 0 ? "sm:items-start" : "sm:items-end"
              }  h-full  z-10`}
            >
              <div className="text-theme-green my-2 font-sfMonoRegular text-[13px] ">
                Featured Project
              </div>
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="font-calibreSemiBold text-[28px] text-theme-gray-light mb-5 hover:text-theme-green cursor-pointer "
              >
                {project.title}
              </a>
              <div className="relative w-full project-card">
                <div className="sm:p-6   sm:bg-theme-light-navy rounded text-theme-light-slate z-10 text-[18px] sm:text-[20px] ">
                  <p>{project.description}</p>
                </div>
              </div>
              <div className=" relative w-full z-10 mt-[25px] ">
                <div
                  className={`flex flex-row flex-wrap justify-start  ${
                    index % 2 !== 0 ? "sm:justify-start" : "sm:justify-end"
                  } my-[10px] sm:my-0 rounded text-theme-lightest-slate z-11`}
                >
                  {project.technologies.map((technology, i) => (
                    <div
                      key={i}
                      className={`${
                        index % 2 !== 0
                          ? "sm:mr-[20px]"
                          : "sm:ml-[20px] sm:mr-0"
                      } mr-[20px]   mb-[5px] text-[13px] font-sfMonoRegular`}
                    >
                      {technology}
                    </div>
                  ))}
                </div>
              </div>
              <div
                className={`flex flex-row items-center translate-x-[-10px]  ${
                  index % 2 !== 0
                    ? "sm:translate-x-[-10px]"
                    : "sm:translate-x-[10px]"
                }`}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[40px] h-[40px] cursor-pointer p-[10px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-theme-gray-light hover:stroke-theme-green "
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href={project.yt}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[40px] h-[40px] cursor-pointer p-[10px]"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 1024 1024"
                    height="1.2em"
                    width="1.2em"
                    className="text-theme-gray-light hover:stroke-theme-green -mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M940.736 189.696C912.992 169.728 835.68 143.2 511.728 143.2c-347.152 0-398.656 30.464-415.185 40.432C8.575 236.479.223 470.447-.544 517.887.512 580.545 10.64 789.008 96.48 840.577c16.497 9.935 67.712 40.223 415.248 40.223 324.16 0 401.376-26.4 429.008-46.288 74.976-53.935 83.6-239.68 83.808-317.439-.192-62.528-6.752-271.872-83.807-327.376zm-37.376 592.88c-11.152 8.032-75.186 34.223-391.634 34.223-305.936 0-370.128-23.744-382.256-31.056-30.88-18.528-63.472-116.88-66.031-268.032 2.528-150.816 35.568-260.912 66.097-279.216 12.16-7.344 76.591-31.28 382.19-31.28 316.192 0 380.4 26.369 391.633 34.433 27.409 19.744 56.752 123.68 57.184 275.632-.432 154.336-29.968 245.712-57.184 265.296zM720.415 486.83L432.481 310.141a32.003 32.003 0 0 0-32.257-.464 32.016 32.016 0 0 0-16.288 27.872v353.44a32.016 32.016 0 0 0 32 32 32.02 32.02 0 0 0 16.527-4.592L720.4 541.645c9.6-5.807 15.472-16.19 15.472-27.407s-5.856-21.632-15.456-27.408zM447.953 634.301V394.204l194 120.032z"></path>
                  </svg>
                </a>
                <a
                  href={project.website}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[42px] h-[38px] cursor-pointer p-[10px]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-theme-gray-light hover:stroke-theme-green mt-[-4px]"
                  >
                    <title>External Link</title>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

function animatedSection() {
	return animateSection(Projects);
}

export default animatedSection;
