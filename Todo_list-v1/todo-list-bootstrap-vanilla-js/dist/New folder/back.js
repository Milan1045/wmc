const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cors());
app.get("/", function (req,res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function (req,res) {
  res.json({day: day});
});

app.get("/current", function (req,res) {
  var day = req.query.date;
  console.log(day);
  res.sendFile(__dirname + "/public/todo/todolist.html");
});
app.listen(3000,function () {
 console.log("server started on port 3000");
});
