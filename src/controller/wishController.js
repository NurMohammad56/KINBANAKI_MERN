const {wishListService, createWishListService, removeWishListService} = require("../services/wishServices");

exports.wishList = async (req, res) => {
    let result = await wishListService();
    return res.status(200).json(result);
}

exports.createWishList = async (req, res) => {
    let result = await createWishListService();
    return res.status(200).json(result);
}

exports.removeWishList = async (req, res) => {
    let result = await removeWishListService();
    return res.status(200).json(result);
}