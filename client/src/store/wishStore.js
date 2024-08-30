import React from "react";
import { create } from "zustand";
import { unauthorized } from "../utility/utility";

const WishStore = create((set) => ({
  isWistSubmit: false,
  WishSaveRequest: async (productID) => {
    try {
      set({ isWistSubmit: true });
      let res = await axios.post(`/api/v1/saveWishList`, {
        productID: productID,
      });
      return res.data["status"] === "Success";
    } catch (error) {
      unauthorized(error.response.status);
    } finally {
      set({ isWistSubmit: false });
    }
  },

  WishList: null,
  WishCount: 0,
  WishListRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/wishList`);
      set({ WishList: res.data["data"] });
      set({ WishCount: res.data["data"].length });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
}));

export default WishStore;
