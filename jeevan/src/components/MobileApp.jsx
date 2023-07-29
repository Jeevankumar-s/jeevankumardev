import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Phone from './Phone'


const MobileApp = () => {
  return (
   <Canvas>
   <Stage environment="city" intensity={0.6}><Phone/></Stage>
   
    <OrbitControls autoRotate enableZoom={false}/>
   </Canvas>
  )
}

export default MobileApp
