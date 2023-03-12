import * as React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import { BiCodeAlt } from "react-icons/bi";
import TechStack from "./TechStack";
import { projectDescription } from "../../../helpers/animations";

interface SingleProjectProps {
  extraStack?: React.ReactNode;
  title: string;
  description: string;
  liveLink: string;
  codeLink: string;
  chatStack: {
    icon: string;
    iconName: string;
  }[];
  image: string;
}

const SingleProject: React.FC<SingleProjectProps> = ({
  extraStack = false,
  title,
  description,
  liveLink,
  codeLink,
  chatStack,
  image,
}) => {
  return (
    <motion.article
      variants={projectDescription}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{
        backgroundColor: "#13121267",
        transition: { duration: 0.3 },
      }}
      whileTap={{ scale: 0.95 }}
      className="mx-auto md:mb-0 mb-7  flex w-full flex-col  rounded-2xl  bg-gradient-to-bl from-[rgba(1,87,218,0.15)] to-[rgba(0,0,0,0.01)]  text-white shadow-xl shadow-[#13121267]  "
    >
      <motion.a
        whileHover={{
          backgroundColor: "#2826b0",
          transition: { duration: 0.3 },
        }}
        className="rounded-t-2xl"
        href={liveLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={image}
          className="max-h-[7em] w-full object-cover rounded-t-2xl"
          alt=""
        />
      </motion.a>
      <div className="flex-auto px-6 py-5">
        <span className="mb-2 flex items-center text-sm font-semibold">
          <ul className="flex flex-wrap gap-2 md:gap-2  ">
            {chatStack.map((tech) => (
              <TechStack
                icon={tech.icon}
                iconName={tech.iconName}
                key={tech.icon}
              />
            ))}
            {extraStack}
          </ul>
        </span>
        <h3 className="mt-4 mb-3 text-xl font-semibold xl:text-2xl select-none">
          {title}
        </h3>
        <p className="mb-4 text-base font-light select-none">{description}</p>
        <div className="flex flex-col md:flex-row gap-3 md:gap-10 items-center mt-8">
          <motion.a
            whileHover={{
              scale: 1.03,
              backgroundColor: "#2826b0",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            href={liveLink}
            target="_blank"
            rel="noreferrer"
            className="bg-[#1F1CA1] w-full text-white rounded-xl py-1.5 px-5  font-bold text-[0.9rem] text-center md:text-[1rem] whitespace-nowrap flex justify-center items-center gap-2"
          >
            <FiExternalLink /> View Project
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.03,
              backgroundColor: "#2826b0",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
            href={codeLink}
            target="_blank"
            rel="noreferrer"
            className="bg-[#1F1CA1]  w-full text-white text-center rounded-xl py-1.5 px-5  font-bold text-[0.9rem] md:text-[1rem]  flex  whitespace-nowrap justify-center items-center gap-2"
          >
            <BiCodeAlt /> View Code
          </motion.a>
        </div>
      </div>
    </motion.article>
  );
};

export default SingleProject;
