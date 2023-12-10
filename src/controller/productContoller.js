const {
    brandListService, categoryListService,
    sliderListService, listByBrandService, listByCategoryService, listBySimilarService,
    listByKeywordService, listByRemarkService, productDetailsService, productReviewListService
} = require("../services/productServices")

exports.brandList =async ()=>{
    let result = await brandListService();
    return re.status(200).json(result)
}

exports.categoryList =async  ()=>{
    let result = await categoryListService();
    return re.status(200).json(result)
}

exports.sliderList =async ()=>{
    let result = await sliderListService();
    return re.status(200).json(result)
}

exports.listByBrand =async ()=>{

}

exports.listByCategory =async ()=>{

}

exports.listBySimilar =async ()=>{

}

exports.listByKeyword =async ()=>{

}

exports.listByRemark =async ()=>{

}

exports.productDetails =async ()=>{

}

exports.productReviewList =async ()=>{

}


