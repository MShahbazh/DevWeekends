In JS we can sometime use variables and functions before we write them in our code or before they are declared. 
**Hoisting** is JS engine's process of scanning the code and allocating memory slots for all variables, functions and class declarations inside a scope before the execution. This process is done in two phases:

- **Creation Phase**
  The engine first reads the whole script from top to bottom. it ignores all executable actions and only look at declarations. it reserves memory slot for each declaration 
  
- **Execution Phase**
  After the creation phase, the engine then runs the script code line-by-line. it assigns values to variables only when it reaches the line where its value is assigned (using `=` operator)

Hoisting does not send everything to the top of the code base rather it only sends declarations to the top of the specific scope they belong to. 

# Behavior of Different Categories in Memory
During the creation phase, different keywords are assigned different memory states which tells how they behave if called early

- **Fully Hoisted (Functions)** :
  Standard function declarations have their code body saved to memory immediately. They can be safely called anywhere in the scope. 
  
- **Hosted and Undefined (`var`)**  :
  `var` variables are allocated memory and given default value of `undefined` . Calling them early gives `undefined`
  
- **Hoisted but Uninitialized (`let`,`const`,`class`)** :
  There are allocated in memory but the engines flags their state as `<uninitialized>`. This creates a zone called **Temporal Dead Zone**. Calling them before the actual line of declaration cause a `ReferenceError`
  
For Example: 
```javascript
console.log(a); // GIVES UNDEFINED
var a=5;

console.log(b); // CAUSES REFERENCE ERROR
let b;

console.log(c); // CAUSES REFERENCE ERROR
const c=5;
```
  
# Temporal Dead Zone (TDZ):
The **Temporal Dead Zone** is the specific region of a scope. From the moment the scope is entered until the line where a variable is officially declared, during which any attempt to access or modify that variable will crash the program with a `ReferenceError`. It represents a period where hoisted variable remain in memory but is uninitialized. The word "Temporal" means relating to time not position that means TDZ is not defined by where we write the code rather it is by when the code executes. For example: A function can be written above `let`, so it will not crash if we run the function after `let` variable. 
  

