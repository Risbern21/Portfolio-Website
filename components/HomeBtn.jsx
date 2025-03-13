"use client"
import React from "react";
import { Home } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = motion(Link);

const HomeBtn = () => {
  return (
    <NavLink
     
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{duration:0.5}}
    viewport={{once:true}}

      href={"/"}
      className="text-foreground group flex rounded-full items-center justify-center bg-background/20 border border-white border-solid backdrop-blur-[6px] fixed top-5 left-5 w-fit self-start navbutton z-50"
    >
      <span className="w-14 peer relative h-14 p-4 ">
        <Home className="w-full h-auto" strokeWidth={1.5} />
      </span>
      <span className="absolute hidden hover peer-hover:inline-block px-2 py-1 rounded-md translate-y-1/2 left-full bg-background text-foreground top-1/2 shadow-lg">
        Home
      </span>
    </NavLink>
  );
};

export default HomeBtn;
