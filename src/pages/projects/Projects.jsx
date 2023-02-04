import { motion } from "framer-motion";
import { blogAppStack, chatAppStack } from "../../constants";
import { projectTitle } from "../../helpers/animations";
import GithubCTA from "./components/GithubCTA";
import SingleProject from "./components/SingleProject";

const Projects = () => {
  return (
    <section
      className="section relative fp-auto-height 
    bg-bg-pattern  min-h-full  md:min-h-screen  bg-contain bg-left-top bg-no-repeat  ">
      <GithubCTA />
      <div className="flex h-full  md:h-screen ">
        <div className="container h-full flex flex-col justify-center   ">
          <motion.h3
            variants={projectTitle}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[1.2rem] mb-10   md:text-5xl pt-10 md:pt-5  text-white font-bold pb-2 md:pb-7">
            Featured Project
          </motion.h3>
          <div className="mx-auto grid max-w-screen-lg gap-6 justify-center px-0 md:px-4 sm:grid-cols-2 md:grid-cols-2   ">
            <SingleProject
              title="Čitalo Books - Blog"
              description="SSG blog website built for a client. Uses headless CMS as backend which allows the client to add, edit, and delete blog posts on their own."
              liveLink="https://citalo-books.com"
              codeLink="https://github.com/starzje/blog_citalo"
              chatStack={blogAppStack}
              image="./assets/citalobooks.png"
              extraStack={
                <li className="flex items-center  select-none gap-2 py-1 px-3 rounded-xl text-white bg-[rgba(107,77,255,0.17)] text-[0.75rem] md:text-[0.9rem] ">
                  <img
                    src="./assets/strapi.svg"
                    alt="icon for strapi"
                    className=" w-[12px]"
                  />
                  <span>Strapi</span>
                </li>
              }
            />
            <SingleProject
              title="Chattam - Chat App"
              description="Live chat application where users can
                create an account, upload profile picture, login, create a new room, and chat with
                other users in real time."
              liveLink="https://chattam.online"
              codeLink="https://github.com/starzje/ChatTam-Chat-App"
              chatStack={chatAppStack}
              image="./assets/chattam.png"
              extraStack={
                <li className="flex items-center  select-none gap-2 py-1 px-3 rounded-xl text-white bg-[rgba(107,77,255,0.17)] text-[0.75rem] md:text-[0.9rem] ">
                  <img
                    src="./assets/fmotion.svg"
                    alt="icon for framerMotion"
                    className=" w-[12px]"
                  />
                  <span>FramerMotion</span>
                </li>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
