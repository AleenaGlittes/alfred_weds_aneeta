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
      <div className="relative min-h-screen flex items-center justify-center px-6">
        <div className="flex flex-col items-center text-center max-w-6xl">

          {/* Top Text */}
          <div className="mb-12">
            <p className="font-['Great_Vibes'] text-4xl sm:text-5xl md:text-6xl text-[#D6E0E6]">
              Mark Your Calendar
            </p>

            <p className="mt-4 text-xs md:text-sm uppercase tracking-[0.45em] text-[#AEC6CF]">
              for our special day
            </p>
          </div>

          {/* Decorative Divider */}
          {/* <div className="w-24 h-[1px] bg-[#AEC6CF]/70 mb-12"></div> */}

          {/* Main Names */}
          <h1 className="flex flex-col md:flex-row items-center justify-center font-['Cormorant_Garamond'] normal-case leading-[1.1] gap-4 md:gap-10">
            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem]">
              Alfred
            </span>

            <span className="text-[#AEC6CF]  font-['Great_Vibes'] text-6xl sm:text-7xl md:text-8xl lg:text-[9rem]">
              &
            </span>

            <span className="text-7xl sm:text-8xl md:text-9xl lg:text-[12rem]">
              Aneeta
            </span>
          </h1>

          {/* Marriage Label */}
          <p className="mt-14 text-xs md:text-sm uppercase tracking-[0.55em] text-[#D6E0E6]">
            Marriage Ceremony
          </p>

          {/* Date */}
          <div className="mt-8 flex items-center gap-5 sm:gap-8 font-['Cormorant_Garamond'] text-4xl sm:text-5xl md:text-7xl font-light">
            <span>25</span>
            <span className="text-[#AEC6CF]">|</span>
            <span>05</span>
            <span className="text-[#AEC6CF]">|</span>
            <span>2026</span>
          </div>

          {/* Day */}
          <p className="mt-8 text-sm md:text-base uppercase tracking-[0.6em] text-[#D6E0E6]">
            Monday
          </p>
        </div>
      </div>
    </motion.section>
  );
}