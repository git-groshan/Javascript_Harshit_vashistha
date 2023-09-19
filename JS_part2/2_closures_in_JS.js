// fucntion can return fucntion 

function OuterFunc(){
    function innerFun(){
        console.log("inner fucntion");
    }
    return innerFun;
}
const ans = OuterFunc();
console.log(ans);
ans();

function printFullName(first , second){ // line 1
    function printName(){
        console.log(first , second);
    }
    return printName;
};
const f_name = printFullName("roshan" , "gupta"); // line2 
console.log(f_name) // line 3 
f_name(); // line 4

/**
 * Lets analyse the above examples
 *1. In memory creation phase :
 * window:{} , this:window , printFullName:{fucnt_definition},
 * f_name:unitialised 
 * 
 * 2. Code execution phase :
 * line 1: fucntion definition is already presnt in meory
 * =====================================================
 * line 2: printFullName is called hence FEC is created
 *  Local memory : 
 *          argument:["roshan" , "gupta"]
 *          first:roshan , last:gupta
 *          printName:{func_definiton}
 * 
 * code exeution :  in printFullName fucntion 
 * line 1 : printName fucn ,  It is already there in Local memory
 * line 2: return printName which is stored in f_name Hence f_name is initialised 
 * f_name:{fucntion definition of printName}
 * Now this FEC context will be deleted from the call stack 
 * =======================================================
 * line 3: is to print the f_name , since f_name is initialised , It will be printed as it is
 * =============================================================
 * line 4: is calling f_name()
 * hence function execution context will be created 
 * In Local memory:
 *      args:[]
 * code execution Line by line : 
 * line 1 of printName:  console.log(first , second);
 * Since earlier everything of FEC of printFullName is vanished according to us hence first and second is not prent in current FEC and GEC 
 * Hence nothing should be printed but It is NOT happening like that.
 * WE HAVE MISSED SOMETHING
 * 
 * ******************** IMPORTANT ******************
 * whenever a function return something , together with it It also return is variable associated with it .
 * Jab bhi hum kisi fucntion ko return krte hai kisi aur fucntion se  , toh woh khali haath return nhi hota , woh us fucntion k jaha se return ho rha 
 * us function k local variables ko saath leke return hota hai  and 
 *  THIS IS CALLED CLOSURES.
 */

 /**
  * In reality when printFullName func is return printName function at that momemt 
  * In local Memory :
  *     args["Roshan" , "Gupta"]
  *     first:Roshan , last:Gupta
  * 
  * The above thing are also gets returned along with printName function. 
  * 
  * which is stored in ans variable i.e 
  * ans has printName:{fucn_def} , first:"roshan" , last:"gupta"
  */
// Jab bhi koi function dusre function ko return krta hai toh woh func apne lexical environment k saath return hota hai.
//i.e apne local variable k saath return hota hai



// ########### CLOSURE EXAMPLE 1 #############

function hello(x){
    const a = "varA";
    const b = "varB";
    return function(){
        console.log(a,b,x);
    }
}
const eg1 = hello("agr");
eg1();

// Lest analyze eg1 
/**
 * In memory creation phase :
 * window:{} , this:window , hello:{func_def}  ,eg1:uninitialised
 * code execution :
 * Line 1 : fucntion def already present 
 * +++++++++++++++++++++++++++++++
 * Line 2: fucn call hello();
 * FEC:- 
 * 1. Local memory:
 *  args:["agr"]
 * x=agr
 * a: uninitialised
 * b:uninitialised
 * anoanymous_fucn:{fucn_def}
 * 
 * 2. code execution:
 * line1: a="varA"
 * line2: b="varB"
 * line 3 return annonymous fucn 
 * this fucntion will return with the values of a and b and x which will be stored in eg1
 * ++++++++++++++++++++++++++++++++++++++++++++
 * line 3: fucn call eg1();
 * FEC:
 * Local Memory :
 * args=[]
 * 
 * 
 */

// ############ CLOSURE EXAMPLE 2 #############

function pow(power){
    return function(num){
        return num**power;
    }
};
// the above code can be reduced to 
const pow_arrow = power => number => number**power;
const cube = pow(3);
const ans_cube = cube(2);
console.log(ans_cube)

// ############ CLOSURE EXAMPLE 3 #############

function func(){
    let count=0;
    return function(){
        if(count<1){
            console.log(" I'm first time called");
            count++;
        }
        else{
            console.log("I'm already being called");
        }
    }
}

const myfun=func();
myfun();
myfun();
const eg3=func();
eg3();
eg3();




