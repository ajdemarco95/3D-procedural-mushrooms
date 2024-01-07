import { Canvas } from "@react-three/fiber";
import { OrbitControls, Plane } from "@react-three/drei";

import { Perf } from "r3f-perf";
import Lighting from './Lighting'
import Mushroom from "./Mushroom";

function Experience() {
  return (
    <div className="w-full h-full fixed top-0 left-0  bg-slate-500">
      <Canvas shadows>
        <Perf />
        <OrbitControls />
        <Lighting />
        <Mushroom />
        <mesh receiveShadow position={[0,0,0]}>
            <boxGeometry args={[10,.2,10]} />
            <meshStandardMaterial color={"grey"} />
        </mesh>
      </Canvas>
    </div>
  );
}

export default Experience;
