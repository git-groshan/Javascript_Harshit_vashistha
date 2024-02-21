const root = document.getRootNode();
console.log("printing root node " , root); // root -> document 
console.log("printing child node using childNodes method " , root.childNodes); // childNodes is a property return nodeList
const htmlEle = root.childNodes[0];
console.log(htmlEle);
console.dir(htmlEle);
console.log("html child node " , htmlEle.childNodes); // NodeList(3) [head, text, body]
const headEleNode = htmlEle.childNodes[0];
const textNode = htmlEle.childNodes[1];
const bodyNode = htmlEle.childNodes[2];
console.log("head node " , headEleNode);
console.log("text node " , textNode);
console.log("body node ",bodyNode)
console.log(headEleNode.parentNode); 
console.log(" head node sibling relationship" , headEleNode.nextSibling)
console.log("heade nodesibling  node relationship" , headEleNode.nextSibling.nextSibling)
console.log("heade nodesibling  node textcontent " , headEleNode.nextSibling.nextSibling.textContent)
console.log("printing only next sibling ",headEleNode.nextElementSibling); // return the next element sibiling not the white spaces 

const h1 = document.querySelector("h1");
const h1Parent = h1.parentNode; // div
h1Parent.style.color = "#efefef";
h1Parent.style.backgroundColor = "#333";
const body = h1Parent.parentNode;
body.style.backgroundColor="red";
const body1 = document.body;
console.log("query selector on document node ")
const head = document.querySelector("head");
console.log("query selector on any node ")
const title = head.querySelector("title");
console.log(title.childNodes);

console.log("getting only element not the spaces");
const container = document.querySelector(".container");
console.log(container.childNodes); // it will print the spaces nodes also 
console.log(container.children); // it will print only the elements not the spaces 





