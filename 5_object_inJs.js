/*
1. objects are refrence type 
2. objects are real world data 
3. key( is in string by default ) value(can be anything ) pairs in objects
4. Objects don't have index

*/
const person={ name:"Harshit" ,
                "age":22,
                hobbies:["sleeping" , "coading"],
                "worked at ":["Radisys" , "Capegemini"] // key must be in string if some spaces are there in key name 
 }
 // in key we can use "" or skip , but compiler will treat it as a string
console.log(person);
console.log(typeof person);
console.log(person.age);
console.log(` using . operator ${person["name"]}`);
console.log(person.hobbies);
console.log(` using [] operator to acces ${person["hobbies"]}`);
console.log(person.name);

// adding new key value pair in object 
person.gender="male";// new key value pair added using .
console.log(person);
person["sports"]=["cricket" , "Pubg"]; // new key value pair added using ["key_name"]
console.log(person);
// diefference between bracket and . notation /
// bracket notation executes the expression if possible
console.log(person["worked at "]); // key have spaces in it then it can only be accessible through bracket notation

const key="email"
person.key="abc.xyz.com"; // here {key:"abc.xyz.com"}  key is key here 
console.log(person);
person[key]="myemail@yahoo.com"; // now here key's value i.e email will act as key 
console.log(person); // {email:"myemail@yahoo.com"}


// loop on object 
// for in loop  -- similar to for in python 
for(let key in person){
    // console.log(key);
    // console.log(person[key]);
    console.log(key, " : " , person[key]);
    console.log(`${key} : ${person[key]}`);
}

//Object.keys(object_name) return keys in array 

let keys_arr = Object.keys(person);
console.log( typeof keys_arr , keys_arr , Array.isArray(keys_arr));
// for of loop on Object.keys()
for(let key of Object.keys(person)){
    console.log(person[key]);
}

// computed Properties 
const key1="objKey1";
const key2="objKey2";
const val1 = "val1";
const val2="val2";
const obj={
    key1:val1,
    key2:val2
}
console.log(obj); // {key1:"val1" , key2:"val2"}
const obj2={
    [key1]:val1,
    [key2]:val2
}
console.log(obj2); // {{objKey1:"val1" , ObjKey2:"val2"}}
const obj3={};
obj3[key1]=val1;
obj3[key2]=val2;
console.log(obj3); // {{objKey1:"val1" , ObjKey2:"val2"}}
// spread operator in Array vs Obj
// spread operator only applicable on iterables 
const a1=[1,2,3];
const a2=[5,,6,7,a1];//[5,,6,7,[1,2,3]]
const a3=[...a1,...a2,a2,"new item 1" , "item2"]; // [1,2,3,5,,6,7,[1,2,3] ,[5,,6,7,[1,2,3]],"new item 1" , "item2"]

// spread on strings 
const a4=[..."1234"];// ---> ["1","2","3","4"]
console.log(a4);

const o1={
    key1:val1,
    key2:val2

};
const o2 = {
    key1: "val1_in_o2",
    key3:"val3",
    key4:"val4"
};
const o3 = {
    ...o1,...o2,...obj2,key69:"val69"
}
console.log(o3);

const newObj={..."abc"}; // {0:a , 1:b}   index as keys 
console.log(newObj);
const newObj2 ={...["item1" , "item2"]}; //{0:"item1" , 1:"item2"}
console.log(newObj2);
const alphaObj={..."abcdefghijklmnopqrstuvwxyz"};
console.log(alphaObj);

//Object Destructuring 
const band={
    bandname:"led xepplib",
    famousSong:"abc haha",
    year:1999,
    yantra:"voilin"
}
const bandName=band.bandname
const favSong= band.famousSong
console.log(bandName , favSong);

const {bandname , famousSong}=band; // Object destructuring here name of varible should be same as keys of Object which is desrtuctured 
console.log(bandname, famousSong);
const {v1 ,v2}=band;
console.log(v1 , v2);
const {bandname:var1 ,famousSong:var2,...restObj}=band; // bandname will now recognized as var1 
console.log(var1 , var2 , restObj);


// Objects Inside Array 
console.log("Objects Inside Array ");

const users=[
    {userId: 1 , userName:"Roshan" , gender:"male"},
    {userId: 2 , userName:"Rohan" , gender:"trans"},
    {userId: 3, userName:"Roan" , gender:"female"},
]
console.log(users);

for(let user of users){
    console.log(user);
    console.log(user.userId);
    console.log(user.gender);
    console.log(user.userName);
}

// nested destructuring 

const [User1 , User2 , User3] = users;
const [{userName:user1Name , userId, gender:user1Gender} , user2 , {gender}]=users; // const jisChizKoDestructureKrnaHai = jisChizSeDestructureKrnaHai
// here userName of first user will be accessed through user1Name variable
console.log(user1Name);
console.log(userId, user1Gender); 
console.log(user2);
console.log(gender);



