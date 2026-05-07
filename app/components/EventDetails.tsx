"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const events = [
  {
    title: "Wedding Ceremony",
    image: "/hall.png",
    day: "Monday",
    date: "May 25, 2026",
    time: "3:00 PM",
    venue: "St. Antony's Forane Church",
    location: "Pudukad, Thrissur",
  },
  {
    title: "Reception",
    image: "/phall.png",
    day: "Monday",
    date: "May 25, 2026",
    time: "06:30 PM – 09:00 PM",
    venue: "Zion Parish Hall",
    location: "Pudukad, Thrissur",
  },
];

export default function EventDetails() {
  return (
    <section
      id="events"
      className="relative bg-[#c0ddfa] py-20 sm:py-28 px-4 sm:px-6 md:px-8"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <p className="text-xs sm:text-sm uppercase tracking-[0.35em] mb-4 font-light text-[#4F6F82]">
          Join us in celebrating
        </p>

        <h2 className="font-greatvibes text-4xl sm:text-5xl md:text-6xl text-[#2F4F68]">
          When & Where
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{
              y: 100,
              opacity: 0,
              scale: 0.96,
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: index * 0.12,
            }}
            whileHover={{
              y: -8,
            }}
            className="flex-1"
          >
            <div
              className="
                bg-white/75
                backdrop-blur-md
                p-6 sm:p-10 md:p-14
                border border-[#8BAFC5]/40
                rounded-2xl
                shadow-lg
                transition-all duration-500
                hover:shadow-2xl
              "
            >
              {/* Event Title */}
              <h3 className="font-great-vibes text-4xl sm:text-5xl text-[#2D5670] mb-6 text-center">
                {event.title}
              </h3>

              <div className="w-14 h-[1px] bg-[#7D9FB5] mx-auto mb-8"></div>

              {/* Venue Image */}
              <div className="relative w-full h-64 mb-8 overflow-hidden rounded-xl border border-[#AEC6CF]/30">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Day */}
              <p className="text-xs uppercase tracking-[0.3em] text-[#5A7A91] mb-3 text-center">
                {event.day}
              </p>

              {/* Date */}
              <p className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-[#234B63] mb-3 text-center font-semibold">
                {event.date}
              </p>

              {/* Time */}
              <p className="font-['Cormorant_Garamond'] text-xl text-[#365D74] mb-6 text-center">
                {event.time}
              </p>

              {/* Venue */}
              <p className="text-base leading-loose tracking-wide text-[#4A6475] text-center font-medium">
                {event.venue}
                <br />
                {event.location}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}