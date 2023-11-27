import React from "react";
import { RiGithubLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, gitLink, liveLink, listItems }) => {
  return (
    <div className="w-full max-w-[320px] min-w-[280px] h-72 rounded-lg bg-[#112240] p-6 flex flex-col justify-center gap-6 gap-y-4 hover:-translate-y-2 transition-transform duration-300 group">
      {/* Icon-Links */}
      <div className="flex justify-between items-center">
        {/* GITHUB LINK */}
        <a href={gitLink} rel="noreferrer" target="_blank">
          <RiGithubLine className="text-white text-2xl hover:text-textGreen" />
        </a>

        {/* LIVE LINK */}
        <a href={liveLink} rel="noreferrer" target="_blank">
          <FiExternalLink className="text-white text-2xl hover:text-textGreen" />
        </a>
      </div>

      {/* Text Portion  */}
      <div>
        {/* TITLE */}
        <a href={liveLink} rel="noreferrer" target="_blank">
          <h2 className="text-xl font-titleFont font-semibold tracking-wide text-white group-hover:text-textGreen">
            {title}
          </h2>
        </a>

        {/* DESCRIPTION */}
        <p className="text-sm mt-3 text-white">{description}</p>
      </div>

      {/* TECH STACK */}
      <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
        {listItems.map((item, i) => (
          <li className="hover:text-textGreen cursor-pointer text-sm" key={i}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
