import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";

export default function Plane({ texture }) {
  const { size } = useThree();
  const width = size.width * 0.01;
  const height = size.height * 0.01;
  // console.log(size.width);

  const scroll = useScroll();
  const tl = useRef();
  const meshRef = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({});
    tl.current
      .set(meshRef.current?.scale, { x: width / 70, y: width / 110, z: 1 }, 0)
      .set(meshRef.current?.position, { x: 0.2, y: -1.75, z: 2 }, 0)
      .to(meshRef.current?.position, { x: 150 }, 0.01);
  }, [size.width]);

  return size.width > 1000 ? (
    <>
      <mesh ref={meshRef}>
        <planeBufferGeometry attach="geometry" args={[width, height]} />
        <meshBasicMaterial
          attach="material"
          map={texture}
          transparent
          opacity={1}
          alphaTest={0.0001}
          blending={THREE.NoBlending}
        />
      </mesh>
    </>
  ) : null;
}
