/**
 * callback should return something otherwise it will return undefined by default 
 * These below methods are only applicable on array 
 * For Each  - - -> applicable on array, accepts a call back i.e a function as argument and applied that function to each element of the array 
 * map - similar to forEach , takes callback as an arg and returns a new array after applying callback on each element of array 
 * filter
 * reduce
 * 
 */

const numbers = [12,2261,3,114,5]
function getIndexAndValue(num , idx){
    // console.log("index is :", idx);
    // console.log("num is : ", num*2)
    console.log(`index is ${idx} and value is ${num}`);
};

getIndexAndValue(numbers[0] , 0)
getIndexAndValue(numbers[1] , 1)
console.log("prints using normal for loop")
for(let i=0;i<numbers.length;i++){
    getIndexAndValue(numbers[i] , i);
}
console.log("prints uisng ForEach loop ")
numbers.forEach(getIndexAndValue); // arrayName.forEach(callback);

// we can pass call back funtion to arg itself

numbers.forEach(function(numb , idx){
    console.log(`numbser is ${numb} and idx is ${idx}`);
});

// how to think of forEach element

const users=[
    {firstName:"Roshan" , age:22},
    {firstName:"Ros" , age:22},
    {firstName:"Roan" , age:22},
    {firstName:"Rhan" , age:22}

]

users.forEach(function(user){
    console.log(user.firstName)
});

console.log("forEach loop using arrow fucntion ")
users.forEach((user)=>{console.log(user.firstName)})

// using for of loop for the same 
console.log("using for of loop")
for(let user of users){
    console.log(user.firstName);
}


// map method - similar to forEach loop 
console.log("MAP METHOD IN ARRAY");

// It is a array method and similar to forEach loop , takes a  fucntion/callback as an argument 
// It return a new array 
const cities=["Rome" , "Ballia" , "Rewari" , "VNS"];

const odd_even=[1,2,3,4,4,5,6,7]

const square = function(num){
    return num*num;
}

const newSqr = odd_even.map(square); // return value from call back function is stored in new array which is returned by map 
console.log(newSqr);//

const incr = odd_even.map(function(num){return num+1});

console.log(incr);
const is_odd = odd_even.map((num)=>{if(num&1) return num});
console.log(is_odd)


const firstname = users.map((user)=>{ return user.firstName})
console.log(firstname);

/**
 * Filter methods takes call back as an input and returns a new array 
 * fileter ka call back humesha boolean values ko hi return krna chahiye 
 */
console.log("FILTER METHOD IN ARRAY");

const isOdd= function (num){ return num&1}
const OddArray = numbers.filter(isOdd);
console.log(OddArray);


// Reduce method ---- takes a call back function and returns a new array 
// in the call back , we pass 2 args accumulator and currentValue
// we can initialise the value of accumulator then currentValue will point to first element ]
//if we don't initialise tha value of accumulator 
// intially accumulator points to first ele and currentValue points to 2nd 
// in second iteration - accumultaor values becomes the returned value in first iteration and currentValue points to the thirdeleme
// this repeats untill the currentValue goes out of Index 


const sum = numbers.reduce((accumulator , currentValue)=>{return accumulator + currentValue},0); // initialise accumulator value by 0

console.log(sum);


const userCart =[
    {prodcutId: 1 , prodcutName:"mobile" , price:120000},
    {prodcutId: 2 , prodcutName:"laptop" , price:12000},
    {prodcutId: 3 , prodcutName:"TV" , price:10000}

];

const carValue = userCart.reduce((totalCartValue,prod)=>{return totalCartValue + prod.price} , 0)
console.log("car value is " , carValue)


// sort method ---> changes the original array , and treats element as a string no matter waht type of data it is 
// sortes them on the basic of ascii value i.e on the basic of ascii value of chars 
// sort method can take a call back as an arguments 
//ASCII '0'=48 , '9'=57 , 'A'=65 , 'Z'=90 , 'a'=97 , z='122'
console.log("mubers array before sort",numbers);

numbers.sort();

console.log("numbers array after sort " , numbers);

usernames = ["Raci" ,"xyz","roas" ,"gajendra"];
usernames.sort();
console.log(usernames);

numbers.sort((a,b)=>a-b); // if a-b>0 (b,a) else (a,b) basis sorting 
console.log("Ascending Order ",numbers)
numbers.sort((a,b)=>b-a); // if a-b>0 (b,a) else (a,b) basis sorting 
console.log("Descending Order ",numbers)


const products = [
    {prodId:1 , prodName:"P1" , prodPrice:100},
    {prodId:2 , prodName:"P3" , prodPrice:200},
    {prodId:3 , prodName:"P3" , prodPrice:300},
    {prodId:4 , prodName:"P4" , prodPrice:400},
    {prodId:5 , prodName:"P5" , prodPrice:500}


]
// to avoid the original array changes copy it to another array using slice or spread operator 

const sortedLow2high = products.slice(0).sort((a,b)=>{a.prodPrice - b.prodPrice});
console.log(sortedLow2high)
console.log(products);

// find function -- takes call back as an argument and returns the first occurence ele

const animal=["Bear" , "lion" , "Gorrila" , "Dog" ,"cat"];
// function isLen3(s){
//     return s.length===3;
// };

// const len3Anima = animal.find(isLen3);

// console.log(len3Anima)
console.log(animal.find((st)=> st.length===3));
console.log(products.find((prod)=>prod.price===300));


// every methods -- takes input as a call back fun adn applied it to every ele
// every return true/false and also call_back 
// every function returns true only when the call_back condition is applied to every element returns true
// otherwise returns false

let isAllOdd = numbers.every((n)=> n&1)
console.log(isAllOdd)

let val = userCart.every((user)=>user.price<=30000);
console.log(val);
 
// some method -- checks if any ele  satifies the condition  returns true otherwise returns false;

console.log(numbers.some((n)=> (n&1)===0))

// fill method -- similar to list comprehension in python 
// args: ( value , startIdx , endIdx) // endIdx excluded
// It changes the original array 
const myarr = new Array(10).fill(-1); // [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
console.log(myarr);
myarr.fill(2 , 2 , 6); // [-1,-1,2,2,2,2,-1,-1,-1,-1,-1]
console.log(myarr);


// splice method - used to insert/delete items in between in an array
// start IDx , No of Item to be deleted from starting   , insert Item values to be inserted at last 
// array.splice(startIdx,NoOfItemsTobedeleted , insertedItem);
// splice method changes the original array 
const item = ["I1" , "I2" , "I3"];
console.log("before delete" , item)
// delete
let deleteItem = item.splice(1,2); // startIdx = 1 ,  delete 2 item from startIdx 
console.log("After delete" , item)
console.log("before Insert" , item);
item.splice(1,0,"insertedItem"); // insert at index 1
item.splice(3,0,"insertedItem"); // insert at index 1
console.log("After  Insert" , item);






