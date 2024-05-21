const FeaturesModel = require("../model/FeaturesModel");
const featuresListService = async () => {
  try {
    let data = await FeaturesModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

module.exports = {
  featuresListService,
};
