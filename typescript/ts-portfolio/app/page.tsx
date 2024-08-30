"use client";
import Homepage from "./components/Homepage";
import Aboutpage from "./components/Aboutpage";
import { useRef } from "react";
import Portfoliopage from "./components/Portfoliopage";
import Contactpage from "./components/Contactpage";
import Footer from "./components/Footer";
export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  // function to scroll to pages
  const scrolltoSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-24 py-10 dark:bg-[#171717] dark:text-slate-100">
      <Homepage
        scrollToPortfolio={() => scrolltoSection(portfolioRef)}
        scrollToContact={() => scrolltoSection(contactRef)}
        homeRef={homeRef}
      />

      <Portfoliopage portfolioRef={portfolioRef} />
      <Contactpage contactRef={contactRef} />
      <Footer
        scrollToHome={() => scrolltoSection(homeRef)}
        scrollToProjects={() => scrolltoSection(portfolioRef)}
      />
    </div>
  );
}
