
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import HowToPlay from "@/components/HowToPlay";
import Special from "@/components/Special";
import Product from "@/components/Product";
import Community from "@/components/Community";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <HowToPlay />
      <Special />
      <Product />
      <Community />
    </Layout>
  );
};

export default Index;
