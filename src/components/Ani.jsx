/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 new.glb --transform
*/

import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations, useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useFrame } from "react-three-fiber";
import { folder, useControls } from "leva";

export function Model(props) {
  const { scale, position, rotation } = useControls("Scale", {
    transform: folder({
      scale: {
        value: 3,
        min: 0.4,
        max: 16,
        step: 0.1,
      },
      position: {
        value: [0, 0, 0],
        min: -16,
        max: 16,
        step: 0.1,
      },
      rotation: {
        value: [0, 0, 0],
        min: -16,
        max: 16,
        step: 0.1,
      },
    }),
  });
  const robot = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/ani/new-transformed.glb"
  );
  const { actions, names } = useAnimations(animations, robot);

  // console.log(names);
  useEffect(() => {
    actions[names[22]].play();
  }, []);

  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
    // tl.current
    //   .to(robot.current?.rotation, { y: -1 }, 2)
    //   {"scale":4.1}  {"position":[0,-6,0]}
    //   .to(robot.current?.position, { x: 1 }, 2)

    //   .to(robot.current?.rotation, { y: 1 }, 10)
    //   .to(robot.current?.position, { x: -1 }, 10)

    //   .to(robot.current?.rotation, { y: 1 }, 20)
    //   .to(robot.current?.rotation, { y: 0 }, 20)
    //   .to(robot.current?.rotation, { x: 1 }, 19)
    //   .to(robot.current?.position, { x: 0 }, 20);
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      ref={robot}
      scale={scale}
      position={position}
      rotation={rotation}
    >
      <group name="Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="200e168bd8a74b65a61dc2a6a18843a2fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Root"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={101.51}
                >
                  <group name="Object_5">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_60"
                      geometry={nodes.Object_60.geometry}
                      material={materials.m_legendary_robot}
                      skeleton={nodes.Object_60.skeleton}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/ani/new-transformed.glb");
