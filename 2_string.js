"use strict";
console.log(" STRING IN JAVASCRIPT");
// strings are immutable 
let newName="Roshan Kumar Gupta";
// string is 0 based indexing
console.log("my new name is " + newName[4]);
console.log(` length of string is ${newName.length}`)

console.log("Methods in string")
console.log(" trim() removes left and right space ");
// toUpperCase , toLowerCase , slice -- all string function return new strings 
let lastName=newName.slice(newName.length-5 , newName.length);
console.log(lastName)


console.log("typeof Operator shows type of operator");
let my_num=20;
let my_string="string";
console.log(typeof my_num , typeof my_string)
// int to string
console.log(typeof (my_num + ""));
// string to int
let my_num_string="34";
let my_num_string2= +"34";
console.log(typeof my_num_string)
console.log(typeof my_num_string2)
console.log(typeof +my_num_string)

// typecast
let age = "22"
console.log(typeof age)
age=Number(age)
console.log(typeof age)
age=String(age)
console.log(typeof age)

// concatenation of string using + operator 
let name="Roshan"
let umar=22
console.log(`my name is ${name} and age is ${umar}`); // string templates
let num1 = "17";
let num2 = "10";
console.log(num1 + num2); // 1710 string concatination
console.log(+num1 + +num2); // 27 addition of 2 numbers 




