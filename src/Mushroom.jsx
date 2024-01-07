import { CatmullRomLine } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import { useEffect, useRef } from "react";


function Mushroom() {

    const tubeRef = useRef();
    const tubeMesh = useRef();

  const curve = new THREE.CatmullRomCurve3( [
	new THREE.Vector3( -10, 0, 10 ),
	new THREE.Vector3( -5, 5, 5 ),
	new THREE.Vector3( 0, 0, 0 ),
	new THREE.Vector3( 5, -5, 5 ),
	new THREE.Vector3( 10, 0, 10 )
] );

const points = curve.getPoints( 100 );




useFrame((state, delta) => {
    console.log(tubeRef.current)
    // tubeRef.current.needsUpdate = true;
})



  return (
    <>
    <mesh castShadow ref={tubeMesh}>
        <tubeGeometry args={[curve, 40, 2, 8]} ref={tubeRef} />
        <meshStandardMaterial color={"red"}/>
    </mesh>

    </>
  );
}

export default Mushroom;
