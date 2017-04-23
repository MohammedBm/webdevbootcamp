var faker = require('faker');

// function times(number){
//     for(var i = 0 ; i <number ; i++){
//         console.log(faker.fake("{{commerce.productName}}, - ${{commerce.price}} "));
//     }
// }

// times(10)

// different way of 

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties
// console.log(randomName + "- "+ randomEmail)
//
var randomProduct= faker.commerce.productName();
var randomPrice= faker.commerce.price();

console.log(randomProduct +" - $"+ randomPrice)

    for(var i = 0 ; i <10 ; i++){
        console.log(faker.commerce.productName() +" - $"+ faker.commerce.price())
    }
