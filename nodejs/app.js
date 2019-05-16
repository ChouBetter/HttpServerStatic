var express = require("express");
var app = express();
app.get("/", function(req, res) {
  res.redirect("/index.html");
});
app.use(express.static(__dirname + "/www"));
app.listen(3000);
console.log("Listening on port 3000");
