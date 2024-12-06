import { useEffect } from "react";
import Layout from "../components/Layout";
import gsap from "gsap";

const Contact = () => {
  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: {
        duration: 1,
        ease: "sine.inOut",
      },
    });

    timeline

      .to("#contact", {
        opacity: 1,
        duration: 1.3,
        ease: "expo.in",
      })

      .to("#card", {
        opacity: 1,
        duration: 1,
        background: "#EAFF74",
        ease: "expo.in",
      });
  });

  return (
    <Layout>
      <section className="bg-black h-dvh pt-48 lg:pt-44 3xl:pt-48 px-6 overflow-y-auto font-inter sm:px-8 sm:pt-64 md:px-20 lg:px-52 xl:flex xl:justify-center ">
        <div
          id="card"
          className=" bg-black rounded-xl  px-5 pb-16 flex flex-col items-center  md:px-10 lg:px-14 xl:w-1/2 xl:h-1/2 3xl:w-5/12"
        >
          <div
            id="contact"
            className=" text-secondary flex justify-center opacity-0"
          >
            <p className="bg-black px-4 pb-2 rounded-b-xl text-sm md:text-base lg:text-lg">
              Contact
            </p>
          </div>

          <h2
            id="projects"
            className="text-black text-3xl md:text-4xl lg:text-5xl font-bold  pt-8 3xl:pt-14"
          >
            Get In Touch
          </h2>

          <p className="text-center pt-8 3xl:pt-16 md:text-lg">
            Feel free to reach out to me via{" "}
            <a
              href="mailto:guzvicdanijel21@gmail.com"
              className="font-bold underline"
            >
              email
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/danijel-guzvic/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold underline"
            >
              LinkedIn
            </a>{" "}
            with any direct questions, and I&apos;ll get back to you as soon as
            I can.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
