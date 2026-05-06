"use client";

import { useState, useRef } from "react";
import BigDayCountdown from "./components/BigDayCountdown";
import CoupleSection from "./components/CoupleSection";
import EventDetails from "./components/EventDetails";
import Footer from "./components/Footer";
import { Music2, MapPin, VolumeX } from "lucide-react";
import IntroScreen from "./components/IntroScreen";
import InvitationScreen from "./components/InvitationScreen";
import ThankYouSection from "./components/ThankyouSection";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpenInvitation = async () => {
    setOpened(true);

    if (audioRef.current) {
      await audioRef.current.play();
      setMusicPlaying(true);
    }

    setTimeout(() => {
      document
        .getElementById("countdown")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (musicPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setMusicPlaying(!musicPlaying);
  };

  const openLocation = () => {
    window.open(
      "https://maps.google.com/?q=St Antony's Forane Church Puthukad",
      "_blank"
    );
  };

  return (
    <main className=" scroll-smooth">
      <audio ref={audioRef} src="/music.mpeg" loop />

      {!opened ? (
        <IntroScreen onOpen={handleOpenInvitation} />
      ) : (
        <>
          {/* Floating Music Button */}
          {/* Floating Music Button */}
          <button
            onClick={toggleMusic}
            className="
    fixed bottom-6 left-6 z-50
    w-14 h-14 rounded-full
    bg-[#d8ebff]/90
    border border-[#AEC6CF]/40
    backdrop-blur-md
    shadow-[0_8px_30px_rgba(137,175,192,0.35)]
    flex items-center justify-center
    transition-all duration-300
    hover:scale-105 hover:bg-[#cfe6ff]
  "
          >
            {musicPlaying ? (
              <Music2 className="w-5 h-5 text-[#4A6475]" />
            ) : (
              <VolumeX className="w-5 h-5 text-[#4A6475]" />
            )}
          </button>

          {/* Floating Location Button */}
          <button
            onClick={openLocation}
            className="
    fixed bottom-6 right-6 z-50
    w-14 h-14 rounded-full
    bg-[#d8ebff]/90
    border border-[#AEC6CF]/40
    backdrop-blur-md
    shadow-[0_8px_30px_rgba(137,175,192,0.35)]
    flex items-center justify-center
    transition-all duration-300
    hover:scale-105 hover:bg-[#cfe6ff]
  "
          >
            <MapPin className="w-5 h-5 text-[#4A6475]" />
          </button>
          <div id="countdown">
            <InvitationScreen />

            <BigDayCountdown />
          </div>

          <CoupleSection />
          <EventDetails />
          <ThankYouSection />
          <Footer />
        </>
      )}
    </main>
  );
}