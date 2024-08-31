import React from "react";
import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "../utility/utility";

const WishStore = create((set) => ({
  isWistSubmit: false,
  WishSaveRequest: async (productID) => {
    try {
      set({ isWistSubmit: true });
      let res = await axios.post(`/api/v1/createWishList`, {
        productID: productID,
      });
      return res.data["status"] === "success";
    } catch (e) {
      unauthorized(e.response.status);
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
    } catch (e) {
      unauthorized(e.response.status);
    }
  },
}));

export default WishStore;
