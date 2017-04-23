var express = require("express");
var app = express();


//we dont write regular html files in express. 

app.get("/", function(req, res) {
    // ejs is embdid javscript
    res.render("home.ejs");
})


app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {
        thingVar: thing
    })
})


app.get("/posts", function(req, res) {
    var posts = [
        {title: "post 1",author: "Susy"},
        {title: "My adorable pet bunny",author: "Colt"},
        {title: "My cute cat looks awoseomee",author: "Mohammed"}
        ];
    
    res.render("posts.ejs", {posts:posts})
})

// /fallinlovewith/greycat
// /fallinlovewith/white








app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!!")
});
