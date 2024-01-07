import React from 'react'

function Lighting() {
  return (
    <>
            <ambientLight intensity={0.1} />
        <directionalLight color="red" position={[0, 0, 5]} />
</>
  )
}

export default Lighting