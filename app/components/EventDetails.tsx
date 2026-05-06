"use client";

import Image from "next/image";

export default function EventDetails() {
  return (
    <section
      className="py-20 sm:py-28 px-4 sm:px-6 md:px-8 bg-[#F5FAFF] text-center"
      id="events"
    >
      {/* Subtitle */}
      <p className="text-xs sm:text-sm uppercase tracking-[0.35em] mb-4 font-light text-[#89AFC0]">
        Join us in celebrating
      </p>

      {/* Title */}
      <h2 className="font-['Great_Vibes'] text-4xl sm:text-5xl md:text-6xl text-[#4A6475] mb-16">
        When & Where
      </h2>

      {/* Event Cards */}
      <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">

        {/* Wedding Ceremony */}
        <div
          className="
            flex-1
            bg-white/60
            backdrop-blur-md
            p-6 sm:p-10 md:p-14
            border border-[#AEC6CF]/30
            rounded-2xl
            shadow-lg
            transition-all duration-500
            hover:shadow-xl
          "
        >
          <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-[#2C3E50] mb-6">
            Wedding Ceremony
          </h3>

          <div className="w-12 h-[1px] bg-[#AEC6CF] mx-auto mb-8"></div>

          {/* Venue Image */}
          <div className="relative w-full h-64 mb-8 overflow-hidden rounded-xl border border-[#AEC6CF]/20">
            <Image
              src="/hall.png"
              alt="Church Venue"
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#89AFC0] mb-3">
            Monday
          </p>

          <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-[#4A6475] mb-3">
            May 25, 2026
          </p>

          <p className="font-['Cormorant_Garamond'] text-xl text-[#6B7F8D] mb-6">
            3:00 PM
          </p>

          <p className="text-sm leading-loose tracking-wide text-[#6B7F8D]">
            St. Antony's Forane Church
            <br />
            Puthukad, Thrissur
          </p>
        </div>

        {/* Reception */}
        <div
          className="
            flex-1
            bg-white/60
            backdrop-blur-md
            p-6 sm:p-10 md:p-14
            border border-[#AEC6CF]/30
            rounded-2xl
            shadow-lg
            transition-all duration-500
            hover:shadow-xl
          "
        >
          <h3 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl text-[#2C3E50] mb-6">
            Reception
          </h3>

          <div className="w-12 h-[1px] bg-[#AEC6CF] mx-auto mb-8"></div>

          {/* Venue Image */}
          <div className="relative w-full h-64 mb-8 overflow-hidden rounded-xl border border-[#AEC6CF]/20">
            <Image
              src="/phall.png"
              alt="Reception Venue"
              fill
              className="object-cover hover:scale-105 transition duration-700"
            />
          </div>

          <p className="text-xs uppercase tracking-[0.3em] text-[#89AFC0] mb-3">
            Monday
          </p>

          <p className="font-['Cormorant_Garamond'] text-2xl sm:text-3xl text-[#4A6475] mb-3">
            May 25, 2026
          </p>

          <p className="font-['Cormorant_Garamond'] text-xl text-[#6B7F8D] mb-6">
            06:30 PM – 09:00 PM
          </p>

          <p className="text-sm leading-loose tracking-wide text-[#6B7F8D]">
            Zion Parish Hall
            <br />
            Pudukad
          </p>
        </div>
      </div>
    </section>
  );
}