const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const grantSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  walletAddress: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Grant", grantSchema);