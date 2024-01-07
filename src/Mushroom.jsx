import { CatmullRomLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { useRef } from "react";


function Mushroom() {

    const geoRef = useRef();
    const meshRef = useRef();
    const posRef = useRef();

// Define basic settings
  const vertRes = 10;
  const angRes = 10;
  const stemVert = [];
  const stemIndices = [];

  const positions = new Float32Array([
    1, 24, 0,
    0, 1, 0,
    -1, 0, 0,
    3, -1, 0
])

const normals = new Float32Array([
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
    0, 0, 1,
])

const colors = new Float32Array([
    0, 1, 1, 1,
    1, 0, 1, 1,
    1, 1, 0, 1,
    1, 1, 1, 1,
])

const indices = new Uint16Array([
    0, 1, 3,
    2, 3, 1,
])

useFrame((state, delta) => {

    posRef.current.needsUpdate = true;
    
})



  return (
    <>
    <mesh ref={meshRef}>
        <bufferGeometry ref={geoRef} >
            <bufferAttribute
                ref={posRef}
                attach='attributes-position'
                array={positions}
                count={positions.length / 3}
                itemSize={3}
            />
            <bufferAttribute
                attach='attributes-color'
                array={colors}
                count={colors.length / 3}
                itemSize={3}
            />
            <bufferAttribute
                attach='attributes-normal'
                array={normals}
                count={normals.length / 3}
                itemSize={3}
            />
            <bufferAttribute
                attach="index"
                array={indices}
                count={indices.length}
                itemSize={1}
            />
        </bufferGeometry>
        <meshStandardMaterial
            vertexColors
            side={THREE.DoubleSide}
            // wireframe={true}
        />
    </mesh>

    </>
  );
}

export default Mushroom;
