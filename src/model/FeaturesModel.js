const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    des: { type: String, required: true },
    img: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const featureModel = mongoose.model("features", dataSchema);
module.exports = featureModel;
