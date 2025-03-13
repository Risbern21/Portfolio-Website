"use client"
import {motion} from "framer-motion"
import clsx from "clsx";


const ItemLayout = ({ children, className }) => {
    return (
      <motion.div

        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.5}}
        viewport={{once:true}}

        className={clsx(
          "bg-background/20 backdrop-blur-[6px] navbutton p-4 xs:p-6 sm:p-8 flex items-center justify-center rounded-2xl",
          className
        )}
      >
        {children}
      </motion.div>
    );
  };

export default ItemLayout