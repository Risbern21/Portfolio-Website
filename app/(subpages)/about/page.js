import Image from "next/image";
import RenderModels from "@/components/RenderModels";
import { Hat } from "@/components/models/Hat";
import AboutDetails from "@/components/about";

export default function Home() {
  return (
    <>
      <img
        priority="true"
        sizes="100vw"
        src={"/background/about-background.png"}
        alt="background-image"
        className="fixed w-full h-full object-cover object-top opacity-40 z-0 top-0"
      ></img>
      <div className="w-full absolute top-1/6 sm:top-0 left-0 sm:h-screen xs:h-3/4 h-3/5 z-50">
        <RenderModels>
          <Hat />
        </RenderModels>
      </div>
      <div className="w-full h-screen relative flex flex-col items-center justify-center">
        <div className="absolute z-30 flex flex-col items-center top-[43%] sm:top-[50%] text-center left-1/2 -translate-x-1/2 w-full sm:w-fit">
          <p>
            Greetings, wanderer! I am{" "}
            <span className="font-bold text-2xl sm:text-3xl">Risbern</span> the
            Arcane Scribe, weaving spells of wisdom and code.Ask, and the runes
            shall reveal their secrets! ✨📜
          </p>
        </div>
      </div>
      <AboutDetails />
    </>
  );
}
