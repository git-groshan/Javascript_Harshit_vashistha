 /**
  * AJAX : Asynchronous JavaScript and XML
  * HTTP Request: It's a wat to communicate between client(Browser) and server . Hyper Text Transfer Protocol
  * - AJAX , It is a set of web development techniques using many web technologies on the "client-side" to create asynchronous web applications
  * 
  * Using AJAX , web application can send and retrieve data  from a server asynchronously(in the background) without interfacing with the display and behaviour of existing page.
  * We don't use data in XML format anymore . We use JSON now
  * 
  * We have 3 most common ways to create and send request to server 
  * 1. xmlHTTPRequest or xHR (old way of doing)
  * 2. fetch API (new way of doing)
  * 3. axios (this is third party library)
  * 
  */
const url = "https://jsonplaceholder.typicode.com/posts"
 const xhr = new XMLHttpRequest();
//  console.log(xhr);
// step 1 : use open() method
console.log(xhr.readyState)
xhr.open("GET" , url);
console.log(xhr.readyState);

xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
    if(xhr.readyState===4){
        console.log(xhr.readyState);
        const response = xhr.response;
        const data = JSON.parse(response);
        console.log(typeof data)
    }
        
}
xhr.send();
