var experss = require('express');
var app = experss();

app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(4000, function () {
    console.log("sever da hoat dong");
    console.log("http://localhost:4000/");
});

app.get("/", function (req,res) {
  
    res.render("homepage");
    // res.send("aaaaaaaaaaaaa");
});