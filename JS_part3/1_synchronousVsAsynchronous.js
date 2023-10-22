// synchronous vs asynchronous programming
// synchronous - line by line execution of program
// JS is synchronous and single threaded prog. language
/*
console.log("script start");
for(let i=0;i<1000;i++){console.log("inside for loop")}
console.log("script end");
*/
// asynchronous  programming

// setTimeout : take a function and time as input by which time the function will execute
// setTimeOut is a Web APIs provided by Browser which is handled by browsers
// setTimeout returns an ID. 

/*
console.log("script start")
function hello(){
    console.log("Hello World");
}
*/

/*
setTimeout(() => {
    
}, timeout);


*/

/*
setTimeout(hello , 1000); // after 1000ms hello() will execute , time is the minimum delay 
setTimeout(() => {
    console.log("hello duniya inside setTimeOut")
}, 1000);
console.log("script end")

*/

/*
console.log("script start")
setTimeout(()=>{console.log("inside setTimeout")} , 0);
for(let i=0;i<100;i++) console.log(...)
console.log("script end");
OUTPUT : 
script start 
...
script end
inside setTimeout
Explanantion : jab tak GEC ka kaam finish nhi ho jata , tab tak API call back queue me rehti hai aur jab GEC khatam ho jata hai toh woh fir stack me chala jata hai 
*/

// clear time out using id returned by settimeout
/**
 * console.log("script start");
 * const id = setTimeout(()=>{
 * consol.log("inside time out ");
 * } , 1000)
 * 
 * for(let i=0;i<100;i++) console.log("...");
 * console.log("setTimeout id is " , id);
 * console.log("clear tIme out");
 * clearTimeout(id);
 * console.log("script end");
 */

// SET INTERVAL : It is similar to setTimeout. In setTime out function is called only once but 
// in setInterval will be called after each time interval 
/*
setInterval(()=>{},
timeInterval)
*/

console.log("script start")
// setInterval(()=>{
//     console.log(Math.random());
// } , 1000)
console.log("script end")
// Jo time hum dete hai woh jaruri nahi hai ki utne time baad fucntion call hoga hi , usse jyade bhi lag skta hai . Web APIs se fucntion tabhi call hoga JS pura other code run na kr le 
// In genral 1000ms tak me js other codes ko execute kr leti hai 

