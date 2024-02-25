/**
 * Methods : are the function inside the object
 * It is accessible same as . operator 
 */

function personInfo(){
    console.log(`person name is ${this.name} and age is ${this.age}`);
}
const Person={
    "name":"Roshan",
    "age":8,
    // about:function(){
    //     console.log("this is kind of pointer/reference to current Object" , this)
    //     console.log(`name is ${Person.name} and age is ${Person.age}`)
    //     console.log(`name is ${this.name} and age is ${this.age}`)
    // } 
    //both about are similar  , cuz we don't need to have key value pair for a function . simply function definition is enough
    about(){
        console.log("this is kind of pointer/reference to current Object" , this); // Object is printed 
        console.log(`name is ${Person.name} and age is ${Person.age}`);
        console.log(`name is ${this.name} and age is ${this.age}`);
    }
    
};
const person3 = {
    "name":"Ranjan",
    "age":10,
    about:personInfo
}

Person.about();
person3.about();


console.log("when we call a method of obj , this is interally passed in it ");
function aboutCar(){
    console.log("checking the object passed in this func" , this)
    console.log(`car name is ${this.name} and price is ${this.price}`);
}
const car1={
    "name":"Audi",
    "price":10000,
    "info":aboutCar
}
const car2={
    "name":"thar",
    "price":10,
    "info":aboutCar
}
const car3={
    "name":"BMW",
    "price":10000000,
    "info":aboutCar
}
car1.info();
car2.info();
car3.info();


console.log(" by default this is refeence to window obj in JS which is the mother class of all")
console.log(this);// this by defaults points to window object 
console.log(window);
console.log(this===window);


// window is the mother class 
console.log("any function defined outside inhertited by mother class window ")

function myFunc(){
    // "use strict" // if we use "use strict " mode then this is undefined 
    console.log(this); // window 
}
myFunc(); // this myFunc will be added as a method in window class hence this points to window 
window.myFunc();
this.myFunc(); // here this === window 


// call apply bind methods 
function hello(){
    console.log("hello world");
}
hello();
hello.call(); // similar to calling a fucntion like hello()


const user1={
    'name':"harshit",
    age:9,
    about:function(){
        console.log(this.name , this.age);
    },
    info:function(hobby , favSports){
        console.log(this.name , this.age, hobby, favSports);
    }

}
const user2={
    'name':"Rohit",
    age:91,
   
}
user1.about();
user1.about(user1)
user1.about(this);
// avove 3 will have same output  because this keyword is by default passed while calling a method 
user1.about.call();// undefined 
user1.about.call(user1); // here this === user1 
user1.about.call(this);// undefined


console.log("calling about function in user 2 but fun is declared in user1");
user1.about.call(user2);// here this is binded to user2 i.e this == user2
user1.info.call(user2, "gaming " , "cricket"); // this === user2

console.log(" apply is similar to call , apply internally calls call(). In aply we pass a list of argument ");
// apply method we passed argument in an array 
// apply is similar to call method 


// bind methods 
// it is similar to apply , 
// it returns the function instead of executing it 
// we can use that function later according to our use
function allInfo(hobby , favSports){
    console.log(this.name , this.age, hobby, favSports);

}

allInfo.apply(user1,["long","short"]);
allInfo.apply(user2,["user1","user2"]);


console.log("bind method");
console.log("Bind returns a function as an output ");

const func=allInfo.bind(user1 , "poem","akadani" );
func();

// another property about 
const myFunc = user1.about; // here we have stored the function definition only  i.e myFunc = function(){console.log(this.name , this.age)} and here this is window 
const myFunc1 = user1.about.bind(user1); // here we have stored the function definition only  i.e myFunc = function(){console.log(this.name , this.age)} and here this is binded with user1 i.e this == user1 
myFunc(); // undefined undefied 
myFunc1(); // harshit 8 

/**
 * There is no this of arrow funtion
 * It takes this from the inherit class/surrounding class or parent class or window class
 * If function is defined using function keyword then this points to current object 
 * if function is defined using ()=> then in this case , this keyword points to  one level up i.e to it's parent class
 */

console.log("Arrow function has no this associated with it. It takes from it's surrounding")
const userInfo={
    firstname:"har",
    age:9,
    about:()=>{
        console.log(this);
        console.log(this.firstname , this.age)
    },
    moreInfo(){
        console.log("Inside more info");
    }
}
userInfo.about();
userInfo.about.call(userInfo);
let info = userInfo.about;
info();

console.log("WHY OOPS needed , lets see a exmaple");

const user={
    firstname:"harshit",
    lastName:"Rana",
    email:"xyz@abc.com",
    age:10,
    Addres:"123 UP exta",
    about:function(){ return `${this.firstname} ,is ${this.age} years`},
    isAdult:function(){return this.age>=18}
}

// what if we have million of user ?
// Lets create a function which creates user


const userMethods={
    about:function(){ return `${this.firstname} ,is ${this.age} years`},
    isAdult:function(){return this.age>=18},
    sing:function(){
        console.log("dhum tana na  na ");
        // sing is returning undefined
    }
}
function createUsers(userName ,userLastName , email , age  , address ){
    // const User={};
    const User = Object.create(userMethods);// creating empty obj of name User and  userMethod is a __proto__ of User object i.e User Object inherites userMethods obj.
    User.firstname=userName;
    User.lastName=userLastName;
    User.email=email;
    User.age=age;
    User.address=address
    /*
    User.about=function(){ return `${this.firstname} is ${this.age} years`};
    User.isAdult=function(){return this.age>=18}
    //Each user will have it's own about and isAdult method which is poor memory management
    // Hence we will create only one function of about and isAdult and store the reference of that function in each object created
    */
   /*
   // storing the references of methods -> better memory management
   User.about=userMethods.about;
   User.isAdult=userMethods.isAdult;

   User.sing=userMethods.sing;
   //if we add any method in userMethod Object we need to store the refernece here also 
   //if we forget then that function will not be called here as their reference is not stored 
   // It's a tidious task so to remove these tidious taks clasees are created 
*/
   return User;

}

const new_user1 = createUsers("roshan" ,"gupta","axh.com", 27, "kagdysk");
console.log(new_user1)
console.log(new_user1.isAdult());
console.log(new_user1.about());
console.log(new_user1.isAdult())
console.log(new_user1.sing())

/**
 * Lacks in above method
 * 1.Each user will have about and isAdult method which is not good. so let's create a obj which store thse user methods 
 */


//Inheritance 

const obj1={
    key1:"val1",
    key2:"val2"
}
const obj2={};
obj2.key3="val3";

console.log(obj2.key1);// this will give undefined but we want it take key1 value fron obj1

// one more way to create obj
const obj3 = Object.create(obj1);// create an empty obj but inherites obj1 or setting the __proto__ of obj3 as obj1
obj3.key4="val4";
console.log(obj3)
console.log("obj3 key1 val is", obj3.key1);
console.log("obj3 key2 val is", obj3.key2);

console.log("obj3 key3 val is", obj3.key3);
console.log("obj3 key4 val is", obj3.key4);
// now 
// __proto__ or [[prototype ]] both are same but different from prototype
// Proto shows the hieracrhcy of inheritence 
// __proto__ ko dunder property bhi kehte h 
console.log("printing obj 3", obj3)
console.log("prinitng __proto__ of obj3 which is dunder property" , obj3.__proto__); // console.log(obj1)


