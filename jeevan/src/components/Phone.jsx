/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 phone.gltf --transform 
Files: phone.gltf [43.8MB] > phone-transformed.glb [512.62KB] (99%)
Author: Rescue3D Assets (https://sketchfab.com/rescue3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/apple-iphone-based-mobile-phone-ae46f6a92de042d8bc8082226f7d3489
Title: Apple iPhone based mobile phone
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/phone-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.MobilePhone_Phone_Main_0.geometry} material={materials.Phone_Main} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.MobilePhone_Phone_Emission_0.geometry} material={materials.Phone_Emission} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
      <mesh geometry={nodes.MobilePhone_Phone_Alpha_0.geometry} material={materials.Phone_Alpha} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/phone-transformed.glb')
