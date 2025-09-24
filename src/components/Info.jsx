import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaBullseye } from "react-icons/fa";

export default function Info() {
  // Animation variants
  const leftVariant = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const dividerVariant = {
    hidden: { opacity: 0, scaleY: 0 },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.6, delay: 0.4, ease: "easeOut" },
    },
  };

return (
    <div className="flex justify-center items-center">
        <motion.div
            className="relative p-20 bg-white rounded-3xl shadow-lg m-8 grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-start"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {/* Card background image */}
            <div
                className="absolute inset-0 bg-cover bg-center opacity-12 pointer-events-none rounded-3xl"
                style={{ backgroundImage: `url(/4.jpg)` }}
            />
            {/* Our Story */}
            <motion.div variants={leftVariant}>
                <div className="flex items-center gap-3 mb-4">
                    <FaBookOpen className="text-[#E7A1A1] text-3xl" />
                    <h2 className="text-3xl font-bold  text-[#E7A1A1] tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        Our Story
                    </h2>
                </div>
                <p className="leading-relaxed text-lg">
                    ArtConnect Maroc was born from a shared passion for Moroccan heritage 
                    and a desire to make it accessible to everyone through an immersive 
                    digital platform. This project was envisioned by a team of creators, 
                    developers, and cultural explorers, united by the belief that Morocco’s 
                    art and traditions deserve a modern, vibrant, and collaborative showcase.
                </p>
            </motion.div>

            {/* Divider */}
            <motion.div
                className="bg-[#E7A1A1] w-1 rounded-full mx-auto hidden lg:block"
                variants={dividerVariant}
            ></motion.div>

            {/* Our Mission */}
            <motion.div variants={rightVariant}>
                <div className="flex items-center gap-3 mb-4">
                    <FaBullseye className="text-[#E7A1A1] text-3xl" />
                    <h2 className="text-3xl font-bold text-[#E7A1A1] tracking-wide  drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                        Our Mission
                    </h2>
                </div>
                <p className=" leading-relaxed text-lg">
                    ArtConnect Maroc celebrates Moroccan heritage by bringing together 
                    artisans, chefs, musicians, and architects—along with the stories 
                    that make their work timeless. We aim to connect generations, regions, 
                    and curious audiences through a welcoming digital space.
                </p>
            </motion.div>
        </motion.div>
    </div>
);
}
