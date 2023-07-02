import {
  Cloud,
  Environment,
  Scroll,
  ScrollControls,
  Sparkles,
  Sphere,
  SpotLight,
  Stars,
  useScroll,
} from "@react-three/drei";
import { Robot } from "../components/Robot";
// import { Model } from "../components/Ani";
import { Model } from "../components/Bear2";
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
import { useLoader } from "react-three-fiber";
import Plane from "./Plane";
import { BlendFunction, GlitchMode, NoiseEffect } from "postprocessing";
import {
  Bloom,
  ChromaticAberration,
  DepthOfField,
  DotScreen,
  EffectComposer,
  Glitch,
  Noise,
  Scanline,
  Vignette,
} from "@react-three/postprocessing";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";

function LandingModel() {
  const { clr, toggleColor } = useAppState();

  // space bar thing

  const timerRef = useRef(null);
  const spacebarPressedRef = useRef(false);

  useEffect(() => {
    let startTimestamp = 0;

    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        if (!spacebarPressedRef.current) {
          spacebarPressedRef.current = true;
          startTimestamp = Date.now();
          timerRef.current = setInterval(() => {
            const elapsedTime = Date.now() - startTimestamp;
            if (elapsedTime >= 2000) {
              clearInterval(timerRef.current);
              spacebarPressedRef.current = false;

              // alert("Holding spacebar for 5 seconds!");
              toggleColor();
              simulateKeyUpEvent();
            } else {
              const seconds = Math.floor(elapsedTime / 1000);
              console.log(`Holding spacebar for ${seconds} seconds...`);
            }
          }, 1000);
        }
      }
    };

    const simulateKeyUpEvent = () => {
      const event = new KeyboardEvent("keyup", { code: "Space" });
      document.dispatchEvent(event);
    };

    const handleKeyUp = (event) => {
      if (event.code === "Space") {
        if (spacebarPressedRef.current) {
          spacebarPressedRef.current = false;
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      clearInterval(timerRef.current);
    };
  }, []);

  // prevent the page to scroll on spaebar

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

  const texture = useLoader(TextureLoader, "/img/medori.png");

  return (
    <>
      {/* <color attach="backgrou nd" args={["#333333"]} /> */}
      <Environment preset="apartment" />

      <Sparkles
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
      />

      <ScrollControls pages={5} damping={0.1}>
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
            bokehScale={2}
            height={480}
          />
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            height={300}
          />

          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          {/* <Scanline
            blendFunction={BlendFunction.OVERLAY} // blend mode
            density={2.25} // scanline density
          /> */}
        </EffectComposer>
        <Line />
        <Noise
          premultiply // enables or disables noise premultiplication
          blendFunction={BlendFunction.ADD} // blend mode
          opacity={0.05}
          inputColorSpace="display-p3"
        />
        {clr === "blue" ? (
          <Model scale={0.5} position={[0, -11, 0]} />
        ) : clr === "grey" ? (
          <Model scale={0.5} position={[0, -11, 0]} />
        ) : clr === "purple" ? (
          <Model scale={0.5} position={[0, -11, 0]} />
        ) : null}

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
        <Scroll html className="w-screen">
          <Head />
          <SecondPage />
          <ThirdPage />
          <div
            className="text-white absolute top-[290vh]"
            style={{ width: "inherit", position: "absolute", bottom: "0" }}
          >
            <Teams />
          </div>
          <div
            className="text-white absolute top-[380vh]"
            style={{ width: "inherit", position: "absolute", bottom: "0" }}
          >
            <Playbox />
          </div>
          <div
            className="text-white absolute top-[454vh]"
            style={{ width: "inherit", position: "absolute", bottom: "0" }}
          >
            <Footer2 />
          </div>
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default LandingModel;
