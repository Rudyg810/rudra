"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

export const Spotlight = () => {
  return (
    <div
      className=" flex flex-col p-20 mt-10  items-center justify-center bg-black-100 dark:bg-zinc-900 text-white transition-bg"
    >


      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Transforming Concepts in Seamless{" "}
            <div className="text-purple-400 text-8xl mt-6">Innovations</div>
          </div>
          <div className="font-extralight flex text-base md:text-xl dark:text-neutral-200 py-4">
            Hi, I am<div className="text-purple-400  font-semibold flex mx-1.5">Rudra</div> Watch my Journey
          </div>
        <Link href={"/experience"}>
          <button   className="px-16 relative py-4 mt-5 border-2 border-white hover:bg-white hover:border-black hover:text-black dark:border-black uppercase bg-black text-white transition duration-300 text-sm font-semibold shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] dark:shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)]">
           Check Now
            <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, x: "-10%" }}
          animate={{ opacity: 0.8, x: "100%" }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType:"mirror"
          }}
          className="absolute top-0 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent"
        />
      </div>
          </button>
          </Link>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
