import React, { useRef } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useFrame } from "react-three-fiber";
import { useLayoutEffect } from "react";

export function Robot(props) {
  const robot = useRef();
  const scroll = useScroll();
  const tl = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 2, ease: "power1.inOut" },
    });
    tl.current
      .to(robot.current.rotation, { y: -1 }, 2)
      .to(robot.current.position, { x: 1 }, 2)

      .to(robot.current.rotation, { y: 1 }, 10)
      .to(robot.current.position, { x: -1 }, 10)

      .to(robot.current.rotation, { y: 1 }, 20)
      .to(robot.current.rotation, { y: 0 }, 20)
      .to(robot.current.rotation, { x: 1 }, 19)
      .to(robot.current.position, { x: 0 }, 20);
  }, []);

  const { nodes, materials } = useGLTF("/models/robot/new-transformed.glb");
  return (
    <group {...props} dispose={null} ref={robot}>
      <primitive object={nodes.GLTF_created_0_rootJoint} />
      <skinnedMesh
        geometry={nodes.Object_7.geometry}
        material={materials.M_MED_Hightower_Henchman_Body}
        skeleton={nodes.Object_7.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_8.geometry}
        material={materials.M_MED_Hightower_Henchman_Head}
        skeleton={nodes.Object_8.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Object_9.geometry}
        material={materials.material_0}
        skeleton={nodes.Object_9.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/new-transformed.glb");
