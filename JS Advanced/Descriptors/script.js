// calling Object.getPropertyDescriptor
const descript=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descript);

// creating Object
const chai={
    name:"CHAI",
    price:300,
    is:true,
    order: function(){
        console.log("FUNCTION AAGAYA");
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [a,b] of Object.entries(chai)) {
    if(typeof b !== "function"){
        console.log(`KEY : ${a} | VALUE : ${b}`);
    }
}

// setting enumarable of chai.name false
Object.defineProperty(chai,"name",{
    value:"COFFEE",
    writable:false,
    enumerable:false,
    configurable:false
})
console.log("\nAFTER FALSE ENUMERABLE OF NAME");

console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [a,b] of Object.entries(chai)) {
    if(typeof b !== "function"){
        console.log(`KEY : ${a} | VALUE : ${b}`);
    }
}