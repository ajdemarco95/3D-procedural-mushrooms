import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef } from "react";

function Mushroom(props) {
  const tubeRef = useRef();
  const tubeMesh = useRef();

  /***********************************
   * CREATE CURVE WITH RANDOM VALUES *
   ***********************************/
  const randX = Math.random() * 10 - 5;
  const randY = Math.random() * 5 + 3;
  const randZ = Math.random() * 4 - 2;

  const randHeight = Math.random() * 4 + 9;

  const curve = new THREE.CatmullRomCurve3(
    [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 1.5, 0), //Makes it look like it's placed solid into the ground
      new THREE.Vector3(randX, 6, randZ),
      new THREE.Vector3(0, randHeight, 1),
    ],
    false,
    "catmullrom",
    0.75
  );

  /**********************
   * CURVE CALCULATIONS *
   **********************/

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
  //   rotation.x += Math.PI / 2; // Add 90 degrees rotation on X-axis


  /**********
   * RENDER *
   **********/

  return (
    <group position={props.position}>
      <MushroomCap position={capPosition} rotation={rotation} />
      <mesh
        position={capPosition}
        rotation={rotation}
      >
        <planeGeometry  />
        <meshStandardMaterial side={THREE.DoubleSide} color={"red"} />
      </mesh>
      <mesh ref={tubeMesh}>
        <tubeGeometry args={[curve, 50, 0.5, 64]} ref={tubeRef} />
        <meshStandardMaterial side={THREE.DoubleSide} color={"#a27c57"} />
      </mesh>
    </group>
  );
}

export default Mushroom;

function MushroomCap(props) {
  const capMesh = useRef();

  const points = [];
  for (let i = 0; i < 10; i++) {
    points.push(new THREE.Vector2(Math.sin(i * 0.25) * 20, (i - 5) * 2));
  }

  return (
    <mesh
      scale={0.1}
      ref={capMesh}
      rotation={props.rotation}
      position={props.position}
    >
      <latheGeometry args={[points, 28, 0, Math.PI * 2]} />
      <meshStandardMaterial color={"#7e4a16"} side={THREE.DoubleSide} />
    </mesh>
  );
}
