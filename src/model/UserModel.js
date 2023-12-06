const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
    {
        email: {type: String, unique:true, required:true, lowercase:true},
        otp: {type: String, required:true},
    },
    {timestamps:true, versionKey:false}
)

const userModel = mongoose.model("users", dataSchema);
module.exports = userModel;