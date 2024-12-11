import HeroSection from "../components/HeroSection";
import AnimatedNav from "../components/AnimatedNav";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <section className="bg-black h-[var(--app-height)]">
        <AnimatedNav />
        <HeroSection />
      </section>
    </Layout>
  );
};

export default Home;
