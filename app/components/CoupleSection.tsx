"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function CoupleSection() {
  return (
    <section className="relative py-24 px-4 bg-[#F5FAFF] overflow-hidden">
      {/* Soft Background Accent */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-[#d9ebf8] rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-[#cfe4f5] rounded-full blur-3xl opacity-60" />

      <div className="relative z-10">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="font-['Great_Vibes'] text-5xl sm:text-6xl text-[#89AFC0]">
            The Couple
          </p>

          <div className="w-20 h-[1px] bg-[#AEC6CF] mx-auto mt-4"></div>
        </div>

        {/* Animated Photo */}
        <motion.div
          initial={{ opacity: 0, y: -120, scale: 0.92 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="max-w-4xl mx-auto mb-20"
        >
          <div className="relative p-3 rounded-[28px] bg-white/70 backdrop-blur-md border border-[#AEC6CF]/30 shadow-xl">
            {/* Inner Frame */}
            <div className="absolute inset-4 border border-[#AEC6CF]/20 rounded-[22px]" />

            <div className="overflow-hidden rounded-[22px] relative z-10">
              <Image
                src="/couple.webp"
                alt="Couple"
                width={1000}
                height={650}
                className="w-full h-auto object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </motion.div>

        {/* Couple Details */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5 text-center md:text-right"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#89AFC0]">
              The Groom
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-semibold text-[#2C3E50]">
              Alfred Augustin
            </h2>

            {/* <div className="w-14 h-[1px] bg-[#AEC6CF] ml-auto mr-auto md:mr-0 md:ml-auto" /> */}

            <p className="font-['Cormorant_Garamond'] text-lg text-[#6B7F8D]">
              S/o
            </p>

            <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#4A6475] leading-relaxed whitespace-nowrap">
              Mr. K.A Rappai & Mrs. Magie Rappai
            </p>

            <div className=" text-[#6B7F8D] text-sm leading-loose">
              <p>Kannanaikal Kuttikadan House</p>
              <p>Northu Thoravu, Pudukad</p>
            </div>
          </motion.div>

          {/* Center & */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center h-full pt-10 md:pt-28"
          >
            <div className="w-24 h-24 rounded-full border border-[#AEC6CF]/30 bg-white/70 backdrop-blur-md flex items-center justify-center shadow-md">
              <span className="font-['Great_Vibes'] text-6xl text-[#AEC6CF] leading-none">
                &
              </span>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-5 text-center md:text-left"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-[#89AFC0]">
              The Bride
            </p>

            <h2 className="font-['Cormorant_Garamond'] text-4xl sm:text-5xl font-semibold text-[#2C3E50]">
              Aneeta Theresa
            </h2>

            {/* <div className="w-14 h-[1px] bg-[#AEC6CF] mr-auto ml-auto md:ml-0 md:mr-auto" /> */}

            <p className="font-['Cormorant_Garamond'] text-lg text-[#6B7F8D]">
              D/o
            </p>

            <p className="font-['Cormorant_Garamond'] text-xl sm:text-2xl text-[#4A6475] leading-relaxed whitespace-nowrap">
              Mr. M.T Shaju & Mrs. Asha Shaju
            </p>

            <div className=" text-[#6B7F8D] text-sm leading-loose">
              <p>Manjanga House, Perambra</p>
              <p>Thrissur</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}