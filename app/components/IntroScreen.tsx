"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroScreen({
  onOpen,
}: {
  onOpen: () => void;
}) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-white">
      <Image
        src="/f.webp"
        alt="Wedding Background"
        fill
        priority
        quality={85}
        className="object-cover -z-20"
      />

      {/* <div className="absolute inset-0 bg-black/80 -z-10" /> */}

      <div className="absolute inset-0 mt-28 flex flex-col justify-center items-center text-center px-4 z-10">
        <p className="text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase mb-6 font-light text-gray-300">
          We are getting married
        </p>

        <h1 className="flex flex-col md:flex-row items-center uppercase justify-center text-5xl sm:text-6xl md:text-8xl font-['Great_Vibes'] tracking-wide capitalize leading-tight gap-2 md:gap-4">
          <span>Alfred</span>

          <span className="text-[#AEC6CF] text-4xl sm:text-5xl md:text-7xl leading-none font-sans">
            &
          </span>

          <span>Aneeta</span>
        </h1>

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
      </div>
    </section>
  );
}