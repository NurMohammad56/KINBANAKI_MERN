import React from "react";
import ProductStore from "../../store/productStore";
import BrandsSkeleton from "../../skeleton/brands-skeleton";

const Brands = () => {
  const { BrandList } = ProductStore();

  if (BrandList === null) {
    return <BrandsSkeleton />;
  } else {
    return <div></div>;
  }
};

export default Brands;
