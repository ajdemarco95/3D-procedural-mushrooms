import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useState } from "react";
import Lighting from "./Lighting";
import Mushroom from "./Mushroom";
import Floor from "./Floor";

import BakedIsland from "./BakedIsland";

function Experience() {
  const [mushroomProps, setMushroomProps] = useState({});

  // Some function to update state, triggering re-render
  const updateMushroom = () => {
    setMushroomProps(Math.random());
  };

  return (
    <div className="w-full h-full fixed top-0 left-0  bg-black">
      <Canvas>
        {/* <OrbitControls /> */}

        <Lighting />
        <Environment background={true} preset="forest" />

        <Subject />

      </Canvas>
      <div className="absolute bottom-6 w-full flex flex-col select-none">
        <div className="mx-auto text-white text-7xl mb-12 text-center">
          3D Procedural Mushrooms
        </div>
        <button
          className=" bg-white rounded-[30px] p-[20px] mx-auto shadow-2xl hover:bg-slate-200"
          onClick={updateMushroom}
        >
          Regenerate
        </button>
      </div>
    </div>
  );
}

export default Experience;

function Subject() {

  const { width, height } = useThree(state => state.viewport)

  console.log(width, height)

  if (width <= 10) {
    console.log("2 small")
  }

  return (
    <group
      position={[0, -1, -25]}
      rotation={[Math.PI * 0.05, Math.PI * 0.5, 0]}
      scale={width <= 7 ? 0.5 : 1}
    >
      <Mushroom />
      <Mushroom position={[0, 0, 15]} />
      <Mushroom position={[0, 0, -15]} />
      <BakedIsland />
    </group>
  );
}
