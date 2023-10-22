const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");


function changeText(element , text  , color  , time){
    return new Promise((resolve , reject)=>{
        setTimeout(() => {
            if(element){
                element.textContent=text;
                element.style.color=color;
                resolve();// nothing is passed inside resolve hence undefined is returne from here
            }else{
                reject("element not find");
            }

        }, time);
    })
}

changeText(heading1 , "one" , "red" , 1000)
.then(()=>{
    return changeText(heading2 , "two" , "purple",1000);
})
.then(()=>{
    return changeText(heading3,"three" , "blue" , 1000);
})
.then(()=>{
    return changeText(heading4,"four" , "green" , 1000);
})
.then(()=>{
    return changeText(heading5,"five" , "yellow" , 1000);
})
.then(()=>{
    return changeText(heading6,"six" , "pink" , 1000);
})
.then(()=>{
    return changeText(heading7,"seven" , "#2d34e5" , 1000);
})
// another way of writing above code 
/*
changeText(heading1 , "one" , "red" , 1000)
.then(()=>  changeText(heading2 , "two" , "purple",1000))
.then(()=>  changeText(heading3 , "three" , "purple",1000))
.then(()=>  changeText(heading4 , "four" , "purple",1000))
.then(()=>  changeText(heading5 , "five" , "purple",1000))
.then(()=>  changeText(heading6 , "six" , "purple",1000))
.then(()=>  changeText(heading7 , "seven" , "purple",1000))
.then(()=>  changeText(heading8 , "eight" , "purple",1000))
.catch((error)=>{alert(error)};)
*/
