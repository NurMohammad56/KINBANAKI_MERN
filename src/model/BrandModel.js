const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
    {
        brandName: {type: String, unique: true, required:true},
        brandImg: {type: String},
    },
        {timestamps:true, versionKey:false}
)

const brandModel = mongoose.model("brands", dataSchema)
module.exports = brandModel;