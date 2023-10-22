// asycn await 
// const url = "https://jsonplaceholder.typicode.com/posts"

// fetch(url)
// .then((response)=>{
//     return response.json();
// })
// .then((data)=>{
//     console.log(data);
// })

console.log("script start")

const url = "https://jsonplaceholder.typicode.com/posts"
async function getPost(){
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("something went wrong");
    }
    const data =  await response.json();
    return data;// Promise 
}

// above function in arrow function 
const getPosts = async ()=>{
    const response = await fetch(url);
    if(!response.ok){
        throw new Error("something went wrong");
    }
    const data =  await response.json();
    return data;// Promise 
}

const myData = getPost();
console.log(myData);// Promise

myData.then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log("inside err");
    console.log(err);
})

console.log("script end");
