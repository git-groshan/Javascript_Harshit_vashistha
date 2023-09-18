// In JS function is a function and It's an function Object also
function hello(){
    console.log("hello world");
};

console.log(hello.name)// name is a property of function which tells name of function
// we can add our own properties to a function

//custom property
hello.property1=" this is property 1 added";// key value pair added
console.log(hello.property1);

console.log("SOME MORE USEFUL FUNCTION PROPERTIES");
// eg- call() ,apply() , bind() methods   

console.log("FUNCTION GIVES US EMPTY OBJECT OR FREE SPACE WHICH IS CALLED PROTOTYPE");

console.log("only fucntion provided protype property")
console.log(hello.prototype); // return {} empty object

if(hello.prototype) console.log("property is present");
else console.log("protype not present ");
console.log("proving that protype property is only related to fucntion object")

const obj={key1:"val1"};
if(obj.prototype) console.log("property is present to obj");
else console.log("protype not present to obj ");

hello.prototype.abc="abc"
hello.prototype.xyz="xyz"
hello.prototype.sing=function(){
    return "lalalalal";
}

console.log(hello.prototype);

// linking protype with proto
// earlier we were linking __proto__ using Object.create(obj) methods

function createUsers(firstName , lastName , email , age , address){
    // const user = Object.create(userMethods) ---> earlier we were doing this to link userMethods to createUser
    // now we know fucntion gives protype {} , hence we will add userMethods function in this property
    // hence no need to create extra userMethods
    const user = Object.create(createUsers.prototype);// now setting __proto__ of createUsers as prototype/object of createUsers
    user.firstName=firstName
    user.lastName=lastName;
    user.email=email
    user.age = age;
    user.address=address;
    return user;
};

createUsers.prototype.about=function(){
    return `${this.firstName} is ${this.age} years`;
}
createUsers.prototype.isadult=function(){
    return this.age>=18;
}
createUsers.prototype.sing=function(){
    return "la la la la la";
}

console.log(createUsers.prototype);

const user1 = createUsers("harsh","gupta" , 'harsh@123',17,'xyz');
const user2 = createUsers("hah","gupta" , 'hacrsdh@123',137,'xyzfi');
const user3 = createUsers("harh","gupta" , 'harsh@qhq123',27,'xyzaha');
console.log(user1);
console.log(user1.about());
console.log(user1.isadult());


//NEW KEYWORD IN JS

console.log("NEW KEYWORD IN JS");

function createPeople(firstName , age){
    this.firstName=firstName;
    this.age=age
}
createPeople.prototype.about = function(){
    console.log(this.firstName , this.age);
}
const u1 = new createPeople("Roshan " , 23);
console.log(u1.about());

// here new keyword doing multiple things 
// 1.) creates and empty object , and this points/refers  to that object
// 2. ) returns this 
// 3.) links/sets the __proto__ of Objects to the  prototype/object of function i.e object inherites the protype of the function  


// constructor function -- the name should starts with Capital letter to let other know that the obj can only be created using new keyword 
function CreateActiveUser(firstName , lastName , email , age , address){
   //  new keyword interally set the proto of this obj/fucntion to it's prototype
    this.firstName=firstName
    this.lastName=lastName;
    this.email=email
    this.age = age;
    this.address=address;
    // return this; no need to return this because new keyword automatically do this 
};
CreateActiveUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years`;
}
CreateActiveUser.prototype.isadult=function(){
    return this.age>=18;
}
CreateActiveUser.prototype.sing=function(){
    return "la la la la la";
};

const us1 = new createUsers("harsh","gupta" , 'harsh@123',17,'xyz');
const us2 =new  createUsers("hah","gupta" , 'hacrsdh@123',137,'xyzfi');
const us3 =new  createUsers("harh","gupta" , 'harsh@qhq123',27,'xyzaha');
console.log("accessing about of user created using new keyword")
console.log(us1.about());
console.log("__proto__ of us1 is " ,us1.__proto__);

for(let key in us1){
    console.log(key);// prints all key and also the protype properties 
};
console.log("printing only it's own property")
for(let key in us1 ){
    if(us1.hasOwnProperty(key)) console.log(key)
};

// more about protype 
let numbers = [1,2,3]
// internally JS create an array using new keyword
// let arr = new Array(1,2,3); // and Array has some methods
console.log(numbers);
console.log(Object.getPrototypeOf(numbers));

// we can change the prototype of fucntion 
 function hello(){
    console.log("hello");
 }

 console.log(hello.prototype);
 hello.prototype = []
 console.log(hello.prototype);
 hello.prototype.push('1');
