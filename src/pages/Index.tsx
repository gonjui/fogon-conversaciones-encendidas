
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import ConoceFogon from "@/components/ConoceFogon";
import Special from "@/components/Special";
import Product from "@/components/Product";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Story />
      <ConoceFogon />
      <Special />
      <Product />
    </Layout>
  );
};

export default Index;
