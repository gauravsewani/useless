import React, { useEffect, useState } from "react";
import LandingModel from "../src/components/LandingModel";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";
import { Loader, Html } from "@react-three/drei";
import useAppState from "../src/states/useAppState";
import Loading from "../src/components/LoadingBar";

function index() {
  const { clr, toggleColor } = useAppState();
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [rendered, setRendered] = useState(false);

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
          className={`w-screen h-screen ${clr === "blue"
              ? "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-200 via-blue-400 to-blue-700"
              : clr === "grey"
                ? "bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black"
                : clr === "purple"
                  ? "bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-200 via-purple-400 to-purple-700"
                  : ""
            }`}
        >
          {/* <div className="absolute bottom-[10vh] right-0 left-0 w-fit h-fit bg-black bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 font-razed text-3xl z-50 mx-auto text-yellow-300 flex items-center justify-center p-5 rounded-xl ">
            <p className="">Hold Spacebar for 2 seconds</p>
          </div> */}

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
