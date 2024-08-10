import React from "react";
import Details from "../component/product/details";
import Layout from "../component/layout/layout";
import Brands from "./../component/product/brands";

const ProductDetails = () => {
  return (
    <Layout>
      <Details />
      <Brands />
    </Layout>
  );
};

export default ProductDetails;
