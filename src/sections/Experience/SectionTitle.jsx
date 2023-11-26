import React from "react";

const SectionTitle = ({ titleName, titleNumber }) => {
  return (
    <div>
      <h2 className="pt-50 font-titleFont text-2xl font-semibold flex text-white items-center">
        <span className="text-case md: text-lg text-textGreen mr-2">
          {titleNumber}.
        </span>{" "}
        {titleName}
        <span className="hidden md:inline-flex md:w-60 lgl:w-72 h-[0.5px] bg-gray-700 ml-7"></span>
      </h2>
    </div>
  );
};

export default SectionTitle;
