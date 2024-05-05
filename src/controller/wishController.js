const {wishListService, createWishListService, removeWishListService} = require("../services/wishServices");

exports.wishList = async (req, res) => {
    let result = await wishListService(req);
    return res.status(200).json(result);
}

exports.createWishList = async (req, res) => {
    let result = await createWishListService(req);
    return res.status(200).json(result);
}

exports.removeWishList = async (req, res) => {
    let result = await removeWishListService(req);
    return res.status(200).json(result);
}