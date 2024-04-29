import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { config, useSpring, animated } from "@react-spring/three";

export function Box(props) {
    const ref = useRef();
  
    const [clicked, setClicked] = useState(false);
    const [hoverd, setHoverd] = useState(false);
  
    useFrame(() => (ref.current.rotation.x += 0.01));
  
    const { scale } = useSpring({
      scale: clicked ? 2 : 1,
      config: config.wobbly,
    });
  
    return (
      <animated.mesh
        {...props}
        ref={ref}
        // scale={clicked ? 2 : 1}
        scale={scale}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHoverd(true)}
        onPointerOut={() => setHoverd(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hoverd ? "hotpink" : "orange"} />
      </animated.mesh>
    );
  }