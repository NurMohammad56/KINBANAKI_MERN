import React, { useEffect } from "react";
import Details from "../component/product/details";
import Layout from "../component/layout/layout";
import Brands from "./../component/product/brands";
import { useParams } from "react-router-dom";
import ProductStore from "../store/productStore";

const ProductDetails = () => {
  const {
    ReviewListRequest,
    ProductDetailsRequest,
    BrandList,
    ListByBrandRequest,
  } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ProductDetailsRequest(id);
      await ReviewListRequest(id);
      BrandList === null ? await ListByBrandRequest() : null;
    })();
  }, [id]);

  return (
    <Layout>
      <Details />
      <Brands />
    </Layout>
  );
};

export default ProductDetails;
