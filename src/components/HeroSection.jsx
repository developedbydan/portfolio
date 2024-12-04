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
      className="absolute w-full flex flex-col items-center justify-center bg-transparent  top-72 text-secondary opacity-0 font-inter"
    >
      <h1 className="text-center text-5xl font-bold ">
        <span className="font-alex text-[4.4rem] text-primary font-normal">
          full
        </span>{" "}
        STACK <br /> DEVELOPER.
      </h1>
      <p className=" pt-2 text-center text-xs font-medium ">
        Hi, I&apos;m Danijel, a software engineering graduate.
      </p>
      <div className="pt-3 flex gap-2 items-center text-xs font-normal">
        <MapPin size={20} weight="fill" />
        <p>Belgrade, Serbia</p>
      </div>
    </div>
  );
};

export default HeroSection;
