const moment = require("moment");
const data = require("./sampleApplication.json");
const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home", {
    text: "Hello world",
  });
});

app.listen(3000, function () {
  console.log("listening to port 3000");
});
