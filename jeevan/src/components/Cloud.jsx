/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.10 cloud.gltf --transform 
Files: cloud.gltf [11.43MB] > cloud-transformed.glb [957.71KB] (92%)
Author: Alexa Kruckenberg (https://sketchfab.com/AlexaKruckenberg)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/cloud-station-26f81b24d83441ba88c7e80a52adbaaf
Title: Cloud Station
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/cloud-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <group name="windmillBase" scale={0.401}>
          <group name="axle" position={[3.497, 4.889, -3.483]} rotation={[0, 0, 1.209]}>
            <group name="arm" position={[0, 0.483, 0.061]}>
              <group name="sail" position={[-3.497, -5.372, 3.422]}>
                <mesh name="sail_hill_2_4_MAT_0" geometry={nodes.sail_hill_2_4_MAT_0.geometry} material={materials.hill_2_4_MAT} />
              </group>
              <mesh name="arm_hill_2_4_MAT_0" geometry={nodes.arm_hill_2_4_MAT_0.geometry} material={materials.hill_2_4_MAT} />
            </group>
            <group name="arm1" position={[0.483, 0, 0.061]}>
              <group name="sail_1" position={[-3.98, -4.889, 3.422]}>
                <mesh name="sail_hill_2_4_MAT_0_1" geometry={nodes.sail_hill_2_4_MAT_0_1.geometry} material={materials.hill_2_4_MAT} />
              </group>
              <mesh name="arm1_hill_2_4_MAT_0" geometry={nodes.arm1_hill_2_4_MAT_0.geometry} material={materials.hill_2_4_MAT} />
            </group>
            <group name="arm2" position={[0, -0.483, 0.061]}>
              <group name="sail_2" position={[-3.497, -4.405, 3.422]}>
                <mesh name="sail_hill_2_4_MAT_0_2" geometry={nodes.sail_hill_2_4_MAT_0_2.geometry} material={materials.hill_2_4_MAT} />
              </group>
              <mesh name="arm2_hill_2_4_MAT_0" geometry={nodes.arm2_hill_2_4_MAT_0.geometry} material={materials.hill_2_4_MAT} />
            </group>
            <group name="arm3" position={[-0.483, 0, 0.061]}>
              <group name="sail_3" position={[-3.014, -4.889, 3.422]}>
                <mesh name="sail_hill_2_4_MAT_0_3" geometry={nodes.sail_hill_2_4_MAT_0_3.geometry} material={materials.hill_2_4_MAT} />
              </group>
              <mesh name="arm3_hill_2_4_MAT_0" geometry={nodes.arm3_hill_2_4_MAT_0.geometry} material={materials.hill_2_4_MAT} />
            </group>
            <mesh name="axle_hill_2_4_MAT_0" geometry={nodes.axle_hill_2_4_MAT_0.geometry} material={materials.hill_2_4_MAT} />
          </group>
        </group>
        <primitive object={nodes._rootJoint_1} />
        <primitive object={nodes._rootJoint_2} />
        <primitive object={nodes._rootJoint_3} />
        <mesh name="hill_1_GEO_hills_MAT_0" geometry={nodes.hill_1_GEO_hills_MAT_0.geometry} material={materials.hills_MAT} position={[0.093, 0.251, 0.318]} scale={[0.86, 0.779, 0.744]} />
        <mesh name="roof_GEO_hill_1_3_MAT_0" geometry={nodes.roof_GEO_hill_1_3_MAT_0.geometry} material={materials.hill_1_3_MAT} scale={0.401} />
        <mesh name="pCylinder4_hill_2_4_MAT_0" geometry={nodes.pCylinder4_hill_2_4_MAT_0.geometry} material={materials.hill_2_4_MAT} scale={0.401} />
        <mesh name="skybox_GEO_sky_MAT_0" geometry={nodes.skybox_GEO_sky_MAT_0.geometry} material={materials.sky_MAT} position={[0.087, 0.126, -1.513]} scale={6.322} />
        <skinnedMesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.hill_1_3_MAT} skeleton={nodes.Object_6.skeleton} scale={0.401} />
        <skinnedMesh name="Object_293" geometry={nodes.Object_293.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_293.skeleton} scale={0.401} />
        <skinnedMesh name="Object_294" geometry={nodes.Object_294.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_294.skeleton} scale={0.401} />
        <skinnedMesh name="Object_296" geometry={nodes.Object_296.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_296.skeleton} scale={0.401} />
        <skinnedMesh name="Object_298" geometry={nodes.Object_298.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_298.skeleton} scale={0.401} />
        <skinnedMesh name="Object_300" geometry={nodes.Object_300.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_300.skeleton} scale={0.401} />
        <skinnedMesh name="Object_343" geometry={nodes.Object_343.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_343.skeleton} scale={0.401} />
        <skinnedMesh name="Object_347" geometry={nodes.Object_347.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_347.skeleton} scale={0.401} />
        <skinnedMesh name="Object_342" geometry={nodes.Object_342.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_342.skeleton} scale={0.401} />
        <skinnedMesh name="Object_345" geometry={nodes.Object_345.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_345.skeleton} scale={0.401} />
        <skinnedMesh name="Object_349" geometry={nodes.Object_349.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_349.skeleton} scale={0.401} />
        <skinnedMesh name="Object_392" geometry={nodes.Object_392.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_392.skeleton} scale={0.401} />
        <skinnedMesh name="Object_396" geometry={nodes.Object_396.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_396.skeleton} scale={0.401} />
        <skinnedMesh name="Object_394" geometry={nodes.Object_394.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_394.skeleton} scale={0.401} />
        <skinnedMesh name="Object_398" geometry={nodes.Object_398.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_398.skeleton} scale={0.401} />
        <skinnedMesh name="Object_391" geometry={nodes.Object_391.geometry} material={materials.EVSB_FISHfish_MAT} skeleton={nodes.Object_391.skeleton} scale={0.401} />
      </group>
    </group>
  )
}

useGLTF.preload('/cloud-transformed.glb')
