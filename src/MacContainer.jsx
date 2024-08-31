/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useGLTF, useScroll, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import * as THREE from "three"

const MacContainer = () => {
    // we need the model
    let model = useGLTF("./mac.glb");
    let texture = useTexture("./red.jpg")

    let meshes = {};
    model.scene.traverse((e)=>{
        meshes[e.name] = e;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = texture
    // for the opacity
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    let data = useScroll();

    useFrame((state, delta)=>{
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180- data.offset * 90)
    })



  return (
    // group is used so thaT WE CAN CHANGE THE  position of wholke group not the premitive
    <group position={[0,-10, 20]}>
{/* //    primitive is used to show the models */}
    <primitive object={model.scene} />
    </group>

  );
}

export default MacContainer