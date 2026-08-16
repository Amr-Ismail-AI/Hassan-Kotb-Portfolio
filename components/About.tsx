"use client"

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import MainImages from "./MainImages";
import { FaChartLine } from "react-icons/fa";

// {/* More Icons for "il" */}

// {/*
// import { BsGraphUp } from "react-icons/bs";
// import { AiOutlineDatabase } from "react-icons/ai";
// import { FaChartBar } from "react-icons/fa";
// import { FaDatabase } from "react-icons/fa";
// import { FaChartArea } from "react-icons/fa";
// */}


const About = () => {
  return (
    <section
      id="about"
      className="w-full py-16 lg:py-24 flex flex-col gap-10 lg:gap-16"
    >
      <SectionTitle title="About Me" />

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16 w-full">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="w-full lg:w-2/3 text-base text-text-muted flex flex-col gap-6 leading-relaxed"
        >
          <p className="font-semibold text-lg text-text-primary">
            I am a Data Analyst with 4 years of experience in data analytics and business intelligence.
          </p>
          <p>
            I began my career at Ipsos, where I built dashboards and delivered data visualization solutions
            for research teams. I then worked on a Microsoft (CNX Vendor) project, focusing on sales analysis,
            reporting, and performance insights to support data-driven decision-making.
          </p>
          <p>
            Currently, I am at IDC, working as a Data Analyst in the computer industry, where I develop dashboards,
            reports, and analytical insights to support technology research and business intelligence.
          </p>
          <p className="font-semibold text-text-primary">
            I work with tools such as Excel, SQL, Python, Power BI, Tableau, and AI tools to analyze data,
            build dashboards, and generate actionable insights that improve decision-making and business performance.
          </p>
          
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 w-full lg:max-w-xl text-sm font-medium">
            {[
              "Microsoft Power BI",
              "Microsoft Power Query",
              "Python", 
              "Tableau",
              "Microsoft Excel",
              "Financial Analysis",
              "Econometric Modeling",
              "Descriptive Analysis",
            ].map((tech, index) => (
              <motion.li
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 text-text-muted hover:text-blue transition-colors duration-300"
              >
                <FaChartLine className="text-blue text-sm shrink-0" />
                <span>{tech}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="hidden lg:flex lg:w-1/3 justify-center lg:justify-end items-center">
          <MainImages
            src="/assets/images/Microsoft.jpeg"
            alt="Hassan Kotb Experience"
            sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 320px"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;