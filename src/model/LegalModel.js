const mongoose = require("mongoose");
const dataSchema = mongoose.Schema(
  {
    description: { type: String, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);
const legal = mongoose.model("legal", dataSchema);
module.exports = legal;
