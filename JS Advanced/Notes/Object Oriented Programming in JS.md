
JavaScript is a multi-paradigm programming language. Unlike other OOP languages which rely on strict blueprints called classes, JS uses prototype based OOP. In this model objects inherit directly from other objects through prototype chain. However, JS provides `class` , so that users can make classes for OOP explicitly.
**"Everything in JS is an Object at the end of the day even if functions"**
# 4 Pillars of OOP
- Abstraction
- Encapsulation 
- Inheritance
- Polymorphism 

# Use of `new` and `this` keyword

## The `new` keyword:
It is an operator that initiate a separate, unique and isolated instance of a user defined object type or class. 

## The `this` keyword:
A reference variable that points directly to the execution context of current function. 
 
```javascript
function user(a,b,c){
    this.a=a
    this.b=b
    this.c=c
}
const user1=new user("Hello",12,false)
console.log(user1)
```

# Prototypes
A prototype is a hidden parent object attached to every JS Object. It acts as a backup storage for features. 
We can add our own custom or properties to a prototype at any time

```javascript
function createUser(username,score){
    this.username=username
    this.score=score
}

// creating your own prototype
createUser.prototype.increment=function(){
    this.score++
    console.log(this.score)
}
const user1=new createUser("Hello",25)
const user2=new createUser("World",250)

// only works if we initiate the object using 'new' keyword 
user1.increment()
```
Similarly
```javascript
const obj={
    username:"Hello"
}
Object.prototype.myProt=function(){
    console.log("THIS IS THE PROT")
}
obj.myProt()
```
Both of the examples inject the custom made prototype to the Higher level Object. which means it can be accessed by everything in JS. To make it exclusive to only one object, for suppose to the `Array` we can use 
```javascript
Array.prototype.myProt=function(){
    console.log("THIS IS THE PROT")
}
```
Now the `myProt()` can only be accessed by `Array`. 

# Behind the Scenes of `new` keyword
As soon as a `new` keyword is called. A new Object is created. The `new` keyword initiates the creation of new JS object. 
After that, the newly created Object gets linked to prototype property of the constructor function. This means it has access to properties and methods defined on the constructor's prototype. 
The constructor is then called with the specified arguments and this is bound to the newly created Object. 
After that the new object is returned.. 

# Inheritance 
## Object literal Pattern
Inheritance is done using the `__proto__` prototype only when we are using object literal pattern. For the classes which are implemented using `class` keyword we use `extends` key word. 
Suppose an example,
```javascript
const A={
    username:"Hello"
}

const B={
    grade:"CS"
}
```
`B` can inherit `A` in many ways using `__proto__`
```javascript
// inside the class
const B={
    grade:"CS",
    __proto__:A
}

// outside the class
B.__proto__=A

// Modern syntax
Object.setPrototypeOf(B,A)
```

## Class Pattern
Class Pattern uses `extends` for ineritance
```javascript
class A{}
class B : extends A{}
```
# Classes
Although JS does not need for a separate class syntax, however it is included in it. 
Basic Syntax
```javascript
class User{
	constructor(username,score){
		this.username=username;
		this.score=score
	}
	// all other functions 
}
```
Even the custom made class we create in JS is automatically linked to main `Object` class at very bottom of the chain. 
Moreover, functions definition inside `class` does not use `function` keyword so it cannot be be called with the `new`keyword. 

## Access Levels of Datatypes
- Public : Accessible from anywhere (default)
- Private : Accessible only inside class. Uses `#` prefix 
- Protected : Not Natively supported in JS. It works like public attributes and can be access however `_` is used to show as flag to not to use it outside the class

## Basic Example

```javascript
class User{
    #password // private
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.#password=password
    }
    encryptPassword(){
        return `${this.#password}passzxcv`
    }
}

const user=new User("Hello","world","Password")
console.log(user);
console.log(user.encryptPassword());
```
The Behind the scenes of this Example: 
```javascript

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}passzxcv`
}

const user=new User("Hello","world","Password")
console.log(user);
console.log(user.encryptPassword());
```


## use of `static`
The `static` keyword defines properties and methods that belong directly to the class itself rather than to instances. static features are directly called using class name. Instances which are created using `new` keyword cannot access static methods. Inside a static method, the `this` keyword refers to the class itself, not an instance object. 
```javascript
class User{

    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username} | LOGGED IN`);
    }
    
    static Id(){
        return "Hello"
    }
}

const u=new User("World")
// console.log(u.Id()) // error
console.log(User.Id())
```


## Inheritance 
Inheritance is done using `extends` keyword. `super` keyword is then used to call functions of inherited class. JavaScript does not allow multiple inheritance so `super` points to the only inherited class. 
```javascript
class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username} | LOGGED IN`);
    }
}
  
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
}

const teach=new Teacher("Teacher","email","Password")
console.log(teach)
```

### use of `instanceof` 
From the above example, the following boolean statement will return false
```javascript
console.log(teach===Teacher)
```
or any other objects or classes being compared directly because they are not the same. But `instanceof` operator whether the object is an instance of the class or not. So if we call:
```javascript
console.log(teach instanceof Teacher)
```
It will return true as teach is an instance of class Teacher not the class itself. 


## Getter and Setter
In JS `class` getter and setter are special functions that allow us to read and write properties. 

- `get` 
  returns the objects attribute which is being called. takes zero parameters. 
  
- `set` 
  a method that executes when someone write. when someone tries to change a property, the setter executes automatically to validate, clean or perform operations to data before it comes to memory. It only takes one parameter

### Example
```javascript
class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get password(){
        return this.password
    }
    set password(pass){
        this.password=pass
    }
}

const user=new User("EMAIL","PASSWord")
console.log(user.password);
```
This code will crash and throws `Maximum call stack size exceeded` due to constructor assignment calling setter function but setter function assignment calling setter itself again infinite times. 
- Once a setter is defined, every single assignment goes through it automatically. 
- Setter and Getter name must exactly match the attribute name. 
- JS attributes can only have one setter and getter. 
To solve this, we make the getter and setter name must remain same to the public attribute name, but we intercept the operation by storing the actual data in a new internal variable, created by appending an underscore `_` to the name. We can also use different name as long as getter and setter names are linked to public variable. 
```javascript
class User{
    constructor(email, password){
        this.email=email
        this.password=password
    }

    get password(){
        return this._password
    }
    set password(pass){
        this._password=pass
    }
}
```

getter and setter through old function prototype method. this is done using `Object.defineProperty()` and make our own customized getter and setter. 
```javascript
function User(email,password){
    this.email=email
    this.password=password

    Object.defineProperty(this,'email',{
        get : function(){
            return this._email
        },
        set : function(val){
            this._email=val
        }
    })
}

const user=new User("EMAIL","PASSWORD")
console.log(user);

/*
OUTPUT:

User { _email: 'EMAIL', password: 'PASSWORD' }
*/
```

we can also make getter and setters in object based classes. 
```javascript
const User={
    _email:"EMAIL",
    _password:"PASSWORD",
    get email(){
        return this._email
    },
    set email(val){
        this._email=val
    }
}

const tea=Object.create(User)
console.log(tea.email);
```
`Object.create()` is a factory function used to create new empty object and link its prototype pointer to `__proto__` to an existing object. 
