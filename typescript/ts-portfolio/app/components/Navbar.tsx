"use client";
import React, { useState } from "react";
import { BsDot } from "react-icons/bs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

interface Navbarprops {
  scrollToPortfolio: () => void;
  scrollToContact: () => void;
}
const Navbar: React.FC<Navbarprops> = ({ scrollToContact }) => {
  const [page, setPage] = useState("Home");
  return (
    <nav className="flex justify-between items-center w-full pt-5">
      <div className="flex flex-col relative">
        <Link
          className="flex gap-2 items-center relative"
          href={"https://github.com/Franciss-prog/Franciss-prog"}
          target="_blank"
        >
          <Avatar>
            <AvatarImage src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d8c35aab-28fb-4b5f-af66-57c4dba5cd74/dc8tu3k-2e6e6f55-1e77-4ddd-b563-ea634ccf109d.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q4YzM1YWFiLTI4ZmItNGI1Zi1hZjY2LTU3YzRkYmE1Y2Q3NFwvZGM4dHUzay0yZTZlNmY1NS0xZTc3LTRkZGQtYjU2My1lYTYzNGNjZjEwOWQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.g9v_yAxK24UQpaj99xpUOwHEGdNWxZdBsBlX_UXiFOo" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <span className="text-xl">Franciss-prog</span>
          {/* Underline */}
          <span className="w-full border-t-[2px] absolute left-0 bottom-[-12px] rounded-3xl bg-white h-1"></span>
        </Link>
      </div>
      <button
        className="dark:border-white border px-5 py-3 flex items-center gap-1 text-sm rounded-2xl tracking-wider"
        onClick={scrollToContact}
      >
        <BsDot className="text-green-600 text-xl" />
        AVAILABLE FOR WORK
      </button>
    </nav>
  );
};

export default Navbar;
