import { create } from "zustand";
import axios from "axios";

const CartStore = create((set) => ({
  isCartSubmit: false,
}));

export default CartStore;
