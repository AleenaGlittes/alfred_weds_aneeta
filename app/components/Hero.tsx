"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  const openInvitation = () => {
    window.open("/invitation.pdf", "_blank");
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden text-white text-center px-4">
      
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

      {/* Main Content */}
      <div className="z-10 max-w-4xl animate-[fadeIn_2s_ease-out]">
        <p className="text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase mb-6 font-light text-gray-300">
       The Wedding Invitation of
        </p>

        <h1 className="flex flex-col md:flex-row items-center justify-center text-4xl sm:text-5xl md:text-7xl font-semibold tracking-[0.08em] uppercase leading-tight gap-2 md:gap-4">
          <span>Alfred</span>

          <span className="text-accent text-3xl sm:text-4xl md:text-7xl leading-none">
            &
          </span>

          <span>Aneeta</span>
        </h1>

        {/* Animated Invitation Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.8,
            type: "spring",
            stiffness: 180,
          }}
          className="mt-12"
        >
          <button
            onClick={openInvitation}
            className="px-8 py-3 border border-white text-white uppercase tracking-[0.2em] text-sm hover:bg-white hover:text-black transition duration-300 rounded-full backdrop-blur-sm"
          >
            Open Invitation
          </button>
        </motion.div>
      </div>
    </section>
  );
}