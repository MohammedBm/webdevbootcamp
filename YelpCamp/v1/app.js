var express = require("express");
var app = express();
var bodyParser = require("body-parser")

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended:true}))

var campgrounds = [{
        name: "The Withered Hills",
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"
    },, {
        name: "Fatilt Tips",
        image: "https://farm9.staticflickr.com/8572/16034357695_5ca6214f59.jpg"
},{
        name: "The Withered Hills",
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"
    }, {
        name: "Fatilt Tips",
        image: "https://farm9.staticflickr.com/8572/16034357695_5ca6214f59.jpg"
},{
        name: "The Withered Hills",
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"
    }, {
        name: "Fatilt Tips",
        image: "https://farm9.staticflickr.com/8572/16034357695_5ca6214f59.jpg"
},{
        name: "The Withered Hills",
        image: "https://farm2.staticflickr.com/1363/1342367857_2fd12531e7.jpg"
    }, {
        name: "Fatilt Tips",
        image: "https://farm9.staticflickr.com/8572/16034357695_5ca6214f59.jpg"
}]

app.get("/", function(req, res) {
    res.render("landing")
})


app.get("/campgrounds", function(req, res) {

    res.render("campgrounds", {
        campgrounds: campgrounds
    });
})

app.post("/campgrounds", function(req,res){
   // get data from form
   var name = req.body.name;
   var image  = req.body.image;
   var newCampground = {name:name, image:image}
   campgrounds.push(newCampground)
   //redierct to campgrounds page
   res.redirect("/campgrounds")
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs")
})



app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp Server Has Started")
})
