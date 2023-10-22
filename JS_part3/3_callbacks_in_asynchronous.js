// callbacks , callback hell , pytamid of doom
// asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

/*
setTimeout(() => {
    heading1.textContent="heading 1";
    heading1.style.color = "voilet";
    setTimeout(() => {
        heading2.textContent="heading 2";
        heading2.style.color = "purple";
    }, 1000);
}, 1000);
*/

/*
setTimeout(() => {
    heading2.textContent="heading 2";
    heading2.style.color = "purple";
}, 2000);
*/
// call back hell 

/*
setTimeout(() => {
    heading1.textContent="one";
    heading1.style.color = "voilet";
    setTimeout(() => {
        heading2.textContent="two";
        heading2.style.color = "purple";
        setTimeout(() => {
            heading3.textContent="three";
            heading3.style.color = "red";
            setTimeout(() => {
                heading4.textContent="four";
                heading4.style.color = "pink";
                setTimeout(() => {
                    heading5.textContent="five";
                    heading5.style.color = "green";
                    setTimeout(() => {
                        heading6.textContent="six";
                        heading6.style.color = "blue";
                        setTimeout(() => {
                            heading7.textContent="seven";
                            heading7.style.color = "brown";
                            
                        }, 1000);
                        
                    }, 1000);
                    
                }, 1000);
                
            }, 1000);
            
        }, 2000);
        
    }, 2000);
}, 1000);
*/

function changeText(element , text  , color  , time , onSuccessCallback , onFailureCallback){
    setTimeout(() => {
        if(element){
        element.textContent=text;
        element.style.color=color;
        if(onSuccessCallback){
            onSuccessCallback();
        }
        else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
        }
        else{
            console.log("your element doesn't exist");
        }
    }, time);
};
// changeText(heading1 , "one" , "red" , 1000);
/*
changeText(heading1 , "one" , "red" , 1000 , ()=>{
    changeText(heading2 , "two" , "green" , 1000);
})
*/

// changeText(heading1 , "one" , "green" , 1000 , ()=>{console.log("hello world")} , ()=>{console.log("Heading 1 doesn't exist")});


// Pyramid of Doom
changeText(heading1 , "one" , "voilet" , 1000 , ()=>{
    changeText(heading2 , "two" , "purple" , 2000 , ()=>{
        changeText(heading3 , "three" , "red" , 2000 , ()=>{
            changeText(heading4 , "four" , "pink" , 1000 , ()=>{
                changeText(heading5 , "five" , "green" , 1000 , ()=>{
                    changeText(heading6 , "six" , "blue" , 1000 , ()=>{
                        changeText(heading7 , "seven" , "brown" , 1000 , ()=>{
                            changeText(heading8 , "eight" , "#cda562" , 1000 , ()=>{
                                changeText(heading9 , "nine" , "#cda123" , 1000 , ()=>{
    
                                },()=>{console.log("heading9 doesn't exits")});
                            },()=>{console.log("heading8 doesn't exits")});
                        },()=>{console.log("heading7 doesn't exits")});
                    },()=>{console.log("heading6 doesn't exits")});
        
                },()=>{console.log("heading5 doesn't exits")});
            },()=>{console.log("heading4 doesn't exits")});
        },()=>{console.log("heading3 doesn't exits")});
    },()=>{console.log("heading2 doesn't exits")});
},()=>{console.log("heading1 doesn't exits")});
