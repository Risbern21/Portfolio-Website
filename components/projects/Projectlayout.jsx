"use client"
import Link from "next/link";
import React from "react";
import {motion} from "framer-motion"

const NavLink = motion(Link);

const item = {
  hidden: {
    opacity: 0,
    y:100
  },
  show: {
    opacity: 1,
    y:0
  },
};

const Projectlayout = ({ name, description, date, demoLink }) => {
  return (
    <NavLink
    variants={item}
      href={`${demoLink}`}
      target="_blank"
      className="text-xs sm:text-lg flex items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 bg-background/20 border border-white border-solid backdrop-blur-[6px] navbutton z-40"
    >
      <div className="flex items-center justify-center space-x-2">
        <h1 className="text-foreground">{name}</h1>
        <h3 className="text-gray-400 hidden sm:inline-block">{description}</h3>
      </div>
      <div className="self-end flex-1 mx-2 my-1 border-b border-gray-400 border-dashed" />
      <p className="text-xs sm:text-lg">{new Date(date).toDateString()}</p>
    </NavLink>
  );
};

export default Projectlayout;
