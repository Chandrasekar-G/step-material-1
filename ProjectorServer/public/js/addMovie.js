$(function() {
    console.log("hii");
    $("#submit").click(function() {
        console.log("hiiii");
        console.log($("#add_movie_form").serialize());
        $.ajax({
                url: "http://localhost:3000/movies/add",
                type: 'post',
                dataType: 'application/json',
                data: $("#add_movie_form").serialize(),
                success: function(response) {
                    console.log(response);
                   window.location.href="http://localhost:3000/";
                   console.log("success");
                }
        });
    })
})