var express     = require("express"),
    app         = express(),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}))
app.set("view engine", "ejs")


//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String
});


var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "Fatilt Tips",
//         image: "https://farm9.staticflickr.com/8572/16034357695_5ca6214f59.jpg",
//         description: "This is a huge Fatilt hill, no bathrooms. beatuiful tips and views."
//     }, 
    
//     function(err,campground){
//         if(err){
//             console.log(err)
//         } else {
//             console.log("NEWLY CREATED CAMPGORUND: ")
//             console.log(campground)
//         }
//     });


app.get("/", function(req, res) {
    res.render("landing")
})

//INDEX - show all campgrounds 
app.get("/campgrounds", function(req, res) {
    //get all campgounds from DB
    Campground.find({}, function(err,allCampgrounds){
       if(err){
           console.log("Error")
       } else{
            res.render("index", {campgrounds: allCampgrounds});
       }
        
    });
    
});


// CREATE - add a new campground to database
app.post("/campgrounds", function(req,res){
   // get data from form
   var name = req.body.name;
   var image  = req.body.image;
   var desc = req.body.description;
   var newCampground = {name:name, image:image, description:desc}
   //crate a new campground and save to Database
   Campground.create(newCampground,function(err, newlyCreated){
       if(err){
           console.log(err);
       }else{
           //redierct to campgrounds page
           res.redirect("/campgrounds")
       }
   })
});


//NEW - show form to craete a  new campgronund
app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs")
})

app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided ID
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            //render show template with that campground
            res.render("show", {campground: foundCampground});
        }
    });
})

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("YelpCamp Server Has StartÇÇed")
})
