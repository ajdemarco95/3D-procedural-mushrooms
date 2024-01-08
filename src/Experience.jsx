import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";

import Lighting from "./Lighting";
import Mushroom from "./Mushroom";
import Floor from "./Floor";

function Experience() {
  return (
    <div className="w-full h-full fixed top-0 left-0  bg-slate-500">
      <Canvas gl={{localClippingEnabled: true}} shadows>
        
        <Perf />
        
        <OrbitControls />

        <Lighting />
        <Environment background={true} preset="forest" />

        <Mushroom />
        <Mushroom position={[0, 0, 15]}/>
        <Mushroom position={[0, 0, -15]}/>

        <Floor />
      </Canvas>
    </div>
  );
}

export default Experience;
