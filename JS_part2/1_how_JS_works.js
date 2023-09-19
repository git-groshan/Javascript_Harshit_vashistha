// JS is synchronous programming language i.e after fully execution of first line the second line will be executed . 
// Js is single threaded language 
// first Phase : compilation in JS
/**
 * Compilation in 3 phases 
 * 1. Tokenizing/Lexing - 
 * 2. Parsing -- making abstract syntax tree 
 * 3. code generation
 * 
 */
/**
 * In ECMA script - they tell we don't need to compile the JS file but 
 * It must pass through 
 * 1. Early error checking
 * 2. Determining appropriate scope for variable i.e variable/function is of glboal or local scope
 * 3. Js keep only the reference of variable whether It is global or local but do not initialise them
 * 4. Initilisation of variable is done in Global Execution Context
 */

console.log(this);
console.log(window)
console.log(firstName); // firstName is initialised with undefined 
var firstName = "Harshit" // firstName is initialised with Harshit
console.log(firstName); // firstName is initialised with undefined 

// Phase 2 : code execution phase 
/**
 * In Js code executes inside  execution context . 
 * The first execution context is created is called Global Execution context.
 * It has 2 phase - 1. creation phase 2. code execution phase 
 * 
 * GLOBAL EXECUTION CONTEXT : stored in stack
 * Creation Phase(in global memory) : 
 * 1. all global context/scope  variable are created and initilised with undefined in case of varible created using var 
 * 2. "this" is set according in the environment . In case of browser this is set to window object(provided by browser)
 * 3. 
 * code execution phase : 
 * 1. code is excuted line by line 
 */


console.log("lets analyse below code ");
console.log(this); //this is  initialsed with window in global creation phase
console.log(window);
console.log(myFunction); // prints function as it is becuase we haven't called it
console.log("calling the fun before it's definition"); // prints function as it is becuase we haven't called it
myFunction();// since funtion definition is alread in global scope before execution , hence it will executed even if it definition is afterwards 
console.log(fullName); // initialised with undefined 
function myFunction(){
    console.log("this is my function");
}

console.log("prining fucnt express " , fun_expr); // undefined bcz created using var keyword hence it is treated as variable 
// function expression definition 
var fun_expr = function(){
    console.log("this is function Expression ");
}
console.log("printing fun_expr" , fun_expr)
console.log("calling the fun  it's definition");
fun_expr();// prints whatever wrriten inside fun_expr as it is now initalised 
myFunction(); 
var FirstNAME = "harshit";
var LastNAME="sharma";
var fullName = FirstNAME + " " + LastNAME;// fullname is initialised 
console.log(fullName);// initialised value will be printed 

/**
 * Creation phase : In this global scope varible/function are created inside global memory and intialised respectively
 * Global scope :
 *       variables : FirstNAME , LastNAME , fullName
 *       function : myFunction 
 * JS stored the varible in Object form in key:value form which is called Environment Report.
 * In global Memory (before execution phase) :
 *  window:{} , this:window , firstNAME:undefined , LastNAME:undefined , fullname:undefined  , fun_expr:undefined (bcz created using var )
 * myFunction:{it's definition}
 */

// Hoisting in JS : Variable/function ka Global memory(1st phase of GEC creation) me present hona before execution is Hoisting 
/**
 * In Global Excecution Context :(stored in stack)
 * 1. In creation Phase all the global scope varibal/fucntion are stored in global memory (var varible are initally initialised with undefined )
 * i.e why we are able to print the var/function even if their declartaion is in later phase 
 * 
 * 2. Code Execution : after creation phase , JS code is excuted line by line 
 */

// GEC in varibale initialised using let 

// console.log(let_name); ---> error // 1_how_JS_works.js:87  Uncaught ReferenceError: Cannot access 'let_name' before initialization
let let_name="roshan";
console.log(let_name);
/**
 * After compilation(early error checking and Determining appropriate scope for variable) code execution takes place .
 *  code excution  is done via GEC(Global Excecution Context)
 * GEC is done in 2 phase : 1. Global memory Initialisation 2. code excution
 * 
 * In global memory execution 
 * 1. var se created variable undefined se initialised hote hai by default
 * 2. let/const se bane variable , uninitailsed reh jate hai , hence if we try to access them then we get an error 1_how_JS_works.js:87  Uncaught ReferenceError: Cannot access 'let_name' before initialization.
 * 3. let/const se bane variable ki hoisting hoti hai i.e before code execution they are present in Global memory but uninitialised 
 */

// Temporal Dead Zone (TDZ) : let/const se bane variable jab tak initialised nhi ho jate 
// code execution k dauraan tab tak k samay ko TDZ bolte hai 
let var1;
console.log(var1); // now it is undefined . It we don't initilise the let/const varibale then during code execution is initialised with undefined 



//Fucntion execution context 
console.log("function execution context");
let first_name = "Roshan"; // 1st line
let last_name="Gupta"; //2nd line 

const myFunc=function(){ // fucntion expression (pura as a 3rd line)
    let var1="first var";
    let var2 = "second var";
    console.log(var1);
    console.log(var2);
}
const v=myFunc();// 4th line
console.log(v); // 5th line 

/**
 * 1. step is compilation 
 *      a) early error checking -> No syntax error
 *      b) Detrmining appropriate scope for variable(but not initilising them)
 *          In global scope: first_name , last_name , my_func which has var1 and var2
 * 2. Phase 2 is Code execution : It is done in 2 step-
 *      a) GEC creation or memory creation:
 *          window:{} , this:window{} , first_name:uninitialised , last_name:uninitialised ,
 *      myfucn:{fucn_definition} ---> No it will be done during code excution.
 *      myFunc:uninitialised because it's a kind of variable 
 * 
 *      b) code execution : line by line execution 
 *         1st line :  firs_name is initialised to Roshan
 *          2nd line : last_name  is initilaised to Gupta
 *          3rd line : this is fucntion definition which is already stored in memory
 *              myFunc:{function_definition}
 *          4th line: fucntion call is happening
 * whenever we call any fucntion then corrosponding to it there is fucntion execution context is created.
 * which is called fucntion execution context which is stored in stack as GEC stored 
 * =================================================
 * funtion execution context of myFunc: this is same done in 2 phase 
 * a) Local memory creation/FEC creation : 
 *      1. arguments are stored in array like Object  
 *          arguments:[...]
 *      2. Parametres values are set.
 *          f_name:"harshit" , l_name:"Sharma"
 *      3. local variables are initially uninitialised and will be TDZ untill  they are initialised during fucntion execution 
 *          var1:uninitialised , var2:uninitialised
 * 
 * b) code execution : function is line by line executed 
 *      var1 is initialised "first variable" similary var2
 * 
 * when FEC is done . It is removed from stack and thread execution
 *  is moved to GEC
 * 
 * ======================================================================================
 * 
 * 
 *          
 *          
 */

// LEXICAL ENVIRONMENT( i.e which thing is present where i.e local or global) AND SCOPE CHAIN (keep on searching for thing in parent call if not present locally )

const last="sharma";
const printName =function(){
    const first = "Harsh";
    console.log(first);
    console.log(last);// last is not a local variable for fucntion
}
printName();

/**
 * In FEC , during code excution last name is not in local memory , hence it will be searched in it's parent call memory.
 * It keeps on searching untill we reach to GEC
 */

