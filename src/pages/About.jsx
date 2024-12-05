import { useEffect } from "react";
import Layout from "../components/Layout";
import ToolsGrid from "../components/ToolsGrid";

import gsap from "gsap";

const About = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "sine.inOut",
      },
    });

    timeline.to("#toolkit", {
      opacity: 1,
      duration: 1,
    });
  });

  return (
    <Layout>
      <section className="bg-black h-dvh pt-10 px-6 overflow-y-auto">
        <h2
          id="toolkit"
          className="text-secondary text-3xl font-bold text-center opacity-0"
        >
          My toolkit
        </h2>
        <ToolsGrid />
      </section>
    </Layout>
  );
};

export default About;
