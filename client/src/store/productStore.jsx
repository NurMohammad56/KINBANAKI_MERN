import create from "zustand";
import axios from "axios";
import Slider from "./../component/product/slider";

const ProductStore = create((set) => ({
  BrandList: null,
  BrandListRequest: async () => {
    let res = await axios.get("/api/v1/brandList");
    if (res.data["status"] === "success") {
      set({ BrandList: res.data["data"] });
    }
  },

  CategoryList: null,
  CategoryListRequest: async () => {
    let res = await axios.get("/api/v1/categoryList");
    if (res.data["status"] === "success") {
      set({ CategoryList: res.data["data"] });
    }
  },

  SliderList: null,
  SliderListRequest: async () => {
    let res = await axios.get("/api/v1/sliderList");
    if (res.data["status"] === "success") {
      set({ Slider: res.data["data"] });
    }
  },
}));
export default ProductStore;
