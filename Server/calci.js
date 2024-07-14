const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("HELLO WORLD"));

app.get("/about", (req, res) => res.send("WELCOME TO ABOUT US PAGE"));

app.get("/courses", (req, res) =>
  res.send("THIS IS THE BACKEND DEVELOPEMENT COURSE")
);

app.get("/calculator", (req, res) => res.sendFile(__dirname + "/index.html"));
app.post("/", function (req, res) {
  var n1 = Number(req.body.n1);
  var n2 = Number(req.body.n2);
  var result = n1 + n2;
  res.send("THE RESULT OF YOUR CALCULATIONS ARE :" + result);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});