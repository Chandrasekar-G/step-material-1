var mongoose = require("mongoose");
var db = mongoose.connection;

exports.createConnection = function() {
  mongoose.connect("mongodb://sirius:password@ds257627.mlab.com:57627/step-projector-app");
};

db.on("error", function() {
  console.log("Some error while connecting to DB");
});

db.once("open", function() {
  console.log("We're connected");
});