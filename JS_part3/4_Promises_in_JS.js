// Promise or futureValue - koi aisi value jo abhi nhi pata ut in future it may be there
// Promise is a Browser feature 
//Callbacks are functions that are called when an event occurs. Promises are objects that represent a future value. When a promise is resolved, it returns a value.
// Promises are added in Microtask queue
const bucket = ['coffe' , 'chips' , 'vegetables' , 'salt' , 'rice'];
/**
 * Fried rice
 * status : pending ---> fulfilled  or reject
 * value : Null/undefined --> "any message "
 */

const friedRicePromise = new Promise((resolve , reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
        //resolve("fried rice");// resolve can take object array string etc 
        resolve({value:"fried rice"});// resolve can take object array string etc 
    }else{
        //reject("Couldn't do it");// reject can take object array string etc
        reject(new Error("something missing from bucket"));// reject can take object array string etc
    }
}
);

// Produce 


// Consume 
// how to consume 


// friedRicePromise.then((resolve wala jo return krega use store krenge  )=>{} , (reject wala funcion jo return krega use store krenge )=>{})

/*
friedRicePromise.then(
    // Jab promise resolve hoga 
    (myfriedRice)=>{console.log("let's eat" , myfriedRice)}
     , 
     // Jab promise reject hoga 
     (error)=>{console.log("error")}
     );

*/
friedRicePromise.then(
    (myfriedRice)=>{
        console.log("let's eat " , myfriedRice);
    }
).catch((error)=>{
    console.log(error);
})


// function returning Promise 


/*
function ricePromise(){
    const bucket = ['coffe' , 'chips' , 'vegetables' , 'salt' , 'rice'];
   return  new Promise((resolve , reject)=>{
        if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
            //resolve("fried rice");// resolve can take object array string etc 
            resolve({value:"fried rice"});// resolve can take object array string etc 
        }else{
            //reject("Couldn't do it");// reject can take object array string etc
            reject(new Error("something missing from bucket"));// reject can take object array string etc
        }
    }
   )
}
ricePromise().then(
    (myfriedRice)=>{
        console.log("let's eat " , myfriedRice);
    }
).catch((error)=>{
    console.log(error);
});


*/

// promise and SetTimeOut

function myPromise(){
    return new Promise((resolve , reject)=>{
        const val = true;
        setTimeout(()=>{
            if(val) {
                resolve();
            }
            else{
                reject();
            }
        } , 2000)
    })
};

myPromise()
.then(()=>{console.log("resolved")})
.catch(()=>{console.log("rejected")});

// then() method humesha promise return krta hai  hence we can create a chane of promises 

function myPromise2(){
    return new Promise((resolve , reject)=>{
        resolve("foo");
    })
}
myPromise2().then((value)=>{
    console.log(value);
    value+="bar";
    
    return value; // internally return Promise.resolve(value);
    // by default return undefined if nothing is returned 
})
.then((value)=>{
    console.log(value);
    value+="baaz";
    return value
})
.then((value)=>{
    console.log(value);
    // by default undefined is returned bcz nothing is getting returned here 
})

