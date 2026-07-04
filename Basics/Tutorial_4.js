// Data declarations in Js

// const is short for Constant. it cannot be changed later 
const accountId = 1234
// accountId=5 // will give error

// let [block-scoped] 
let accountEmail="Helloworld"
accountEmail="Whyworld"

let accountState // declaring before initialization

// var [function-scoped]
var accountpassword="JS"
accountpassword="C++"

// No datatype mentioned [global]
accountCity="Khi"

console.table([accountId,accountEmail,accountpassword,accountCity,accountState])
