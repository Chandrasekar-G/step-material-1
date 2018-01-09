
// function getMovieDetails() {
  $.ajax({
    url: "https://api.myjson.com/bins/1g0utf",
    success: function(result) {
      console.log('success  : ' , result)
      let movie=result[1];
      $('#movie-title').text(movie.name);
      $('.movie-img img').attr('src',movie.posterUrl);
      $('#movie-type').text(movie.releaseYear + " " +movie.language);
      $('.plot-block').text(movie.plot);
      let cast=movie.cast.split(",");
      $('.cast-list').empty();
      cast.forEach(function(name){
        $('.cast-list').append('<li>'+name+'</li>');
      });
    },
    error: function() {
      window.alert('Some error occurred');
    }
  });
// }
