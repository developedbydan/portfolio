import { ArrowUpRight } from "@phosphor-icons/react";

import gsap from "gsap/src";
import { useEffect } from "react";

const ProjectList = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "expo.in",
      },
    });

    timeline.to(
      "#project1",
      {
        opacity: 1,
        duration: 1,
      },
      "+=0.5"
    );
  });

  return (
    <section
      id="project1"
      className="flex flex-col justify-center w-full text-secondary font-inter pt-32 xl:pt-20 3xl:pt-44 opacity-0 "
    >
      <a
        href="https://admin-dashboard-kappa-eight-74.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-y-2 border-primary py-5 px-6 xl:px-52 3xl:px-96"
      >
        <div className="flex justify-between  ">
          <div className="flex flex-col gap-2 md:flex-row  md:items-center md:justify-between md:w-full">
            <h3 className="text-start text-lg font-bold md:text-2xl lg:text-3xl">
              Admin Dashboard
            </h3>
            <div className="flex justify-between gap-5 md:items-center md:w-7/12">
              <p className="text-sm md:text-base lg:text-lg">
                Sales admin dashboard
              </p>
              <ArrowUpRight
                size={48}
                weight="bold"
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="w-4/12 flex justify-end items-center md:hidden">
            <ArrowUpRight size={36} weight="regular" />
          </div>
        </div>
      </a>
      <a
        href="https://saas-landing-zeta-eight.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-y-2 border-primary py-5 px-6 xl:px-52 3xl:px-96"
      >
        <div className="flex justify-between  ">
          <div className="flex flex-col gap-2 md:flex-row  md:items-center md:justify-between md:w-full">
            <h3 className="text-start text-lg font-bold md:text-2xl lg:text-3xl">
              CodeFlow
            </h3>
            <div className="flex justify-between gap-5 md:items-center md:w-7/12">
              <p className="text-sm md:text-base lg:text-lg">SaaS website</p>
              <ArrowUpRight
                size={48}
                weight="bold"
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="w-4/12 flex justify-end items-center md:hidden">
            <ArrowUpRight size={36} weight="regular" />
          </div>
        </div>
      </a>
      <a
        href="https://influence-sable.vercel.app/login"
        target="_blank"
        rel="noopener noreferrer"
        className="border-t-2 border-primary py-5 px-6  xl:px-52 3xl:px-96"
      >
        <div className="flex justify-between ">
          <div className="flex flex-col md:flex-row  md:items-center md:justify-between md:w-full gap-2">
            <h3 className="text-start text-lg font-bold md:text-2xl lg:text-3xl">
              Influence
            </h3>
            <div className="flex justify-between md:items-center md:w-7/12 gap-5 ">
              <p className="text-sm md:text-base lg:text-lg">
                Influencer booking app
              </p>
              <ArrowUpRight
                size={48}
                weight="bold"
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="w-4/12 flex justify-end items-center md:hidden">
            <ArrowUpRight size={36} weight="regular" />
          </div>
        </div>
      </a>
      <a
        href="https://developedbydan.github.io/travelo/"
        target="_blank"
        rel="noopener noreferrer"
        className="border-y-2 border-primary py-5 px-6 xl:px-52 3xl:px-96"
      >
        <div className="flex justify-between  ">
          <div className="flex flex-col gap-2 md:flex-row  md:items-center md:justify-between md:w-full">
            <h3 className="text-start text-lg font-bold md:text-2xl lg:text-3xl">
              Travelo
            </h3>
            <div className="flex justify-between gap-5 md:items-center md:w-7/12">
              <p className="text-sm md:text-base lg:text-lg">
                Travel website landing page
              </p>
              <ArrowUpRight
                size={48}
                weight="bold"
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="w-4/12 flex justify-end items-center md:hidden">
            <ArrowUpRight size={36} weight="regular" />
          </div>
        </div>
      </a>
    </section>
  );
};

export default ProjectList;
