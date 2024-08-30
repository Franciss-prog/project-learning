import React from "react";

interface FooterProps {
  scrollToHome: () => void;
  scrollToProjects: () => void;
}
const Footer: React.FC<FooterProps> = ({ scrollToHome, scrollToProjects }) => {
  return (
    <footer className="flex justify-between items-center h-20 text-white px-10">
      <div className="flex items-center gap-6">
        <button onClick={scrollToHome} className="hover:underline">
          Home
        </button>
        <button onClick={scrollToProjects} className="hover:underline">
          Projects
        </button>
      </div>
      <div className="text-sm text-gray-600 dark:text-slate-100">
        © {new Date().getFullYear()} Franciss-prog All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
