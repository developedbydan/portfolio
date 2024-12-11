import { useEffect } from "react";
import gsap from "gsap";
import { MapPin } from "@phosphor-icons/react";

const HeroSection = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
    });

    timeline
      .to("#hero", {
        opacity: 0,
        duration: 1,
      })
      .to(
        "#hero",
        {
          opacity: 1,
          duration: 1,
        },
        "+=2"
      );
  }, []);

  return (
    <div
      id="hero"
      className="absolute w-full h-[var(--app-height)] flex flex-col items-center justify-center bg-transparent  top-0  text-secondary opacity-0 font-inter"
    >
      <h1 className="text-center text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl 3xl:text-8xl font-bold ">
        <span className="font-alex text-[4.4rem] sm:text-[5.3rem] md:text-[6.3rem] 2xl:text-[8.3rem] 3xl:text-[8.3rem]  text-primary font-normal">
          full
        </span>{" "}
        STACK <br /> DEVELOPER.
      </h1>
      <p className=" pt-2 lg:pt-4 text-center text-xs sm:text-sm md:text-lg lg:text-xl font-medium ">
        Hi, I&apos;m Danijel, a software engineering graduate.
      </p>
      <div className="pt-3 lg:pt-5 flex gap-2 items-center text-[0.70rem] sm:text-[0.80rem] md:text-[1rem] lg:text-[1.1rem] font-normal">
        <MapPin size={20} weight="fill" />
        <p>Belgrade, Serbia</p>
      </div>
    </div>
  );
};

export default HeroSection;
