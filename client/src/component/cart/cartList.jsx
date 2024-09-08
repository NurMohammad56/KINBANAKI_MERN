import React, { useEffect } from "react";
import CartStore from "../../store/cartStore";
import CartSkeleton from "../../skeleton/cart-skeleton";
import NoData from "./../layout/noData";

const CartList = () => {
  const {
    CartList,
    CartTotal,
    CartVatTotal,
    CartPayableTotal,
    CartListRequest,
    RemoveCartListRequest,
    CreateInvoiceRequest,
  } = CartStore();

  useEffect(() => {
    (async () => {
      await CartListRequest();
    })();
  }, []);

  const remove = async (cartID) => {
    await RemoveCartListRequest(cartID);
    await CartListRequest();
  };

  if (CartList == null) {
    return <CartSkeleton />;
  } else if (CartList.length === 0) {
    return <NoData />;
  } else {
    return <div className="container"></div>;
  }
};

export default CartList;
