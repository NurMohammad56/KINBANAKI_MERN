const CartModel = require("../model/CartModel");
const mongoose = require("mongoose");
const ObjectID = mongoose.Types.ObjectId;

const cartListService = async (req) => {
    try {
        let user_id=new ObjectID(req.headers.user_id);
        let matchStage={$match:{userID:user_id}}

        let JoinStageProduct={$lookup:{from:"products",localField:"productID",foreignField:"_id",as:"product"}}
        let unwindProductStage={$unwind:"$product"};

        let JoinStageBrand={$lookup:{from:"brands",localField:"product.brandID",foreignField:"_id",as:"brand"}}
        let unwindBrandStage={$unwind:"$brand"};


        let JoinStageCategory={$lookup:{from:"categories",localField:"product.categoryID",foreignField:"_id",as:"category"}}
        let unwindCategoryStage={$unwind:"$category"};



        let projectionStage={$project:{
                '_id':0,'userID':0,'createAt':0,'updatedAt':0, 'product._id':0,
                'product.categoryID':0,'product.brandID':0,
                'brand._id':0,'category._id':0,
            }
        }



        let data=await CartModel.aggregate([
            matchStage,
            JoinStageProduct,
            unwindProductStage,
            JoinStageBrand,
            unwindBrandStage,
            JoinStageCategory,
            unwindCategoryStage,
            projectionStage
        ])


        return {status:"success",data:data}

    }catch (e) {
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
        let user_id = req.headers.user_id;
        let reqBody = req.body;
        reqBody.userID = user_id;

        await CartModel.deleteOne(reqBody);
        return {status:"Success",message:"Cart list removed successful"}
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