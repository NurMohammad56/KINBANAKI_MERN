import React from "react";
import Layout from "../component/layout/layout";
import SliderSkeleton from "../skeleton/slider-skeleton";
import FeaturesSkeleton from "../skeleton/features-skeleton";
import CategoriesSkeleton from "../skeleton/categories-skeleton";
const HomePage = () => {
  return (
    <Layout>
      <SliderSkeleton />
      <FeaturesSkeleton />
      <CategoriesSkeleton />
    </Layout>
  );
};

export default HomePage;
