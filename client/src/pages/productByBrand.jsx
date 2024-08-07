import React, { useEffect } from "react";
import Layout from "../component/layout/layout";
import ProductStore from "../store/productStore";
import { useParams } from "react-router-dom";
import ProductList from "./../component/product/productList";
const ProductByBrand = () => {
  const { ListByBrandRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ListByBrandRequest(id);
    })();
  }, []);
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductByBrand;
