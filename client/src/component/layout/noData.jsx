import React from "react";
import nodataImage from "../../assets/images/no-results.webp";

const NoData = () => {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-4 text-center">
          <img src={nodataImage} className="w-75" alt="" />
        </div>
      </div>
    </div>
  );
};

export default NoData;
