"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function SaveTheDate({ onOpen }: { onOpen: () => void }) {
  const [showInvitation, setShowInvitation] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = () => {
    setShowInvitation(true);
    if (audioRef.current) {
      audioRef.current.play().catch((e) => console.log("Audio error", e));
    }
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      {/* Background Image */}
      <Image
        src="/front-image.jpg"
        alt="Wedding Background"
        fill
        priority
        quality={85}
        className="object-cover -z-20"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 -z-10" />

      {/* First Screen */}
      <AnimatePresence>
        {!showInvitation && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10"
          >
            <p className="text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase mb-6 font-light text-gray-300">
              We are getting married
            </p>

            {/* Couple names */}
            <h1 className="flex flex-col md:flex-row items-center uppercase justify-center text-5xl sm:text-6xl md:text-8xl font-['Great_Vibes'] tracking-wide capitalize leading-tight gap-2 md:gap-4">
              <span>Alfred</span>

              <span className="text-[#AEC6CF] text-4xl sm:text-5xl md:text-7xl leading-none font-sans">
                &
              </span>

              <span>Aneeta</span>
            </h1>

            {/* Open Invitation Button */}
            <motion.button
              onClick={onOpen}
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                delay: 0.8,
                duration: 0.6,
                type: "spring",
              }}
              className="mt-12 px-8 py-3 border border-white text-white uppercase tracking-[0.2em] text-sm rounded-full backdrop-blur-sm hover:bg-white hover:text-black transition"
            >
              Open Invitation
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

     
     {/* Invitation Screen */}
<AnimatePresence>
  {showInvitation && (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-20"
    >
      {/* Second Background Image */}
      <Image
        src="/wedd.png"
        alt="Invitation Background"
        fill
        priority
        quality={85}
        className="object-cover"
      />

      {/* Overlay for second image */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Invitation Content */}
      <div className="relative h-full flex items-center justify-center text-center px-6">
        <div className="flex flex-col items-center">
          
          <p className="mb-4 text-[12px] md:text-sm uppercase tracking-[0.55em] text-[#D6E0E6] font-light">
            We Are Getting Married
          </p>

          <h1 className="font-['Great_Vibes'] text-6xl md:text-8xl lg:text-[9rem] text-white leading-none drop-shadow-xl">
            Save the Date
          </h1>

          <h2 className="mt-8 font-['Cormorant_Garamond'] italic uppercase text-4xl md:text-6xl text-[#AEC6CF] font-medium tracking-wide">
            Alfred & Aneeta
          </h2>

          <p className="mt-12 text-[12px] md:text-sm uppercase tracking-[0.5em] text-[#D6E0E6]">
            Marriage
          </p>

          <div className="mt-6 flex items-center gap-6 text-white font-['Cormorant_Garamond'] text-4xl md:text-6xl font-light">
            <span>25</span>
            <span className="text-[#AEC6CF]">|</span>
            <span>05</span>
            <span className="text-[#AEC6CF]">|</span>
            <span>2026</span>
          </div>

          <p className="mt-8 text-[13px] md:text-sm uppercase tracking-[0.55em] text-[#D6E0E6]">
            Monday
          </p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
      <audio ref={audioRef} src="/song.mpeg" loop />
    </section>
  );
}