var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema
var MovieSchema = new Schema({
  name: String,
  releaseYear: Number,
  language: {
    type: String,
    enum: ["english", "tamil"],
    default: "english",
  },
  rating: Number,
  thumbnailUrl: String,
  posterUrl: String,
  plot: String,
  cast: String
});

exports.Movie = mongoose.model("Movie", MovieSchema);