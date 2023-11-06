import React, { useState, useEffect } from "react";
import {
  Engine,
  Scene,
  UniversalCamera,
  HemisphericLight,
  Model,
  PostProcess,
} from "react-babylonjs";
import { Color4, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders";
import { useControls } from "leva";
import { Suspense } from "react";

const modelDirectories = ["/models/bear2/", "/models/bear3/", "/models/bear4/"];

const BabylonScene = () => {
  const [modelIndex, setModelIndex] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const key = `model-${modelIndex}`;
  const { posX, posY, posZ, rotX, rotY, rotZ, uniformScale } = useControls({
    posX: { label: "Position X", value: 0, min: -10, max: 10, step: 0.0001 },
    posY: {
      label: "Position Y",
      value: 0,
      min: -10,
      max: 10,
      step: 0.0001,
    },
    posZ: {
      label: "Position Z",
      value: 5.6332,
      min: -10,
      max: 10,
      step: 0.0001,
    },
    rotX: {
      label: "Rotation X",
      value: 0,
      min: -Math.PI,
      max: Math.PI,
      step: 0.0001,
    },
    rotY: {
      label: "Rotation Y",
      value: 3.141592653589793,
      min: -Math.PI,
      max: Math.PI,
      step: 0.0001,
    },
    rotZ: {
      label: "Rotation Z",
      value: 0,
      min: -Math.PI,
      max: Math.PI,
      step: 0.0001,
    },
    uniformScale: {
      label: "Uniform Scale",
      value: 1,
      min: 0.0001,
      max: 10,
      step: 0.0001,
    },
  });

  useEffect(() => {
    let startTime = null;
    let animationFrameId = null;

    const handleKeyDown = (event) => {
      if (event.key === " ") {
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

  return (
    <div>
      <Engine antialias adaptToDeviceRatio canvasId="babylonJS">
        <Scene clearColor={new Color4(1, 1, 1, 1)}>
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
            <Model
              key={key}
              rootUrl={modelDirectories[modelIndex]}
              sceneFilename="bear-transformed.glb"
              position={new Vector3(posX, posY, posZ)}
              rotation={new Vector3(rotX, rotY, rotZ)}
              scaling={new Vector3(uniformScale, uniformScale, uniformScale)}
              onModelLoaded={() => {
                console.log("Model Loaded");
              }}
            />
          </Suspense>
        </Scene>
      </Engine>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex items-end justify-center">
        <div className="flex gap-3 items-center justify-center relative px-8 py-4 text-3xl font-archive">
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
      </div>
    </div>
  );
};

export default BabylonScene;
