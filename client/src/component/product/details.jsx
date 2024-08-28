import React, { useState } from "react";
import ProductStore from "../../store/productStore";
import DetailsSkeleton from "../../skeleton/details-skeleton";
import parse from "html-react-parser";
import ProductImage from "./productImage";
import Reviews from "./reviews";
import CartSubmitButton from "../user/cartSubmitButton";
import CartStore from "../../store/cartStore";
import { toast } from "react-hot-toast";

const Details = () => {
  const { ProductDetails } = ProductStore();
  const { CartForm, CartSaveRequest, CartListRequest, CartFormChange } =
    CartStore();
  const [quantity, SetQuantity] = useState(1);
  const increment = () => {
    SetQuantity((quantity) => quantity + 1);
  };
  const decrement = () => {
    SetQuantity((quantity) => quantity - 1);
  };
  const AddCart = async (productID) => {
    let res = await CartSaveRequest(CartForm, productID);
    if (res) {
      toast.success("Cart Item Success");
      await CartListRequest();
    }
  };
  if (ProductDetails === null) {
    return <DetailsSkeleton />;
  } else {
    return (
      <div>
        <div className="container mt-1">
          <div className="row">
            <div className="col-md-7 p-3">
              <ProductImage />
            </div>
            <div className="col-md-5 p-3">
              <h4>{ProductDetails[0]["title"]}</h4>
              <p className="text-muted bodySmal my-1">
                Category: {ProductDetails[0]["category"]["categoryName"]}
              </p>
              <p className="text-muted bodySmal my-1">
                Brand: {ProductDetails[0]["brand"]["brandName"]}
              </p>
              <p className="bodySmal mb-2 mt-1">
                {ProductDetails[0]["shortDes"]}
              </p>
              {ProductDetails[0]["discount"] === true ? (
                <span className="bodyXLarge">
                  <strike className="text-secondary">
                    {ProductDetails[0]["price"]}
                  </strike>{" "}
                  {ProductDetails[0]["discountPrice"]}
                </span>
              ) : (
                <span className=" bodyXLarge">
                  {ProductDetails[0]["price"]}
                </span>
              )}

              <div className="row">
                <div className="col-4 p-2">
                  <label className="bodySmal">Size</label>
                  <select
                    value={CartForm.size}
                    onChange={(e) => {
                      CartFormChange("size", e.target.value);
                    }}
                    className="form-control my-2 form-select"
                  >
                    <option>Size</option>
                    {ProductDetails[0]["details"]["size"]
                      .split(",")
                      .map((item, i) => {
                        return <option value={item}>{item}</option>;
                      })}
                  </select>
                </div>
                <div className="col-4 p-2">
                  <label className="bodySmal">Color</label>
                  <select className="form-control my-2 form-select">
                    <option value="">Color</option>
                    {ProductDetails[0]["details"]["color"]
                      .split(",")
                      .map((item, i) => {
                        return <option value={item}>{item}</option>;
                      })}
                  </select>
                </div>
                <div className="col-4 p-2">
                  <label className="bodySmal">Quantity</label>
                  <div className="input-group my-2">
                    <button
                      onClick={decrement}
                      className="btn btn-outline-secondary"
                    >
                      -
                    </button>
                    <input
                      value={quantity}
                      type="text"
                      className="form-control bg-light text-center"
                      readOnly
                    />
                    <button
                      onClick={increment}
                      className="btn btn-outline-secondary"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="col-5 p-2">
                  <CartSubmitButton
                    onClick={async () => {
                      await AddCart(ProductDetails[0][_id]);
                    }}
                    className="btn w-100 btn-success"
                    text="Add to Cart"
                  />
                </div>
                <div className="col-5 p-2">
                  <button className="btn w-100 btn-success">Add to Wish</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="Speci-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Speci-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Speci-tab-pane"
                  aria-selected="true"
                >
                  Specifications
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="Review-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#Review-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="Review-tab-pane"
                  aria-selected="false"
                >
                  Review
                </button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="Speci-tab-pane"
                role="tabpanel"
                aria-labelledby="Speci-tab"
                tabIndex="0"
              >
                {parse(ProductDetails[0]["details"]["des"])}
              </div>
              <div
                className="tab-pane fade"
                id="Review-tab-pane"
                role="tabpanel"
                aria-labelledby="Review-tab"
                tabIndex="0"
              >
                <ul className="list-group list-group-flush">{<Reviews />}</ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Details;
