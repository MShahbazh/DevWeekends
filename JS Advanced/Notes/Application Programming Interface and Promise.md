
API is a like a talking language between two systems. It acts as a communication bridge between two separate software. JavaScript used to handle API through XML AJAX, but now it has switched to fetch. 
- **Past Standard**: XML AJAX(`XMLHttpRequest`)
- **Modern Standard**: `fetch()`
# XML AJAX
It is a built in browser object. It must be initiated before use. 
```javascript
const req=new XMLHttpRequest()
```
It holds the state of the request and transitions from 0 to 4 during a lifecycle 

| State | State Name         | Description                                                                         |
| ----- | ------------------ | ----------------------------------------------------------------------------------- |
| 0     | `UNSENT`           | The client has been created, but the `open()` method has not been called yet.       |
| 1     | `OPENED`           | The `open()` method has been called.                                                |
| 2     | `HEADERS_RECEIVED` | `send()` has been called, and the HTTP response headers and status are available.   |
| 3     | `LOADING`          | The response body is downloading; `responseText` holds partial data.                |
| 4     | `DONE`             | The data transfer is complete. The request finished and the full response is ready. |

## Functions

- `req.send()` => sends the request. after opening. it transmits the requests to server
- `req.readyState` => gives the state of XML at current position 
- `req.onreadystatechange` => it triggers on state change 
  Example: 
  ```javascript
req.open('GET',url)
req.send()    req.onreadystatechange=function(){
      console.log(req.readyState)
      if(req.readState==4){
      const data=JSON.parse(this.responseText)
	      console.log(data)
      }
}
  ```
  the above example prints the state 2,3,4 as it changes. The data we will get is mostly in string. so in order to change it in json we will parse it using `JSON.parse()`.

# Promise
The `Promise` represents eventual completion or even failure of an asynchronous operation and its result. It itself is an Object in JS.  A promise has three states: 
- Pending
- Fulfilled
- Rejected

### Creation of Promise
##### Initialization:
```javascript
const promise=new Promise(function(resolve,reject){
	// Async Task
	setTimeout(()=>{
		console.log("ASYNC COMPLETED")
	},1000)
})
```
we use `.then()` to complete the promise. for that we need to call `resolve()` inside promise. 
```javascript
const promise=new Promise(function(resolve,reject){
    // Async Task
    setTimeout(()=>{
        console.log("ASYNC COMPLETED")
        resolve() // allows .then() to complete
    },1000)
})
// .then has direct relation with resolve
promise.then(function(){
    console.log("PROMISE CONSUMED")
})
```
OR EVEN SHORTER
```javascript
new Promise(function(resolve,reject){
	setTimeout(()=>{
		console.log("ASYNC COMPLETE")
		resolve()
	},1000)
}).then(function()=>{
	console.log("THEN CALLED")
})
```

##### Sending Data
`resolve()` is also used to send data from function to `then()`. `then()` has a parameter which contains resolve data
```javascript
const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({user:"hello"})
    },1000)
})
promise3.then((user)=>{
    console.log(user)
})
```

##### then vs catch vs finally:
We can also use `then()`chaining. if we return value from `then()`it goes to next `then()`block. 
- `catch()` exclusively catches `reject()` in a promise. 
- `then()`handles `resolve()`
- `finally()` method runs its code no matter what. regardless of whether promise is resolved or rejected. 
```javascript
const promise4=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=false
        if(!error){
            resolve("ALL WENT GOOD")
        }
        else{
            reject("ERROR")
        }
    },1000)
})
promise4.then((user)=>{
    return user
}).then((user)=>{
    console.log(user)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("FINALLY THE PROMISE IS EITHER RESOLVED OR REJECTED")
})
```

#### async and await:
Instead of `then()` and `catch()` we can use `async()` and `await`. 
```javascript
async function consume(){
    const response = await promise4
    console.log(response)
}
consume()
```
The problem with them is that they cannot safely handle the error or `reject()` block. For it, we need to use try catch block. 
```javascript
async function consume(){
    try{
        const response = await promise4
        console.log(response)
    }catch(error){
        console.log(error)
    }
}
consume()
```

# Fetch
`fetch()` is a global method that starts the process of fetching a resource from a network. It returns a promise which is fulfilled when response is available. 
`fetch()` works in two parts. Once called, it first requests from the API through Node/Web Browser. If fulfilled, it stores the response in onfulfilled block of memory, otherwise the rejection is stored in onrejection memory block.
Basic Syntax
```
fetch(url,options)
```
url is the API url and options object is an optional array which contains objects configuration such as methods, headers , body etc. 
```javascript
fetch("https:/api.github.com/users/hiteshchoudhary",{
    method:"POST",
    body:{
        username:"hello"
    }
}).then((u)=>{
    console.log(u)
}).catch((error)=>{
    console.log(error)
}).finally(()=>{
    console.log("DONE");
})
```
`fetch()` itself is a promise however we can also call it in inside a user initialized `Promise`
we use it using `async` and `await`
```javascript
async function name() {
    try{
       const reponse=await fetch("https:/api.github.com/users/hiteshchoudhary",{
            method:"POST",
            body:{
                username:"hello"
            }
   })
            if(!reponse.ok){
                throw new Error("hello")
            }
    }
    catch(error){
        console.log(error)
    }
}
name()
```