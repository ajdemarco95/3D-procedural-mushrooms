import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";
import React from "react";
import Lighting from './Lighting'
import Mushroom from "./Mushroom";
function Experience() {
  return (
    <div className="w-full h-full fixed top-0 left-0  bg-slate-500">
      <Canvas shadows>
        <OrbitControls />
        <Lighting />
        <Mushroom />

        <mesh receiveShadow position={[0,-2,0]}>
            <boxGeometry args={[10,.2,10]} />
            <meshStandardMaterial color={"grey"} />
        </mesh>
        {/* <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial />
        </mesh> */}

      </Canvas>
    </div>
  );
}

export default Experience;
