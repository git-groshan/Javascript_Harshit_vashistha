/*
1. objects are refrence type 
2. objects are real world data 
3. key( is in string by default ) value(can be anything ) pairs in objects
4. Objects don't have index

*/
const person={ name:"Harshit" ,
                "age":22,
                hobbies:["sleeping" , "coading"],
                "worked at ":["Radisys" , "Capegemini"] // key mus be in string if some spaces are there in key name 
 }
console.log(person);
console.log(typeof person);
console.log(person.age);
console.log(` using . operator ${person["name"]}`);
console.log(person.hobbies);
console.log(` using [] operator to acces ${person["hobbies"]}`);
console.log(person.name);

person.gender="male";// new kwy value pair added 
console.log(person);
person["sports"]=["cricket" , "Pubg"]
console.log(person);
// diefference between bracket and . notation 
console.log(person["worked at "])

const key="email"
person.key="abc.xyz.com";
console.log(person);
person[key]="myemail@yahoo.com"; // now here key's value i.e email will act as key 
console.log(person)


// loop on object 
// for in loop  -- similar to for in python 
for(let key in person){
    // console.log(key);
    // console.log(person[key]);
    console.log(key, " : " , person[key]);
    console.log(`${key} : ${person[key]}`);
}

let keys_arr = Object.keys(person);
console.log( typeof keys_arr , keys_arr , Array.isArray(keys_arr));


// computed Properties 
const key1="objKey1";
const key2="objKey2";
const val1 = "val1";
const val2="val2";
const obj={
    key1:val1,
    key2:val2
}
console.log(obj)
const obj2={
    [key1]:val1,
    [key2]:val2
}
console.log(obj2);
const obj3={};
obj3[key1]=val1;
obj3[key2]=val2;
console.log(obj3);
// spread operator in Array vs Obj
const a1=[1,2,3];
const a2=[5,,6,7,a1];
const a3=[...a1,...a2,a2,"new item 1" , "item2"];

// strings 
const a4=[..."1234"];// --->  
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

const newObj={..."abc"}; // 0:a , 1:b
console.log(newObj);
const newObj2 ={...["item1" , "item2"]};
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

const {bandname , famousSong}=band;
console.log(bandname, famousSong);
const {v1 ,v2}=band;
console.log(v1 , v2);
const {bandname:var1 ,famousSong:var2,...restObj}=band;
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

const []=users; // const jisChizKoDestructureKrnaHai = jisChizSeDestructureKrnaHai





