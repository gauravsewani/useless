import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { useRef } from "react";
import { useFrame, useThree } from "react-three-fiber";
import * as THREE from "three";
import { useDispatch } from "react-redux";
import { addIsScrolled } from "../redux/actions/timerActions";

export default function Plane({ texture }) {
  const { size } = useThree();
  const width = size.width * 0.01;
  const height = size.height * 0.01;
  const dispatch = useDispatch();
  const executed = useRef(false);
  const hasStarted = useRef(false);
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
      .set(meshRef.current?.scale, { x: width / 50, y: width / 40, z: 0 }, 0)
      .set(meshRef.current?.position, { x: 0.2, y: 1, z: 0 }, 0)
      .to(meshRef.current?.position, { x: 150 }, 0.01)
      .eventCallback("onStart", () => {
        if (!hasStarted.current) {
          dispatch(addIsScrolled(false));
          hasStarted.current = true;
        }
      });
  }, [size.width]);

  useFrame((state, delta) => {
    const position = meshRef.current?.position.x;
    if (position >= 10 && !executed.current) {
      // Call your function when the position reaches 150
      dispatch(addIsScrolled(true));
      executed.current = true;
    }
  });
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
