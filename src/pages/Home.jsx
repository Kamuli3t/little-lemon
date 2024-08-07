import About from "../components/About";
import Hero from "../components/Hero";
import Layout from "../components/Layout";
import Specials from "../components/Specials";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonial />
      <About />
    </>
  );
};

export default Home;
