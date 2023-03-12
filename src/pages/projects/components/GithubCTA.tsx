import * as React from "react";
import { githubCTA } from "../../../helpers/animations";
import { motion } from "framer-motion";
const GithubCTA = () => {
  return (
    <motion.a
      variants={githubCTA}
      initial="hidden"
      whileHover="visible"
      href="https://github.com/starzje"
      target="_blank"
      className="text-white cursor-pointer text-[1.1rem] justify-center items-center bg-gradient-to-t from-[rgba(1,87,218,0.15)] to-[rgba(0,0,0,0.01)] absolute py-2 px-5 rounded-l-full top-[60px] shadow-2xl  right-0 pr-48 hidden md:flex "
    >
      <motion.i
        layout
        className="devicon-github-original relative text-3xl"
      ></motion.i>
      <motion.span layout className="relative pl-10 select-none">
        See more work like this on Github
      </motion.span>
    </motion.a>
  );
};

export default GithubCTA;
