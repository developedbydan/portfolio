import Layout from "../components/Layout";
import ToolsGrid from "../components/ToolsGrid";

const About = () => {
  return (
    <Layout>
      <section className="bg-black h-dvh pt-10 px-6 overflow-y-auto">
        <h2 className="text-secondary text-3xl font-bold text-center">
          My toolkit
        </h2>
        <ToolsGrid />
      </section>
    </Layout>
  );
};

export default About;
