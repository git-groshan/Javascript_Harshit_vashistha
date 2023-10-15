// console.log(window.document); // web page 
// console.dir(window.document); // JS representation of web page  
// console.dir(document); //  same JS representation of web page 


// Select Element by ID - document.getElementById("id-name") --> returns the element/object corrosponding to the ID
/*
console.log(document.getElementById("main-heading"));
console.log( typeof document.getElementById("main-heading"));
console.dir(document.getElementById("main-heading"));
*/
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent); // returns all the content no matter it is hidden or not 
console.log(mainHeading.innerText); // returns only visible texts
mainHeading.textContent="Manage my new tasks"
console.log(mainHeading.textContent);
// query Selector --> select anything element #,. 
const mainHeading1 = document.querySelector("#main-heading");
const header = document.querySelector(".header");
console.log(header);
const navItem = document.querySelector(".nav-item"); // returns first occurence 
console.log(navItem)
const navItemAll = document.querySelectorAll(".nav-item"); // returns NodeList(array like Object) i.e  all  occurence 
console.log(navItemAll);


// CHANGE STYLE OF ELEMENTS 

const mnHead = document.querySelector("div.headline h2"); // shows query selector can be use on anything
// console.log(mnHead.style);
mnHead.style.color="blue";
mnHead.style.backgroundColor="Red"; // Don't use background-color , It will give error
mnHead.style.border=" 2px solid black"
mnHead.style.borderRadius="10px"

// get and set attribute

const link = document.querySelector("a");// first anchor tag is selected
console.log(link , typeof link);
console.log( link.getAttribute("href")); // #home 
console.log( typeof link.getAttribute("href")); // #home 
console.log(link.getAttribute("href").slice(1)); // #home 
link.setAttribute("href" , "https://google.com");
console.log(link.getAttribute("href"));// google.com

const inputElement= document.querySelector(".form-todo input")
console.log(inputElement);
console.log(inputElement.getAttribute("type"));


// get Multiple elements  using getElements by Class name 
// this return HTML collections 
const navItems = document.getElementsByClassName("nav-item");
console.log(navItems);// return Html collection and array like object
console.log(navItems.length);// return Html collection and array like object
console.log(typeof navItems);// return Html collection and array like object
console.log( Array.isArray(navItems));// return Html collection and array like object
console.log(navItems[0] , navItems[1] , navItems[2]);

// we can use simple for loop and for of loop for HTML collection but we can not use forEach loop with it .
// But we can convert this HTML collection into a array by Array.from(HTML collection Item name ) and then can use any loop
console.log("printing using for loop in HTML collection")
for(let i=0;i<navItems.length;i++){
    // console.log(navItems[i]);
    const navItem = navItems[i];
    navItem.style.backgroundColor="#fff";
    navItem.style.color="green"; // isnce nothing text under li tag hence nothing will be done;
}

// get element by Tag name 
const tag_items = document.getElementsByTagName("a");
console.log(tag_items)
/*
for(let i=0;i<tag_items.length;i++){
    // console.log(tag_items[i]);
    const t_item = tag_items[i];
    t_item.style.backgroundColor="white";
    t_item.style.color="green";
    t_item.style.fontWeight="bold";
}
*/

// for of loop 
for(t_item of tag_items){
    t_item.style.backgroundColor="white";
    t_item.style.color="green";
    t_item.style.fontWeight="bold";
}
//get multiple elements by querySelectorAll()
// this returns Node-list which is an Array like Object
// we can change Node list into Array using Array.from()
const nav_Item = document.querySelectorAll(".nav-items");
console.log(nav_Item)
console.log(nav_Item[0] , nav_Item[1]);

// we can use any of the loop on NodeList

let a_items = document.querySelectorAll("a");
console.log("printing a tags using querySelectorAll()");
for(let i=0;i<a_items.length;i++){
    const a_item = a_items[i];
    a_item.style.backgroundColor="red";
    a_item.color="yellow";
}
a_items.forEach((a_item)=>{
    a_item.style.backgroundColor="green";
    a_item.color="black";
})


// INNER HTML - tags inside a tag is inner HTML
const headLine = document.querySelector(".headline");
console.log("printing headline " , headLine)
console.log("printinh innerHtml" , headLine.innerHTML)
headLine.innerHTML = "<h1> Inner Html Channged </h1>";
console.log("printin changed innerHtml" , headLine.innerHTML)
headLine.innerHTML+="<button class = \"btn\"> Learn More </button?"
console.log("printinh innerHtml after adding button" , headLine.innerHTML);


// 
const sectionToDo = document.querySelector(".todo_section");
console.log(sectionToDo.classList); // list out all the classes as DOMtokenList

sectionToDo.classList.add("bg-dark");
// sectionToDo.classList.remove("container")
console.log(sectionToDo.classList.contains("container"))
// sectionToDo.classList.toggle("bg-dark"); // add this class if not present otherwise removes it if it is already present
 
// Add element using JS
const todoList = document.querySelector(".todo-list");
console.log("printing to do list ",todoList)
console.log("printing to do list inner HTML ",todoList.innerHTML);
/*
todoList.innerHTML = "<li> new todo </li>"; // It changes the whole inner HTML
console.log("printing to do list inner HTML after chaging  it  ",todoList.innerHTML); //whole inner HTML is changed 
*/

/*
// appending element in inner HTML
todoList.innerHTML+="<li> new todo 1 </li>"; // it will append this element 
todoList.innerHTML+="<li> new todo 2 </li>"
console.log("printing to do list inner HTML after appendig li  ",todoList.innerHTML); //whole inner HTML is changed 
*/

/**
 * we should not use innerHTML property to add or remove the element bcz it will give the performace issue .
 * We only do this when we have to change the whole innerHTML
 */

// appeding new element using document.createElement()


const newTodoItem = document.createElement("li");// <li> </li> is created 
const newTodoItemText = document.createTextNode("Teach student"); // text node "Teach Student " is create 
newTodoItem.appendChild(newTodoItemText)
console.log(newTodoItem); // <li>Teach student</li>
// now we need to add this element 
todoList.append(newTodoItem);

// shortcut method 
const newTodoItem2 = document.createElement("li");// <li> </li> is created 
// const newTodoItemText2 = document.createTextNode("Teach student 2"); // text node "Teach Student " is create 
newTodoItem2.textContent="todo 2 text content";
// newTodoItem.appendChild(newTodoItemText2)
console.log(newTodoItem2); // <li>Teach student</li>
// now we need to add this element 
todoList.append(newTodoItem2);


// prepend -- adds element in the begining 
const newTodoItem3 = document.createElement("li");// <li> </li> is created 
// const newTodoItemText = document.createTextNode("Teach student"); // text node "Teach Student " is create 
// newTodoItem.appendChild(newTodoItemText)
newTodoItem3.textContent="todo item 3 added at begining prepend";
console.log(newTodoItem3); // <li>Teach student</li>
// now we need to add this element 
todoList.prepend(newTodoItem3);

// remove() an element 
const todo1 = document.querySelector(".todo-list li");// returns first li 
todo1.remove();
console.log(todo1 , " is removed which was prepend");


// insertion method - before and after 
// before
const newTodoItem4 = document.createElement("li");
newTodoItem4.textContent = " this is todo item 4 added before todo-list class";
todoList.before(newTodoItem4);// item added before todoList 
// after insertion method 
const newTodoItem5 = document.createElement("li");
newTodoItem5.textContent = " this is todo item 5 added before todo-list class";
todoList.after(newTodoItem5);// item added before todoList 



// insertAdjacentHTML(where , HTML)
// where can be -> beforebegin , afterbegin , beforeend , afterend
todoList.insertAdjacentHTML("beforeend" , "<li>before end item  insertAdjacentHTML</li>");
todoList.insertAdjacentHTML("afterbegin" , "<li>after begin item using  insertAdjacentHTML </li>");
todoList.insertAdjacentHTML("beforebegin" , "<li>beforebegin item using  insertAdjacentHTML </li>");
todoList.insertAdjacentHTML("afterend" , "<li>afterend item using  insertAdjacentHTML </li>");

// clone nodes 
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent="new todo";
ul.append(li);// first this will be appended
ul.prepend(li); // now append will be removed and it will be prepended
const  li2 = li.cloneNode(true); // true means deep cloning 
ul.append(li2);


// some old methods to support poor Internet Explorer
// appendChild , insertBefore , replaceChild , removeChild
/*
const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent="new todo";
ul.appendChild(li);// 

*/
// insert Before 
/*
const referenceNode = document.querySelector(".first-todo");
ul.insertBefore(li , referenceNode);
*/

// replace child 
/*
ul.replaceChild(li , referenceNode); li -> new child , referenceNode -> which is to be replaced 
*/
// remove child
/* 
ul.removeChild(referenceNode);
*/

// ############################# Static list Vs Dynamic/live List ##############
// querySelectorAll() -----> returns a static list 
// getElementBy______() ---> these kind of method return live list 
// static list example 
const listItems = document.querySelectorAll(".todo-list li");
console.log("printing all li inside todo-list class" , listItems);//NodeList(7) [li, li, li, li, li, li, li]
const eightLi = document.createElement("li");
eightLi.textContent="this is 8th li"

ul.append(eightLi);
console.log("printing all li inside todo-list class after adding an element" , listItems); // NodeList(7) [li, li, li, li, li, li, li]

// live list example 
const livelistItems = ul.getElementsByTagName("li");
console.log("printing all li inside todo-list class" , livelistItems);//HTMLCollection(8) [li, li, li, li, li, li, li, li]
const ninethLi = document.createElement("li");
ninethLi.textContent="this is 9th li"

ul.append(ninethLi);
console.log("printing all li inside todo-list class after adding an element" , livelistItems); // HTMLCollection(9) [li, li, li, li, li, li, li, li, li]


// How to get Dimension of element 
const info = sectionToDo.getBoundingClientRect();
const width = sectionToDo.getBoundingClientRect().width;
const height = sectionToDo.getBoundingClientRect().height;
const topheight = sectionToDo.getBoundingClientRect().top;
console.log(info);

// Events 
// click - 3 methods to add this 
// inside HTML tag
// get eleme and then redefined the property , It can be done only once 
// best method addEventListener 

const btun = document.querySelector(".btn");
console.dir(btun);
// method 2 
// btun.onclick = function(){console.log("you clicked me using methdo 2")};
function clickMe(){
    console.log("clicke me using outside fucntion");
}
// btun.addEventListener("click" , clickMe); // event , function
// btun.addEventListener("click" , function(){console.log("clicked using addEvent"); console.log(this)});
btun.addEventListener("click" , ()=>{console.log("clicked using addEvent arrow function"); console.log(this)})
// this keyword has the value equal to the element in case of normal function
// in case of arrow function , this has value equal to the window object 




