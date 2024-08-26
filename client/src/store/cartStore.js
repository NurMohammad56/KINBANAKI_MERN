import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "./../utility/utility";

const CartStore = create((set) => ({
  isCartSubmit: false,
  CartForm: { productID: "", color: "1", qty: "", size: "" },
  CartFormChange: (name, value) => {
    set((state) => ({
      CartForm: {
        ...state.CartForm,
        [name]: value,
      },
    }));
  },

  CartSaveRequest: async (PostBody, productID) => {
    try {
      set({ isCartSubmit: true });
      PostBody.productID = productID;
      let res = await axios.post(`/api/v1/saveCartList`, PostBody);
      return res.data["status"] === "Success";
    } catch (error) {
      unauthorized(error.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },

  CartList: null,
  CartCount: 0,
  CartListRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/cartList`);
      set({ CartList: res.data["data"] });
      set({ CartCount: res.data["data"].length });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },
}));

export default CartStore;
