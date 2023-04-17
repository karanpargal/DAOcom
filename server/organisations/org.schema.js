const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orgSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Organisation", orgSchema);