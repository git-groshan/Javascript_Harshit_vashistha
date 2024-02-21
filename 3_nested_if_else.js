let win_num=7
console.log("guess a number between 1 to 25")
let num = +prompt("guess a number between 1 to 25"); // prompt takes input as string so to convert it into integer we have added + to convert it into number 
console.log(typeof num);

    if(num===win_num){
        console.log("Bingo you guessed a right one");
    }
    else{
        if(num<win_num) console.log("you guessed a lesser one");
        else console.log("you guessed a bigger num");
    }


    // switch case -- similar to C/C++
    let day = "Monday"
    switch(day){
        case "Monday":
            console.log("Monday");
            break;
        default:
            console.log("Not monday");
    }

    // while loop same as c
    let count=0;
    while(count<10){
        console.log(count);
        count++;
    }
    // for loop similar to c++/C
    // var se declare variable bahar bhi exist krega but not in case with let  
    // let se declared variable usi scope tak simit rehta h jabki var se declared global scope
    for(let i=0;i<=10;i++)console.log(i);
    // break and continue -- similar to c and c++
// do while loop 
let i=0;
do{
    console.log(i);
    i++;
}while(i<10);