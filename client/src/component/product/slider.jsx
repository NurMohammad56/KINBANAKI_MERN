import React from "react";
import ProductStore from "../../store/productStore";
import SliderSkeleton from "./../../skeleton/slider-skeleton";

const Slider = () => {
  const { SliderList } = ProductStore();

  if (SliderList === null) {
    return <SliderSkeleton />;
  } else {
    return <div></div>;
  }
};

export default Slider;
