import React from "react";
import Navbar from "./Navbar";
import { IoIosArrowDown } from "react-icons/io";

interface HomepageProps {
  scrollToPortfolio: () => void;
  scrollToContact: () => void;
  homeRef: React.RefObject<HTMLDivElement>;
}
const Homepage: React.FC<HomepageProps> = ({
  scrollToPortfolio,
  scrollToContact,
  homeRef,
}) => {
  return (
    <section className="h-screen " ref={homeRef}>
      <Navbar
        scrollToPortfolio={scrollToPortfolio}
        scrollToContact={scrollToContact}
      />
      <main className="flex justify-start items-center min-h-screen">
        <div className="w-full flex flex-col">
          {/* title */}
          <span className="text-[150px] w-full">FRONT END DEVELOPER</span>
          <div className="flex justify-between mt-10 mb-20">
            <span className="text-2xl tracking-widest">
              WHO LOVES TO DESIGN AND BUILD MINIMALIST WEBSITES
            </span>
            <button
              className="dark:bg-slate-100 dark:text-matte-black rounded-full p-3"
              onClick={scrollToPortfolio}
            >
              <IoIosArrowDown className="dark:text-[#171717] text-2xl" />
            </button>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Homepage;
