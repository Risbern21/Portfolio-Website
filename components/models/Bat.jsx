"use client"
import React, { useRef,useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Bat(props) {
  const group = useRef();
  const { scene,nodes, materials, animations } = useGLTF("/models/vampire_bat.glb",true);
  const { actions,names } = useAnimations(animations, group);

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play();
  }, [])
  

 useFrame((state, delta, xrFrame) => {
     group.current.position.y=Math.sin(state.clock.elapsedTime)*0.20
   });
  return (
    <group ref={group} {...props} dispose={null}
    scale={[2, 2,2]}
    rotation={[0, -1.4,0]}
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={0.999}
        >
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="Sketchfab_model_0"
                rotation={[-Math.PI / 2, 0, 0]}
                scale={0.098}
              >
                <group name="Root_1">
                  <group name="Armature_2">
                    <group name="GLTF_created_0">
                      <primitive object={nodes.GLTF_created_0_rootJoint} />
                      <skinnedMesh
                        name="Object_35"
                        geometry={nodes.Object_35.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_35.skeleton}
                      />
                      <skinnedMesh
                        name="Object_38"
                        geometry={nodes.Object_38.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_38.skeleton}
                      />
                      <skinnedMesh
                        name="Object_41"
                        geometry={nodes.Object_41.geometry}
                        material={materials.eyes}
                        skeleton={nodes.Object_41.skeleton}
                      />
                      <skinnedMesh
                        name="Object_44"
                        geometry={nodes.Object_44.geometry}
                        material={materials["Material.001"]}
                        skeleton={nodes.Object_44.skeleton}
                      />
                      <group name="body_mesh_Cylinder_0_29_correction">
                        <group name="body_mesh_Cylinder_0_29" />
                      </group>
                      <group name="wing_mesh_Plane_0_31_correction">
                        <group name="wing_mesh_Plane_0_31" />
                      </group>
                      <group name="Sphere_0_33_correction">
                        <group name="Sphere_0_33" />
                      </group>
                      <group name="hair_0_35_correction">
                        <group name="hair_0_35" />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/vampire_bat.glb");
