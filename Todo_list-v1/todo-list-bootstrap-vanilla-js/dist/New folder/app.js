const express = require('express');
const bodyParser = require('body-parser');
// const date = require(__dirname + "/date.js");
let item = ["Buy Food","Cook Food","Eat Food"];
const cors = require('cors');
let workItems = [];
const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cors())

app.get("/current", function (req,res) {
var day = req.query.date;
var month = req.query.month;
var year = req.query.year;
res.render("list",{day:day,newlistitem:item, month:month, year:year});
});
app.get("/login", function (req,res) {
      res.sendFile(__dirname + "/public/login/login.html")
});
// app.post("/current",function (req,res) {
// item = req.body.todoitem;
// item.push(item);
// res.redirect("/")
// });

// app.get("/work",function (req,res) {
//       res.render("list",{listTitle:"work List",newlistitem:workItems});
// });

// app.get("/about",function (req,res) {
//       res.render("about");
// });
app.get("/", function (req,res) {
  res.sendFile(__dirname + "/public/index.html")
});
// app.get("/date", function (req,res) {
//   var date = req.query.date;
//   res.send(`http://localhost:3000/current?date=${date}`);
// });
// app.post("/work",function (req,res) {
//    let item = req.body.todoitem;
//    workItems.push(item);
//    res.redirect("/work")
//  });

app.listen(3000,function () {
 console.log("server started on port 3000");
});
