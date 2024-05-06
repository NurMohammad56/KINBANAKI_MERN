const CartModel = require("../model/CartModel");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const cartListService = async (req) =>{
    try {
        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const saveCartListService = async (req) =>{
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;

        await CartModel.create(reqBody);
        return {status:"Success",message:"Cart list cretaed successful"}

    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const updateCartListService = async (req) =>{
    try {
        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const removeCartListService = async (req) =>{
    try {
        
    } catch (error) {
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

module.exports = {
    cartListService,
    saveCartListService,
    removeCartListService,
    updateCartListService
}