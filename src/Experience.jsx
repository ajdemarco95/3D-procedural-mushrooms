import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import React from "react";
import Lighting from './Lighting'
import Mushroom from "./Mushroom";
function Experience() {
  return (
    <div className="w-full h-full fixed top-0 left-0  bg-slate-500">
      <Canvas>
        <OrbitControls />
        <Lighting />
        <Mushroom />

        {/* <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh> */}

      </Canvas>
    </div>
  );
}

export default Experience;
