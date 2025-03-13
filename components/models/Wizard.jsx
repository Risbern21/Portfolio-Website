"use client"
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Wizard(props) {
  const { nodes, materials } = useGLTF("/models/wizard.glb");

  const modelRef = useRef();

  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y=Math.sin(state.clock.elapsedTime)*0.20
  });

  return (
    <group
      {...props}
      ref={modelRef}
      dispose={null}
      position={[0, 0, 0]}
      scale={[0.001, 0.001, 0.001]}
      rotation={[0.25, -0.25, 0]}
    >
      <group
        position={[-0.401, -496.56, 248.041]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={4.947}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder11_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Cylinder11_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
        />
      </group>
      <group
        position={[-1, 701.429, 192.309]}
        rotation={[-1.906, -0.013, -0.746]}
        scale={[2.867, 2.652, 2.867]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box09_01_-_Default_0"].geometry}
          material={materials["01_-_Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box09_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["Box09_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
        />
      </group>
      <group
        position={[197.647, -1257.871, 275.259]}
        rotation={[-1.594, 0.045, -2.839]}
        scale={[0.494, 0.494, 0.599]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["leg05_01_-_Default_0"].geometry}
          material={materials["01_-_Default_0"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["leg05_02_-_Default_0"].geometry}
          material={materials["02_-_Default_0"]}
        />
      </group>
      <group
        position={[-91.909, -1376.594, 58.963]}
        rotation={[-1.301, -0.032, 2.487]}
        scale={[-0.494, 0.494, 0.599]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["leg06_01_-_Default_0"].geometry}
          material={materials["01_-_Default_0"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["leg06_02_-_Default_0"].geometry}
          material={materials["02_-_Default_0"]}
        />
      </group>
      <group
        position={[-931.952, -51.137, 255.773]}
        rotation={[0.704, -1.074, 2.08]}
        scale={[4.369, 3.704, 3.696]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["body04_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["body04_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
        />
      </group>
      <group
        position={[946.561, -51.137, 255.772]}
        rotation={[0.704, 1.074, -2.08]}
        scale={[-4.369, 3.704, 3.696]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["body05_02_-_Default_0"].geometry}
          material={materials["02_-_Default"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["body05_03_-_Default_0"].geometry}
          material={materials["03_-_Default"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder09_01_-_Default_0"].geometry}
        material={materials["01_-_Default"]}
        position={[217.129, 397.835, 153.507]}
        rotation={[Math.PI / 2, 0.873, -Math.PI / 2]}
        scale={[4.257, 4.947, 4.405]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Cylinder10_01_-_Default_0"].geometry}
        material={materials["01_-_Default"]}
        position={[-214.728, 397.835, 153.507]}
        rotation={[Math.PI / 2, -0.873, Math.PI / 2]}
        scale={[-4.257, 4.947, 4.405]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box07_02_-_Default_0"].geometry}
        material={materials["02_-_Default"]}
        position={[1018.079, 659.783, -951.893]}
        rotation={[0.813, -1.089, 2.277]}
        scale={[-1, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["Box08_02_-_Default_0"].geometry}
        material={materials["02_-_Default"]}
        position={[-177.714, 495.327, -325.962]}
        rotation={[-1.878, -1.172, 2.603]}
        scale={[-1, 1, 1]}
      />
    </group>
  );
}

useGLTF.preload("/models/wizard.glb");
