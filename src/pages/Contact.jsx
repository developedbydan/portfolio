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
      <section className="bg-black h-dvh pt-48 px-6 overflow-y-auto font-inter">
        <div
          id="card"
          className=" bg-black rounded-xl  px-5 pb-16 flex flex-col items-center"
        >
          <div
            id="contact"
            className=" text-secondary flex justify-center  opacity-0"
          >
            <p className="bg-black px-4 pb-2 rounded-b-xl text-sm">Contact</p>
          </div>

          <h2 id="projects" className="text-black text-3xl font-bold  pt-8">
            Get In Touch
          </h2>

          <p className="text-center pt-8 ">
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
