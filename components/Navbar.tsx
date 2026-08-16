"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";

import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { title: "Home", href: "#home" },
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Contact", href: "#contact" },
];

const navClassName = `relative flex items-center gap-1 rounded-xl border border-transparent px-3 py-1 font-medium text-text-primary transition-all duration-300 hover:scale-105 hover:border-blue hover:shadow-xl hover:shadow-blue/30 cursor-pointer`;

function Navbar() {
  const [activeSection, setActiveSection] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = navLinks
      .map((link) => {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);

        return element
          ? {
              href: link.href,
              element,
            }
          : null;
      })
      .filter(
        (
          section
        ): section is {
          href: string;
          element: HTMLElement;
        } => section !== null
      );

    if (!sections.length) return;

    const updateSection = (href: string) => {
      setActiveSection(href);

      if (window.location.hash !== href) {
        window.history.replaceState(
          null,
          "",
          href
        );
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) -
              Math.abs(b.boundingClientRect.top)
          );

        if (!visibleSections.length) return;

        const activeElement =
          visibleSections[0].target;

        const activeLink = sections.find(
          (section) =>
            section.element === activeElement
        );

        if (activeLink) {
          updateSection(activeLink.href);
        }
      },
      {
        rootMargin: "-120px 0px -55% 0px",
        threshold: 0,
      }
    );
    sections.forEach(({ element }) => {
      observer.observe(element);
    });

    const currentHash =
      window.location.hash;

    const hashExists = sections.some(
      (section) =>
        section.href === currentHash
    );

    if (hashExists) {
      setActiveSection(currentHash);
    } else {
      setActiveSection("#home");

      if (!currentHash) {
        window.history.replaceState(
          null,
          "",
          "#home"
        );
      }
    }

    const handleHashChange = () => {
      const hash =
        window.location.hash;

      const exists = sections.some(
        (section) =>
          section.href === hash
      );

      if (exists) {
        setActiveSection(hash);
      }
    };

    window.addEventListener(
      "hashchange",
      handleHashChange
    );

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "hashchange",
        handleHashChange
      );
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveSection(href);
    setIsOpen(false);
  };

  return (
    <nav
      className="sticky top-0 z-50 h-20 w-full border-b border-border-line bg-bg-primary/80 px-6 shadow-md shadow-text-primary/20 backdrop-blur-md transition-colors duration-300 lg:h-[12vh]">
      <div
        className="mx-auto flex h-full max-w-container items-center justify-between py-1 text-text-primary">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <Link
            href="#home"
            onClick={() =>
              handleNavClick("#home")
            }
            aria-label="Go to home section">
            <h1
              className="flex h-12 w-15 cursor-pointer items-center justify-center rounded-xl border border-border-line bg-bg-secondary/40 text-xl font-bold text-text-primary shadow-sm shadow-text-primary/30 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-blue hover:shadow-xl hover:shadow-blue/30">
              HK
            </h1>
          </Link>
        </motion.div>

        {/* NavBar */}

        <div className="absolute left-1/2 hidden -translate-x-1/2 md:block">
          <ul className="flex items-center gap-4">
            {navLinks.map((link, index) => {
              const isActive =
                activeSection === link.href;

              return (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  >
                  <Link
                    href={link.href}
                    onClick={() =>
                      handleNavClick(link.href)
                    }
                    className={`
                      ${navClassName}
                      ${
                        isActive
                          ? "border-blue shadow-lg shadow-blue/20"
                          : ""
                      }
                    `}
                  >
                    {link.title}

                    {isActive && (
                      <motion.span
                        layoutId="desktop-active-link"
                        className="absolute bottom-0 left-1/2 h-[2px] w-1/2 -translate-x-1/2 rounded-full bg-blue"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
          
        {/* Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:block"
        >
          <ThemeToggle />
        </motion.div>

          {/* Side Menue */}

        <div className="flex items-center md:hidden">
          <button
            type="button"
            onClick={() =>
              setIsOpen(
                (previous) => !previous
              )
            }
            className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5 rounded-xl border border-border-line bg-bg-secondary/40"
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            <span
              className={`h-0.5 w-5 bg-text-primary transition-all duration-300
                ${
                  isOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }
              `}
            />

            <span
              className={`h-0.5 w-5 bg-text-primary transition-all duration-300
                ${
                  isOpen
                    ? "opacity-0"
                    : ""
                }
              `}
            />

            <span
              className={`h-0.5 w-5 bg-text-primary transition-all duration-300
                ${
                  isOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }
              `}
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-full w-full border-b border-border-line bg-bg-primary/95 px-6 py-6 shadow-2xl backdrop-blur-xl transition-all duration-300 md:hidden
          ${
            isOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-4 opacity-0"
          }
        `}
      >
        <ul className="flex flex-col gap-3">
          {navLinks.map((link) => {
            const isActive =
              activeSection === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() =>
                    handleNavClick(link.href)
                  }
                  className={`flex items-center justify-between rounded-xl border px-4 py-2.5 font-medium text-text-primary transition-all duration-300
                    ${
                      isActive
                        ? "border-blue bg-bg-secondary/60 shadow-md shadow-blue/20"
                        : "border-border-line bg-bg-secondary/20"
                    }
                  `}
                >
                  <span>{link.title}</span>

                  {isActive && (
                    <motion.span
                      layoutId="mobile-active-link"
                      className="h-2 w-2 rounded-full bg-blue"
                    />
                  )}
                </Link>
              </li>
            );
          })}

          <li className=" mt-2 flex items-center justify-between border-t border-border-line pt-3">
            <span
              className="text-sm font-medium text-text-muted">
              Theme
            </span>

            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;