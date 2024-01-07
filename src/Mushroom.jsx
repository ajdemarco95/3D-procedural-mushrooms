import { CatmullRomLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { useEffect, useRef } from "react";


function Mushroom() {

    const geoRef = useRef();
    const meshRef = useRef();

  const curve = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( -10, 0, 10 ),
	new THREE.Vector3( -5, 5, 5 ),
	new THREE.Vector3( 0, 0, 0 ),
	new THREE.Vector3( 5, -5, 5 ),
	new THREE.Vector3( 10, 0, 10 )
] );

const points = curve.getPoints( 100 );


useEffect(() => {
    geoRef.current.setFromPoints(points)
}, [])




useFrame((state, delta) => {
    // posRef.current.needsUpdate = true;
    // geoRef.current.setFromPoints(points)
    console.log(curve.points)
})



  return (
    <>
    <mesh ref={meshRef}>
        <bufferGeometry ref={geoRef} >
            {/* <bufferAttribute
                ref={posRef}
                attach='attributes-position'
                array={positions}
                count={positions.length / 3}
                itemSize={3}
            /> */}
            {/* <bufferAttribute
                attach='attributes-color'
                array={colors}
                count={colors.length / 3}
                itemSize={3}
            /> */}
            {/* <bufferAttribute
                attach='attributes-normal'
                array={normals}
                count={normals.length / 3}
                itemSize={3}
            /> */}
            {/* <bufferAttribute
                attach="index"
                array={indices}
                count={indices.length}
                itemSize={1}
            /> */}
        </bufferGeometry>
        <meshStandardMaterial
            vertexColors
            side={THREE.DoubleSide}
        />
    </mesh>

    </>
  );
}

export default Mushroom;
