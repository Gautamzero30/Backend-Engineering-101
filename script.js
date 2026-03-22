// let n = 5;
// for(let i =0;i<n;i++){
//     console.log("hello, ",i)
// }

// console.log("bye!")
// let args= process.argv;
// for (let i = 2;i<args.length;i++)
// {
// console.log("hello & welcome to ", args[i]);

// }
 
// const someValue = require("./math");

// console.log(someValue.sum(2,2));
// console.log(someValue);

// const fruits = require("./Fruits");
// console.log(fruits[0].name);



// const figlet = require('figlet');

// figlet("Gautam sah", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });


import {sum,pi} from "./math.js";
import { generate,  } from "random-words";

console.log(sum(1,2));
console.log(pi);
console.log(generate());