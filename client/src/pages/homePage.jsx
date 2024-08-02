import React from "react";
import Layout from "../component/layout/layout";
import SliderSkeleton from "../skeleton/slider-skeleton";
import FeaturesSkeleton from "../skeleton/features-skeleton";
const HomePage = () => {
  return (
    <Layout>
      <SliderSkeleton />
      <FeaturesSkeleton />
    </Layout>
  );
};

export default HomePage;
