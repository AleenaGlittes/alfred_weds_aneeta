"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TARGET_DATE = new Date(2026, 4, 25, 0, 0, 0);

export default function BigDayCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function getTimeLeft() {
    const now = new Date().getTime();
    const distance = TARGET_DATE.getTime() - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  }

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-16 sm:py-24 px-4 text-center overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/floral.jpg')] bg-cover bg-center opacity-40" />

      {/* Soft pastel overlay */}
      {/* <div className="absolute inset-0 bg-[#F5FAFF]/80 backdrop-blur-[2px]" /> */}

      {/* Content */}
      <div className="relative z-10">
        
        {/* Heading */}
        <p className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#4A6475] mb-3">
           Big Day
        </p>

        <h2 className="font-['Cormorant_Garamond'] uppercase tracking-[0.3em] text-sm sm:text-base text-black text-semibold mb-10">
          Counting the moments
        </h2>

        {/* Countdown */}
        <div className="grid grid-cols-2 sm:flex gap-5 sm:gap-8">
          <TimeBox label="Days" value={timeLeft.days} />
          <TimeBox label="Hours" value={timeLeft.hours} />
          <TimeBox label="Minutes" value={timeLeft.minutes} />
          <TimeBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
}

function TimeBox({
  value,
  label,
}: {
  value: number;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="
          flex items-center justify-center
          w-20 h-20 sm:w-28 sm:h-28
          rounded-full
          border border-[#AEC6CF]/40
          bg-white/80
          backdrop-blur-md
          shadow-lg
        "
        animate={{
          scale: [1, 1.03, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25 }}
            className="
              font-['Cormorant_Garamond']
              text-2xl sm:text-4xl
              font-semibold
              text-[#4A6475]
            "
          >
            {value}
          </motion.span>
        </AnimatePresence>
      </motion.div>

      <span className="mt-3 text-[11px] sm:text-sm uppercase tracking-[0.25em] text-black">
        {label}
      </span>
    </div>
  );
}