"use client";
import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { createPortal } from "react-dom";

const Sound = () => {
  const audioRef = useRef(null);
  const [isPlaying, setisPlaying] = useState(false);
  const [showModal, setshowModal] = useState(false);

  const toggle = () => {
    const newstate = !isPlaying;
    setisPlaying(!isPlaying);
    newstate ? audioRef.current.play() : audioRef.current.pause();
    localStorage.setItem("audioConsent", String(newstate));
    localStorage.setItem("consentTime", new Date().toISOString());
    setshowModal(false);
  };

  const handleFirstuserinteraction = () => {
    const audioConsent = localStorage.getItem("audioConsent");
    if (audioConsent === "true" && !isPlaying) {
      audioRef.current.play();
      setisPlaying(true);
    }
    ["click", "keydown", "touchStart"].forEach((event) => {
      document.removeEventListener(event, handleFirstuserinteraction);
    });
  };

  useEffect(() => {
    const audioConsent = localStorage.getItem("audioConsent");
    const consentTime = localStorage.getItem("consentTime");
    if (
      audioConsent &&
      consentTime &&
      new Date(consentTime).getTime() + 3 * 24 * 60 * 60 * 1000 > new Date()
    ) {
      setisPlaying(audioConsent === "true");
      if (audioConsent == "true") {
        ["click", "keydown", "touchStart"].forEach((event) => {
          document.addEventListener(event, handleFirstuserinteraction);
        });
      }
    } else {
      setshowModal(true);
    }
  }, []);

  const Modal = ({ onCLose, toggle }) => {
    return createPortal(
      <div className="fixed inset-0 bg-background/60 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="border border-accent/30 bg-background/20 backdrop-blur-[6px] rounded navbutton px-4 xs:px-10 sm:px-16 py-8 text-center space-y-8">
          <p className="text-xs sm:text-base">
            Would you like to play the background music?
          </p>
          <div className="flex items-center justify-center gap-x-8">
            <button
              onClick={toggle}
              className="px-4 py-2 bg-background border border-accent/30 navbutton rounded mr-2 text-xs sm:text-base"
            >
              Yes
            </button>
            <button
              onClick={onCLose}
              className="px-4 py-2 bg-background border border-accent/30 navbutton rounded text-xs sm:text-base"
            >
              No
            </button>
          </div>
        </div>
      </div>,
      document.getElementById("my-modal")
    );
  };

  return (
    <div className="text-foreground fixed top-5 right-5 navbutton z-50 group  self-end">
      {showModal && (
        <Modal onCLose={() => setshowModal(false)} toggle={toggle} />
      )}
      <audio ref={audioRef} loop>
        <source src="/audio/bg-music.mp3" type="audio/mpeg" />
        your browser does not support the audio.
      </audio>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onClick={toggle}
        className="text-foreground group flex rounded-full items-center justify-center bg-background/20 border border-white border-solid backdrop-blur-[6px] fixed top-5 right-5 w-fit self-end navbutton z-50"
      >
        <span className="w-14 relative h-14 p-4 ">
          {isPlaying ? (
            <Volume2 className="w-full h-auto" strokeWidth={1.5} />
          ) : (
            <VolumeX className="w-full h-auto" strokeWidth={1.5} />
          )}
        </span>
      </motion.button>
    </div>
  );
};

export default Sound;
