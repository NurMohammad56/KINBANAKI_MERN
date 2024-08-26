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
}));

export default CartStore;
