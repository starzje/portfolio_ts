import * as React from "react";
import { motion } from "framer-motion";
import { AiOutlineCloudDownload } from "react-icons/ai";
// animations
import { headerAnimation } from "../../../helpers/animations";
import { menu } from "../../../constants/index";

const Header = () => {
  return (
    <motion.header
      variants={headerAnimation}
      initial="hidden"
      animate="visible"
      className="h-[4em] flex  justify-between  items-center gap-10"
    >
      <span className="text-white font-extrabold tracking-wider cursor-default select-none">
        Ivan Starčević
      </span>
      <nav className="hidden md:inline-block ml-auto">
        <motion.ul
          layout
          className="flex space-x-7 text-[1.2rem] font-semibold"
        >
          {menu.map((item) => (
            <li
              key={item.id}
              className="
                inline-block
                text-white
                relative
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-white
                before:via-white
                before:to-white
                hover:before:w-full
                hover:before:opacity-100"
            >
              <a key={item.id} href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </motion.ul>
      </nav>
      <motion.a
        whileHover={{
          scale: 1.05,
          backgroundColor: "#15104c",
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="bg-black   hidden md:flex font-semibold   py-2 px-5 text-white rounded-xl tracking-wider justify-center items-center gap-2"
        href="https://drive.google.com/file/d/1q8-ep4xgRsE7daMLPkjSGhSGPRNQhPBZ/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineCloudDownload className="text-lg" />
        Download CV
      </motion.a>
    </motion.header>
  );
};

export default Header;
