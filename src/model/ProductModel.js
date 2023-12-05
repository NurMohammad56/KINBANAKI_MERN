const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
    {
        title: {type: String},
        shortDes: {type: String},
        price: {type: String},
        discount: {type: Boolean},
        discountPrice: {type: String},
        img: {type: String},
        star: {type: String},
        stock: {type: Boolean},
        remark: {type: String},
        categoryID: {type: mongoose.Schema.Types.ObjectId, required:true},
        brandID: {type: mongoose.Schema.Types.ObjectId, required:true},
    },
    {timestamps:true, versionKey:false}
)

const productModel = mongoose.model("products", dataSchema)
module.exports = productModel;