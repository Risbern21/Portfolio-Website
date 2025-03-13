import React from "react";
import Link from "next/link";
import {
  Home,
  Linkedin,
  Github,
  Palette,
  User,
  FileUser,
  Phone,
} from "lucide-react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";
import { motion } from "framer-motion";

const GetIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5}></Home>;
    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
    case "projects":
      return <Palette className="w-full h-auto" strokeWidth={1.5} />;
    case "contact":
      return <Phone className="w-full h-auto" strokeWidth={1.5} />;
    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
    case "resume":
      return <FileUser className="w-full h-auto" strokeWidth={1.5} />;
    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
      break;
  }
};

const NavLink = motion(Link);

const item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
  },
};

const NavButton = ({ x, y, label, link, icon, newTab, labelDirection }) => {
  return (
    <>
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? (
            <div
              className="absolute cursor-pointer"
              style={{ transform: `translate(${x},${y})` }}
            >
              <NavLink
                variants={item}
                href={link}
                target={newTab ? "_blank" : "_self"}
                aria-label={label}
                name={label}
                className="text-foreground group flex rounded-full items-center justify-center bg-background/20 border border-white border-solid backdrop-blur-[6px] navbutton rotating-button"
              >
                <span className="w-14 peer relative h-14 p-4 group-hover:text-[#fc7303]">
                  {GetIcon(icon)}
                </span>
                <span className="absolute hidden hover peer-hover:inline-block px-2 py-1 rounded-md translate-y-1/2 left-full bg-background text-foreground top-1/2 shadow-lg">
                  {label}
                </span>
              </NavLink>
            </div>
          ) : (
            <div className="w-fit cursor-pointer">
              <NavLink
                variants={item}
                href={link}
                target={newTab ? "_blank" : "_self"}
                aria-label={label}
                name={label}
                className="text-foreground group flex rounded-full items-center justify-center bg-background/20 border border-white border-solid backdrop-blur-[6px] navbutton"
              >
                <span className="w-10 h-10 p-2.5 xs:w-14 peer relative xs:h-14 xs:p-4 group-hover:text-[#fc7303]">
                  {GetIcon(icon)}
                </span>
                <span
                  className={clsx(
                    "absolute hidden hover peer-hover:inline-block px-2 py-1 rounded-md translate-y-1/2 left-full bg-background text-foreground top-1/2 shadow-lg",
                    labelDirection === "left" ? "right-full left-auto" : ""
                  )}
                >
                  {label}
                </span>
              </NavLink>
            </div>
          );
        }}
      </ResponsiveComponent>
    </>
  );
};

export default NavButton;
