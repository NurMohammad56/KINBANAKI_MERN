import React from "react";
import Layout from "../component/layout/layout";
import SliderSkeleton from "../skeleton/slider-skeleton";
import FeaturesSkeleton from "../skeleton/features-skeleton";
import CategoriesSkeleton from "../skeleton/categories-skeleton";
import ProductsSkeleton from "../skeleton/products-skeleton";
import BrandsSkeleton from "../skeleton/brands-skeleton";
const HomePage = () => {
  return (
    <Layout>
      <SliderSkeleton />
      <FeaturesSkeleton />
      <CategoriesSkeleton />
      <ProductsSkeleton />
      <BrandsSkeleton />
    </Layout>
  );
};

export default HomePage;
