"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ThankYouSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center px-6 py-24 text-center">
      
      {/* Background Image */}
      <Image
        src="/floral.jpg"
        alt="Thank You Background"
        fill
        priority
        quality={85}
        className="object-cover"
      />

      {/* Soft pastel overlay */}
      <div className="absolute inset-0 bg-[#F5FAFF]/75 backdrop-blur-[3px]" />

      {/* Decorative gradient blur */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[#AEC6CF]/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-52 h-52 rounded-full bg-[#D6EAF8]/40 blur-3xl" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Title */}
        <p className="font-['Great_Vibes'] text-4xl sm:text-5xl md:text-6xl text-[#89AFC0] mb-6">
          Thank You
        </p>

        {/* Decorative line */}
        <div className="w-20 h-[1px] bg-[#AEC6CF] mx-auto mb-10"></div>

        {/* Main message */}
        <p className="font-['Great_Vibes'] text-2xl sm:text-3xl md:text-4xl leading-relaxed text-[#2C3E50] font-light px-2 sm:px-8">
          Our celebration wouldn’t be complete without you.
          <br />
          We can’t wait to see you and share these special memories!
        </p>

        {/* Couple Names */}
        <div className="mt-16">
          <h2 className="font-['Great_Vibes'] uppercase text-2xl sm:text-5xl md:text-6xl text-[#4A6475] font-medium tracking-wide">
            Alfred & Aneeta
          </h2>

          <p className="mt-10 font-['Great_Vibes'] text-xl sm:text-3xl text-[#89AFC0]">
            Sharing the happiness
          </p>
        </div>

        {/* Family Names */}
        <div className="mt-2">
          <p className="uppercase tracking-[0.35em] text-xs sm:text-sm text-[#6B7F8D]">
           Adam
          </p>
        </div>
      </motion.div>
    </section>
  );
}