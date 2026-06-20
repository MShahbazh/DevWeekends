// Datatype conversions and confusions related to it 

/* 
Number(var) => 
    converts string or any other datatype into a number 
*/

let score="100"
console.log(typeof score)
let num=Number(score)
console.log(typeof num)
console.log(Number(null))
console.log(Number(undefined))
console.log(Number(true))
console.log(Number(false))

/*
Boolean(var) => 
    converts it into its boolean value     
*/

console.log(Boolean(0 )) // => false
console.log(Boolean(10)) // => true
console.log(Boolean(1)) // => true
console.log(Boolean("")) // => false
console.log(Boolean("Hello")) // => true
console.log(Boolean(NaN)) // => false
console.log(Boolean(null)) // => false
console.log(Boolean(undefined)) // => false

/*
String(var) => 
    converts var into String
*/

console.log(typeof String(33))

