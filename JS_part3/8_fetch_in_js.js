const url = "https://jsonplaceholder.typicode.com/posts"
const whatIsThis = fetch(url);
console.log(whatIsThis);// promise 

fetch(url) // Be default GET method is called 
.then(response=>{
    console.log(response); // there is a parmeter ok in it which tells repsonse is get or not
    // console.log(response.json()); // Promise 
    if(response.ok){
    return response.json();
    }else{
        throw new Error("Something Went Wrong");
    }

})
.then(data=>{
    console.log(data);
})
.catch(err=>{
console.log("inside catch");// It will run only when network related error occurs
console.log(err);
})
// fetch reject tabhi hoga jab usme network related error aa rhi ho 


/*
fetch(url)
.then(abc=>{
    console.log(abc);
    // console.log(abc.json()); // Promise 
    return abc.json();
})
.then(xyz=>{
    console.log(xyz);
})
*/


// How to POST data in server 

fetch(url,{
    method:'POST',
    body:JSON.stringify({
        title:'foo',
        body:'bar',
        userId:1,
    }),
    headers:{
        'Content-type':'applications/json; charset=UTF-8',
    },
})
.then(resp=>{
    console.log(resp);
    if(resp.ok){
        return resp.json();
    }
})