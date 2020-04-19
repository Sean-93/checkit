const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CheckitSchema = new Schema({
  username: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
  updated: {
    type: Date,
    default: Date.now,
  },
  comments: {
    type: String,
    trim: true,
  },
  url: {
    type: String,
    trim: true,
  },
  totalVotes: { type: Number, default: 0 },
  useful: { type: Number, default: 0 },
  interesting: { type: Number, default: 0 },
  unusual: { type: Number, default: 0 },
});

const Checkit = mongoose.model("Checkit", CheckitSchema);

module.exports = Checkit;
