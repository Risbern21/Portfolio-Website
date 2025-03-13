import Image from "next/image";
import RenderModels from "@/components/RenderModels";
import { projectsData } from "../../data";
import Projectlist from "@/components/projects";
import dynamic from "next/dynamic";
import { Bat } from "@/components/models/Bat";

export default function Home() {
  return (
    <>
      <img
        priority="true"
        sizes="100vw"
        src={"/background/project-background.jpeg"}
        alt="background-image"
        className="fixed w-full h-full object-cover object-top opacity-40 z-0 top-0"
      ></img>

      <Projectlist projects={projectsData} />

      <div className="flex items-center justify-center fixed top-0 w-full lg:w-fit lg:top-20 mx-auto -translate-x-10  lg:left-0 h-screen">
        <RenderModels>
          <Bat />
        </RenderModels>
      </div>
    </>
  );
}
