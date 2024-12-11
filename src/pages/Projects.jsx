import { useEffect } from "react";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";
import gsap from "gsap";

const Projects = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "sine.inOut",
      },
    });

    timeline.to("#projects", {
      opacity: 1,
      duration: 1.3,
    });
  });

  return (
    <Layout>
      <section className="bg-black h-[var(--app-height)] pt-10 overflow-y-auto">
        <h2
          id="projects"
          className="text-secondary text-3xl lg:text-4xl font-bold text-center opacity-0"
        >
          Projects
        </h2>
        <ProjectList />
      </section>
    </Layout>
  );
};

export default Projects;
