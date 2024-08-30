import React from "react";

const WishStore = () => {
  isWistSubmit: false;
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
  };
};

export default WishStore;
