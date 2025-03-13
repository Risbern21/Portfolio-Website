"use client";
import React from "react";
import { Canvas } from "@react-three/fiber";
import clsx from "clsx";
import { Suspense } from "react";
import { Environment } from "@react-three/drei";

const RenderModels = ({ children, classsName }) => {
  return (
    <Canvas className={clsx("w-screen h-screen relative", classsName)}>
      <Suspense
        fallback={null}
      >
        {children}
      </Suspense>
      <Environment preset="city" />
    </Canvas>
  );
};

export default RenderModels;
