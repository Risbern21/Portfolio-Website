import Image from "next/image";
import RenderModels from "@/components/RenderModels";
import Form from "@/components/contact/Form";

export default function Home() {
  return (
    <>
      <img
        priority="true"
        sizes="100vw"
        src={"/background/contact-background.png"}
        alt="background-image"
        className="fixed w-full h-full object-cover object-top opacity-40 z-0 top-0"
      ></img>
      <article className="w-full relative flex flex-col items-center justify-center space-y-8 z-40">
        <div className="flex items-center justify-center flex-col space-y-6 w-full sm:w-3/4">
          <h1 className="text-3xl sm:text-4xl text-center capitalize font-semibold">
            Should you seek my wisdom or summon my aid
          </h1>
          <p className="text-center text-sm sm:text-base">
            Cast your Message into the enchanted scroll below, and with but a
            whisper of magic, your message shall find its way to me! 🧙‍♂️✨
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
