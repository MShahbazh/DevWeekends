// Functions in JS

// definition 
function hello(){
    console.log("Hello");
}
hello()

// assigning to variable
function name(){
    return "Hello"
}
const v=name()
console.log(v)

// passing multiple items as params using rest (spread) operator
function p(...values){
    console.log(values)
}
p(1,2,3,4)
