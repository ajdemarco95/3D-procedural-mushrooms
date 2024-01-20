import React from "react";

function Lighting() {
  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight intensity={5} color="white" position={[0, 0, 10]} />
    </>
  );
}

export default Lighting;
