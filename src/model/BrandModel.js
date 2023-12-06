const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
    {
        brandName: {type: String, unique: true, required:true},
        brandImg: {type: String, unique: true},
    },
        {timestamps:true, versionKey:false}
)

const brandModel = mongoose.model("brands", dataSchema)
module.exports = brandModel;