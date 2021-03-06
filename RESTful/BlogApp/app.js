var bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    expressSanitizer= require("express-sanitizer"),
    mongoose        = require("mongoose"),
    express         = require("express"),
    app             = express();

//apps config
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine","ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

//mongoose model config
var blogSchema = new mongoose.Schema({
    title:      String,
    image:      String,
    body:       String,
    created:    {type:Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//create blog post test.
// Blog.create({
//     title:"Test Blog",
//     image:"http://www.photosforclass.com/download/14986371364",
//     body:"Hello this is a blog post"
// });

// title
// image 
// body
// created

//RESTFUL ROUTE

//home Route
app.get("/",function(req, res) {
    res.redirect("/blogs");
    console.log("Entered /");
});



///index Route
app.get("/blogs",function(req,res){
    Blog.find({},function(err,blogs){
        if(err){
            console.log("Error");
        }else{
            res.render("index", {blogs :blogs});
        }
    });
    
    console.log("Entered index.ejs");
});

//New Route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//Create Route
app.post("/blogs" , function (req,res){
    //create blog
    req.body.blog.body  = req.sanitize(req.body.blog.body)
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        }else{
            //then , redirect to index
            res.redirect("/blogs");
        }
    });
});

//show ROUTE
app.get("/blogs/:id" ,function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("show",{blog: foundBlog});
        }
    });
});


//EDIT Route
app.get("/blogs/:id/edit", function(req, res) {
    Blog.findById(req.params.id,function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        }else{
            res.render("edit",{blog:foundBlog});
        }
    });
});
///UPDATE Route
app.put("/blogs/:id",function(req,res){
    req.body.blog.body  = req.sanitize(req.body.blog.body)
    Blog.findByIdAndUpdate(req.params.id, req.body.blog , function(err,updatedBlog){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs/" + req.params.id);
        }
    });
});
//DELET Route
app.delete("/blogs/:id" , function(req, res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id , function(err){
        if(err){
            res.redirect("/blogs");
        } else{
            res.redirect("/blogs")
        }
    })
    //redirect somewhere
})




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is runing");
});



    
