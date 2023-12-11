const {
    brandListService, categoryListService,
    sliderListService, listByBrandService, listByCategoryService, listBySimilarService,
    listByKeywordService, listByRemarkService, productDetailsService, productReviewListService
} = require("../services/productServices")

exports.brandList =async (req, res)=>{
    let result = await brandListService();
    return res.status(200).json(result)
}
exports.categoryList =async  (req, res)=>{
    let result = await categoryListService();
    return res.status(200).json(result)
}
exports.sliderList =async (req, res)=>{
    let result = await sliderListService();
    return res.status(200).json(result)
}



exports.listByBrand =async (req, res)=>{
    let result = await listByBrandService(req);
    return res.status(200).json(result)
}
exports.listByCategory =async (req, res)=>{
    let result = await listByCategoryService(req);
    return res.status(200).json(result)
}
exports.listByRemark =async (req, res)=>{
    let result = await listByRemarkService(req);
    return res.status(200).json(result)
}


exports.listBySimilar =async (req, res)=>{
    let result = await listBySimilarService(req);
    return res.status(200).json(result)
}
exports.productDetails =async (req, res)=>{
    let result = await productDetailsService(req);
    return res.status(200).json(result)
}


exports.listByKeyword =async ()=>{

}





exports.productReviewList =async ()=>{

}


