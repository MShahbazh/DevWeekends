
# Call
The `call()` method is a method that execute a function immediately while telling what this `this` keyword should point to inside that function along with all the arguments of the function. 
## Example
For example consider the code snippet
```javascript
function setname(user){
    this.username=user
}

function setuser(username,age){
    setname(username)
    this.age=25
}

const user=new setuser("Abcd",25)
```
## Problem
In the above example `setname()` function is meant to set the `username` of `setuser()` function. Meaning that the `this` at line 2 is meant is supposed to be from user function. But one calling `console.log(user)` we get the below output: 
```text
setuser { age: 25 }
```
which proves that `setname()` function did not worked as it intended to be used its own `this`
## Solution
That is where `call()` is useful. we will force `setname()` to use the `this` context of `setuser()`. So the outer function shares its own`this` reference with `setuser()`. This is achieved by calling `call()` and passing `this` as first argument. The corrected code looks like: 
```javascript
function setname(user){
    this.username=user
}

function setuser(username,age){
    setname.call(this,username)
    this.age=25
}

const user=new setuser("Abcd",25)
```
Now the correct output looks like: 
```text
setuser { username: 'Abcd', age: 25 }
```

# Bind
The `bind()` method does not execute a function. Instead, it acts as a tool that create a brand new copy of function and then locking `this` context inside it so it can be safely used. 
`bind()` differs from `call()` in the execution timing. `call()` immediately fires of when the constructor is called so it will be useless where timing or events is required such as event listening. Moreover, `call()` returns the value which is intended to be returned by the function, `bind()` returns a completely brand new copy of function which can be executed later with its `this` pointing to main outer class or function. 

## Example
Consider the code snippet 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
    </head>
</head>
<body>
        <button class="flex flex-col items-center border-3 rounded-2xl p-3 m-3 bg-red-400 text-white border-red-800 text-lg font-bold cursor-pointer">Button Clicked</button>
</body>
<script>
    class React{
        constructor(){
            this.library="React"
            this.server="http://127.0.0.1:5500"
          document.querySelector('button').addEventListener('click',this.handleClick,false)
        }
        handleClick(){
            console.log("BUTTON CLIKED")
            console.log(this.server);
        }
    }
    let app=new React()
</script>
</html>
```
As soon as the button is clicked, `handleClick()` is executed and we get the below output
```text
BUTTON CLIKED
undefined
```
## Problem
The problem is that when a function is passed directly into a event listener, the browser changes its execution context. So inside `handleClass()`, `this` does not point to `React` class, rather it points to HTML `<button>` element itself. 
So on calling `this.server`, JS gives `undefined` as `<button>` does not have a property named `server`

## Solution 
In order to get the `this` context of `React` class we will use `bind()`. So the correct JS code of above example will be
```javascript
<script>
    class React{
        constructor(){
            this.library="React"
            this.server="http://127.0.0.1:5500"
          document.querySelector('button').addEventListener('click',this.handleClick.bind(this),false)
        }
        handleClick(){
            console.log("BUTTON CLIKED")
            console.log(this.server);
        }
    }
    let app=new React()
</script>
``` 

# Note: 
By default the execution context of `this` is global/window. After calling a function with `new` , it overrides all `this` functions and map the function's `this` context onto it. 
In case of `bind()` or `call()`, the main or base class's execution context is mapped on `this`. 