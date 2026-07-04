// Strings in Js

let name="Hello"
let name2="World"
console.log(name+name2)
console.log(`Name + Name2 = ${name}${name2}`) // this is better 


let a="Hello"
let b=new String("Hello_b")

// accessing any char at an index
console.log(b[0])

// length
console.log(name.length)

// uppercase
console.log(name.toUpperCase())

// char at i-th position 
console.log(name.charAt(2))

// index of a char
console.log(name.indexOf('e'))

// substring
var num=name.substring(1,5)
console.log(num)

// slicing
var num=name.substring(-1,3)
console.log(num)

// trim 
var num="      num     "
console.log(num.trim())

// replace 
console.log(num.replace(' ','#'))

// replaceAll
console.log(num.replaceAll(' ','#'))

// spliting string into array 
var num="1-H-3-4"
console.log(num.split('-'))

// includes
console.log(num.includes('e'))