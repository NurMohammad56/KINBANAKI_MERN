const express = require("express");
const router = express.Router();
const {brandList, categoryList, sliderList, listByBrand, listByCategory, listBySimilar, listByKeyword, listByRemark, productDetails, productReviewList} = require("../controller/productContoller")
const {userOtp, verifyLogin, userLogout, createProfile, updateProfile, readProfile} = require("../controller/userController");
const {wishList, createWishList, removeWishList} = require("../controller/wishController");
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


// User
router.get("/userOtp/:email", userOtp);
router.get("/verifyLogin/:email/:otp", verifyLogin);
router.get("/userLogout", authVerification, userLogout);
router.post("/createProfile", authVerification,createProfile);
router.post("/updateProfile", authVerification,updateProfile);


// Wish
router.post('/createWishList', authVerification,createWishList);
router.post('/removeWishList', authVerification,removeWishList);



module.exports = router;