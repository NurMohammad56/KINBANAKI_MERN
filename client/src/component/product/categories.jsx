import React from "react";
import ProductStore from "../../store/productStore";
import CategoriesSkeleton from "./../../skeleton/categories-skeleton";

const Categories = () => {
  const { CategoryList } = ProductStore();

  if (CategoryList === null) {
    return <CategoriesSkeleton />;
  } else {
    return <div></div>;
  }
};

export default Categories;
