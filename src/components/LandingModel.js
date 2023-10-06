import {
  Cloud,
  Environment,
  Scroll,
  ScrollControls,
  Sparkles,
  Sphere,
  SpotLight,
  Stars,
  useProgress,
  useScroll,
} from "@react-three/drei";
import { Robot } from "../components/Robot";
// import { Model } from "../components/Ani";
import { Model as Bear2 } from "../components/Bear2";
import { Model as Bear3 } from "../components/Bear3";
import { Model as Bear4 } from "../components/Bear4";
import { Model as Logo } from "../components/Logo";
import { Model as Line } from "../components/Line";

import Teams from "./Teams";
import Footer2 from "../layout/Footer2";
import Footer from "../layout/Footer";
import Head from "./Head";
import Playbox from "../layout/Playbox";
import { useEffect } from "react";
import { useRef } from "react";
import useAppState from "../states/useAppState";
import { TextureLoader } from "three";
import { Canvas, useLoader } from "react-three-fiber";
import Plane from "./Plane";
import {
  BlendFunction,
  GlitchEffect,
  GlitchMode,
  NoiseEffect,
  NoiseTexture,
} from "postprocessing";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  DotScreen,
  EffectComposer,
  Glitch,
  Grid,
  Noise,
  Scanline,
  Vignette,
} from "@react-three/postprocessing";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

import { setStartTime, updateElapsedTime } from "../redux/actions/timerActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./LoadingBar";
import { Suspense } from "react";
import { useState } from "react";
import { FaVolumeMute } from "react-icons/fa";
import AnimatedDiv from "./AnimatedDiv";
import { useInView } from "react-intersection-observer";

function LandingModel() {
  //framer motion animations
  const fadeFromLeft = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.4 } },
  };
  const fadeFromRight = {
    hidden: { opacity: 0, x: 5 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", delay: 0.4 } },
  };
  const fadeFromTop = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", delay: 0.4 } },
  };
  const fadeNormal = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { type: "spring", delay: 0.4 } },
  };

  const { progress } = useProgress();
  // console.log(progress);
  const { clr, toggleColor } = useAppState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [audio, setAudio] = useState(null);

  // space bar thing

  const timerRef = useRef(null);
  const spacebarPressedRef = useRef(false);
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);

  const { ref: ref1, inView: inView1 } = useInView();
  const { ref: ref2, inView: inView2 } = useInView();

  useEffect(() => {
    if (inView1 && !isInView1) {
      setIsInView1(true);
    }
  }, [inView1, isInView1]);

  useEffect(() => {
    if (inView2 && !isInView2) {
      setIsInView2(true);
    }
  }, [inView2, isInView2]);

  useEffect(() => {
    if (!inView1 && isInView1) {
      setIsInView1(false);
    }
  }, [inView1, isInView1]);

  useEffect(() => {
    if (!inView2 && isInView2) {
      setIsInView2(false);
    }
  }, [inView2, isInView2]);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress >= 100) {
        setIsLoading(false);
      }
    }, 5000);

    // Clear the timeout if the component is unmounted before 5 seconds
    return () => clearTimeout(timer);
  }, [progress]); // Depend on the progress value so the effect re-runs when progress changes

  const dispatch = useDispatch();
  const { startTime, elapsedTime, percentage, isScrolled } = useSelector(
    (state) => state.timer
  );

  useEffect(() => {
    let startTimestamp = 0;
    let endTimestamp = 0;
    let timerRef = null;

    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        if (!timerRef) {
          startTimestamp = Date.now();
          dispatch(setStartTime(startTimestamp)); // dispatch the action to set start time
          timerRef = setInterval(() => {
            const elapsedTime = Date.now() - startTimestamp;
            dispatch(updateElapsedTime(elapsedTime)); // dispatch the action to update elapsed time
            // console.log(`Spacebar held down for ${elapsedTime} microseconds`);
            if (elapsedTime >= 2000) {
              clearInterval(timerRef);
              timerRef = null;
              toggleColor();
            }
          }, 400);
        }
      }
    };

    const handleKeyUp = (event) => {
      if (event.code === "Space") {
        endTimestamp = Date.now();
        if (timerRef) {
          clearInterval(timerRef);
          timerRef = null;
        }
        dispatch(updateElapsedTime(0)); // reset the elapsed time to 0
        dispatch(setStartTime(0)); // reset the start time to 0
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      clearInterval(timerRef);
    };
  }, []);

  // prevent the page to scroll on spacebar

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) {
        event.preventDefault();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const texture = useLoader(TextureLoader, "/img/spacebar.png");

  return (
    <>
      {!isLoading ? (
        <>
          {!isInView1 && !inView2 && (
            <div className="bg-transparent text-3xl text-yellow-400 text-center font-black absolute w-screen h-screen overflow-hidden z-50 flex items-center pointer-events-none ">
              {isScrolled == false && (
                <div className="max-[600px]:hidden  flex w-[80vw] h-[98vh] items-end justify-center  mx-auto">
                  <div className="flex gap-3  items-center justify-center relative">
                    <p className="mt-1 text-white drop-shadow-yellow">press</p>
                    <p className="absolute right-0 left-0 top-0 bottom-0  mt-2.5 mr-7 text-black text-xl">
                      spacebar
                    </p>
                    <div className="w-40 h-10 overflow-hidden rounded-full bg-white outline-4 outline outline-black">
                      <div
                        className={`h-full w-full transition-all duration-75 rounded-full bg-yellow-300 ${
                          percentage == 0
                            ? "outline-none"
                            : "outline-2 outline outline-black"
                        }  `}
                        style={{ width: `calc(${percentage} * 1%)` }}
                      ></div>
                    </div>
                    <p className="mt-1 text-white drop-shadow-yellow">
                      to warp
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="absolute pointer-events-none z-20 w-screen h-screen top-0 bottom-0 left-0  ">
            <div className="relative max-md:hidden">
              <button
                onClick={toggleSound}
                className="absolute pointer-events-auto flex ml-10 outline-none focus:outline-none left-0 w-56 "
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
                    <div className=" max-[500px]:hidden block text-black ">
                      <FaVolumeMute size={60} />
                    </div>
                  </div>
                )}
              </button>
            </div>
          </div>
          <Canvas>
            <Suspense>
              {/* <color attach="backgrou nd" args={["#333333"]} /> */}
              <Environment preset="apartment" />
              {/* <Sparkles
            color={
              clr === "blue"
                ? "#ffa500"
                : clr === "grey"
                ? "#ff69b4"
                : clr === "purple"
                ? "#00ffff"
                : "#000000"
            }
            count={100}
            size={3}
            scale={10}
            noise={0}
            position={[0, -5, 0]}
          /> */}

              <ScrollControls pages={5} damping={0.1}>
                {/* <Plane texture={texture} /> */}

                <SpotLight
                  position={(0, 25, 0)}
                  angle={0.526}
                  penumbra={1}
                  castShadow
                  intensity={2}
                  // shadowBias={-0.0001}
                />
                <Logo />
                <EffectComposer>
                  <DepthOfField
                    focusDistance={0}
                    focalLength={0.02}
                    bokehScale={1}
                    height={480}
                  />
                  <Bloom
                    luminanceThreshold={0.5}
                    luminanceSmoothing={1.5}
                    height={500}
                  />
                  <Vignette eskil={false} offset={0.1} darkness={1.1} />
                </EffectComposer>
                <Line />

                {clr === "blue" ? (
                  <Bear2 scale={0.5} position={[0, -11, 0]} />
                ) : clr === "grey" ? (
                  <Bear3 scale={0.5} position={[0, -11, 0]} />
                ) : clr === "purple" ? (
                  <Bear4 scale={0.5} position={[0, -11, 0]} />
                ) : null}
                {/* <Model scale={0.5} position={[0, -11, 0]} /> */}
                {/* {
              <Cloud
                color={isDarkMode ? "#000000" : "#ffd700"}
                opacity={0.1}
                speed={0.4} // Rotation speed
                width={12} // Width of the full cloud
                depth={-3} // Z-dir depth
                segments={50} // Number of particles
              />
            } */}
                <ambientLight intensity={1} />
                <Scroll></Scroll>
                <Scroll html className="w-screen h-fit">
                  <AnimatedDiv variants={fadeFromLeft}>
                    <Head />
                  </AnimatedDiv>
                  <AnimatedDiv variants={fadeFromRight}>
                    <div id="second-page">
                      <SecondPage />
                    </div>
                  </AnimatedDiv>
                  <AnimatedDiv variants={fadeFromLeft}>
                    <ThirdPage />
                  </AnimatedDiv>
                  <h1
                    className="text-black absolute lg:top-[280vh] top-[230vh]"
                    style={{
                      width: "inherit",
                      position: "absolute",
                      bottom: "0",
                    }}
                  >
                    <AnimatedDiv variants={fadeFromTop}>
                      <Teams />
                    </AnimatedDiv>
                  </h1>
                  <h1
                    className="text-black absolute lg:top-[380vh] top-[350vh]"
                    style={{
                      width: "inherit",
                      position: "absolute",
                      bottom: "0",
                    }}
                    ref={ref1}
                  >
                    {" "}
                    <AnimatedDiv variants={fadeNormal}>
                      <Playbox />
                    </AnimatedDiv>
                  </h1>
                  <div
                    className="absolute -bottom-[67%]  max-sm:-bottom-[110%] z-[100] bg-black"
                    ref={ref2}
                  >
                    <div className="text-white relative w-screen ">
                      <Footer2 />
                    </div>
                  </div>
                </Scroll>
              </ScrollControls>
            </Suspense>
          </Canvas>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default LandingModel;
