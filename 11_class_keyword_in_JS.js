// class are fake in JS
// internally everything is done as earlier we were doing

function CreateUser(firstName , lastName , email , age , address){
    this.firstName=firstName
    this.lastName=lastName
    this.email=email
    this.age=age
    this.address=address
}
CreateUser.prototype.about=function(){
    return `${this.firstName} is ${this.age} years old`
};
CreateUser.prototype.isAdult = function(){
    return this.age>=19;
};
CreateUser.prototype.sing = function(){
    return `${this.firstName} is singing`;
};

// smae thing using class keyword
/**
 * class class_name{
 * methods and varibale 
 * }
 */

class CreateActiveUser{
    constructor(firstName , lastName , email , age , address){
        console.log("constructor called ");
        this.firstName=firstName
        this.lastName=lastName
        this.email=email
        this.age=age
        this.address=address
    };

    about(){
        return `${this.firstName} is ${this.age} years old`
    }
    isAdult(){
        return this.age>=19;
    }
    sing(){
        return `${this.firstName} is singing`;
    }
}

const u1 = new CreateActiveUser("r1","r2" , "xyz" , 12, "abc");
console.log(Object.getPrototypeOf(u1)) ;

class Animal{
    constructor(name , age){
        this.name=name
        this.age=age
    }

    eat(){return `${this.name} is eating `}

    isSuperCute(){return `${this.name} is super cute`}

    isCute(){return true}

}
const a1= new Animal("tom",2);
console.log(a1);
console.log(a1.eat());
console.log(a1.isCute());
console.log(a1.isSuperCute());


console.log("Inheritance in Js using extend keyword "); // similar to JAVA programming language 

class Dog extends Animal{
   constructor(name , age , speed){
    super(name, age);// add name and age from Base/parent class constructor 
    this.speed=speed;
   }
   run(){
    return `${this.name} is running at ${this.speed} kmph`
   }
   eat(){
    return `modified Eat : ${this.name} is eating`;
   }
}
const tommy = new Dog("tommy" , 2, 40); // Object or Instance is same 
console.log(tommy)
console.log(tommy.isSuperCute());
console.log(tommy.speed);
console.log(tommy.run());

console.log(tommy.eat);


// getter and setter 

 class Person{
    constructor(firstName , lastName , age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }
    // static property
    static desc = " this is static property";
    // static method
    static class_info(){
        console.log(" this is static method ");
    }
    fullName(){return `${this.firstName} ${this.lastName}`};
    // using get we don't need to use () , it becomes a property of class 
     get fullName_using_get()
     { 
        // using get keyword fullName_using_get becomes the property of Person class . It's no longer  a method 
        return `${this.firstName} ${this.lastName}`
    };
    
    setName(firstName , lastName){
        this.firstName=firstName
        this.lastName=lastName
    };

    set fullName(fullName){ // using set fullName becomes a property of class not a method
            const [firstName , lastName]=fullName.split(" ")
            this.firstName=firstName;
            this.lastName=lastName;
    };
 };
 const  person1 = new Person("hars" ,"sharma" , 24);
 console.log(person1.firstName);
 console.log(person1.lastName);
 console.log(person1.fullName);// return fucntion definition
//  console.log(person1.fullName()) // returns function output / returns what function returns 
 console.log(person1.fullName_using_get); // this one is the function but also working as a property of the class

 person1.setName("mohit","agarw");
 console.log(person1.firstName);
 console.log(person1.lastName);

 person1.fullName = "Roshan Gupta";
 console.log(person1)


 // static method and properties or class methods are class properties 
// person1.class_info(); -----> error because it's a static method 
Person.class_info();

console.log(Person.desc);
