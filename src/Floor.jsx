import { useEffect } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
function Floor() {

    const props = useTexture({
        map: "/materials/mud-forest/mud_forest_diff_1k.jpg",
        displacementMap: "/materials/mud-forest/mud_forest_disp_1k.jpg",
        aoMap: "/materials/mud-forest/mud_forest_ao_1k.jpg",
        normalMap: "/materials/mud-forest/mud_forest_nor_gl_1k.jpg",
        roughnessMap: "/materials/mud-forest/mud_forest_rough_1k.jpg",
    })

    // const props = useTexture({
    //     map: "/materials/brown-mud/brown_mud_02_diff_1k.jpg",
    //     displacementMap: "/materials/brown-mud/brown_mud_02_disp_1k.jpg",
    //     aoMap: "/materials/brown-mud/brown_mud_02_ao_1k.jpg",
    //     normalMap: "/materials/brown-mud/brown_mud_02_nor_gl_1k.jpg",
    //     roughnessMap: "/materials/brown-mud/brown_mud_02_rough_1k.jpg",
    // })

    // const props = useTexture({
    //     map: "/materials/stone/coral_stone_wall_diff_4k.jpg",
    //     displacementMap: "/materials/stone/coral_stone_wall_disp_4k.jpg",
    //     aoMap: "/materials/stone/coral_stone_wall_ao_4k.jpg",
    //     normalMap: "/materials/stone/coral_stone_wall_nor_gl_4k.jpg",
    //     roughnessMap: "/materials/stone/coral_stone_wall_rough_4k.jpg",
    // })

    for ( const item in props) {
        props[item].wrapS = THREE.RepeatWrapping;
        props[item].wrapT = THREE.RepeatWrapping;
        const repeatVal = 3
        props[item].repeat.set(repeatVal, repeatVal)
    }



    const size = 50
    const res = 50
  return (
    <>
      <mesh rotation-x={Math.PI * 1.5} position={[0, 0, 0]}>
        <planeGeometry  args={[size, size, res, res]} />
        <meshStandardMaterial displacementScale={1}  {...props} />
      </mesh>
    </>
  );
}

export default Floor;
