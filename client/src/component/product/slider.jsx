import React from "react";
import ProductStore from "../../store/productStore.js";
import SliderSkeleton from "./../../skeleton/slider-skeleton";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

const Slider = () => {
  const { SliderList } = ProductStore();

  if (SliderList === null) {
    return <SliderSkeleton />;
  } else {
    return (
      <div className="carousel hero-bg carousel-dark slide">
        <div className="carousel-inner py-4">
          <Carousel>
            {SliderList.map((item, i) => {
              return (
                <Carousel.Item key={i}>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                        <h1 className="headline-1">{item["title"]}</h1>
                        <p>{item["des"]}</p>
                        <Link to="" className="btn text-white btn-success px-5">
                          Buy Now
                        </Link>
                      </div>
                      <div className="col-12 col-lg-5 col-sm-12 col-md-5 p-5">
                        <img className="w-100" src={item["image"]} alt="..." />
                      </div>
                    </div>
                  </div>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
};

export default Slider;
