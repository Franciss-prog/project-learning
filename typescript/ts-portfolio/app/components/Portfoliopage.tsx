import React from "react";
import Projects from "./Projects";

interface Portfoliopageprops {
  portfolioRef: React.RefObject<HTMLDivElement>;
}
const Portfoliopage: React.FC<Portfoliopageprops> = ({ portfolioRef }) => {
  return (
    <section ref={portfolioRef} className="h-auto flex justify-center pt-10">
      <main className=" flex items-center flex-col gap-5">
        <span className="text-[90px] tracking-wider">MY PROJECTS</span>
        <Projects />
      </main>
    </section>
  );
};

export default Portfoliopage;
