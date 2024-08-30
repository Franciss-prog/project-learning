import React from "react";
import { Separator } from "@/components/ui/separator";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

interface ContactpageProps {
  contactRef: React.RefObject<HTMLDivElement>;
}
const Contactpage: React.FC<ContactpageProps> = ({ contactRef }) => {
  return (
    <section
      className="flex h-[30vh] justify-center mt-36 w-full items-center"
      ref={contactRef}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3 mb-5">
          <span className="text-4xl text-center">Contact me!</span>
          <div className="dark:bg-white w-[60%] h-2 justify-center items-center text-center rounded-2xl"></div>
        </div>

        <div className="flex h-5 items-center space-x-4  w-full justify-between text-3xl">
          <Link
            href="https://github.com/Franciss-prog/Franciss-prog"
            target="_blank"
          >
            <FaGithub className="transition-all hover:text-slate-900" />
          </Link>
          <Separator orientation="vertical" />

          <Link
            href="https://www.facebook.com/profile.php?id=100092201940238"
            target="_blank"
          >
            <FaFacebook className="transition-all hover:text-blue-500" />
          </Link>
          <Separator orientation="vertical" />

          <Link
            href="https://www.linkedin.com/in/francis-gil-abarintos-9b6788315/"
            target="_blank"
          >
            <FaLinkedin className="transition-all hover:text-blue-500" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contactpage;
