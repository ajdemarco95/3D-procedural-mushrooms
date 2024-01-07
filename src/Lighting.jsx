import React from "react";

function Lighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[0, 0, 10]} />
    </>
  );
}

export default Lighting;
