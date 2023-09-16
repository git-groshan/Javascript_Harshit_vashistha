// Iterables - Jispe hum " for of " loop laga skte hai 
//Eg- Array , strings are Iterble 

for(let ch of "Roshan"){
    console.log(ch);
};


// Object is not Iterable 

// Array like Objets - woh hote hai jinke pass length property hoti hai aur jinko hum index se access kar skte hai 


/**
 * Set in JS
 * It is Iterbale , has it's own methods , No-index based access , 
 * Order is not guaranteed 
 * stores unique Items only 
 * create using new keyword and constructor can have iterable as argu 
 * No length property
 */

const set1 = new Set([1,2,3,4,3,4]);
console.log(set1);
console.log(set1[0]); // returns undefined cuz no index based 
const mychar = new Set("roshan");
console.log(mychar);

// add method 
const myset = new Set();
myset.add(1);
myset.add("roshan");
myset.add(set1);
myset.add([1,2]);
myset.add([1,2]);// No error , since both array refence  has different memory location hence not treated as same 
console.log(myset);
// has() methods - return True if ele is present in set otherwise Not 
if(myset.has(1)) console.log(" 1 is present");
else console.log(" 1 is not present ")
console.log("printing ele of set using For of loop ")
for(let sItem of myset){
    console.log(sItem)
}

const arr = [1,2,3,1,3,4,5];
const uni= new Set(arr);
console.log(uni);


// Maps 
/**
 * map is an Iterale .It is different from the map method of array
 * stored key value pair like Object but in ordered fashion
 * Duplicate keys are not allowed
 * Objects can only have string literal as a key but map can have anything as a key like array, string , integer etc
 */
// Object literal can onlye have string or symbol as a key
// key -> string / symbol
const Person={firstname:"rp" , age:19 , 1:"one"};
for(let key in Person) console.log(typeof key);
console.log(Person[1]);// Js convert this is as string 
console.log(Person["1"]); // same Op as above 



console.log("MAP in JS");

const per = new Map();

per.set('fname',"rosh");
per.set(['favfood','favMov'] ,['Roti sabji' , 'king2']);
per.set(1,"one");
per.set({'key1':"val1" , "key2":"val2"} , "object lteral")
console.log(per);
// accessing key value pair using get();
console.log(per.get('fname'))
console.log(per.get(1))
console.log(per.get(['favfood','favMov']))

console.log("printing all keys" , per.keys() );
console.log("printing keys and their type")
for(let keys of per.keys()){
    console.log(keys , typeof keys)
};
console.log("printing key value using for of loop")
for(let pr of per){
    console.log(pr , typeof pr); // type is always oject
    console.log(Array.isArray(pr));// return array of key value pair
};

console.log("using array Destructuring printing the map");
for(let [key , val] of per){
    console.log(key,val);
};

const new_map = new Map([["key1" , "val1" ] , ["key2" , "val2"]]);
console.log(new_map);

const person1={
    id:1,
    firstname:"Roshan"
}
const person2={
    id:1,
    firstname:"Rohan"
}

const extraInfo = new Map();
extraInfo.set(person1 , {"age":8,"gender":"male"})
extraInfo.set(person2 , {"age":9,"gender":"female"})

console.log(extraInfo.get(person1),extraInfo.get(person1).gender)
console.log(extraInfo.get(person2),extraInfo.get(person2).gender)

// clone object using Object.assign 
console.log("cloning object using assign method");

const obj={
    key1:"val1",
    key2:"val2"
};
const obj2 = obj// both points to same location
const obj3={...obj};// both points to different location 
const obj4=Object.assign({}, obj);// both points to different location 

obj.key3="val3";
console.log(obj)
console.log(obj2)
console.log(obj3)
console.log(obj4)

// Optional chaining using ?.
console.log("Optional chaining ");

const user={
    firstname:"name",
    address:{houseno:1234}
};

console.log(user.firstname);// directly printing the firstname
console.log(user?.firstname);// chekcing if firstName is undefined or not , ifundefined then return undefined and break execution after it 
console.log(user.address);
console.log(user?.address?.houseno)


