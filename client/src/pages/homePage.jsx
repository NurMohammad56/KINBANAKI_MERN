import React, { useEffect } from "react";
import Layout from "../component/layout/layout";
// import SliderSkeleton from "../skeleton/slider-skeleton";
// import FeaturesSkeleton from "../skeleton/features-skeleton";
// import CategoriesSkeleton from "../skeleton/categories-skeleton";
// import ProductsSkeleton from "../skeleton/products-skeleton";
// import BrandsSkeleton from "../skeleton/brands-skeleton";
import ProductStore from "./../store/productStore";
import FeatureStore from "./../store/featureStore";
import Slider from "../component/product/slider";
import Features from "../component/features/features";
import Categories from "./../component/product/categories";
import Brands from "./../component/product/brands";
import Products from "./../component/product/products";

const HomePage = () => {
  const {
    BrandListRequest,
    CategoryListRequest,
    SliderListRequest,
    ListByRemarkRequest,
  } = ProductStore();

  const { FeatureListRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await CategoryListRequest();
      await ListByRemarkRequest("new");
      await BrandListRequest();
    })();
  }, []);

  return (
    <Layout>
      {/* <SliderSkeleton />
      <FeaturesSkeleton />
      <CategoriesSkeleton />
      <ProductsSkeleton />
      <BrandsSkeleton /> */}
      <Slider />
      <Features />
      <Categories />
      <Products />
      <Brands />
    </Layout>
  );
};

export default HomePage;
