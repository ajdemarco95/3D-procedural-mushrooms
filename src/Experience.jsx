import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Lighting from "./Lighting";
import Mushroom from "./Mushroom";
import Floor from "./Floor";

function Experience() {
  return (
    <div className="w-full h-full fixed top-0 left-0  bg-slate-500">
      <Canvas>
        <Perf />

        <OrbitControls />

        <Lighting />
        <Environment background={true} preset="forest" />

        <group position={[0, -1, -25]} rotation={[Math.PI * 0.05, Math.PI * 0.5, 0]}>
          <Mushroom />
          <Mushroom position={[0, 0, 15]} />
          <Mushroom position={[0, 0, -15]} />
          <Floor />
        </group>
      </Canvas>
    </div>
  );
}

export default Experience;
