const brandModel = require("../model/BrandModel");
const categoryModel = require("../model/CategoryModel");
const productModel = require("../model/ProductModel");
const productSliderModel = require("../model/ProductSliderModel");
const productDetailModel = require("../model/ProductDetailModel");
const ReviewModel = require("../model/ReviewModel");


const brandListService = async ()=>{
        try{
            let data  =  await brandModel.find();
            return {status:"Success", data:data}
        }catch (e) {
            return {status:"Failed", data:e}
        }
}

const categoryListService = async ()=>{
    try{
        let data  =  await categoryModel.find();
        return {status:"Success", data:data}
    }catch (e) {
        return {status:"Failed", data:e}
    }
}

const sliderListService = async ()=>{
    try{
        let data  =  await productSliderModel.find();
        return {status:"Success", data:data}
    }catch (e) {
        return {status:"Failed", data:e}
    }
}

const listByBrandService = async ()=>{

}

const listByCategoryService = async ()=>{

}

const listBySimilarService = async ()=>{

}

const listByKeywordService = async ()=>{

}

const listByRemarkService = async ()=>{

}

const productDetailsService = async ()=>{

}

const productReviewListService = async ()=>{

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