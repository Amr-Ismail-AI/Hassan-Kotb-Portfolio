"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa";
import MainImages from "./MainImages";

const Banner = () => {
  return (
    <section id="home"
        className="flex min-h-[88vh] w-full flex-col-reverse items-center justify-center gap-10 py-10 md:py-16 lg:flex-row lg:justify-between lg:gap-16">
      
        <div className="flex w-full max-w-3xl flex-col items-center text-center lg:items-start lg:text-left">

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col text-4xl font-titleFont font-semibold leading-tight text-text-primary md:text-5xl lg:text-6xl">
          Hassan Kotb
          <span
            className="mt-3 text-xl font-normal leading-relaxed text-text-primary md:text-2xl">
            I make data work harder, so business run{" "}
            <span
                className="box-decoration-clone bg-[linear-gradient(100deg,transparent_0%,transparent_4%,var(--accent-blue)_25%,var(--accent-blue)_75%,transparent_100%)] px-2 text-2xl md:text-3xl">
                smarter
            </span>
          </span>
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-6 max-w-2xl text-base font-medium leading-7 text-text-muted md:text-lg">
          I'm{" "}
          <span className="text-xl font-bold text-blue-dark">
            Hassan Kotb
          </span>

          {" "}— I build models that forecast and explain, and I write
          about the gap between what a dashboard shows and what's actually
          true. Previously fintech and e-commerce; currently obsessed with
          causal inference and why averages lie.

          {" "}

          <Link
            href="https://www.linkedin.com/in/hsnkotb"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex font-semibold text-blue-dark transition-all duration-300 hover:text-blue hover:underline hover:underline-offset-4">
            Learn more...
          </Link>
        </motion.p>

        <motion.a
          href="/assets/Hassan-Kotb-CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 flex h-12 w-fit items-center justify-center gap-2 rounded-xl border border-blue bg-bg-secondary/40 px-6 text-lg font-medium text-text-primary shadow-sm shadow-text-primary/10 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-blue hover:text-bg-primary hover:shadow-xl hover:shadow-blue/30">
          <FaRegFilePdf className="text-xl" />
          View CV
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30, scale: 0.95 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        className="relative shrink-0">

        <div className="absolute -inset-3 rounded-full bg-blue/10 blur-2xl"/>

        {/* Created Element Called "MainImages.tsx" */}
        <MainImages
        className="rounded-full"
        src="/assets/images/HassanPortfolio.jpg"
        alt="Hassan Kotb"
        sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, (max-width: 1280px) 288px, 320px"/>
      </motion.div>
    </section>
  );
};

export default Banner;