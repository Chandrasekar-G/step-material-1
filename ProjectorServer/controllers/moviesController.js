var movies = require("./movieData"),
  model = require("../models/movieModel");

exports.getAllMovies = function(req, res, next) {
  return res.json(movies);
};

exports.addNewMovie = function(req, res, next) {
  var movie = req.body,
    new_movie = new model.Movie(movie);
  new_movie
    .save()
    .then(save_data => {
      return res.json({
        isSuccess: true,
        data: save_data
      });
    })
    .catch(err => {
      return res.json({
        isSuccess: false
      });
    });
};

exports.getMovieDetails = function(req, res, next) {
  console.log(req.params.movieName);
  return res.json({
    isSuccess: true
  });
};
