import ReactSvg from "../assets/react.svg";
import GitSvg from "../assets/git.svg";
import MongoSvg from "../assets/mongodb.svg";
import ExpressSvg from "../assets/express.svg";
import TailwindSvg from "../assets/tailwind.svg";
import FigmaSvg from "../assets/figma.svg";

const ToolsGrid = () => {
  return (
    <section className="pt-16 pb-48">
      <div className="grid grid-cols-2 gap-5 text-white font-semibold">
        <div className="bg-gridReact col-span-2 py-6 px-4 flex flex-col items-center gap-3 rounded-xl">
          <img src={ReactSvg} className="w-16 h-16" />
          <p>React</p>
        </div>
        <div className="bg-gridMongo col-span-1 py-6 px-4 flex flex-col items-center gap-3 rounded-xl">
          <img src={MongoSvg} className="w-16 h-16" />
          <p>MongoDB</p>
        </div>
        <div className="bg-gridGit col-span-1 row-span-2 py-6 px-4 flex flex-col items-center justify-center gap-3 rounded-xl">
          <img src={GitSvg} className="w-16 h-16" />
          <p>Git</p>
        </div>
        <div className="bg-gridExpress col-span-1 py-6 px-4 flex flex-col items-center gap-3 rounded-xl">
          <img src={ExpressSvg} className="w-16 h-16 " />
          <p>Express</p>
        </div>
        <div className="bg-gridTailwind col-span-1 row-span-2 py-6 px-4 flex flex-col items-center justify-center gap-3 rounded-xl">
          <img src={TailwindSvg} className="w-16 h-16" />
          <p>Tailwind</p>
        </div>
        <div className="bg-gridFigma col-span-1 row-span-2 py-6 px-4 flex flex-col items-center justify-center gap-3 rounded-xl">
          <img src={FigmaSvg} className="w-16 h-16" />
          <p>Figma</p>
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
