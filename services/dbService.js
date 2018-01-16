var mongoose = require("mongoose");
var db = mongoose.connection;

exports.createConnection = function() {
  mongoose.connect("mongodb://localhost/projector");
};

db.on("error", function() {
  console.log("Some error while connecting to DB");
});

db.once("open", function() {
  console.log("We're connected");
});