// const fs = require("fs");
// const contents = fs.readFileSync("a.txt","utf-8");

// console.log(contents);

// const contents2 = fs.readFileSync("b.txt","utf-8");
// console.log(contents2);

// const fs = require("fs");
// fs.readFile("a.txt", "utf-8", function(err,contents){
//     console.log(contents);
// })
// fs.readFile("b.txt","utf-8",function(err,contents){
//     console.log(contents);
// })

// V A L I D A T O R 
// let value = 123;
// if(isNaN(value)){
//     console.log("not a number ");
// }else{
//     console.log("is a number");
// }

// function numValidator(value){
//     return typeof value === "number" && !isNaN(value);
// }
// let ans = numValidator(124);
// console.log(ans);

// function strValidator(string){
//     return typeof string === "string";
// }
// let ans = strValidator("sohail");
// console.log(ans);

// function charValidator(char){
//     return typeof char === "string" && char.length == 1;
// }
// let ans = charValidator("a");
// console.log(ans);


// function alphabetValidator(value){
//     return /^[A-Za-z]+$/.test(value);
// }
// let ans = alphabetValidator("sohail");
// console.log(ans);

// function alphaNumericValidator(value){
//     return /^[A-Za-z0-9]+$/.test(value);
// }
// let ans = alphaNumericValidator("sohail123");
// console.log(ans);


// function emailValidator(value){
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
// }
// let ans = emailValidator("sohail123@gmail.com");
// console.log(ans);

// function passwordValidator(value){
//     return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(value);
// }
// let ans = passwordValidator("Sohail123");
// console.log(ans);


// function urlValidator(value){
//     return /^(https?:\/\/)?([\w\-])+\.[a-zA-Z]{2,}(\/\S*)?$/.test(value);
// }
// const ans = urlValidator("https://google.com");
// console.log(ans);

// function isValidDate(date) {
//   return !isNaN(Date.parse(date));
// }

// console.log(isValidDate("2026-05-29"));

// function isInteger(value){


//     return Number.isInteger(value);

// }
// console.log(isInteger("2"));

let str = "sohail";
str = "samir";
console.log(str.substring(0,4));
//diff betwee substring and slice

let arr = [1,2,3];
arr.unshift(0);
console.log(arr);

// console.log(arr.slice(0,2));
// console.log(arr.splice(0,));

// arr.forEach( n =>{ console.log(n); } );
// let [a,b] = arr;
// console.log(a);
// console.log(b);

// let x= 10.456;
// console.log(x.toFixed(2));
// console.log(parseInt("1000.34"));
// console.log(Number.isInteger(20));


// let obj1= { name : "Sohail"};
// let updated = Object.assign({}, obj1, { age : 23});
// console.log(updated);

// let date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

// let d = new Date();
// d.setFullYear(2000);
// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.toDateString());
// console.log(d.toLocaleDateString());
// console.log(d.toLocaleTimeString());


// console.log(Math.round(4.6));
// console.log(Math.floor(4.6));
// console.log(Math.ceil(4.6));
// console.log(Math.trunc(4.9));
// console.log((Math.random()*10).toFixed(2));


// let arr1 = [1,2,3,4];
// function greet(...arr){
//    console.log(arr);
// }

console.log(__dirname);