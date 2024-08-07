const express = require("express");
const router = express.Router();
const {
  brandList,
  categoryList,
  sliderList,
  listByBrand,
  listByCategory,
  listBySimilar,
  listByKeyword,
  listByRemark,
  productDetails,
  productReviewList,
  createReview,
  listByFilter,
} = require("../controller/productContoller");
const {
  userOtp,
  verifyLogin,
  userLogout,
  createProfile,
  updateProfile,
  readProfile,
} = require("../controller/userController");
const {
  wishList,
  createWishList,
  removeWishList,
} = require("../controller/wishController");
const {
  cartList,
  saveCartList,
  updateCartList,
  removeCartList,
} = require("../controller/cartListController");
const {
  createInvoice,
  paymentCancel,
  paymentFail,
  paymentIPN,
  paymentSuccess,
  invoiceList,
  invoiceProductList,
} = require("../controller/invoiceController");
const { featuresList } = require("../controller/feturesController");
const authVerification = require("../middleware/authVerification");

// Product
router.get("/brandList", brandList);
router.get("/categoryList", categoryList);
router.get("/sliderList", sliderList);
router.get("/listByBrand/:brandID", listByBrand);
router.get("/listByCategory/:categoryID", listByCategory);
router.get("/listBySimilar/:categoryID", listBySimilar);
router.get("/listByKeyword/:keyword", listByKeyword);
router.get("/listByRemark/:remark", listByRemark);
router.get("/productDetails/:productID", productDetails);
router.get("/productReviewList/:productID", productReviewList);
router.post("/listByFilter", listByFilter);

// User
router.get("/userOtp/:email", userOtp);
router.get("/verifyLogin/:email/:otp", verifyLogin);
router.get("/userLogout", authVerification, userLogout);
router.post("/createProfile", authVerification, createProfile);
router.post("/updateProfile", authVerification, updateProfile);
router.get("/readProfile", authVerification, readProfile);

// Wish
router.post("/createWishList", authVerification, createWishList);
router.post("/removeWishList", authVerification, removeWishList);
router.get("/wishList", authVerification, wishList);

// Cart
router.post("/saveCartList", authVerification, saveCartList);
router.post("/updateCartList/:cartID", authVerification, updateCartList);
router.post("/removeCartList", authVerification, removeCartList);
router.get("/cartList", authVerification, cartList);

// Invoice
router.get("/createInvoice", authVerification, createInvoice);
router.get(
  "/invoiceProductList/:invoice_id",
  authVerification,
  invoiceProductList
);
router.get("/invoiceList", authVerification, invoiceList);
router.post("/paymentSuccess/:trxID", paymentSuccess);
router.post("/paymentCancel/:trxID", paymentCancel);
router.post("/paymentFail/:trxID", paymentFail);
router.post("/paymentIPN/:trxID", paymentIPN);

// Feature
router.get("/featuresList", featuresList);

// Review
router.post("/createReview", authVerification, createReview);

module.exports = router;
