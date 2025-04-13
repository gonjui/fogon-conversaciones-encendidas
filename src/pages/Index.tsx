
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import HowToPlay from "@/components/HowToPlay";
import Special from "@/components/Special";
import Product from "@/components/Product";
import ConoceFogon from "@/components/ConoceFogon";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <ConoceFogon />
      <HowToPlay />
      <Special />
      <Product />
    </Layout>
  );
};

export default Index;
