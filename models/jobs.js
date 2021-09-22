const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  payment: { type: Number, required: true },
  description: {type: String, required: true},
  date: { type: Date, required: true}
});

const Gig = mongoose.model("Job", jobSchema);

module.exports = Gig;
