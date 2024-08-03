import create from "zustand";
import axios from "axios";

const ProductStore = create((set) => ({
  BrandList: null,
  BrandListRequest: async () => {
    let res = await axios.get("/api/v1/brandList");
    if (res.data["status"] === "success") {
      set({ BrandList: res.data["data"] });
    }
  },
}));
export default ProductStore;
