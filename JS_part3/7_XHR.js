const url = "https://jsonplaceholder.typicode.com/posts"
const xhr = new XMLHttpRequest();
console.log(xhr)
// we will be using fake API as a server to learn the XHR
// Browser by default do GET request.
// step 1 : use open(arg1,arg2) method , arg1 can be GET/POST/PUT/PATCH  arg2 is url

// console.log("before open ready state " , xhr.readyState)
xhr.open("GET" , url);
// console.log("after open ready state " , xhr.readyState)

/*
xhr.onreadystatechange=function(){ // this function will run everytime when ready state is changed but in this we are curious to do when it is 4
    // console.log(xhr);
    if(xhr.readyState===4){
        const response = xhr.response;
        console.log(xhr.response);
        console.log(typeof xhr.response);//string 
       const data= JSON.parse(response);// string to JSON conversion 
       console.log(typeof data);//JSON Object
    }
}
*/

// this onload will only call when ready state will become 4

/*
xhr.onload = function(){
    console.log(xhr.readyState);
    const response = xhr.response;
    console.log(xhr.response);
    console.log(typeof xhr.response);//string 
   const data= JSON.parse(response);// string to JSON conversion 
   console.log(typeof data);//JSON Object
};
*/

// error Handing 

xhr.onload = ()=>{
    if(xhr.status>=200 && xhr.status<300){ // successful
        const data = JSON.parse(xhr.response);
        console.log(data);
        const id = data[3].id;// 4
        const xhr2 = new XMLHttpRequest();
        const url2 = `${url}/${id}`;
        xhr2.open("GET" , url2);
        xhr2.onload = ()=>{
            const data2 = JSON.parse(xhr2.response);
            console.log(data2);
        }
        xhr2.send();
    }
    else{
        console.log("something went wrong");
    }
}

xhr.onerror = ()=>{
    console.log("Network error");
}

xhr.send();


/*
values of readystate at 
Value	State	Description
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
*/

// HTTP status code 
/*
There are five classes defined by the standard:
0<=x<=9
1xx informational response – the request was received, continuing process
2xx successful – the request was successfully received, understood, and accepted
3xx redirection – further action needs to be taken in order to complete the request
4xx client error – the request contains bad syntax or cannot be fulfilled
5xx server error – the server failed to fulfil an apparently valid request
*/


// Using promises instead of Call Back

const url3 =  "https://jsonplaceholder.typicode.com/posts"


function sendRequest(method , url){
    return new Promise(function(resolve , reject){
        const xhr = new XMLHttpRequest();
        xhr.open(method , url);
        xhr.onload = function(){
            if(xhr.status>=200 && xhr.status<300){
                resolve(xhr.response);
            }
            else{
                reject(new Error("something went wrong "));
            }
        }
        xhr.send();
    })
}

// const whatIsThis = sendRequest("GET" , url3);
// console.log(whatIsThis)// Promise
sendRequest("GET" , url3)
.then(response =>{
    const data = JSON.parse(response);
    // console.log(data)
    return data;
})
.then(data=>{
    // console.log(data);
    const id = data[3].id;
    return id;
})
.then(id=>{
    // console.log(id);
    const url = `${url3}/${id}`;
    const xhr = new XMLHttpRequest();
    return sendRequest("GET" , url);
})
.then(newResponse =>{
    // console.log(newResponse);
    const newData = JSON.parse(newResponse);
    console.log(newData);
})
.catch(error=>{
    console.log(error);
})



