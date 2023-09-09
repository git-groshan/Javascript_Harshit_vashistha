"use strict";
// declare a variable using var keyword
//JS is a flexible lang and forgiving 
var my_name ="Roshan";
console.log(my_name);
my_name="Roshan Kumar Gupta" // even if in case of var redeclaration of same variable is okay
console.log(my_name)

/*
Rules for naming var 
1. can't start with number
2. can use only _ or $ symbol in variable name 
3. can't use space 
4. start with small letter and camel case  Eg varName
*/

// Let keyword
// instead of var we can use let keyword
// in var redeclaration of varibal don't give error but let give
console.log("Let insted of var ");
let firstName="My first name is Roshan";
firstName="Kumar Gupta"
console.log(firstName)

// Declare constant  -- using const keyword
console.log(" Constant in JS")
const pi = 3.14
console.log(pi);

// undefined
let my_undefined;
console.log(typeof my_undefined , my_undefined);
let my_null = null;
console.log(typeof my_null , my_null);

console.log(typeof null);

//BigInt
console.log(Number.MAX_SAFE_INTEGER);

let big_num=BigInt(1827328268262826282628);
console.log(big_num)
let another_bigint=1028262916983728269263836n;// it is also a big Int
console.log(big_num + another_bigint)
// Big int can only +/-,/,* wiht big int only 


// boolean and comparision operator
let num1=5;
let num2 = 7;
console.log(num1 > num2)
console.log(num1 >= num2)
// ==(check only value) vs === (checks value and data type also )
let num3="7"
console.log(num2 == num3)
console.log(num2 === num3)

// != vs !== (similary check and data type)

//truthy(except falsy values ) and falsy values(false , "" , null , undefined , 0) 


let user_age=16;
if (user_age>=18){
    console.log("user can play game ")
}
else{
    console.log("user can play Mario")
}

// ternary operator 
let isEven = num1%2==0?true:false;
console.log(`${num1} is even or not : ${isEven}`)

// and or operator
if((num1 & 1) && (num2 & 1)){
    console.log( `${num1} ans ${num2} are odd`);
}
else {
    console.log( `${num1} ans ${num2} are not  odd`);
}


if((num1 & 1) ||  (num3 & 1)){
    console.log( `${num1} ans ${num3} anyone is odd`);
}
else {
    console.log( `${num1} ans ${num2} are not   odd`);
}



