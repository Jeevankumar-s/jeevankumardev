import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Reactt from './Reactt'


const Development = () => {
  return (
   <Canvas>
   <Stage environment="city" intensity={0.6}><Reactt/></Stage>
   
    <OrbitControls autoRotate enableZoom={false}/>
   </Canvas>
  ) 
}

export default Development
