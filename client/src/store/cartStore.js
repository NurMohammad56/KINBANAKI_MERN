import { create } from "zustand";
import axios from "axios";
import { unauthorized } from "./../utility/utility";

const CartStore = create((set) => ({
  isCartSubmit: false,
  CartForm: { productID: "", color: "", size: "" },
  CartFormChange: (name, value) => {
    set((state) => ({
      CartForm: {
        ...state.CartForm,
        [name]: value,
      },
    }));
  },

  CartSaveRequest: async (PostBody, productID, quantity) => {
    try {
      set({ isCartSubmit: true });
      PostBody.productID = productID;
      PostBody.qty = quantity;
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
  CartTotal: 0,
  CartVatTotal: 0,
  CartPayable: 0,
  CartListRequest: async () => {
    try {
      let res = await axios.get(`/api/v1/cartList`);
      set({ CartList: res.data["data"] });
      set({ CartCount: res.data["data"].length });
      let total = 0;
      let vat = 0;
      let payable = 0;
      res.data["data"].forEach((item, i) => {
        if (item["product"]["discount"] === true) {
          total =
            total +
            parseInt(item["qty"]) * parseInt(item["product"]["discountPrice"]);
        } else {
          total =
            total + parseInt(item["qty"]) * parseInt(item["product"]["price"]);
        }
      });

      vat = total * 0.05;
      payable = vat + total;
      set({ CartTotal: total });
      set({ CartVatTotal: vat });
      set({ CartPayable: payable });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },

  RemoveCartList: async (cartID) => {
    try {
      set({ CartList: null });
      await axios.post(`api/v1/removeCartList`, { _id: cartID });
    } catch (error) {
      unauthorized(error.response.status);
    }
  },

  CreateInvoiceRequest: async () => {
    try {
      set({ isCartSubmit: true });
      let res = await axios.get(`api/v1/createInvoice`);
      window.location.href = res.data["data"]["GatewayPageURL"];
    } catch (error) {
      unauthorized(error.response.status);
    } finally {
      set({ isCartSubmit: false });
    }
  },
}));

export default CartStore;
