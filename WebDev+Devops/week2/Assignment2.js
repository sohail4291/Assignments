// counter that updates on every one second

// let count = 0;
// function counter(){
//     count += 1;
//     console.log(count);
// }

// const id = setInterval(counter,1000);
// setTimeout(() => {
//     clearInterval(id);
// }, 4000);


// reading from file

// const fs = require("fs");
// const contents = fs.readFileSync("./a.txt","utf-8");

// console.log(contents);
// fs.writeFileSync("b.txt",contents);
// // delete 
// // fs.unlinkSync("a.txt");


// // read and write
// const fs = require("fs");
// let data = fs.readFile("a.txt", "utf-8", (err,content)=> {
//     if(err){
//         throw new err;
//     }
//     console.log(content);
// });


// let newdata = `This is a txt file. It contains the data of the text \n
//  this is a new data `;


//  fs.writeFile("b.txt", newdata, (err)=>{
//     if(err){
//         throw new err;
//     }
//     console.log("data written successfully");
// })


// // using callback hell
// const fs = require("fs")
// function doOperation() {
//     fs.readFile("a.txt", "utf-8", (err, contents) => {
//         if (err) {
//             throw err;
//         }
//         console.log("data read .....")

//         console.log("data read => " + contents);

//         fs.writeFile("b.txt", contents, (err) => {
//             if (err) {
//                 throw err;
//             }
//             console.log("data written ...");


//             fs.appendFile("b.txt", "new data appended....", (err) => {
//                 if (err) {
//                     throw new err;
//                 }
//                 console.log("data appended...");
//             });
//         });
//     });

// }

// doOperation();


// using fs/promises module
// const fs = require("fs/promises");

// async function doOperation() {
//     try {
//         const read = await fs.readFile("a.txt", "utf-8");

//         console.log("data read...");
//         console.log(read);

//         await fs.writeFile("b.txt", read);
//         console.log("data written...");

//         await fs.appendFile("b.txt", "\nnew data appended....");
//         console.log("data appended...");
//     } catch (err) {
//         console.error("Error:", err);
//     }
// }

// doOperation();


// file cleaning 

// const fs = require("fs")

// let read = fs.readFile("a.txt","utf-8",(err,contents)=>{
//     if(err){
//         throw err;
//     } 
//     console.log(contents);
//     // let newdata = contents.replace(/\s+/g," ").trim();

//     let newdata = contents.split("\n")
//                     .map(line => line.replace(/\s+/g," ").trim())
//                     .filter(line => line !== "")
//                     .join("\n");
//     fs.writeFile("b.txt",newdata,(err)=>{
//         if(err){
//             throw new err;
//         }
//         console.log("data written");
//     })
//     console.log(newdata);
   
// });


// replace hello with hi all places
// const string = "hello hello hello";
// let a = string.replace(/hello/g, "hi");
// console.log(a);

let object = {
    name : "sohail"
}

// console.log(Object.entries(object));

// let c = [ 
//     ["name" , "sam"],
//     ["age", 23 ]
// ]
// console.log(Object.fromEntries(c));
// console.log(c);

// Object.seal(object);
// object.name = 24;
// console.log(object);

// const str = "a1 b2 c3";

// const matches = [...str.matchAll(/\d/g)];

// console.log(matches);


// CLOCK FUNCTION
function clock(){
    const date = new Date();
    let hours = String(date.getHours()).padStart(2,"0");
    let minutes = String(date.getMinutes()).padStart(2,"0");
    let seconds = String(date.getSeconds()).padStart(2,"0");

    console.log(`${hours} : ${minutes} : ${seconds}`);
    let hours12 = date.getHours();
    let ampm = Number(hours) > 12 ? "pm" : "am";
    hours12 = hours12 % 12;
    hours12 = hours === 0 ? 12 : hours12;

    const hh12 = String(hours12).padStart(2,"0");
    console.log(`${hours} : ${minutes} : ${seconds} : ${ampm}`);

}
let id = setInterval(clock,1000);
setTimeout(()=> clearInterval(id),5000);








// let count = 0;
// function operation(){
//     console.log(count);
//     count += 1;
// }
// let id = setInterval(operation,1000);
// setTimeout(() => clearInterval(id),5000);
