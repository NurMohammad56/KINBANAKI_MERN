const {cartListService, saveCartListService, updateCartListService, removeCartListService} = require("../services/cartListServices");

exports.cartList = async (req, res) => {
    let result = await cartListService(req);
    return res.status(200).json(result);
}

exports.saveCartList = async (req, res) => {
    let result = await saveCartListService(req);
    return res.status(200).json(result);
}

exports.updateCartList = async (req, res) => {
    let result = await updateCartListService(req);
    return res.status(200).json(result);
}

exports.removeCartList = async (req, res) => {
    let result = await removeCartListService(req);
    return res.status(200).json(result);
}