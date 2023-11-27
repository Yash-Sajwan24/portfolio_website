import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
import { otherProjects } from "../../data/otherProjects";

const SmallProjects = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 py-10">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-2xl text-white sm:text-3xl font-titleFont font-semibold">
          Other Noteworthy Projects
        </h2>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 lgl:px-10">
        {/* PROJECT 1  */}
        {otherProjects.map((project, index) => {
          if (index < 6) {
            return (
              <ProjectCard
                title={project.title}
                description={project.description}
                gitLink={project.gitLink}
                liveLink={project.liveLink}
                listItems={project.listItems}
              />
            );
          }
          return (console.log());
        })}

        {showMore && (
          <>
            {/* PROJECT 7 */}
            {otherProjects.map((project, index) => {
              if (index > 6) {
                return (
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.9, delay: 0.3 }}
                  >
                    <ProjectCard
                      title={project.title}
                      description={project.description}
                      gitLink={project.gitLink}
                      liveLink={project.liveLink}
                      listItems={project.listItems}
                    />
                  </motion.div>
                );
              }
              return (console.log(""));
            })}
          </>
        )}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen Text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default SmallProjects;
