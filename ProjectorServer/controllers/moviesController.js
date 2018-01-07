var movies = require("./movieData"),
  model = require("../models/movieModel"),
  STATUS_CODE = require("../constants/statusCodes").STATUS_CODE;

exports.getAllMovies = function(req, res, next) {
  try {
    var movieModel = model.Movie;
    movieModel
      .find()
      .exec()
      .then(resp => {
        res.json({
          isSuccess: true,
          data: resp
        });
      })
      .catch(err => {
        res.json({
          isSuccess: false,
          error: STATUS_CODE.SERVER_ERROR
        });
      });
  } catch (err) {
    res.json({
      isSuccess: false,
      error: STATUS_CODE.SERVER_ERROR
    });
  }
};

exports.addNewMovie = function(req, res, next) {
  var movie = req.body;
  new_movie = new model.Movie(movie);
  try {
      if (!new_movie.name || !new_movie.releaseYear || !new_movie.language ||
    !new_movie.rating || isNaN(new_movie.releaseYear) || !new_movie.thumbnailUrl ||
    !new_movie.posterUrl || !new_movie.plot || !new_movie.cast || isNaN(new_movie.rating)) {
    res.json({
      isSuccess: false,
      error: STATUS_CODE.INSUFFICIENT_PARAMS
    });
  }
    
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
          isSuccess: false,
          error: STATUS_CODE.DB_ERROR
        });
      });
  } catch (err) {
    res.json({
      isSuccess: false,
      error: STATUS_CODE.SERVER_ERROR
    });
  }
};

exports.getMovieDetails = function(req, res, next) {
  try {
    var movieModel = model.Movie;
    movieModel
      .find({ name: req.params.movieName })
      .exec()
      .then(resp => {
        if (resp.length > 0) {
          res.json({
            isSuccess: true,
            data: resp[0]
          });
        } else {
          res.json({
            isSuccess: false,
            error: STATUS_CODE.MOVIE_NOT_FOUND
          });
        }
      })
      .catch(err => {
        res.json({
          isSuccess: false,
          error: STATUS_CODE.SERVER_ERROR
        });
      });
  } catch (err) {
    res.json({
      isSuccess: false,
      error: STATUS_CODE.SERVER_ERROR
    });
  }
};
