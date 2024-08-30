import React from "react";
import { portfolioData } from "../content/portfolioData";
import Link from "next/link";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const Projects: React.FC = () => {
  return (
    <div className="flex flex-col gap-24 w-full justify-center items-center mt-20">
      {portfolioData.map((project: any) => (
        <div
          key={project.id}
          className="h-auto border border-black dark:border-slate-50 flex flex-col w-[70%] p-8 gap-10 rounded-3xl"
        >
          <span className="text-4xl">{project.title}</span>
          <span className="text-xl">{project.description}</span>

          {/* techStack */}
          <div className="flex gap-7 items-center">
            <span className="text-2xl">Techstack:</span>
            {project.techstack.map((techstack: any) => (
              <div key={techstack.id}>
                <Link href={techstack.url} target="_blank">
                  <Image
                    src={techstack.icon}
                    height={30}
                    width={30}
                    alt="icon"
                  />
                </Link>
              </div>
            ))}
          </div>

          {/* Links for live demo and source code */}
          <div className="flex gap-7 items-start text-lg">
            <Link
              href={project.demo}
              target="_blank"
              className="flex gap-3 items-center border px-5 py-2 dark:border-slate-50 rounded-xl"
            >
              <IoMdLogOut />
              Live Demo
            </Link>
            <Link
              href={project.source}
              target="_blank"
              className="flex gap-3 items-center px-5 py-2 bg-slate-950 dark:border-slate-50 rounded-xl transition-all"
            >
              <FaGithub />
              Source code
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
