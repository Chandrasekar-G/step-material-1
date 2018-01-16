var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema
var MovieSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number,
    required: true
  },
  language: {
    type: String,
    enum: ["english", "tamil"],
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  thumbnailUrl: {
    type: String,
    required: true
  },
  posterUrl: {
    type: String,
    required: true
  },
  plot: {
    type: String,
    required: true
  },
  cast: {
    type: String,
    required: true
  }
});

exports.Movie = mongoose.model("Movie", MovieSchema);
