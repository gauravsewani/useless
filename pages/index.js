import React, { useEffect, useState, useRef } from "react";
import LandingModel from "../src/components/LandingModel";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Loader, Html } from "@react-three/drei";
import useAppState from "../src/states/useAppState";
import Loading from "../src/components/LoadingBar";
import { FaVolumeMute } from "react-icons/fa";
import { useSelector } from "react-redux";
import Script from "next/script";

function index() {
  const grainedContainer = useRef();

  const { clr, toggleColor } = useAppState();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [rendered, setRendered] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const { startTime, elapsedTime, percentage, isScrolled } = useSelector(
    (state) => state.timer
  );

  useEffect(() => {
    // Create the Audio instance once when the component mounts
    setAudio(new Audio("sound.mp3"));

    // Clean up the Audio instance when the component unmounts
    return () => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
        setAudio(null);
      }
    };
  }, []);

  // Apply the dark mode class on component mount based on the isDarkMode state
  useEffect(() => {
    const handleBeforeUnload = () => {
      toggleColor();
      setRendered(false);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    setRendered(true);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [toggleColor]);

  // console.log("isDarkMode:", isDarkMode);
  //other logic

  useEffect(() => {
    setMounted(true);
  });

  useEffect(() => {
    document.documentElement.style.setProperty("--mc1", "transperent");
    document.documentElement.style.setProperty("--mc2", "transperent");
    document.documentElement.style.setProperty("--hc", "transperent");
    document.documentElement.style.setProperty("--bc", "transperent");
  }, []);

  return rendered ? (
    <>
      <Script
        src="/grained.js"
        onLoad={() => {
          var options = {
            animate: true,
            patternWidth: 1000,
            patternHeight: 1000,
            grainOpacity: 0.1,
            grainDensity: 1,
            grainWidth: 1,
            grainHeight: 1,
          };

          grained("#container", options);
        }}
      />
      {mounted && (
        <div
          className="w-screen h-screen bg-white bg-no-repeat bg-cover bg-center"
          id="container"
        >
          <LandingModel />
        </div>
      )}
    </>
  ) : null;
}

export default index;
