import React, { useEffect, useState } from "react";
import LandingModel from "../src/components/LandingModel";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Loader, Html } from "@react-three/drei";
import useAppState from "../src/states/useAppState";
import Loading from "../src/components/LoadingBar";
import { FaVolumeMute } from "react-icons/fa";

function index() {
  const { clr, toggleColor } = useAppState();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [rendered, setRendered] = useState(false);

  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

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

  const toggleSound = () => {
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

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
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

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
      {mounted && isLoading ? (
        <Loading />
      ) : (
        <div
          // className={`w-screen h-screen
          // ${
          //   clr === "blue"
          //     ? "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-200 via-blue-400 to-blue-700"
          //     : clr === "grey"
          //     ? "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
          //     : clr === "purple"
          //     ? "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-700"
          //     : ""
          // }
          // `}
          className="w-screen h-screen bg-[url('/img/galaxy.jpg')] bg-no-repeat bg-cover bg-center"
        >
          <div className="absolute pointer-events-none z-20 w-screen h-screen top-0 bottom-0 left-0 right-0 ">
            <div className="relative">
              <button
                onClick={toggleSound}
                className="absolute pointer-events-auto flex justify-center left-0 right-0 mx-auto w-56 "
              >
                {isPlaying ? (
                  <div className="mt-4">
                    <div className="loader w-40 h-16 bg-transparent">
                      <span className="stroke"></span>
                      <span className="stroke"></span>
                      <span className="stroke"></span>
                      <span className="stroke"></span>
                      <span className="stroke"></span>
                      <span className="stroke"></span>
                      <span className="stroke"></span>
                    </div>
                  </div>
                ) : (
                  <div className="mt-4">
                    <div className=" max-[500px]:hidden block text-yellow-200 drop-shadow-gold3">
                      <FaVolumeMute size={60} />
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
          <Canvas>
            {/* //camera={{ position: [0, 0, 8] }} */}
            <LandingModel />
            {/* <Loader /> */}
          </Canvas>
        </div>
      )}
    </>
  ) : null;
}

export default index;
