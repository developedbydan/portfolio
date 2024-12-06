import { ArrowUpRight } from "@phosphor-icons/react";
import { Link } from "react-router";

import gsap from "gsap/src";
import { useEffect } from "react";

const ProjectList = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "sine.inOut",
      },
    });

    timeline
      .to("#project1", {
        opacity: 1,
        duration: 1,
      })
      .to("#project2", {
        opacity: 1,
        duration: 1,
      });
  });

  return (
    <section
      id="project1"
      className="flex flex-col justify-center w-full text-secondary font-inter pt-52 opacity-0 "
    >
      <Link className="border-t-2 border-primary py-5 px-6  ">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2">
            <h3 className="text-start text-lg font-bold">Influence</h3>
            <div className="flex justify-between gap-5">
              <p className="text-sm ">Influencer booking app</p>
              <ArrowUpRight
                size={24}
                weight="bold"
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="w-4/12 flex justify-end items-center md:hidden">
            <ArrowUpRight size={36} weight="regular" />
          </div>
        </div>
      </Link>
      <Link className="border-y-2 border-primary py-5 px-6 ">
        <div className="flex justify-between ">
          <div className="flex flex-col gap-2">
            <h3 className="text-start text-lg font-bold">Travelo</h3>
            <div className="flex justify-between gap-5">
              <p className="text-sm ">Travel website landing page</p>
              <ArrowUpRight
                size={24}
                weight="bold"
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="w-4/12 flex justify-end items-center md:hidden">
            <ArrowUpRight size={36} weight="regular" />
          </div>
        </div>
      </Link>
    </section>
  );
};

export default ProjectList;
