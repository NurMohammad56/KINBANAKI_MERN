import React, { useEffect } from "react";
import ProductStore from "../store/productStore";
import { useParams } from "react-router-dom";
import Layout from "../component/layout/layout";
import ProductList from "../component/product/productList";

const ProductByCategory = () => {
  const { ListByCategoryRequest } = ProductStore();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await ListByCategoryRequest(id);
    })();
  }, [id]);
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductByCategory;
