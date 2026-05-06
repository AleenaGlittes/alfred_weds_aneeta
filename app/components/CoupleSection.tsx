"use client";

import Image from "next/image";

export default function CoupleSection() {
  return (
    <section className="py-20 px-4 bg-[#F5FAFF] text-center">
      
      {/* Title */}
      <p className="font-['Great_Vibes'] text-4xl sm:text-5xl text-[#89AFC0]">
        The Couple
      </p>

      <div className="w-16 h-[1px] bg-[#AEC6CF] mx-auto mt-3 mb-12"></div>

      {/* Image Card */}
      <div className="max-w-4xl mx-auto mb-14">
        <div className="p-2 border border-[#AEC6CF]/40 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg">
          <div className="overflow-hidden rounded-xl">
            <Image
              src="/wedd.png"
              alt="Couple"
              width={1000}
              height={600}
              className="w-full h-auto object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>

      {/* Couple Details with centered & */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

        {/* Groom */}
        <div className="space-y-3 md:text-right">
          <h3 className="text-xs uppercase tracking-[0.3em] text-[#89AFC0]">
            The Groom
          </h3>

          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-semibold text-[#2C3E50]">
            Alfred Augustin
          </h2>

          <p className="font-['Cormorant_Garamond'] text-lg text-[#6B7F8D]">
            S/O
          </p>

          <p className="font-['Cormorant_Garamond'] text-xl text-[#4A6475]">
            Mr. S & Mrs. Thara
          </p>

          <p className="text-sm text-[#6B7F8D] leading-relaxed">
            Nalumakkal House, Edappally, Ernakulam
          </p>

          <p className="text-sm text-[#6B7F8D]">
            Ph: +91 9037838926, +91 9497793291
          </p>
        </div>

        {/* Center & */}
        <div className="flex items-center justify-center">
          <span className="font-['Great_Vibes'] text-6xl sm:text-7xl text-[#AEC6CF] leading-none">
            &
          </span>
        </div>

        {/* Bride */}
        <div className="space-y-3 md:text-left">
          <h3 className="text-xs uppercase tracking-[0.3em] text-[#89AFC0]">
            The Bride
          </h3>

          <h2 className="font-['Cormorant_Garamond'] text-3xl sm:text-4xl font-semibold text-[#2C3E50]">
            Aneeta Theresa
          </h2>

          <p className="font-['Cormorant_Garamond'] text-lg text-[#6B7F8D]">
            D/O
          </p>

          <p className="font-['Cormorant_Garamond'] text-xl text-[#4A6475]">
            Mr. M.J Shaju & Mrs. Asha Shaju
          </p>

          <p className="text-sm text-[#6B7F8D] leading-relaxed">
            Manjanga House, Perambra
          </p>

          <p className="text-sm text-[#6B7F8D]">
            Thrissur
          </p>
        </div>
      </div>
    </section>
  );
}