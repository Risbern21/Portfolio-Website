import React from "react";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full z-30">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex flex-col justify-center items-center gap-3"
          }
        >
          <h1 className="text-xl md:text-2xl font-bold">The Arcane Scribe</h1>
          <p className="text-left text-xs sm:text-sm md:text-base">
            Ah, traveler, gather ‘round! I began my arcane studies with the
            ancient scrolls of C and C++, mastering the raw forces of
            computation. From there, I delved into the mystic arts of Python,
            bending data and logic to my will. Then came the enchanted tomes of
            JavaScript and React, forging realms both swift and dynamic.
            Finally, I unlocked the secrets of Three.js, weaving spells of 3D
            illusions in the vast web ether. Now, with code as my incantation, I
            shape worlds,one spell at a time! ✨🔮
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-4"}>
          <h1 className="text-xl sm:text-2xl">Student</h1>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-4"}>
          <h1 className="text-2xl sm:text-4xl">
            3+
            <sub className="text-xs sm:text-base">months of experince</sub>
          </h1>
        </ItemLayout>
        <ItemLayout className={'col-span-full md:col-span-4 !p-0'}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Risbern21&&theme=transparent&hide_border=true&border_radius=16px&icon_color=f3ef66&title_color=f3ef66&text_color=FFFFFF" alt="github stats" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className={'col-span-full lg:col-span-8 !p-0'}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api?username=Risbern21&&theme=transparent&hide_border=true&border_radius=16px&icon_color=f3ef66&title_color=f3ef66&text_color=FFFFFF" alt="github stats" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className={'col-span-full'}>
          <img className="w-full h-auto" src="https://skillicons.dev/icons?i=c,cpp,py,js,html,css,tailwind,react,nodejs,nextjs,express,threejs,mongodb,vite,git,github" alt="github stats" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
          <img className="w-full h-auto" src="https://github-readme-streak-stats.herokuapp.com?user=Risbern21&theme=transparent&hide_border=true&border_radius=16)" alt="github stats" loading="lazy"/>
        </ItemLayout>
        <ItemLayout className={'col-span-full md:col-span-6 !p-0'}>
          <img className="w-full h-auto" src="https://github-readme-stats.vercel.app/api/pin/?username=Risbern21&repo=GetMeACoffee&theme=transparent&hide_border=true&border_radius=16" alt="github stats" loading="lazy"/>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
