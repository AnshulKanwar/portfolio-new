import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const IndexPage = () => {
  return (
    <Layout>
      <Hero />
      <div className="px-20 my-40 flex flex-col gap-y-20">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
};

export default IndexPage;
