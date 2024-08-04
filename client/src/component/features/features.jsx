import React from "react";
import ProductStore from "../../store/productStore";
import FeaturesSkeleton from "./../../skeleton/features-skeleton";

const Features = () => {
  const { FeatureList } = ProductStore();

  if (FeatureList === null) {
    return <FeaturesSkeleton />;
  } else {
    return <div></div>;
  }
};

export default Features;
