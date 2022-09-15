const express = require('express');
const bodyParser = require('body-parser');
// const date = require(__dirname + "/date.js");
let item = ["Buy Food","Cook Food","Eat Food"];
const cors = require('cors');
let workItems = [];
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use("/public", express.static(__dirname+ "/public"));
app.use(cors())

app.get("/current", function (req,res) {
var day = req.query.date;
var month = req.query.month;
var year = req.query.year;
res.render("list",{day:day,newlistitem:item, month:month, year:year});
});
app.get("/", function (req,res) {
      res.sendFile(__dirname + "/public/login/login.html")
});

app.get("/login", function (req,res) {
  res.sendFile(__dirname + "/public/calender/index.html")
});

app.listen(3000,function () {
 console.log("server started on port 3000");
});
