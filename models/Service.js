
const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
  name: String,
  description: String,
  user: String,
  userId: mongoose.Types.ObjectId,
  rating: Number,
  comments: [
    {
      user: String,
      comment: String,
      stars: Number
    }
  ]
});

module.exports = mongoose.model("Service", ServiceSchema);
