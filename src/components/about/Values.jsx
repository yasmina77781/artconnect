// import { motion } from "framer-motion";
// import { FaGlobe, FaHandsHelping, FaUsers, FaUniversalAccess } from "react-icons/fa";

// export default function Values() {
//   // Animation variants
//   const container = {
//     hidden: { opacity: 0, y: 50 },
//     show: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         staggerChildren: 0.2,
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 30 },
//     show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
//   };

//   return (
//     <motion.section
//       className="relative p-20 rounded-3xl shadow-lg m-8 flex flex-col gap-12 text-center bg-white overflow-hidden"
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={container}
//     >
//       {/* Decorative Background */}
//       <div className="absolute inset-0 bg-[url('/public/morocco-pattern.jpg')] opacity-20 bg-cover bg-center pointer-events-none"></div>

//       {/* Title */}
//       <motion.div className="relative z-10" variants={item}>
//         <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
//           ✨ Why Choose Us
//         </p>
//         <h2 className="text-[#577ABB] text-4xl font-bold mb-4 tracking-wide">
//           Our Values
//         </h2>
//         <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
//           At Morocco Vibes Travel, our values guide everything we do. 
//           They shape our decisions, influence our approach, and are reflected 
//           in every experience we craft for our travelers.
//         </p>
//       </motion.div>

//       {/* Grid */}
//       <motion.div
//         className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
//         variants={container}
//       >
//         {/* Card 1 */}
//         <motion.div
//           className="bg-[#E5C4C4] py-10 px-6 border rounded-3xl shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 hover:bg-[#e48a8a]"
//           variants={item}
//         >
//           <FaGlobe className="text-[#577ABB] text-4xl mb-4 mx-auto" />
//           <h3 className="text-[#577ABB] mb-4 font-serif text-xl font-semibold relative inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#577ABB] after:transition-all after:duration-500 hover:after:w-full">
//             Authenticity
//           </h3>
//           <p className="text-gray-800">
//             We showcase real traditions, real people, and real passion.
//           </p>
//         </motion.div>

//         {/* Card 2 */}
//         <motion.div
//           className="bg-[#E5C4C4] py-10 px-6 border rounded-3xl shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 hover:bg-[#e48a8a]"
//           variants={item}
//         >
//           <FaHandsHelping className="text-[#577ABB] text-4xl mb-4 mx-auto" />
//           <h3 className="text-[#577ABB] mb-4 font-serif text-xl font-semibold relative inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#577ABB] after:transition-all after:duration-500 hover:after:w-full">
//             Cultural Respect
//           </h3>
//           <p className="text-gray-800">
//             We honor the richness of Moroccan heritage in every detail.
//           </p>
//         </motion.div>

//         {/* Card 3 */}
//         <motion.div
//           className="bg-[#E5C4C4] py-10 px-6 border rounded-3xl shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 hover:bg-[#e48a8a]"
//           variants={item}
//         >
//           <FaUsers className="text-[#577ABB] text-4xl mb-4 mx-auto" />
//           <h3 className="text-[#577ABB] mb-4 font-serif text-xl font-semibold relative inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#577ABB] after:transition-all after:duration-500 hover:after:w-full">
//             Community First
//           </h3>
//           <p className="text-gray-800">
//             We connect artisans, creators, and explorers through shared stories.
//           </p>
//         </motion.div>

//         {/* Card 4 */}
//         <motion.div
//           className="bg-[#E5C4C4] py-10 px-6 border rounded-3xl shadow-md hover:shadow-xl transition duration-500 transform hover:-translate-y-2 hover:bg-[#e48a8a]"
//           variants={item}
//         >
//           <FaUniversalAccess className="text-[#577ABB] text-4xl mb-4 mx-auto" />
//           <h3 className="text-[#577ABB] mb-4 font-serif text-xl font-semibold relative inline-block after:content-[''] after:block after:w-0 after:h-0.5 after:bg-[#577ABB] after:transition-all after:duration-500 hover:after:w-full">
//             Accessibility
//           </h3>
//           <p className="text-gray-800">
//             We make culture discoverable, immersive, and open to all.
//           </p>
          
//         </motion.div>
//       </motion.div>
//     </motion.section>
    
//   );
// }
import { useState } from "react";
import { motion } from "framer-motion";
import { FaGlobe, FaHandsHelping, FaUsers, FaUniversalAccess } from "react-icons/fa";

export default function Values() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const container = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80 } },
  };

  const cardImages = {
    authenticity: "/4.jpg",
    respect: "/respect.jpg",
    community: "/community.jpg",
    accessibility: "/accessibility.jpg",
  };

return (
    <motion.section
        className="relative p-20 rounded-3xl shadow-lg m-8 flex flex-col gap-12 text-center bg-white overflow-hidden"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
    >
        <div className="absolute inset-0 bg-[url('/public/morocco-pattern.jpg')] opacity-20 bg-cover bg-center pointer-events-none"></div>

        {/* Title */}
        <motion.div className="relative z-10" variants={item}>
            <h2 className="text-[#577ABB] text-4xl font-bold mb-4 tracking-wide">
                Our Values
            </h2>
            <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
           At Morocco Vibes Travel, our values guide everything we do. 
          They shape our decisions, influence our approach, and are reflected 
          in every experience we craft for our travelers.
        </p>
        </motion.div>

        {/* Grid */}
        <motion.div
            className="relative z-10 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={container}
        >
            {/* Card 1 - Authenticity */}
            <motion.div
                className="relative py-10 px-6 border rounded-3xl shadow-md overflow-hidden"
                variants={item}
                onMouseEnter={() => setHoveredCard("authenticity")}
                onMouseLeave={() => setHoveredCard(null)}
            >
                {hoveredCard === "authenticity" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${cardImages.authenticity})`,
                        }}
                    />
                )}
                {hoveredCard === "authenticity" && (
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
                )}
                <div className="relative z-10">
                    <FaGlobe className={`text-4xl mb-4 mx-auto ${hoveredCard === "authenticity" ? "text-white" : "text-[#577ABB]"}`} />
                    <h3 className={`mb-4 font-serif text-xl font-semibold ${hoveredCard === "authenticity" ? "text-white" : "text-[#577ABB]"}`}>
                        Authenticity
                    </h3>
                    <p className={`leading-relaxed ${hoveredCard === "authenticity" ? "text-white" : "text-gray-800"}`}>
                        We showcase real traditions, real people, and real passion.
                    </p>
                </div>
            </motion.div>

            {/* Card 2 - Cultural Respect */}
            <motion.div
                className="relative py-10 px-6 border rounded-3xl shadow-md overflow-hidden"
                variants={item}
                onMouseEnter={() => setHoveredCard("respect")}
                onMouseLeave={() => setHoveredCard(null)}
            >
                {hoveredCard === "respect" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${cardImages.respect})`,
                        }}
                    />
                )}
                {hoveredCard === "respect" && (
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
                )}
                <div className="relative z-10">
                    <FaHandsHelping className={`text-4xl mb-4 mx-auto ${hoveredCard === "respect" ? "text-white" : "text-[#577ABB]"}`} />
                    <h3 className={`mb-4 font-serif text-xl font-semibold ${hoveredCard === "respect" ? "text-white" : "text-[#577ABB]"}`}>
                        Cultural Respect
                    </h3>
                    <p className={`leading-relaxed ${hoveredCard === "respect" ? "text-white" : "text-gray-800"}`}>
                        We honor the richness of Moroccan heritage in every detail.
                    </p>
                </div>
            </motion.div>

            {/* Card 3 - Community First */}
            <motion.div
                className="relative py-10 px-6 border rounded-3xl shadow-md overflow-hidden"
                variants={item}
                onMouseEnter={() => setHoveredCard("community")}
                onMouseLeave={() => setHoveredCard(null)}
            >
                {hoveredCard === "community" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${cardImages.community})`,
                        }}
                    />
                )}
                {hoveredCard === "community" && (
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
                )}
                <div className="relative z-10">
                    <FaUsers className={`text-4xl mb-4 mx-auto ${hoveredCard === "community" ? "text-white" : "text-[#577ABB]"}`} />
                    <h3 className={`mb-4 font-serif text-xl font-semibold ${hoveredCard === "community" ? "text-white" : "text-[#577ABB]"}`}>
                        Community First
                    </h3>
                    <p className={`leading-relaxed ${hoveredCard === "community" ? "text-white" : "text-gray-800"}`}>
                        We connect artisans, creators, and explorers through shared stories.
                    </p>
                </div>
            </motion.div>

            {/* Card 4 - Accessibility */}
            <motion.div
                className="relative py-10 px-6 border rounded-3xl shadow-md overflow-hidden"
                variants={item}
                onMouseEnter={() => setHoveredCard("accessibility")}
                onMouseLeave={() => setHoveredCard(null)}
            >
                {hoveredCard === "accessibility" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-cover bg-center z-0"
                        style={{
                            backgroundImage: `url(${cardImages.accessibility})`,
                        }}
                    />
                )}
                {hoveredCard === "accessibility" && (
                    <div className="absolute inset-0 bg-black/40 z-0"></div>
                )}
                <div className="relative z-10">
                    <FaUniversalAccess className={`text-4xl mb-4 mx-auto ${hoveredCard === "accessibility" ? "text-white" : "text-[#577ABB]"}`} />
                    <h3 className={`mb-4 font-serif text-xl font-semibold ${hoveredCard === "accessibility" ? "text-white" : "text-[#577ABB]"}`}>
                        Accessibility
                    </h3>
                    <p className={`leading-relaxed ${hoveredCard === "accessibility" ? "text-white" : "text-gray-800"}`}>
                        We make culture discoverable, immersive, and open to all.
                    </p>
                </div>
            </motion.div>
        </motion.div>
    </motion.section>
);
}
