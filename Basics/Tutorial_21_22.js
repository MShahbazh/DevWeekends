// Scopes

let a=10 //  block scoped 
var b=10 // function scoped 
const c=10 // block scoped 


// nested scope
function f1(){
    let user="Hello"
    function f2(){
        let user2="World"
        console.log(user);
    }   
    f2()
}
f1()