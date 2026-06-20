"use strict"; // treat all JS code as newer version

// Datatypes in JS

/*

1. Number
2. String
3. Boolean => true/false
4. undefined
5. null
6. symbol
7. Object
*/

let name = "Hello"
let age = 5
let is_there=true
console.table([name,age, is_there])

let is_null=null
let undef;
console.table([is_null,undef])

console.log(typeof "Hello")
console.log(typeof 5)
console.log(typeof null) // => type : object 
console.log(typeof undefined) // => type : undefined