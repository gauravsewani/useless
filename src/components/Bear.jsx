/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 bear.glb --transform
*/

import React, { useLayoutEffect, useMemo, useRef } from "react";
import { useAnimations, useGLTF, useScroll } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useFrame } from "react-three-fiber";
import { gsap } from "gsap";

export function Model(props) {
  // const { scale } = useControls("Scale", {
  //   transform: folder({
  //     scale: {
  //       value: 1.4,
  //       min: 0.4,
  //       max: 16,
  //       step: 0.1,
  //     },
  //   }),
  // });
  // const po = useMemo(() => {
  //   return {
  //     x: { value: 0.01, min: -16, max: 32, step: 0.01 },
  //     y: { value: -10.4, min: -16, max: 32, step: 0.01 },
  //     z: { value: 0.01, min: -16, max: 32, step: 0.01 },
  //   };
  // }, []);
  // const rot = useMemo(() => {
  //   return {
  //     x: { value: 0.01, min: -16, max: 32, step: 0.01 },
  //     y: { value: 0.37, min: -16, max: 32, step: 0.01 },
  //     z: { value: 0.01, min: -16, max: 32, step: 0.01 },
  //   };
  // }, []);
  // const posi = useControls("position", po);
  // const rotate = useControls("rotation", rot);
  const { nodes, materials } = useGLTF("/models/bear/walking_bear.glb");
  const scroll = useScroll();
  const bear = useRef();
  const tl = useRef();

  // bear.current.position.x = 2.88;
  // bear.current.position.y = -11.48;
  // bear.current.position.z = -1.11;

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
    tl.current
      .set(bear.current?.scale, { x: 1.4, y: 1.4, z: 1.4 })
      .set(bear.current?.position, { x: 2.88, y: -11.48, z: -1.11 })
      .set(bear.current?.rotation, { y: 0 })
      .to(bear.current?.rotation, { y: -0.35 }, 0)

      .to(bear.current.scale, { x: 1.4, y: 1.4, z: 1.4 }, 0)
      // .to(bear.current?.rotation, {"y":0.37}, 0)

      .to(bear.current?.position, { x: 2.88, y: -11.48, z: -1.11 }, 5)
      .to(bear.current?.position, { z: -3 }, 6)
      .to(bear.current?.rotation, { x: 0, y: 0.37, z: 0 }, 6)
      .to(bear.current?.rotation, { x: -0.17 }, 7)
      .to(bear.current?.rotation, { x: 0.1, y: 3 }, 10)
      .to(bear.current?.position, { x: 3.03, y: -11, z: -3 }, 10)

      .to(bear.current?.rotation, { y: 6.35, x: 0 }, 12)
      .to(bear.current?.position, { x: 0, y: -7.17, z: -5.01 }, 13)

      .to(bear.current?.rotation, { x: 0, y: 6.35 }, 15)
      .to(bear.current?.position, { x: 0, y: -7.17, z: -7.53 }, 16);
  }, []);

  return (
    <group
      {...props}
      dispose={null}
      // scale={scale}
      ref={bear}
      // position={[posi.x, posi.y, posi.z]}
      // rotation={[rotate.x, rotate.y, rotate.z]}
    >
      <mesh
        geometry={nodes.Mesh004.geometry}
        material={materials["Sci fi wall material"]}
        skeleton={nodes.Mesh004.geometry}
      />
      <mesh
        geometry={nodes.Mesh004_1.geometry}
        material={materials["Sci fi wall material"]}
        skeleton={nodes.Mesh004_1.geometry}
      />
      <mesh
        geometry={nodes.Mesh004_2.geometry}
        material={materials["Sci fi wall material"]}
        skeleton={nodes.Mesh004_2.geometry}
      />
      <mesh
        geometry={nodes.Mesh004_3.geometry}
        material={materials["Sci fi wall material"]}
        skeleton={nodes.Mesh004_3.geometry}
      />
      <mesh
        geometry={nodes.Mesh004_4.geometry}
        material={materials["DRL Emission material PL"]}
        skeleton={nodes.Mesh004_4.geometry}
      />
    </group>
  );
}

useGLTF.preload("/models/bear/walking_bear.glb");
