import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef } from "react";

function Mushroom() {
  const tubeRef = useRef();
  const tubeMesh = useRef();

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 1, 0),
    new THREE.Vector3(0, 5, 1),
    new THREE.Vector3(0, 10, 0),
  ]);

  const capPosition = curve.getPoints()[curve.getPoints().length - 1];

  // Calculate the tangent at the end of the curve
  const tangent = curve.getTangent(1).normalize();
  // Convert the tangent to a rotation
  const up = new THREE.Vector3(0, 1, 0);
  const axis = new THREE.Vector3().crossVectors(up, tangent).normalize();
  const radians = Math.acos(up.dot(tangent));
  const quaternion = new THREE.Quaternion().setFromAxisAngle(axis, radians);

  // Convert the quaternion to Euler angles for the rotation of the mesh
  const rotation = new THREE.Euler().setFromQuaternion(quaternion, "XYZ");
  rotation.x += Math.PI / 2; // Add 90 degrees rotation on X-axis

  return (
    <>
      <MushroomCap position={capPosition} rotation={rotation} />
      <mesh castShadow ref={tubeMesh}>
        <tubeGeometry args={[curve, 100, 0.5, 64]} ref={tubeRef} />
        <meshStandardMaterial color={"brown"} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
}

export default Mushroom;

function MushroomCap(props) {
  const capRadius = 3;
  const capWidthSegments = 32;
  const capHeightSegments = 32;

  const capMesh = useRef();

  useFrame((state, delta) => {
    console.log(capMesh.current);
  });

  return (
    <mesh ref={capMesh} rotation={props.rotation} position={props.position}>
      <ringGeometry args={[0.1, 5, 30, 16, 2.419, 6.283]} />
      <meshStandardMaterial color={"brown"} side={THREE.DoubleSide} />
    </mesh>
  );
}
