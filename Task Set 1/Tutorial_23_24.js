// arrow function 

console.log(this);
// gives {} however it returns a whole lot of info when run in browser. as browser is the current context. 

()=>{}

const f=()=>{
    console.log("Hello")
}
f();


// Immediately executing functions, it is ended with semicolon
// Named IIFE
(function chai(){
    console.log("CHAI")
})(); 

// Unnamed IIFE
// this can be done through arrow function as 
(()=>{
    console.log("COFFEE")
})()

// params
((name)=>{
    console.log(name)
})("MYNAME")