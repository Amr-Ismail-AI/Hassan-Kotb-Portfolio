"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MainImages from "./MainImages";
import SectionTitle from "./SectionTitle";

const experiences = [
  {
    id: "kimo-store",
    company: "Kimo Store",
    role: "Ecommerce Coordinator & Data Analyst",
    duration: "March 2022 - August 2022 (6 months)",
    description:
      "Worked on data analysis, reporting, and dashboard development to support business decisions and improve reporting workflows.",
    technologies: ["Excel", "Word"],
    image: "/assets/images/Kimo-Store-logo.jpeg",
  },
  {
    id: "ipsos",
    company: "Ipsos",
    role: "Dashboards Developer ( Tableau )",
    duration: "January 2023 - October 2023 (10 months)",
    description:
      "Analyzed business data, prepared reports, and developed insights that helped teams understand performance and identify opportunities.",
    technologies: ["SQL", "Python", "Tableau"],
    image: "/assets/images/Ipsos-logo.jpeg",
  },
  {
    id: "microsoft",
    company: "Microsoft",
    role: "Business Intelligence Analyst",
    duration: "November 2023 - October 2025 (2 years)",
    description:
      "Business Intelligence Analyst at Microsoft ( Concentrix Vendor Digital Sales ).",
    technologies: ["Python", "SQL", "Power BI"],
    image: "/assets/images/Microsoft-logo.jpeg",
  },
  {
    id: "idc",
    company: "IDC",
    role: "Data Analyst",
    duration: "November 2025 - Present",
    description:
      "Built dashboards and analytical reports while working closely with business teams to translate raw data into actionable insights.",
    technologies: ["Power BI", "Python", "SQL"],
    image: "/assets/images/IDC-logo.jpeg",
  },
];

const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(
    experiences[0].id
  );

  const activeWork = experiences.find(
    (experience) => experience.id === activeExperience
  );

  return (
    <section
      id="experience"
      className="site-section scroll-mt-20 w-full py-16 lg:py-24">
      <SectionTitle title="Experience" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[240px_minmax(0,1fr)] xl:gap-16"
      >

        <div className="w-full overflow-x-auto pb-2 lg:overflow-visible lg:pb-0">
          <div className="flex min-w-max flex-row gap-2 lg:flex-col lg:gap-1">
            {experiences.map((experience) => {
              const isActive = activeExperience === experience.id;

              return (
                <button
                  key={experience.id}
                  type="button"
                  onClick={() => setActiveExperience(experience.id)}
                  className={`relative rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 cursor-pointer lg:rounded-none lg:border-l-2 lg:px-5 ${
                    isActive
                      ? "border-blue bg-bg-secondary text-blue shadow-sm shadow-text-primary/5"
                      : "border-border-line text-text-muted hover:border-blue/50 hover:bg-bg-secondary/60 hover:text-text-primary"
                  }`}
                >
                  {experience.company}
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-w-0">
          <AnimatePresence mode="wait">
            {activeWork && (
              <motion.article
                key={activeWork.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl border border-border-line bg-bg-secondary/30 p-6 shadow-lg shadow-text-primary/5 backdrop-blur-sm md:p-8 lg:p-10 flex flex-col gap-6"
              >

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-titleFont text-xl font-semibold text-text-primary md:text-2xl">
                      {activeWork.role}
                    </h3>

                    <div className="flex flex-wrap items-center gap-2 text-sm">
                      <span className="font-medium text-blue">
                        {activeWork.company}
                      </span>
                      <span className="text-text-faint">•</span>
                      <span className="text-text-muted">
                        {activeWork.duration}
                      </span>
                    </div>
                  </div>


                  <motion.div
                    initial={{opacity: 0, scale: 0.9, x: 20}}
                    animate={{opacity: 1, scale: 1, x: 0}}
                    transition={{duration: 0.45, delay: 0.1, ease: "easeOut"}}
                    className="flex w-full justify-center lg:justify-end">
                        <MainImages
                                src={activeWork.image}
                                alt={activeWork.company}
                                sizes=" (max-width: 640px) 180px, (max-width: 1024px) 220px, 280px"
                                className="!w-24 !h-24 sm:!w-32 sm:!h-32 rounded-xl border border-blue/30 shadow-md"
                                imageClassName="object-contain p-3 md:p-3" />
                  </motion.div>
                </div>


                <p className="max-w-3xl text-base leading-7 text-text-muted">
                  {activeWork.description}
                </p>


                <div>
                  <p className="mb-3 text-sm font-semibold text-text-primary">
                    Tools & Technologies
                  </p>

                  <ul className="flex flex-wrap gap-2">
                    {activeWork.technologies.map((technology) => (
                      <li
                        key={technology}
                        className="rounded-lg border border-blue/20 bg-bg-primary/60 px-3 py-1.5 text-xs font-medium text-blue-dark transition-colors duration-300 hover:border-blue/40 hover:text-blue"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;