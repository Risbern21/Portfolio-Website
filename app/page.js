import Image from "next/image";
import RenderModels from "@/components/RenderModels";
import { Wizard } from "@/components/models/Wizard";
import Navigation from "@/components/navigation";

export default function Home() {
  
  return (
    <main className="flex flex-col items-center justify-between relative min-h-screen">
      <img priority="true" sizes="100vw" src={"/background/home-background.png"} fill={"true"} alt="background-image" className="w-full h-full object-cover object-center opacity-40 z-0 absolute"></img>
      <div className="w-full h-screen">
        <Navigation/>
      <RenderModels>
        <Wizard/>
      </RenderModels>
      </div>
    </main>
  );
}
