import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import {
  Engine,
  Scene,
  UniversalCamera,
  HemisphericLight,
  Model,
  ScrollViewer,
  GlowLayer,
  useScene,
} from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders";
import { Leva, useControls } from "leva";
import { Suspense } from "react";
import AnimatedDiv from "./AnimatedDiv";
import Teams from "./Teams";
import Footer2 from "../layout/Footer2";
import Head from "./Head";
import Playbox from "../layout/Playbox";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import { useInView } from "react-intersection-observer";
import { FaVolumeMute } from "react-icons/fa";

const modelDirectories = [
  "/models/bear2/",
  "/models/bear3/",
  "/models/bear4/",
  "/models/bear5/",
];

const BabylonScene = () => {
  const [isMounted, setMounted] = useState(false);
  const [modelIndex, setModelIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [shouldRenderModel, setShouldRenderModel] = useState(false);
  const [isZeroDivInView, setIsZeroDivInView] = useState(false);
  const [isFirstDivInView, setIsFirstDivInView] = useState(false);
  const [isSecondDivInView, setIsSecondDivInView] = useState(false);
  const [isThirdDivInView, setIsThirdDivInView] = useState(false);
  const [isFourthDivInView, setIsFourthDivInView] = useState(false);
  const [isFifthDivInView, setIsFifthDivInView] = useState(false);
  const [isSixthDivInView, setIsSixthDivInView] = useState(false);
  const [isSpacebarVisible, setIsSpacebarVisible] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const [refZeroDiv, inViewZeroDiv] = useInView({});
  const [refFirstDiv, inViewFirstDiv] = useInView({});
  const [refSecondDiv, inViewSecondDiv] = useInView({});
  const [refThirdDiv, inViewThirdDiv] = useInView({});
  const [refFourthDiv, inViewFourthDiv] = useInView({});
  const [refFifthDiv, inViewFifthDiv] = useInView({});
  const [refSixthDiv, inViewSixthDiv] = useInView({});
  const [controls, setControls] = useState({
    posX: 0,
    posY: -1.0467,
    posZ: 5.6332,
    rotX: 0,
    rotY: 3.141592653589793,
    rotZ: 0,
    uniformScale: 1,
  });

  const key = `model-${modelIndex}`;

  useControls({
    posX: {
      label: "Position X",
      value: controls.posX,
      min: -10,
      max: 10,
      step: 0.0001,
    },
    posY: {
      label: "Position Y",
      value: controls.posY,
      min: -10,
      max: 10,
      step: 0.0001,
    },
    posZ: {
      label: "Position Z",
      value: controls.posZ,
      min: -10,
      max: 10,
      step: 0.0001,
    },
    rotX: {
      label: "Rotation X",
      value: controls.rotX,
      min: -Math.PI,
      max: Math.PI,
      step: 0.0001,
    },
    rotY: {
      label: "Rotation Y",
      value: controls.rotY,
      min: -Math.PI,
      max: Math.PI,
      step: 0.0001,
    },
    rotZ: {
      label: "Rotation Z",
      value: controls.rotZ,
      min: -Math.PI,
      max: Math.PI,
      step: 0.0001,
    },
    uniformScale: {
      label: "Uniform Scale",
      value: controls.uniformScale,
      min: 0.0001,
      max: 10,
      step: 0.0001,
    },
  });

  const engineRef = useRef(null);
  const scene = useScene();

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
    let startTime = null;
    let animationFrameId = null;

    const handleKeyDown = (event) => {
      if (event.key === " ") {
        event.preventDefault(); // Prevent default spacebar behavior (e.g., scrolling)

        if (startTime === null) {
          startTime = performance.now();
          setPercentage(0);

          const updateProgress = () => {
            const currentTime = performance.now();
            const elapsedTime = currentTime - startTime;
            if (elapsedTime >= 5000) {
              setPercentage(100);
              cancelAnimationFrame(animationFrameId);
              setTimeout(() => {
                setModelIndex((modelIndex + 1) % modelDirectories.length);
                setPercentage(0);
              }, 10); // Delay model change for 1 second
            } else {
              setPercentage((elapsedTime / 5000) * 100);
              animationFrameId = requestAnimationFrame(updateProgress);
            }
          };

          animationFrameId = requestAnimationFrame(updateProgress);
        }
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === " ") {
        if (startTime !== null) {
          cancelAnimationFrame(animationFrameId);
          setPercentage(0);
          startTime = null;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [modelIndex]);

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

  useEffect(() => {
    const handleResize = () => {
      const engine = engineRef.current;
      if (engine) {
        engine.setHardwareScalingLevel(1 / window.devicePixelRatio);
      }
    };

    handleResize(); // Set initial scaling

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);
  useEffect(() => {
    // Check window size only on the client side
    if (typeof window !== "undefined") {
      setShouldRenderModel(window.innerWidth >= 100);

      const handleResize = () => {
        setShouldRenderModel(window.innerWidth >= 100);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  useEffect(() => {
    if (inViewZeroDiv && !isZeroDivInView) {
      setIsZeroDivInView(true);
      setControls({
        posX: 0,
        posY: -3.5,
        posZ: 5.6332,
        rotX: 0,
        rotY: 3.141592653589793,
        rotZ: 0,
        uniformScale: 1.2,
      });
    } else if (!inViewZeroDiv && isZeroDivInView) {
      setIsZeroDivInView(false);
    }
  }, [inViewZeroDiv, isZeroDivInView]);

  //first div animations
  useEffect(() => {
    if (inViewFirstDiv && !isFirstDivInView) {
      setIsFirstDivInView(true);
      setControls({
        posX: 0,
        posY: -3.5,
        posZ: 5.6332,
        rotX: 0,
        rotY: 3.141592653589793,
        rotZ: 0,
        uniformScale: 1.2,
      });
    } else if (!inViewFirstDiv && isFirstDivInView) {
      setIsFirstDivInView(false);
    }
  }, [inViewFirstDiv, isFirstDivInView]);
  //second div animations
  useEffect(() => {
    if (inViewSecondDiv && !isSecondDivInView) {
      setIsSecondDivInView(true);
      setControls({
        posX: 3,
        posY: -1.0467,
        posZ: 5.6332,
        rotX: 0,
        rotY: 3.141592653589793,
        rotZ: 0,
        uniformScale: 1,
      });
    } else if (!inViewSecondDiv && isSecondDivInView) {
      setIsSecondDivInView(false);
    }
  }, [inViewSecondDiv, isSecondDivInView]);
  //third div animations
  useEffect(() => {
    if (inViewThirdDiv && !isThirdDivInView) {
      setIsThirdDivInView(true);
      setControls({
        posX: -3,
        posY: -1.0467,
        posZ: 5.6332,
        rotX: 0,
        rotY: 3.141592653589793,
        rotZ: 0,
        uniformScale: 1,
      });
      setIsSpacebarVisible(true);
    } else if (!inViewThirdDiv && isThirdDivInView) {
      setIsThirdDivInView(false);
    }
  }, [inViewThirdDiv, isThirdDivInView]);

  //Fourth div animations
  useEffect(() => {
    if (inViewFourthDiv && !isFourthDivInView) {
      setIsFourthDivInView(true);
      setControls({
        posX: 2,
        posY: -3.0467,
        posZ: 5.6332,
        rotX: 0,
        rotY: 3.141592653589793,
        rotZ: 0,
        uniformScale: 1.3,
      });
      setIsSpacebarVisible(false);
    } else if (!inViewFourthDiv && isFourthDivInView) {
      setIsFourthDivInView(false);
    }
  }, [inViewFourthDiv, isFourthDivInView]);
  //Fifth div animations
  useEffect(() => {
    if (inViewFifthDiv && !isFifthDivInView) {
      setIsFifthDivInView(true);
      setControls({
        posX: 2,
        posY: -1.0467,
        posZ: 5.6332,
        rotX: 0,
        rotY: 3.141592653589793,
        rotZ: 0,
        uniformScale: 1,
      });
      setIsSpacebarVisible(false);
    } else if (!inViewFifthDiv && isFifthDivInView) {
      setIsFifthDivInView(false);
    }
  }, [inViewFifthDiv, isFifthDivInView]);

  //Sixth div animations
  useEffect(() => {
    if (inViewSixthDiv && !isSixthDivInView) {
      setIsSixthDivInView(true);
      setControls({
        posX: 0,
        posY: -1.0467,
        posZ: 5.6332,
        rotX: 0,
        rotY: 3.141592653589793,
        rotZ: 0,
        uniformScale: 1,
      });
      setIsSpacebarVisible(false);
    } else if (!inViewSixthDiv && isSixthDivInView) {
      setIsSixthDivInView(false);
    }
  }, [inViewSixthDiv, isSixthDivInView]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="h-screen w-screen bg-white">
      <Leva hidden />
      <Engine
        antialias
        adaptToDeviceRatio={false}
        canvasId="babylonJS"
        ref={(engine) => (engineRef.current = engine)}
      >
        <Scene clearColor={new Color4(0, 0, 0, 0.2)}>
          <UniversalCamera // Use UniversalCamera for a fixed camera
            name="camera1"
            position={new Vector3(0, 5, -10)} // Set camera position as needed
            rotation={new Vector3(0, 0, 0)} // Set camera rotation
          />
          <HemisphericLight
            name="light1"
            intensity={5}
            direction={Vector3.Up(0.0, 1, 0.0)}
          />
          <Suspense fallback={null}>
            {shouldRenderModel && (
              <Model
                id="model-id"
                key={key}
                rootUrl={modelDirectories[modelIndex]}
                sceneFilename={
                  modelDirectories[modelIndex] === "/models/bear5/"
                    ? "bear.glb"
                    : "bear-transformed.glb"
                }
                position={
                  new Vector3(controls.posX, controls.posY, controls.posZ)
                }
                rotation={
                  new Vector3(controls.rotX, controls.rotY, controls.rotZ)
                }
                scaling={
                  new Vector3(
                    controls.uniformScale,
                    controls.uniformScale,
                    controls.uniformScale
                  )
                }
                onModelLoaded={() => {
                  console.log("Model Loaded");
                }}
              />
            )}
          </Suspense>
          <GlowLayer intensity={0.5} />

          <Suspense fallback={null}>
            {shouldRenderModel && (
              <Model
                rootUrl="/models/logo/"
                sceneFilename="logo.glb"
                position={new Vector3(0, 4.37, 6.829400000000001)}
                rotation={new Vector3(0, 3.141592653589793, 0)}
                scaling={new Vector3(3.1682, 3.1682, 3.1682)}
              />
            )}
          </Suspense>
        </Scene>
      </Engine>
      {isSpacebarVisible && (
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-end justify-center max-[600px]:hidden ">
          <div className="flex h-[8vh] w-[90vw] mb-2 items-center z-[60]">
            <div className="flex items-center z-[80]">
              <button
                onClick={toggleSound}
                className="pointer-events-auto ml-10 outline-none focus:outline-none"
              >
                {isPlaying ? (
                  <div className="p-2">
                    <div className="loader w-40 h-12 bg-transparent">
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
                  <div className="">
                    <div className="max-[500px]:hidden block text-black ">
                      <FaVolumeMute size={60} />
                    </div>
                  </div>
                )}
              </button>
            </div>
            <div className="grow"></div>
            <div className="flex gap-3 items-center justify-center  px-8 py-4 text-3xl font-archive self-center absolute left-0 right-0 mx-auto">
              <p className="text-white drop-shadow-yellow">press</p>
              <div className="relative w-40 h-10 overflow-hidden rounded-full bg-white outline-4 outline outline-black">
                <p className="absolute inset-0 flex items-center justify-center text-black text-xl">
                  spacebar
                </p>
                <div
                  className={`h-full transition-all duration-75 rounded-full bg-yellow-300 ${
                    percentage === 0
                      ? "outline-none"
                      : "outline-2 outline outline-black"
                  }`}
                  style={{ width: `calc(${percentage} * 1%)` }}
                ></div>
              </div>
              <p className="text-white drop-shadow-yellow">to warp</p>
            </div>
            <div className="grow"></div>

            <div className="flex justify-end z-[80]">
              <span>
                <a href="/gallery" className="text-black font-archive">
                  codex design
                </a>
              </span>
            </div>
          </div>
        </div>
      )}
      <div
        id="scroll-viewer-id"
        style={{
          overflowY: "scroll",
          overflowX: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        {/* Your HTML content inside a div */}
        <ScrollViewer>
          <div className="flex flex-col min-h-[400vh] w-full">
            <div>
              <div className="absolute top-0 left-0 right-0 w-screen h-20  min-[600px]:hidden flex items-center justify-end p-4 z-30">
                <button
                  className="text-black pr-5"
                  onClick={() => setNavOpen(!navOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </button>
              </div>

              {navOpen && (
                <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white z-50">
                  <div className="flex justify-end p-4 ">
                    <button
                      className="text-red-500 text-4xl pr-5"
                      onClick={() => setNavOpen(false)}
                    >
                      ×
                    </button>
                  </div>
                  <nav className="flex flex-col items-center text-center font-archive font-bold justify-start m-20 h-screen">
                    <ul className="">
                      <li className="mb-4">
                        <a href="#" className="text-2xl">
                          D.A.O
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="text-2xl">
                          MARKETPLACE
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="#" className="text-2xl">
                          BLOG
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="/Whitepaper.pdf" className="text-2xl">
                          WHITEPAPER
                        </a>
                      </li>
                      <li className="mb-4">
                        <a href="/gallery" className="text-2xl">
                          Codex Design
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>

            <div className="flex header text-black items-center w-screen justify-center font-archive ">
              <div className="w-[30vw] max-md:w-[0vw]"></div>

              {/* <button>
          Player one trailer{" "}
          <span className="play__button">
            <div className="triangle"></div>
          </span>
        </button> */}
              <div className="header-links text-black flex gap-16 max-xl:gap-10 max-lg:gap-5 max-sm:hidden text-xl max-md:w-[60vw] w-[50vw] justify-center mx-auto ">
                <h1 className="max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
                  D.A.O
                </h1>
                <h1 className="max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
                  Marketplace
                </h1>
                <h1 className="max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
                  Blog
                </h1>
                <a
                  href="/Whitepaper.pdf"
                  className="decoration-white text-black no-underline w-fit"
                >
                  <h1 className="max-md:text-lg max-sm:text-sm max-md:pt-5 font-black cursor-pointer font-archive">
                    Whitepaper
                  </h1>
                </a>
              </div>
              <div className="bionic__bear text-black w-[30vw] max-sm:hidden  max-md:pt-5 flex justify-end max-md:pr-5 pr-10">
                Bio Organic Bear
              </div>
            </div>
            <div className="h-[50vh] w-screen max-[600px]:hidden"></div>
            <div className="h-0 w-screen" ref={refZeroDiv}></div>
            {/* AnimatedDiv for the first page */}
            <AnimatedDiv variants={fadeFromLeft}>
              <div ref={refFirstDiv}>
                <Head />
              </div>
            </AnimatedDiv>

            {/* AnimatedDiv for the second page */}
            <AnimatedDiv variants={fadeFromRight}>
              <div id="second-page" ref={refSecondDiv}>
                <SecondPage />
              </div>
            </AnimatedDiv>

            {/* AnimatedDiv for the third page */}
            <AnimatedDiv variants={fadeFromLeft}>
              <div ref={refThirdDiv}>
                <ThirdPage />
              </div>
            </AnimatedDiv>

            {/* AnimatedDiv for the Teams component */}
            <h1
              className="text-black"
              style={{
                width: "inherit",
                position: "relative", // Change absolute to relative
                bottom: 0,
              }}
            >
              <AnimatedDiv variants={fadeFromTop}>
                <div ref={refFourthDiv}>
                  <Teams />
                </div>
              </AnimatedDiv>
            </h1>

            {/* AnimatedDiv for the Playbox component */}
            <h1
              className="text-black"
              style={{
                width: "inherit",
                position: "relative", // Change absolute to relative
                bottom: 0,
              }}
            >
              <AnimatedDiv variants={fadeNormal}>
                <div ref={refFifthDiv}>
                  <Playbox />
                </div>
              </AnimatedDiv>
            </h1>

            {/* Footer */}
            <div className="text-white  w-screen relative" ref={refSixthDiv}>
              <Footer2 />
            </div>
          </div>
        </ScrollViewer>
      </div>
    </div>
  );
};

export default BabylonScene;
