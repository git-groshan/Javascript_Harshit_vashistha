/*
const btn1 = document.querySelector("#one");
btn1.addEventListener("click" , function(){
    console.log("btn1 is cliked ")
});
const allbtn = document.querySelectorAll(".my-button button");
console.log(allbtn);
// we know we can run any for loop on nodeList ( returned by querySelector)
for(let button of allbtn){
    button.addEventListener("click" , function(){
        console.log("btn is clicked from for of loop");
        // console.log("this value is -> ",this);
        // console.dir(this);
        // in case of arrow function null will be printed bcz this will points to window object 
        console.log(this)
    })
}

*/


// traditonal for loop
/* 
for(let i=0;i<allbtn.length;i++){
    allbtn[i].addEventListener("click" , function(){
        console.log("you clicked me using tradition for loop");
    })
}
*/
/*
allbtn.forEach(function(button){
    button.addEventListener("click" , function(){
        console.log("you called me using for each loop");
    })
})
*/


/*
// ########## Event Object ##########
const firstButton = document.querySelector("#one");
firstButton.addEventListener("click" , function(event){ // browser parsing some thing which is being stored in object name event 
    console.log("this value from normal call back function ",this);
    console.log("text content from normal function ",this.textContent);
    console.log("event value from normal call back function ",event);
    console.log("event.target from normal call back function to check kaun se element ne event triggered kiya ",event.target);
    console.log("checking kaun se element pr eventListener  attach kiya tha using event.targetElement" , event.currentTarget)
}); 
const allButton = document.querySelectorAll(".my-buttons buttomn");
firstButton.addEventListener("click" , (event)=>{ // browser parsing some thing which is being stored in object name event 
    console.log("this value from arrow call back function ",this); // this -> window object 
    console.log("text content from arrow fucntion",this.textContent);
    console.log("event value from call back function ",event);
});

*/

// JS Engine - Line by line code execution 
// Browser - Has JsEngine  and some extra fearures Like WEB API
// jab bhi hum kisi element pr addEventListener add hoga 
// Jasb browser ko pata chala ki user ne event perform kiya jo hum listen kar rhe hai 
// Browser 2 kaam krta hai 
// 1. callback function hai woh JS Engine ko dega 
//2. Callback function ke saath browser  jo event hua hai uski information bhi dega in the form of an object 


/** WHAT HAPPENS BEHIND THE SCENE WHEN WE TRIGGERED AN EVENT ON ANY ELEMENT
 * Browser has -> Js Engine and Web APIs
 * JS Engine has GEC and call stack FECs
 * Whenver we do addEventListenr JS engine , usko(call back funtion ) WEB APIs pr bhej deta hai aur aage ka execution start kr deta hai , jab bhi woh event hit hota hai toh web API woh call back function ko     
* event loop call stack me bhej deti hai which is called call back queue 
*/

/*
console.log("script start ")
const allButtons = document.querySelectorAll(".my-button button");
allButtons.forEach((button)=>{
    button.addEventListener("click" , (e)=>{
        // sleep(2);
        let num =0;
        for(let i=0;i<=1000000000;i++) num+=i;
        console.log(e.currentTarget.textContent , num);
    })
});
// sleep(2);
let outerVar =0;
for(let i=0;i<=10000000;i++) outerVar+=i;
console.log("value of outer var is " , outerVar) 
console.log("script end")
*/

// Practice 1 
const btns = document.querySelectorAll(".my-button button");
console.log(btns);
btns.forEach((button)=>{
    button.addEventListener("click" , function(e){
        button.style.backgroundColor="yellow";
        // e.target.style.backgroundColor="yellow"; //we can use this also 
        button.style.color="grey";
        // e.target.style.color="grey";
    })
})