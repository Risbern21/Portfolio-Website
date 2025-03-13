"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Hat(props) {
  const modelref = useRef();
  const { nodes, materials } = useGLTF("/models/wizards_hat.glb");

  useFrame((state, delta, xrFrame) => {
    modelref.current.rotation.y += 0.02;
  });

  return (
    <>
      {/* <OrbitControls /> */}
      <group
        {...props}
        dispose={null}
        ref={modelref}
        scale={[3, 3, 3]}
        rotation={[0.2, 1, 0.2]}
      >
        <group
          position={[-0.171, 0.062, 0]}
          rotation={[-1.122, -1.151, -1.101]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_9.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_11.geometry}
            material={materials["Material.003"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_13.geometry}
            material={materials["Material.003"]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials["Material.002"]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/models/wizards_hat.glb");
