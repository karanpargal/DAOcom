const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bountySchema = new Schema({
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
  rewards: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
    required: true,
  },
});

module.exports = mongoose.model("Bounty", bountySchema);