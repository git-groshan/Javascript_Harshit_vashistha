console.log("Hello world");

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

// Event bubbling 
child.addEventListener("click" , ()=>{
    console.log("you clicked on child")
})
parent.addEventListener("click" , ()=>{
    console.log("you clicked on parent")
})
grandParent.addEventListener("click" , ()=>{
    console.log("you clicked on grand - parent")
})
document.body.addEventListener("click",()=>{
    console.log("you clicked on body")
});


/**
 * bubbling===> BOTTOM TO TOP
 * EVENT BUBBLING - event called on parent even we called it for child
 *1. Browser check krta hai if kisi child pr koi event laga hai aur same event parent pr bhi laga ho toh woh event automatically parent pr bhi call ho jayeaga
 * 2. form bottom se top tak jata hai if same event is defined on it 
 * 3. this event is called event bubbling 
 */

 // EVENT CAPTURING - another argument( boolean value ) is passed to capture the event 
 child.addEventListener("click" , ()=>{
    console.log("Event Capturing !!!! child")
},true)
parent.addEventListener("click" , ()=>{
    console.log("Event Capturing !!!! parent")
},true)
grandParent.addEventListener("click" , ()=>{
    console.log("Event Capturing !!!! grandparent")
},true)
document.body.addEventListener("click",()=>{
    console.log("Event Capturing !!!! body")
},true);
 /**
  * EVENT CAPTURING:- Third argument(boolean value ) is passed in add event listener function 
  * 1. The behaviour of this is opposite to event bubbling . i.e from top to bottom 
  * 2. yadi kisi child pr event captured called hua toh woh sabse pehle extreme parent pr dekhega ki kya hum uspr koi event capture kr rhe hai ya nhi then hieraricaly downwards aate hue child tak capture krega 
  * 3. Capture hone k baad hum event bubbling called hoga 
  * 
  */
 // BROWSER "U" TYPE SE CAPTURING AND EVENT BUBBLING START KRTA HAI


 /**
  * EVENT DELIGATION :  
  * yadi hum kewal grandParent pr even buubling ka fucntion lagate hai but yadi hum child pr click kre toh bhi woh event called ho jayega .
  * This is event delegation
  * We don't need to add event for each node , it will be automaticllay deligated 
  * In "U" manner capturing and bubbling will happen. so even if we add event on parent and call it on child , it will still call that event bcz it will search for upper/parent node 
  */

 grandParent.addEventListener("click" , (e)=>{
    console.log(e.target);// target will be that on which event is called 
    console.log(e.target.textContent);
 })

