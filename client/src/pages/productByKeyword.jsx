import React, { useEffect } from "react";
import ProductStore from "../store/productStore";
import { useParams } from "react-router-dom";
import Layout from "../component/layout/layout";
import ProductList from "../component/product/productList";

const ProductByKeyword = () => {
  const { ListByKeywordRequest } = ProductStore();
  const { Keyword } = useParams();

  useEffect(() => {
    (async () => {
      await ListByKeywordRequest(Keyword);
    })();
  }, [Keyword]);
  return (
    <Layout>
      <ProductList />
    </Layout>
  );
};

export default ProductByKeyword;
