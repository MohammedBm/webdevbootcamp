var express = require("express");

var app = express();


app.get("/",function(req,res){
    res.send("Hi there, welcome to my assignment!")
})

// app.get("/", function(res,res){
//     console.log("someone made a request to /home")
//     res.send("Hi there!!");
// })

app.get("/speak/:animalName",function(req,res){
    var sounds  = {
        pig:"oink",
        wolf: "woof woof",
        cow: "MOW",
        cat:"I hate you human",
        goldfish:"...."
    }
    var animal = req.params.animalName.toLowerCase();
    var sound = sounds[animal];

    res.send("The "+ animal + " says " + "'" +sound+"'")
})


// app.get("/speak/pig",function(req,res){
//     console.log("someone made a request to pig")
//     res.send("The pig saya OInok")
// })

// app.get("/speak/wolf",function(req,res){
//     console.log("someone made a request to Wolf")
//     res.send("The wolf saya WOOF WOOF")
// })

// app.get("/speak/cow",function(req,res){
//     console.log("someone made a request to Cow")
//     res.send("The cow saya MOWMOW")
// })


app.get("/repeat/:subName/:repeat",function(req,res){
    console.log("Someone made a request to SUbNAME")
    var subName = req.params.subName;
    var count = req.params.repeat;
    // res.send(subName.repeat(count)) //=> method 1
    var result = ""; // => method 2
    
    for(var i =0 ; i<count; i++){
        result+= subName + " ";
    }
    res.send(result)
})

app.get("*",function(req,res){
    console.log("Someone made a request to star")
    res.send("Sorry , page not found ... .what are you doing with your life")
})






app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!")
});