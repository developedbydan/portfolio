import ReactSvg from "../assets/react.svg";
import GitSvg from "../assets/git.svg";
import MongoSvg from "../assets/mongodb.svg";
import ExpressSvg from "../assets/express.svg";
import TailwindSvg from "../assets/tailwind.svg";
import FigmaSvg from "../assets/figma.svg";

import gsap from "gsap";
import { useEffect } from "react";

const ToolsGrid = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
    });

    timeline
      .to("#react", {
        opacity: 1,
        duration: 0.6,
      })
      .to("#figma", {
        opacity: 1,
        duration: 0.5,
      })
      .to("#express", {
        opacity: 1,
        duration: 0.6,
      })
      .to("#tailwind", {
        opacity: 1,
        duration: 0.5,
      })
      .to("#git", {
        opacity: 1,
        duration: 0.6,
      })
      .to("#mongo", {
        opacity: 1,
        duration: 0.6,
      });
  });

  return (
    <section className="pt-16 pb-48">
      <div className="grid grid-cols-2 gap-5 text-white font-medium font-inter">
        <div
          id="react"
          className="bg-gridReact col-span-2 py-6 px-4 flex flex-col items-center gap-3 rounded-xl opacity-0"
        >
          <img src={ReactSvg} className="w-16 h-16" />
          <p>React</p>
        </div>
        <div
          id="mongo"
          className="bg-gridMongo col-span-1 py-6 px-4 flex flex-col items-center gap-3 rounded-xl opacity-0"
        >
          <img src={MongoSvg} className="w-16 h-16" />
          <p>MongoDB</p>
        </div>
        <div
          id="git"
          className="bg-gridGit col-span-1 row-span-2 py-6 px-4 flex flex-col items-center justify-center gap-3 rounded-xl opacity-0"
        >
          <img src={GitSvg} className="w-16 h-16" />
          <p>Git</p>
        </div>
        <div
          id="express"
          className="bg-gridExpress col-span-1 py-6 px-4 flex flex-col items-center gap-3 rounded-xl opacity-0"
        >
          <img src={ExpressSvg} className="w-16 h-16 " />
          <p>Express</p>
        </div>
        <div
          id="tailwind"
          className="bg-gridTailwind col-span-1 row-span-2 py-6 px-4 flex flex-col items-center justify-center gap-3 rounded-xl opacity-0"
        >
          <img src={TailwindSvg} className="w-16 h-16" />
          <p>Tailwind</p>
        </div>
        <div
          id="figma"
          className="bg-gridFigma col-span-1 row-span-2 py-6 px-4 flex flex-col items-center justify-center gap-3 rounded-xl opacity-0"
        >
          <img src={FigmaSvg} className="w-16 h-16" />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
