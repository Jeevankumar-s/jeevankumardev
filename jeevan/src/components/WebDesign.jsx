import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import System from './System'


const WebDesign = () => {
  return (
   <Canvas>
   <Stage environment="city" intensity={0.6}><System/></Stage>
   
    <OrbitControls autoRotate enableZoom={false}/>
   </Canvas>
  ) 
}

export default WebDesign
