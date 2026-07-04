
JavaScript is a synchronous single threaded language. It means it can only process one line of code at a time. In a single threaded language, each operation waits for the last one to complete before executing. However, if a function is blocked the entire browser freezes. To solve this, JS uses Asynchronous programming using Async. 
![[Pasted image 20260629002314.png]]
# JavaScript Async working 

![[Pasted image 20260629013604.png]]

# Functions

- `setTimeout(handler,time)` => It fires the function after a specific time. the time is by default in 'ms'
```javascript
const s=setTimeout(()=>{
	console.log("Happy Nation!")
},2000)
```  

- `clearTimeout()`=> It clears a specific  setTimeout() from queue. and often stops it when called earlier. 
  ```javascript
  // so to stop the above timeout function
  clearTimeout(s)
  ```
  
- `setInterval()`=> it triggers a function with a difference of interval provided. 
  ```javascript
s=setInterval(() =>{		       document.querySelector('h1').innerHTML="Hello";
},2000);
  ```
  
- `clearInterval()`=> same as `clearTimeout()` 
  ```javascript
  // clears or stops the interval by dequeuing it 
  clearInterval(s)
  ```


  
