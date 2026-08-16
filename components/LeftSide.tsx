"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import SocialLinks from "./SocialLinks";

const socialLinks = SocialLinks

const LeftSide = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
    const contactSection = document.getElementById("contact");

    if (!contactSection) return;

    const observer = new IntersectionObserver(
        ([entry]) => {
        setIsVisible(!entry.isIntersecting);
        },
        {
        threshold: 0.15,
        }
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
    }, []);

    return (
        <motion.aside
        initial={{ opacity: 0, x: -30, }}
        animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30, }}
        transition={{
            duration: 0.4,
            ease: "easeOut",
            delay: 1,
        }}
        className="fixed left-6 top-1/2 z-40 -translate-y-1/2 flex flex-col items-center"
        aria-label="Social media links">

        {/* Social Links */}
        <div
            className="flex flex-col items-center gap-3 rounded-2xl border border-border-line bg-bg-primary/70 p-2 shadow-lg shadow-text-primary/10 backdrop-blur-md transition-colors duration-300"
        >
            {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
                <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                title={social.name}
                whileHover={{ scale: 1.12, y: -2 }}
                whileTap={{ scale: 0.95, }}
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-transparent text-text-primary transition-all duration-300 hover:border-blue hover:bg-blue/5 hover:text-blue hover:shadow-lg hover:shadow-blue/20"
                >
                <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:rotate-3"
                />
                </motion.a>
            );
            })}
        </div>

        {/* Decorative Line */}

        <div className="mt-4 h-20 w-[2] bg-gradient-to-b from-blue to-transparent"/>
        </motion.aside>
    );
};

export default LeftSide;