"use client";

import Image from "next/image";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function WhenWhereSection() {
  return (
    <section className="py-16 px-4 bg-[#F8FAFC] text-center">
      
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-serif text-gray-800">
        When & Where
      </h2>
      <div className="w-16 h-[2px] bg-sky-400 mx-auto mt-3 mb-10"></div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-md bg-white"
      >
        
        {/* Image */}
        <div className="relative w-full h-[220px] sm:h-[280px]">
          <Image
            src="/hall.png" 
            alt="Wedding Hall"
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 text-left space-y-5">
          
          <h3 className="text-xl sm:text-2xl font-serif text-gray-800">
            Wedding Ceremony
          </h3>

          {/* Date */}
          <div className="flex items-center gap-3 text-gray-700">
            <CalendarDays className="text-sky-500 w-5 h-5" />
            <span>Monday, May 25, 2026</span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-3 text-gray-700">
            <Clock className="text-sky-500 w-5 h-5" />
            <span>3:00 PM</span>
          </div>

          {/* Location */}
          <div className="flex items-start gap-3 text-gray-700">
            <MapPin className="text-sky-500 w-5 h-5 mt-1" />
            <span>
              St. Antony's Forane Church <br />
              Puthukad, Thrissur
            </span>
          </div>

          {/* Button */}
          <a
            href="https://www.google.com/maps?q=St.+Antony's+Forane+Church+Puthukad,+Thrissur"
            target="_blank"
            className="inline-flex items-center gap-2 mt-4 px-6 py-3 border border-sky-400 text-sky-500 rounded-full hover:bg-sky-400 hover:text-white transition"
          >
            📍 Open in Maps
          </a>
        </div>
      </motion.div>
    </section>
  );
}