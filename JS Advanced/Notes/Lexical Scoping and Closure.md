
# Lexical Scoping
Lexical scoping is a rule in JS that decides which part of our code and see and use specific variables. "Lexical" means location that means the scope is locked when and where we write the code not when it is executed. Through lexical scoping the outer function cannot access inner function variables but inner function can see and use outer's variable because inner is in the scope of outer of function. 
Lexical scoping is a concept that determines the entire lifeline and access of variables. On the other hand **block scope** defines the actual physical boundary of JS variables through `{}`.  
When JS needs a variable, it triggers a process called **Scope Chain**. This process is one way and always bubbles up (move upward). first it checks in **Local Scope**. If not found then it moves to **Outer Scope**. It keeps bubbling until it finds the variable or reaches **Global Scope**. The Chain bubbles up using 3 rules : 
- Look Upward only:
  The JS engine search local scope first, if it is missing it moves towards outer ones. 
  
- Never look Downward:
  Outer Scope cannot look inside a child scope to get variables, it must move more outward 
  
- Stop at Global Scope
  The search stops if the match is find. if it is not, it keeps bubbling outward until it reaches Global Scope. If it still does not find anything, it crashed and gives a `ReferenceError`
## Example : 
Consider the example: 
```javascript
function outer(){
    let username="Hello"
    function inner(){
        console.log("INNER: ",username);        
    }
    inner()
}
outer()
console.log("OUTER: ", username);
```
in this example, `inner()` gets access to `outer()` because it is in the lexical scope of `inner()` function. So first line 4 will print as it is. However, line 9 will cause an error. line 9 uses a variable named `username`. Since it is in Global scope it searches for a variable in the local global scope. After failing to search it will throw a `ReferenceError`. It will not bubble up because Global scope is the last and outer most scope where bubbling stops. 
```text
INNER:  Hello
console.log("OUTER: ", username);
                       ^
ReferenceError: username is not defined
```
Even though `username` is defined inside `outer()` it won't look inside. 

# Closure
A **closure** is the combination of a function with reference to its lexical environment. A closure gives an inner function access to the outer function's scope. It remembers that lexical scope, even when the outer function is completely gone from the execution stack. 

## Example
Consider the example
```javascript
    function clickHandler(color){
        // document.body.style.backgroundColor=color
        return function(){
            document.body.style.backgroundColor=color
        }
    }    
    document.getElementById('orange').onclick=clickHandler("orange")

document.getElementById('green').onclick=clickHandler("green")
```
`clickHandler()` is an outer function. After it is called, it takes `color` variable. The outer function returns an inner function. JS then creates a closure. This closure allows the inner function to save the lexical scope of `clickHandler()`. Without this, as soon as function is returned it looks for `color` which it will not find causing a crash. 