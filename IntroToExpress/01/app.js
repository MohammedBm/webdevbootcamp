var express = require("express");

var app = express();




// "/" => "Hi there!"
app.get("/", function(req,res){
    console.log("someone made a request to /home")
    res.send("Hi there!!");
})

//'/bye' => "Goodbye!~"
app.get("/bye", function(req,res){
    console.log("someone made a request to /bye")
    res.send("Goodbye!!")
})
//'dog' = > "Meow~~~~"
app.get("/dog",function(req,res){
    console.log("someone made a request to /dog")
    res.send("Meow~~~~~~")
})

app.get("/r/:subredditName",function(req,res){
    console.log("Someone made a request to /subreddit")
    var subreddit = req.params.subredditName;
    res.send("welcome to the " + subreddit.toUpperCase() +" Subbreddit")
})


app.get("/r/:subredditName/comments/:id/:title",function(req,res){
    
    console.log("Someone made a request to a Star")
    console.log(req.params)
    res.send("welcome to Comments")
})



app.get("*" , function(req,res){
    console.log("You made a request to a STAR")
    res.send("You are A star")
})
//tell express to listen for requests(start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!")
});