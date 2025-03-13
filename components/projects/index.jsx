"use client"
import React from 'react'
import Projectlayout from './Projectlayout'
import {motion} from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren:1.5
    },
  },
};

const Projectlist = ({projects}) => {
  return (
    <motion.div
    variants={container}
    initial="hidden"
    animate="show"
    className='items-center justify-center mt-10 flex flex-wrap gap-6 w-full    max-w-auto lg:max-w-4xl mb-6 px-4 sm:px-16'>
      {
        projects.map((project,index)=>{
          return <Projectlayout {...project} key={index}/>
          })
      }
    </motion.div>
  )
}

export default Projectlist