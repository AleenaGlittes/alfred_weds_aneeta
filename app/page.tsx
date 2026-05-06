"use client";

import { useState, useRef } from "react";
import SaveTheDate from "./components/SavetheDate";
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
          <button
            onClick={toggleMusic}
            className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center"
          >
            {musicPlaying ? <Music2 /> : <VolumeX />}
          </button>

          {/* Floating Location Button */}
          <button
            onClick={openLocation}
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-white/90 backdrop-blur shadow-xl flex items-center justify-center"
          >
            <MapPin />
          </button>
          <div id="countdown">
            <InvitationScreen />

            <BigDayCountdown />
          </div>

          <CoupleSection />
          <EventDetails />
          <ThankYouSection/>
          <Footer />
        </>
      )}
    </main>
  );
}