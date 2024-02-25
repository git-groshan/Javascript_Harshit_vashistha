// function definition using function keyword
/* // syntax-
function fun_name(){
    // fun definition and return statement 
}

*/
function printHBD(){
    console.log("Happy Birthday to you");
}
//function call
printHBD();

// function Expression means assigning funtion in a variable 
/*
const/let/var  = function(){ 
    // code of funcion 
}
*/
const showHBd = function(){
    console.log("Happy Birthday to you");
}

showHBd(); // to call function expression variable_name()

function add(a,b){
  //  console.log(a+b);
  return a+b;
}
let sum=function(a , b){
    return a+b;
};

let a = add(2,4);
console.log(add()); //NaN-> Not a Number 
console.log(undefined + undefined)//NaN-> Not a Number 
console.log( 2 + undefined)//NaN-> Not a Number 

function isEvenOrOdd(num){
    return num&1?"Odd":"Even";
}
console.log(isEvenOrOdd(1827));


var checkEvenOdd = function(num){
    return num&1?"odd":"even";
};

function isInArray(arr , target){
    for(let i in arr) 
        if(arr[i]===target) return i;

    return -1
};
const nums=[1,2,,3,4];
console.log(nums[2])
console.log(isInArray(nums, undefined));
console.log(isInArray(nums, 1));

const findTarget=function(arr , tg){
    for(let i in arr) // for in loop iterates on idx of array
        if(arr[i]===tg) return i;
    return -1;
}
console.log(findTarget([1,2,3,4], 3));

// function Expressions -- assigning function in a variable 
/**
 syntax-
 const/let/var var_name = function(){
     // fun definition and return statement 
 }
 */
const greet = function(){
    console.log("hello");
}
// function call
greet();

console.log("####### ARROW FUNCTION IN JS ######");

//function def function expression to arrow function 
function printHW(){
    console.log("Hello World");
}
console.log("using Normal function def ")
printHW();
// function expression 
const sayHw = function(){
    console.log("Hello World");
}
console.log("using Normal function expression ")
sayHw();
console.log("to convert a fun experesion to arrow function just remove the function keyword and add => after ()")
//Arrow function 
const greetHW = ()=>{
    console.log("Hello world")
}
console.log("using arrow  function  ")

const add3 = (n1 , n2 , n3 )=>{
    return n1 + n2 + n3 ;
}
console.log(add3(1,2,2))
const isEvenArrow = (numb)=>{
    return numb&1===0?"even":"odd";
}
console.log(isEvenArrow(29372))



const findTargetArrow=(arr , tg)=>{
    for(let i in arr)
        if(arr[i]===tg) return i;
    return -1;
}
console.log(findTargetArrow([1,2,3,4], 3));

console.log("If in arrow function only one param is there then we can skip the () braces ");

const isOdd = n => n&1; // this is a arrow fun with one arg

// hoisting : calling funtion before declaring it . It works ony in case of traditional function declaration

hello(); // function called before declaring/defining  it 
function hello(){
    console.log("hello world");
}
// if we try to use a varibale before declaring it , then in case of varibale defined using var will not give an error but let and const would give it 
// console.log(var_variable) // also givibg error don't know why?
// var_variable=" this is var_variable";
// console.log(var_variable)
// console.log(let_variable) // error 
// let let_varible="this is let_variable ";


//func inside func
// these func can only run inside the fucntion 

console.log("function inside func");

const app = ()=>{
    console.log("Inside app function ")
    const app_inside = ()=>{
       console.log(" inside app_inside function ") ;
    }
    const addition = (n1, n2 )=> n1+n2;

    const mul=(n1,n2)=> n1*n2;
    app_inside(); // it can only be called inside app() because it is defined inside it so it's scope is inside this function 
    console.log(addition(2,4)); // only called inside app
    console.log(mul(3,4)); // only called inside app function 
}

app();

// lexical scope - local varible gets preference instead of global variable if defined using same var name 

function myapp(){
    const myvar="val1";
    function myfun(){ // normal function 
        const myvar="val69";

        console.log("inside myfunc" , myvar);
    }

    const myfun2 = function(){ // function expression 
        function fun_in(){
            console.log("I'm in fun_in");
        }
    }

    const myfun3 = ()=>{} // arrow function 
    console.log(myvar);
}
myapp();

/**
 * Block scope vs Function Scope
 * let and const are block scope 
 * var is function/global scope 
 */

{
    let b1="block1";
}
{
    var b2="var inside block 2";
}
// console.log(b1);// Uncought reference 
console.log(b2);  // var varibale has global scope
let s1 = "student";
function student(){
    if(true){
        let s1 ="Rosham";
        var title = "Gupta"; // function scope 
        console.log(s1);
    }
    console.log(s1); // student
    console.log(title);
}
// console.log(title); 
student();

// Default Paramteres 
function add2(a , b){
    if(typeof b === "undefined"){
        b=0;
    }
    return a+b;
}
function addTwo(a, b=0){
    return a+b;
}
const sum2=(n1, n2 =0)=> n1+n2;
console.log(sum2(2,3));


// rest parametres  --> always an array
function addnNum(a, b ,c ,d){
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(`c is ${c}`);
}
addnNum(1,2,3,4,5,6);// only first 3 will be printed 

function restParam(a , b , ...c){ // 
    console.log(`a is ${a}`);
    console.log(`b is ${b}`);
    console.log(c);
    console.log(Array.isArray(c));
    console.log(`c is ` , c);
}
restParam(11,22,undefined,3,7,3,4,2,true, NaN,null);


const addAll = (...nums)=>{
    let sum=0;
    for (let num of nums){
        sum+=num;
    }
    return sum;
}

console.log(addAll(1,2,3,4,5));

// Param Destructuring ---> generally used with Obj

const Person={
    firstName:"Harshit",
    gender:"male"
}

function getDeatis(Obj){
    console.log(Obj.firstName);//Harshit
    console.log(Obj.gender); // male
    console.log(Obj.age); // undefined
}
function getDetails({firstName , gender , age}){
    console.log(firstName);
    console.log(gender);
    console.log(age)
}


// call back function -- function passed as a argument to other function 

function myFunc(a){  // a can be anything array , string , obj  , function 
    console.log(a);
    console.log("hello world")
}


function call_back(a){ // function taking function as an argument
    a()
}
call_back(myFunc);  // this is call back 


// function Returning Function 

function fun_returning_fun(){
    function fun_inside(){
        console.log("I'm inside a fun");
    }
    return fun_inside;
}
const ans = fun_returning_fun();
ans();

// another way of writing function returning function 
function myFunc(){
    return function(){ return "this is fun returting fun"};
}


