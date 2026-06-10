//Promise
// eventual completion of an async operation

// function greet(){
//     return new Promise((resolve) => {
//         console.log("Hi");
//     })
// }

// setTimeout(greet,3000);


// promisified version of readfile and setTimeout

// const fs = require("fs")
// function promisifiedReadFile(file,encoding){
//     return new Promise(function(resolve,reject){
//         fs.readFile(file,encoding,function(err,data){
//             if(err){
//                 reject(err);
//             }
//             else{
//                 resolve(data);
//             }
//         })
//     });
// }

// promisifiedReadFile("b.txt","utf-8")
//     .then(function(data){
//         console.log(data)
//     })
//     .catch(function(err){
//         console.log("error while reading");
//     })

// function promisifiedSetTimeout(delay){
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {resolve()}, delay);
//     })
// }
// promisifiedSetTimeout(4000)
//     .then(function(){
//         console.log("this is a setTimeout function ");
//     })


   


// const map = new Map([["name","sohail"]]);
// const map2 = new Map(map);
// console.log(map)
// console.log(map2)


// const merged = new Map([...map,...map2]);
// console.log(merged)


const nums = [1,3,3,3,2,2]
// const freq = new Map();
// for(const num of nums){
//     freq.set(num, (freq.get(num) || 0)+1);
// }
// console.log(freq);

// const unique = [...new Map(nums.map(item => [item,item])).values()];

// console.log(unique);


// 1.map the array
const paris = nums.map(i => [i,i]);
console.log(paris)
// 2.create a map
const replace = new Map(paris)
console.log(replace)
// 3.get all values
const ans = replace.values();
console.log(ans);
// 4. convert to array
const newarr = [...ans];
console.log(newarr);

const obje = { "name" : "sohail"}
const a = new Map(Object.entries(obje));

for(let [key,value] of a){
    console.log(key + value);
}

