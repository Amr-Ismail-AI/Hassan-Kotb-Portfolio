"use client";

import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";

import SectionTitle from "./SectionTitle";

const projects = [
  {
    id: "churn-forecasting",
    date: "Jun 2026",
    category: "SaaS retention",
    title: "Churn forecasting for a SaaS platform",
    description:
      "Gradient-boosted model trained on 40 behavioral features, cutting false churn alerts enough to let the retention team focus on real risk.",
    result: "−33%",
    resultDescription:
      "false-positive churn alerts, freeing analyst hours for real at-risk accounts.",
    href: "#",
  },
  {
    id: "pricing-analysis",
    date: "Apr 2026",
    category: "Pricing",
    title: "Causal analysis of a pricing test",
    description:
      "Diff-in-diff design across six markets, isolating true price sensitivity from seasonal noise that had confused two prior analyses.",
    result: "6 mkts",
    resultDescription:
      "re-analyzed, reversing an incorrect pricing decision made a quarter earlier.",
    href: "#",
  },
  {
    id: "demand-forecasting",
    date: "Jan 2026",
    category: "Supply chain",
    title: "Demand forecasting pipeline",
    description:
      "Automated retraining and drift monitoring, replacing a spreadsheet process three regional teams maintained by hand.",
    result: "−70%",
    resultDescription:
      "manual forecast reviews across three regions, now fully automated.",
    href: "#",
  },
  {
    id: "data-quality",
    date: "Nov 2025",
    category: "Data quality",
    title: "Data quality monitoring framework",
    description:
      "Automated schema and distribution checks that caught silent drift before it reached three downstream reporting pipelines.",
    result: "3 pipelines",
    resultDescription:
      "protected from a schema change that would've broken weekly reporting.",
    href: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="site-section scroll-mt-20">

    {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}>
        <SectionTitle title="Projects" />
      </motion.div>

      {/* Projects List */}

      <div className="mt-12">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
            className="group relative border-t border-border-line py-10 md:py-12 lg:grid lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_300px] xl:gap-16">

            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-0 top-6 hidden select-none font-titleFont text-8xl font-bold leading-none text-text-primary opacity-[0.035] lg:block xl:text-9xl">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Main Content */}

            <div className="relative z-10">
              {/* Meta */}

              <div
                className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-text-faint">
                <span className="flex items-center gap-2">
                  <span className="text-blue">—</span>
                  {project.date}
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-blue">—</span>
                  {project.category}
                </span>
              </div>

              {/* Title */}

              <h3
                className="max-w-2xl font-titleFont text-2xl font-semibold leading-tight text-text-primary transition-colors duration-300 group-hover:text-blue-dark md:text-3xl">
                {project.title}
              </h3>

              {/* Description */}

              <p
                className="mt-5 max-w-2xl text-sm leading-7 text-text-muted md:text-base">
                {project.description}
              </p>

              {/* Case Study Link */}

              <a
                href={project.href}
                className="mt-6 inline-flex items-center gap-2 border-b border-text-primary pb-1 text-sm font-medium text-text-primary transition-all duration-300 hover:border-blue hover:text-blue">
                Read case study

                <FiArrowUpRight
                  size={16}
                  className=" transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
              </a>
            </div>

            {/* Result */}

            <div
              className="relative z-10 mt-8 border-t border-border-line pt-6 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-10">
              <p
                className="text-[11px] font-medium uppercase tracking-[0.15em] text-blue-dark">
                Result
              </p>

              <p
                className="mt-2 font-titleFont text-3xl font-bold leading-none text-text-primary md:text-4xl">
                {project.result}
              </p>
              
              <p
                className="mt-3 max-w-xs text-xs leading-6 text-text-faint md:text-sm">
                {project.resultDescription}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;