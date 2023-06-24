import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";

export default function Plane({ texture }) {
  const { size } = useThree();
  const width = size.width * 0.01;
  const height = size.height * 0.01;

  const scroll = useScroll();
  const tl = useRef();
  const meshRef = useRef();

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({});
    tl.current
      .set(meshRef.current?.position, { x: 0.2, y: 2, z: -2 }, 0)
      .to(meshRef.current?.position, { y: 15 }, "1%");
  }, []);

  return (
    <mesh ref={meshRef}>
      <planeBufferGeometry attach="geometry" args={[width, height]} />
      <meshBasicMaterial
        attach="material"
        map={texture}
        transparent
        // opacity={0.5}
      />
    </mesh>
  );
}
