const FeaturesModel = require("../model/FeaturesModel");
const LegalModel = require("../model/LegalModel");
const featuresListService = async () => {
  try {
    let data = await FeaturesModel.find();
    return { status: "success", data: data };
  } catch (e) {
    return { status: "fail", data: e }.toString();
  }
};

const legalService = async (req) => {
  try {
    let type = req.params.type;
    let data = await LegalModel.find({ type: type });
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Failed", data: e }.toString();
  }
};

module.exports = {
  featuresListService,
  legalService,
};
