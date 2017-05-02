var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    breed: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB


// var gorge = new Cat({
//     name:"Windy",
//     age: 2,
//     breed: "British shorthair"
// });


// gorge.save(function(err,cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG")
//     }else{
//         console.log("WE JUST SAVED A CAT TO THE DATABASE:")
//         console.log(cat);
//     }
// });



Cat.create({
    name:"Lucy",
    age: 3,
    breed:"American"
    }, function(err,cat){
        if(err){
            console.log("OH no error");
            console.log(err);
        }else{
            console.log(cat)
        }
});


// retrive all cats from the DB and console.log each one

Cat.find({},function(err,cats){
    if(err){
        consolg.log("OH no ERRRORR!!!")
        console.log(err)
    }else {
        console.log("ALL the CATS,,,");
        console.log(cats)
    }
})