const brandModel = require("../model/BrandModel");
const categoryModel = require("../model/CategoryModel");
const productModel = require("../model/ProductModel");
const productSliderModel = require("../model/ProductSliderModel");
const productDetailModel = require("../model/ProductDetailModel");
const reviewModel = require("../model/ReviewModel");
const mongoose = require("mongoose");
const objectId = mongoose.Types.ObjectId;


const brandListService = async ()=>{
        try{
            let data  =  await brandModel.find();
            return {status:"Success", data:data}
        }catch (e) {
            return {status:"Failed", data:e.toString()}
        }
}
const categoryListService = async ()=>{
        try{
            let data  =  await categoryModel.find();
            return {status:"Success", data:data}
        }catch (e) {
            return {status:"Failed", data:e.toString()}
        }
}
const sliderListService = async ()=>{
    try{
        let data  =  await productSliderModel.find();
        return {status:"Success", data:data}
    }catch (e) {
        return {status:"Failed", data:e.toString()}
    }
}



const listByBrandService = async (req)=>{
    try{
        let brandID = new objectId(req.params.brandID);
        let joinWithBrandStage = {$lookup: {from: "brands", localField:"brandID", foreignField:"_id", as:"brand"}}
        let joinWithCategoryStage = {$lookup: {from: "categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let unwindBrandStage = {$unwind: "$brand"};
        let unwindCategoryStage = {$unwind: "$category"};
        let projectionStage = {$project :{"brand._id":0, "category._id":0, "categoryID":0, "brandID":0}}
        let matchStage = {$match : {brandID: brandID}};


        let data = await productModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        return {status:"Success", data:data}
    }catch (e) {
        return {status:"Failed", data:e.toString()}
    }
}
const listByCategoryService = async (req)=>{
    try{
        let categoryID = new objectId(req.params.categoryID);
        let matchStage = {$match : {categoryID: categoryID}};
        let joinWithCategoryStage = {$lookup: {from: "categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let joinWithBrandStage = {$lookup: {from: "brands", localField:"brandID", foreignField:"_id", as:"brand"}}
        let unwindBrandStage = {$unwind: "$brand"};
        let unwindCategoryStage = {$unwind: "$category"};
        let projectionStage = {$project :{"brand._id":0, "category._id":0, "categoryID":0, "brandID":0}}


        let data = await productModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        return {status:"Success", data:data}

    }catch (e) {
        return {status:"Success", data:e.toString()}
    }
}
const listByRemarkService = async (req)=>{
    try{
        let remark =req.params.remark;
        let matchStage = {$match : {remark: remark}};
        let unwindBrandStage = {$unwind: "$brand"};
        let unwindCategoryStage = {$unwind: "$category"};
        let joinWithCategoryStage = {$lookup: {from: "categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let joinWithBrandStage = {$lookup: {from: "brands", localField:"brandID", foreignField:"_id", as:"brand"}}
        let projectionStage = {$project :{"brand._id":0, "category._id":0, "categoryID":0, "brandID":0}}


        let data = await productModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        return {status:"Success", data:data}

    }catch (e) {
        return {status:"Success", data:e.toString()}
    }
}


const listBySimilarService = async (req)=>{
    try{
        let categoryID = new objectId(req.params.categoryID);
        let matchStage = {$match : {categoryID: categoryID}};
        let limitStage = {$limit:20}
        let unwindBrandStage = {$unwind: "$brand"};
        let unwindCategoryStage = {$unwind: "$category"};
        let joinWithBrandStage = {$lookup: {from: "brands", localField:"brandID", foreignField:"_id", as:"brand"}}
        let joinWithCategoryStage = {$lookup: {from: "categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let projectionStage = {$project :{"brand._id":0, "category._id":0, "categoryID":0, "brandID":0}}


        let data = await productModel.aggregate([
            matchStage, limitStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        return {status:"Success", data:data}

    }catch (e) {
        return {status:"Success", data:e.toString()}
    }
}
const productDetailsService = async (req)=>{
    try{
        let productID = new objectId(req.params.productID);
        let matchStage = {$match : {_id: productID}};

        let joinWithBrandStage = {$lookup: {from: "brands", localField:"brandID", foreignField:"_id", as:"brand"}}
        let joinWithCategoryStage = {$lookup: {from: "categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let joinWithDetailStage = {$lookup: {from: "productdetails", localField:"_id", foreignField:"productID", as:"details"}}
        let unwindBrandStage = {$unwind: "$brand"};
        let unwindCategoryStage = {$unwind: "$category"};
        let unwindDetailStage = {$unwind: "$details"};

        let projectionStage = {$project :{"brand._id":0, "category._id":0, "categoryID":0, "brandID":0}}

        let data = await productModel.aggregate([
            matchStage,
            joinWithBrandStage,
            joinWithCategoryStage,
            joinWithDetailStage,
            unwindBrandStage,
            unwindCategoryStage,
            unwindDetailStage,
            projectionStage
        ])

        return {status:"Success", data:data}

    }catch (e) {
        return {status:"Success", data:e.toString()}
    }
}




const listByKeywordService = async (req)=> {
    try {
        let searchRegex = {"$regex":req.params.keyword, "$options":"i"};
        let searchKeyword = [{title:searchRegex}, {shortDes:searchRegex}];
        let searchQuery = {$or:searchKeyword}
        let searchMatch = {$match:searchQuery};

        let joinWithCategoryStage = {$lookup: {from: "categories", localField:"categoryID", foreignField:"_id", as:"category"}}
        let joinWithBrandStage = {$lookup: {from: "brands", localField:"brandID", foreignField:"_id", as:"brand"}}
        let unwindBrandStage = {$unwind: "$brand"};
        let unwindCategoryStage = {$unwind: "$category"};

        let projectionStage = {$project :{"brand._id":0, "category._id":0, "categoryID":0, "brandID":0}}

        let data = await productModel.aggregate([
            searchMatch,
            joinWithBrandStage,
            joinWithCategoryStage,
            unwindBrandStage,
            unwindCategoryStage,
            projectionStage
        ])

        return {status:"Success", data:data}



    }catch (e) {
        return {status:"Failed", data:e.toString()}
    }
}


const productReviewListService = async (req)=>{
    try{
        let productID =new objectId(req.params.productID) ;
        let matchingStage = {$match:{productID:productID}};
        let joinWithProfile = {$lookup: {from: "profiles", localField:"userID", foreignField:"userID", as:"profile"}}
        let unwindProfile = {$unwind:"$profile"};
        let projectStage = {$project:{"des":1, "rating":1, "profile.cus_name": 1}}



        let data =await reviewModel.aggregate([
            matchingStage,
            joinWithProfile,
            unwindProfile,
            projectStage
        ])
        return {status:"Success", data:data}
    }catch (e) {
        return {status:"Failed", data:e.toString()}
    }
}


module.exports = {
    brandListService,
    categoryListService,
    sliderListService,
    listByBrandService,
    listByCategoryService,
    listBySimilarService,
    listByKeywordService,
    listByRemarkService,
    productDetailsService,
    productReviewListService
}
