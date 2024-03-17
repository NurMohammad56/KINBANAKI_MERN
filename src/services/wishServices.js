const WishModel = require("../model/WishModel");

const wishListService = async (req) => {

}

const createWishListService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;

        await WishModel.updateOne(reqBody, {$set: reqBody}, {upsert:true});
        return {status: "Success", message:"Wish list created success"};
    }
    catch (e) {
        return {status: "Failed", message:"Something went wrong"};
    }


}

const removeWishListService = async (req) => {
    try {
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;

        await WishModel.deleteOne(reqBody);
        return {status: "Success", message:"Remove success"};
    }
    catch (e) {
        return {status: "Failed", message:"Something went wrong"};
    }

}

module.exports = {
    wishListService,
    createWishListService,
    removeWishListService
}