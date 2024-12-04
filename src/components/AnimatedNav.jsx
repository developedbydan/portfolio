import { useEffect } from "react";
import { gsap } from "gsap";

const AnimatedNav = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
    });

    timeline
      // Circle fade in
      .to("#circle-animation", {
        opacity: 1,
        scale: 3,
        transformOrigin: "center center",
        duration: 1,
      })
      // Expanding circle
      .to("#circle-animation", {
        scale: 100,
        duration: 0.9,
      })
      // Text fade in
      .to(
        "#text-animation",
        {
          opacity: 1,
          transformOrigin: "center center",
        },
        "-=0.97"
      )
      // Shrinking circle
      .to(
        "#circle-animation",
        {
          scale: 1,
          x: "-38vw",
          y: "-43vh",
          duration: 1,
        },
        "+=0.5"
      )
      // Shrinking text
      .to(
        "#text-animation",
        {
          scale: 0.3,
          x: "-38vw",
          y: "-43vh",
          duration: 1,
        },
        "-=1"
      );
  }, []);

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center relative overflow-hidden">
      <div
        id="circle-animation"
        className="bg-primary rounded-full w-10 h-10 opacity-0 absolute"
      ></div>

      <div
        id="text-animation"
        className="text-black font-bold text-7xl opacity-0 absolute font-inter"
      >
        D.
      </div>
    </div>
  );
};

export default AnimatedNav;
