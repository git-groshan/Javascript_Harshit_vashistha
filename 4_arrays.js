// similar to python list , indexing is there , mutable , non-primitive data type 
// primitive dtata types are mutable
// Array is ordered collection of items  
// WHENEVER WE CREATE AN ARRAY IT RETURNS THE ADDRESS OF FIRST BLOCK WHICH WE STORE IN NAME OF ARRAY 
// Array is a reference type i.e Object 
let arr = [1,2,"Roshan" , undefined , null ,"string" ]
console.log(arr);
arr[0]="roshan"
console.log(arr)
console.log(typeof arr) // object
console.log("to check whether object is arr"+Array.isArray(arr));

let obj = {}; // this is also an object literal
// Arrays methods 
//push() --> add element at end in array
arr.push("last_added_item");
console.log(arr);
//pop()-> removes and returns the last element in array
console.log("removing last element "+arr.pop()); // removes last element and return
console.log(arr);
console.log("removing 2nd index ele but removes last element "+ arr.pop(2));// but it removing the last element 
// pop() takes no argument
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
// means whatever changes done in either of a1 and a2 it will be reflected in both
// a1 and a2 both having same address of array to which they are pointing so whatever changes happens in array it will be reflected by both a1 and a2 as they pointing to same memory address 
console.log("a1 is " , a1);
console.log("a1 is " , a2);
a1.push("item 3");
console.log("a1 is " , a1);
console.log("a1 is " , a2);
console.log("checking if both are same using ===" , a1===a2);
let array1 = [1,2,3] // new array object is created and array1 variable has address to that object 
let array2 = [1,2,3] //new array object is created and array2 variable has address to that object 
console.log(array1 === array2) // false as they pointing to different array , value stored in arrays is same but there are 2 different array in memory

// clone array using slice method 
let a3 = a1.slice(0); // returns a new array satrting from 0 index to end 
console.log("checking if a1 and a3 both are same using ===" , a1===a3);

// clone array using concat method 
let a4 = [].concat(a1); // in an empty array concat it with a1 
console.log("checking if a1 and a3 both are same using ===" , a1===a4);
// clone array using spread operator i.e ... triple dot 
console.log("creating new arrya using spread operator ")
let a5=[...a1]; // in empty array [] copies the element of a1 array 
console.log(a5 , a1===a5);
let a6=a1.slice(0).concat(["item4 " , "item5" , "item6"]); // array 1 is cloned also some extra item added through concat method
console.log(a6);
let a7 = [].concat(a1 , a2 , ["n1" , "n2"]); // in empty array [] , concated it with a1 , a2 and ["n1","n2"]
console.log(a7);


let a8=[...a1 , ...a4, "n1 ",'n2' , "n3"]; // in [] spreaded it with a1 , a4 and some extra items are added 
console.log("a8 is " , a8);

// for loop in array 
console.log("For loop in array ");
let number = [1 , 2 , 4 , 5, ,67 , 1525 ,9171];
console.log("traditional for loop ");
for(let i=0;i<number.length;i++){
    console.log(number[i]);
}

// using const keyword for creating array 
console.log("using const keyword for creating the array ");

const name=["Roshan" , "Kumar" , "Gupta"]; // here name stores the address of the array object which is stored in heap 
console.log(name);
name.push("Rohan"); // valid as we are not changing the address stored in variable name 
console.log(name); // valid a
// since we are not changing the address stored in name variable 
// name = [11,"jsjds"] // this will lead to array as we are assinging the new address in name variable 
// if we have used let insted of const then we can easily modify the address stored in name 
//  WE SHOULD USE CONST FOR CREATING ARRAY AS WE DON'T WANT OUR VARIABLE TO POINT OTHER ARRAY 

// for of loop 
console.log("for of loop in fruits "); // iterator is used in for of loop 
const fruits=["mango " , "banana" , "sev" , "avacado"];
for(let fruit of fruits) console.log(fruit);// similar to for in loop in python 

// for in loop  iterates on indices of array
console.log("for in loop in array")
for(let index in fruits) console.log(index , "val is " , fruits[index]);

// array destructuring 
console.log("array destructuring ");
const myarr=["val1" , "val2" , "val3"];
let v1 = myarr[0];
let v2 = myarr[1];
console.log(v1 , v2 )

let [var1 , var2]=myarr; // array destructured  var1 = myarr[0] , var2 = myarr[1]
// we can use var1 , var2 as normal variable as it is declared by let 
console.log(var1 , var2);
let [myvar1 , ,myvar2]=myarr; // array destructured  myvar1 = myarr[0] , myvar2 = myarr[2]
console.log(myvar1 , myvar2);

let [n1 , n2 , ...restnum]=number;
console.log(n1 , n2 , restnum);






