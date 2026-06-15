// set timeout  promisified

// function greet(){
//     console.log("hello world");
// }
// function rej(){
//     console.log("error occured");
// }

// function setTimeoutPromisified(delay){
//     return new Promise(function(resolve,reject){
//         if(resolve){
//         setTimeout(resolve,delay);
//         }
//         else{
//             reject();
//         }
       
//     })
// }
// setTimeoutPromisified(3000)
// .then(() => gret()).catch(() => rej());


// file read promisified

// const fs = require("fs");
// function readFilePromisified(file,encoding){
//     return new Promise(function(resolve,reject){
//         fs.readFile(file,encoding, (err,data)=>{
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     })
// }

// readFilePromisified("b.txt","utf-8")
// .then((data)=> console.log(data))
// .catch((err)=> console.log("erro happend :" + err.message));


// ASYNC AWAIT BASIC SYNTAX
// 1. logs `hi` after 1 second
// 2. logs `hello` 3 seconds after `step 1`
// 3. logs `hello there` 5 seconds after `step 2`

// function setTimeoutPromisified(delay){
//     return new Promise(resolve => {
//         setTimeout(resolve, delay);
//     });
// }

// async function doOperation(){
//     await setTimeoutPromisified(1000);
//     console.log("hi");
//     await setTimeoutPromisified(3000);
//     console.log("hi there");
//     await setTimeoutPromisified(6000);
//     console.log("hi there .... ");
// }

// doOperation();


//=================================================================
// read write using callback
// const fs = require("fs");


// function readAndWrite(file){
//     fs.readFile(file,"utf-8",function(err,data){
//         if(err){
//             throw new Error("no file is detected");
//         }
//         data = data.replace(/^\s+/g, " ").trim();
//         console.log(data);
//         fs.writeFile("b.txt",data,function(){
//             console.log("file written successfully");
//         })
//     })
// }

// readAndWrite("a.txt");


// readAndWrite promisified

// function readAndWrite(file){
//     return new Promise(resolve => {
//         fs.readFile(file,"utf-8",function(err,data){
//             data = data.trim();
//             console.log(data);
//             console.log("read the file...")
//             fs.writeFile(file,data,function(err){
//                 if(err){
//                     throw new Error("error happened...");
//                 }
//                 resolve();
//             })
//         })

//     })
// }

// // readAndWrite("a.txt").then(() => console.log("read successfully.."));

// async function doOperation(){
//     await readAndWrite("a.txt");
//     console.log("read and write successfully");
// }

// doOperation();



//==========================================================
// callback  based readfile with error handling
// const fs = require("fs");

// function afterDone(file){
//     fs.readFile(file,"utf-8", function(err,data){
//         if(err){
//             console.log("error in reading");
//         }
//         console.log(data);
//     })
// }

// afterDone("a.txt");


// const fs = require("fs")
// function afterDone(file){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(file,"utf-8",function(err,data){
//             if(err){
//                 reject("Error in reading the file");
//             }
//             resolve(data);
//         })
//     })
// }

// afterDone("a.txt").then((data) => console.log(data)).catch((err)=> console.log(err));

//======================================================================

// function greet(){
//     console.log("greeting a person");
// }

// function setTimeoutPromisified(delay){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(), delay);

//         if(delay < 0){
//             reject();
//         }
//     })
// }

// setTimeoutPromisified(2000).then(() =>{ greet(); console.log("reading")}).catch(() => console.log("err0r"));


// const fs = require("fs")
// function readFilePromisified(file){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(file,"utf-8",function(err,data){
//             if(err){
//                 reject();
//             }
//             resolve(data);
//         })
//     })
// }
// readFilePromisified("a.txt").then((data)=> console.log(data)).catch(() => console.log("error in reading"));




//=====================================================================

// let url = "https://jsonplaceholder.typicode.com/users"

// async function getData(){
//     try{
//         const response = await fetch(url, {
//             method : "GET",
        
//         });
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }

// }

// getData();



// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method : "POST",
//     headers :  { "Content-Type" : "application/json"},
//     body : JSON.stringify({
//         title : "Javascript",
//         body : "Fetch API",
//         userId : 1
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/posts/1",{
//     method : "PUT",
//     headers : {  "Content-Type" : "application/json"},
//     body : JSON.stringify({
//         title : "Updated title",

//     })
// })
// .then(response => response.json())
// .then(data => console.log(data));


// fetch("https://jsonplaceholder.typicode.com/users",{
//     method : "GET",
   
// })
// .then(response => response.json())
// .then(data => console.log(data));



////
// const fs = require("fs");
// function main(file){
//     // count words
    
//     const read = fs.readFile(file,"utf-8",(err,data)=>{
//         if(err){
//             throw new Error("error in reading");
//         }
        

//          const count = data.split("\n")
//             .map(line => line.trim())
//             .filter(line => line !== "")
//             .join("\n");
    
//         const length = count.split(" ").length;
//         console.log(length);
//     })
   
    
// }

// main("a.txt");


/// thenable function

// const obj = {
//     then(resolve){
//         resolve("hello world");
//     }
// }

// // obj.then((data) => console.log(data));
// Promise.resolve(obj).then(i => console.log(i));


// const obj = {
//     then: "hello"
// };

// Promise.resolve(obj).then(console.log);