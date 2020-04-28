const express= require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/fruitDB', {useNewUrlParser: true, useUnifiedTopology: true});

const fruitSchema = new mongoose.Schema({
    name:  {
        type: String,
        required: [true, "Error: no name specified" ]
    },
       rating: {
           type: Number,
           min: 1,
           max: 10 
       }, 
    review: String 
});

const Fruit = mongoose.model("Fruit", fruitSchema);
const Person = mongoose.model('Person', personSchema);

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
})

/*const fruit = new Fruit({
   
    name: "Apple",
    rating: 11,
    review: "Sweet and crunchy"
});*/

/*const fruit = new Fruit({
    rating: 10,
    review: "Yummy"
});*/

/*const banana = new Fruit({
    name: "Banana",
    rating: 5,
    review: "Soft texture"
});*/

/*const lemon = new Fruit({
    name: "Lemon",
    rating: 5,
    review: "Sour as hell"
});*/

/*Fruit.insertMany([banana, lemon], (error=> {
    if(error) {
        console.log(err);
    }else {
        console.log("Fruits successfully added to the fruitDB");
    }
    
}
));
*/
/*
const orange = new Fruit({
    name: "orange",
    rating: 8
});

orange.save();

Fruit.find(function(error, fruits){
    if(error){
        console.log(error);
    } else {
        fruits.forEach(fruit => {
            console.log(fruit.name);
        });
    }
});
*/
/*
Fruit.update({_id:"5ea8292c1b22c01fecd25d61"}, {review:"Juicy fruit"},
function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Record successfully updated");
    }
});
*/
Fruit.deleteMany({name:"banana" && "orange"}, function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Item successfully deleted");
    }
})

/*
Person.updateOne({_id: "5ea81a56fdb99922b09b122d"}, {age: 30}, function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Record successfully updated");
    }
})
/*

/*
const person = new Person({
    firstName: 'John',
    lastName: 'Doe',
    age: 29
})

const person1 = new Person({
    firstName: "Tom",
    lastName: "Kelo",
    age: 21

});
const person2 = new Person({
    firstName: "Joe",
    lastName: "Reek",
    age: 32

});

Person.insertMany([person1, person2], (error=> {
    if(error) {
        console.log(err);
    }else {
        console.log("People successfully added to FruitDB");
    }
}
));
*/
/*
Person.find(function(error, people) {
    if(error){
        console.log(error);
    } else {
        //console.log(fruits);
        people.forEach(person => {
            console.log(person.firstName, person.lastName, person.age);
        });
 
    }
});
*/
//person.save();
//fruit.save();

app.listen(4040, ()=>{
    console.log("Server is running on port 4050");
});
