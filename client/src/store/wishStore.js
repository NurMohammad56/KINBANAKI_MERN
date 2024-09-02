import create, { useStore } from "zustand";
import axios from "axios";
import { unauthorized } from "../utility/utility.js";
import WishList from "../component/wish/wishList.jsx";

const WishStore = create((set) => ({
  isWishSubmit: false,
  WishSaveRequest: async (productID) => {
    try {
      set({ isWishSubmit: true });
      let res = await axios.post(`/api/v1/createWishList`, {
        productID: productID,
      });
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
    } finally {
      set({ isWishSubmit: false });
    }
  },

  WishList: null,
  WishCount: 0,
  WishListRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/wishList`);
      set({ WishList: res.data["data"] });
      set({ WishCount: res.data["data"].length });
    } catch (e) {
      unauthorized(e.response.status);
    }
  },

  RemoveWishListRequest: async (productID) => {
    try {
      set({ WishList: null });
      await axios.post("api/v1/removeWishList", { productID: productID });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
}));

export default WishStore;
