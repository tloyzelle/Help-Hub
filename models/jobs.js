const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String},
  payment: { type: String},
  description: {type: String},
  date: { type: Date, default: Date.now()},
  contact: {type: String},
  location: {type: String},
  user: {type: String}
});

const Gig = mongoose.model("Job", jobSchema);

module.exports = Gig;
