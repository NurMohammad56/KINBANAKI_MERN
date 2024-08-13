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

// const legalService = async (req) => {
//   console.log("hello world");
// };

module.exports = {
  featuresListService,
  legalService,
};
