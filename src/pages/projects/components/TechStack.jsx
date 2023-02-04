import React from "react";

const TechStack = ({ icon, iconName }) => {
  return (
    <li className="flex text-[0.75rem] md:text-[0.9rem] items-center gap-2 py-1 px-1 md:px-3 rounded-xl text-white bg-[rgba(107,77,255,0.17)] select-none ">
      <i className={`text-white ${icon}`} />
      <span>{iconName}</span>
    </li>
  );
};

export default TechStack;
