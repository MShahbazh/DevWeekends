// All About Objects

var obj={}
var obj2={
	name: "Hello",
	is_there:false,
	id:1023
}
console.log(obj2);

// accessing elements

// first method : 
console.log(obj2.name);

// second method using brackets similar to array 
console.log(obj2["name"]);
let new_obj={
    "name":5
}
console.log(new_obj.name);

// adding symbol
let sym=Symbol("Hello")
const obj3={
    [sym]:"New-symbol"
}

// lock object from changes
Object.freeze(obj3)

new_obj.name=function(){
    console.log("Hello world")
}
console.log(new_obj.name); // prints: [Function (anonymous)]
console.log(new_obj.name()); // prints "Hello World" and Undefined

// reference same object inside the function 
new_obj['age']=22
new_obj.name=function(){
    console.log(`${this.age}`);
}
new_obj.name();

// adding new key value pairs 
let ob={}

// dot 
ob.name="Hello"

// square 
ob["age"]=23

// spread
const new_ob={...ob,new_name:"World",new_age:23}
ob=new_ob

// Object.assign() 
Object.assign(ob,{
new_age2:55
})
console.log(ob);

// one of the way to to delete a key
delete ob.name
console.log(ob);

// Constructor method
const new_cons=new Object()

// Object inside an Object 
let q=new Object()
q.name="Hello"
q.age=25
let w=new Object()
w.f1=2
w.f2=3
w.f3=4
q.w_values=w
console.log(q);

// Object joined with Object 
var e={e1:1,e2:3}
var g={g1:4,g2:5}
let obj4 = Object.assign({},e,g)
console.log(obj4)

// Getting keys
console.log(Object.keys(e));

// destructuring of Objects 

const {e1:e_value}=e
console.log(e_value);

