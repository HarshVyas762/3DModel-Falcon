/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 falcon.gltf 
Author: Stym (https://sketchfab.com/Stym)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/millennium-falcon-6a27ba566af142708743ccb8b4668d4b
Title: Millennium Falcon
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/falcon.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.0015}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Mesh_0067_Tex_0095_1dds_0.geometry} material={materials['Tex_0095_1.dds']} />
            <mesh geometry={nodes.Mesh_0067_Tex_0095_1dds_0_1.geometry} material={materials['Tex_0095_1.dds']} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Mesh_0068_Tex_0095_2dds_0.geometry} material={materials['Tex_0095_2.dds']} />
            <mesh geometry={nodes.Mesh_0068_Tex_0095_2dds_0_1.geometry} material={materials['Tex_0095_2.dds']} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]}>
            <mesh geometry={nodes.Mesh_0067_Tex_0095_2dds_0.geometry} material={materials['Tex_0095_2.dds_0']} />
            <mesh geometry={nodes.Mesh_0067_Tex_0095_2dds_0_1.geometry} material={materials['Tex_0095_2.dds_0']} />
          </group>
          <mesh geometry={nodes.Mesh_0069_Tex_0095_3dds_0.geometry} material={materials['Tex_0095_3.dds']} rotation={[-Math.PI / 2, 0, 0]} />
          <mesh geometry={nodes.Mesh_0546_Tex_5040_1dds_0.geometry} material={materials['Tex_5040_1.dds']} rotation={[-Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/falcon.gltf')