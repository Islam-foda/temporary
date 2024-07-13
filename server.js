var express = require("express");
var routernotes = require("./route/noteroute");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server Started ........");
});

app.use("/api/v1", routernotes);

app.listen(3000, () => {
  console.log("Server Started .......");
});
