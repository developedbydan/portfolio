import gsap from "gsap";
import { useEffect } from "react";
import { NavLink } from "react-router";

const FloatingNav = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "power2.inOut",
      },
    });

    timeline
      .to("#nav", {
        opacity: 0,
        duration: 1,
      })

      .to(
        "#nav",
        {
          opacity: 1,
          duration: 1,
        },
        "+=2.1"
      );
  }, []);

  return (
    <header
      id="nav"
      className="bg-transparent w-full fixed bottom-20 z-10 px-6 opacity-0"
    >
      <nav className="flex justify-between bg-navBg/90 backdrop-blur-xl hover:backdrop-blur-none  py-4 px-8 rounded-lg  font-inter text-sm">
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-secondary font-bold "
              : "text-navText hover:text-white"
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-secondary font-bold "
              : "text-navText hover:text-white"
          }
        >
          About
        </NavLink>
        <NavLink
          to={"/projects"}
          className={({ isActive }) =>
            isActive
              ? "text-secondary font-bold "
              : "text-navText hover:text-white"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "text-secondary font-bold "
              : "text-navText hover:text-white"
          }
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default FloatingNav;
