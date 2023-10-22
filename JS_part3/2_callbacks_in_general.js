// callback function - function calling another function is callback 
// function myfunc(){
//     console.log("My funct 1 is doing task 1");
// }
function myfunc(callback){
    console.log("My funct 1 is doing task 1");
    callback();
}

function myfunc2(){
    console.log("myfunc2 is doing task 2");

}

// myfunc();
// myfunc2();
myfunc(myfunc2);
myfunc(function(){
    console.log("function is doing task as a callback ");
});

myfunc(()=>{
    console.log("callback as an arrow function ")
});

function getTwoNumbersAndAdd(number1 , number2 , callback){
    if(typeof number1 == "number" && typeof number2=="number"){
    console.log(number1 , number2)
    callback(number1 , number2);
    }
    else{
        console.log("wrong input ");
    }
};
function addTwoNumbers(num1 , num2){
    console.log(num1 + num2);
};
getTwoNumbersAndAdd("3",5,addTwoNumbers)
getTwoNumbersAndAdd(3,5,addTwoNumbers)
getTwoNumbersAndAdd(4,7 , (n1 , n2)=>{ // call back defined inside function 
    console.log(n1 + n2);
});


// handling error using call back 

function getTwoNumbersAndAdd_2(number1 , number2 , onSuccess , onFailure){
    if(typeof number1 == "number" && typeof number2=="number"){
    console.log(number1 , number2)
    onSuccess();
    }
    else{
      onFailure();
    }
};
function onSuccess(n1 , n2){
    
    console.log(n1 + n2);
    
};
function onFailure(n1,n2){
    console.log("wrong data input");
}




