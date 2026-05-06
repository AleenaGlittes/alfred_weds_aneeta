"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InvitationScreen() {
  return (
    <motion.section
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative min-h-screen w-full overflow-hidden text-white"
    >
      {/* Background */}
      <Image
        src="/cute.png"
        alt="Invitation Background"
        fill
        priority
        quality={85}
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center text-center px-6">
        <div className="flex flex-col items-center max-w-4xl">
          
          {/* Small stylish Save the Date */}
          <p className="font-['Great_Vibes'] text-3xl sm:text-4xl md:text-5xl text-[#D6E0E6] mb-8">
            Save the Date
          </p>

          {/* Main Names */}
          <h1 className="flex flex-col md:flex-row items-center justify-center font-['Cormorant_Garamond'] uppercase text-5xl sm:text-6xl md:text-8xl lg:text-[9rem] font-medium tracking-wide leading-tight gap-3 md:gap-6">
            
            <span>Alfred</span>

            {/* Centered ampersand */}
            <span className="font-['Great_Vibes'] text-[#AEC6CF] text-5xl sm:text-6xl md:text-8xl leading-none normal-case">
              &
            </span>

            <span>Aneeta</span>
          </h1>

          {/* Marriage Label */}
          <p className="mt-12 text-[12px] md:text-sm uppercase tracking-[0.5em] text-[#D6E0E6]">
            Marriage
          </p>

          {/* Date */}
          <div className="mt-6 flex items-center gap-4 sm:gap-6 text-white font-['Cormorant_Garamond'] text-3xl sm:text-4xl md:text-6xl font-light">
            <span>25</span>
            <span className="text-[#AEC6CF]">|</span>
            <span>05</span>
            <span className="text-[#AEC6CF]">|</span>
            <span>2026</span>
          </div>

          {/* Day */}
          <p className="mt-8 text-[13px] md:text-sm uppercase tracking-[0.55em] text-[#D6E0E6]">
            Monday
          </p>
        </div>
      </div>
    </motion.section>
  );
}