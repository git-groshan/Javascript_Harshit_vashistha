// similar to python list , indexing is there , mutable , non-primitive data type 
// primitive dtata types are mutable 

// Array is a reference type i.e Object 
let arr = [1,2,"Roshan" , undefined , null ,"string" ]
console.log(arr);
arr[0]="roshan"
console.log(arr)
console.log(typeof arr)
console.log("to check whether object is arr"+Array.isArray(arr));

// Arrays methods 
arr.push("last_added_item");
console.log(arr);
console.log("removing last element "+arr.pop()); // removes last element and return
console.log(arr);
console.log("removing 2nd index ele but removes last element "+ arr.pop(2));// but it removing the last element 
// unshift - adds item at begining 
arr.unshift("first item");
console.log("arr after unshift " , arr);
arr.unshift("second first item");
console.log(arr);

// shift - removes element from starting and returns it
console.log(" first ele removed ", arr.shift());

// push , pop faster than shift unshift 


// Primitive and reference data type
// Primitive  - Eg string , integer (stored in stack )
let num1=6;
let num2 = num1;
console.log("value of num1 is ", num1);
console.log("value of num1 is ", num2);
num1++;
console.log("value of num1 is ", num1);
console.log("value of num1 is ", num2);

// Reference type - array

let a1=["item1 " , "item2"]
let a2 = a1; // both reference variable refers  to same array(stored in heap)

console.log("a1 is " , a1);
console.log("a1 is " , a2);
a1.push("item 3");
console.log("a1 is " , a1);
console.log("a1 is " , a2);
console.log("checking if both are same using ===" , a1===a2);

let a3 = a1.slice(0); // returns a new array 
console.log("checking if a1 and a3 both are same using ===" , a1===a3);

let a4 = [].concat(a1);
console.log("checking if a1 and a3 both are same using ===" , a1===a4);
console.log("creating new arrya using spread operator ")
let a5=[...a1];
console.log(a5 , a1===a5);
let a6=a1.slice(0).concat(["item4 " , "item5" , "item6"]);
console.log(a6);
let a7 = [].concat(a1 , a2 , ["n1" , "n2"]);
console.log(a7);


let a8=[...a1 , ...a4, "n1 ",'n2' , "n3"];
console.log("a8 is " , a8);


console.log("For loop in array ");
let number = [1 , 2 , 4 , 5, ,67 , 1525 ,9171];
console.log("traditional for loop ");
for(let i=0;i<number.length;i++){
    console.log(number[i]);
}

console.log("using const keyword for creating the array ");

const name=["Roshan" , "Kumar" , "Gupta"];
console.log(name);
name.push("Rohan");
console.log(name);

console.log("for of loop in fruits ");
const fruits=["mango " , "banana" , "sev" , "avacado"];
for(let fruit of fruits) console.log(fruit);// similar to for in loop in python 

console.log("for in loop in array")
for(let index in fruits) console.log(index , "val is " , fruits[index]);

console.log("array destructuring ");
const myarr=["val1" , "val2"];
let v1 = myarr[0];
let v2 = myarr[1];
console.log(v1 , v2 )

let [var1 , var2]=myarr;
console.log(var1 , var2);

let [n1 , n2 , ...restnum]=number;
console.log(n1 , n2 , restnum);






