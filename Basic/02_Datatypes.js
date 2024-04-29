"use strict";//treat all js code as newer version

//alert("Hello") // we are using node js not browser so we cannot use this 

console.log(3+3)

// use mdn and tc39 for documentation 

let name= "Hitesh" //Stringg
let age = 3 //Integer
let isLoggeding = true // Boolean


//number => 2 to power 53 range
//bigint => 
//String // we can use it within single or double quotes
// Boolean = true/false
//null =>it is a stand alone value it is a representaion of empty value
//undefined  => value not assigined
//symbol => is for unique

//object 

console.log(typeof null); //shows type of variable or value
console.log(typeof undefined);

//javaScript is dynamically typed language

// ******Primitive (call by value)*****
// are call by value
//7 types
// String
// Number
// Blooean
// Null
// Undefined
// BigInt
// Symbol


// Number
const score = 100
const ScoreValue = 100.3

//Boolean
const isLoggeing =false

// Null
const outsideTemp = null

// Undefined
let userEmail;

//String
const namee ="Chakru"

//Symbol
const id = Symbol('1233')
const anotherId = Symbol('1233')
console.log(id === anotherId);

//BigInt
const bigNumber = 123213131231212336278638726n



//*** Reference(Non Primitive) */
// Array , Object, Functions


//Array
const heros = ["Hulk","doga","thor"]

//Object
let myobj =
{
    nameee:"chakru",
    age:22,
}

//function
const myFunction = function(){
    console.log("Hello world");
}



