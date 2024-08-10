import { useGLTF } from '@react-three/drei'
import React from 'react'
import birdScene from '../assets/3d/bird.glb'

const Bird = () => {
    const { scene, animations } = useGLTF(birdScene)
  
    return (
    <mesh position={[-5,2,1]} scale={[0.0003,0.0003,0.0003]}>
        <primitive object={scene} />
    </mesh>
  )
}

export default Bird