import React from "react";
import Layout from "./../component/layout/layout";
import WishList from "../component/wish/wishList";
import Brands from "./../component/product/brands";

const WishPage = () => {
  return (
    <Layout>
      <WishList />
      <Brands />
    </Layout>
  );
};

export default WishPage;
