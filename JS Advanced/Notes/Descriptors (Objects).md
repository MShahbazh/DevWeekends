
In JS, properties on an Object are not simple values through key value pair, instead every property follows a hidden configuration called **Property Descriptor"**
Property Descriptor is a set of attributes which tells JS how the property is allowed to behave. it controls whether the property can be modified, accessed by loops, or deleted. 
# Types of Descriptors
There are two types of Descriptors
- Data Descriptors
- Accessor Descriptors 
Every Property of Any Object in JS belongs to one these two groups. 
## Data Descriptor

A data descriptor is a property that contains a physical value and can be writable or read only. It has 4 attributes. 
1. `value` 
   the actual stored value. can be of any JS type. default is `undefined`
   
2. `writable`
	- `true` : the value can be changed using assignment operator 
	- `false` : the value is read-only. In strict mode, it gives error. Otherwise it silently fails. It defaults to `false` when using `Object.defineProperty()`
	  
3. `enumerable`
	- `true` : the property will be visible during loops
	- `false` : the property is hidden from loops. but still can be accessed through dot notation. It defaults to `false` when using `Object.defineProperty()`
	  
4. `configurable`
	- `true` : the property can be deleted from the object and its descriptor settings can be modified. 
	- `false` : the property cannot be deleted and we cannot switch it between data and accessor descriptors. It defaults to `false` when using `Object.defineProperty()`
### Example: 
- `Math.PI`

## Accessor Descriptors 

An accessor descriptor does not have physical value. It describes it property through getter and setter functions. 
1. `get`
   A function that executes immediately when the property is read. it must return a value. defaults to `false`
   
2. `set`
   A function that executes automatically when the property is written to. it receives the assigned value as its parameter. defaults to `undefined`
   
3. `enumerable`
   Same behavior as Data descriptors
   
4. `configurable`
   Same behavior as Data descriptors

### Example
- `Array.prototype.length`

# Accessing and Modifying Descriptors
## Accessing

Object descriptor can be accessed through : 
`Object.getOwnPropertyDescriptor(object,property)`

### Example
```javascript
// calling Object.getPropertyDescriptor
const descript=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descript)
```
Output: 
```text
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
```

We can also get the descriptors of custom made objects. Consider the code 
```javascript
const chai={
    name:"CHAI",
    price:300,
    is:true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

/*
OUTPUT: 

{ value: 'CHAI', writable: true, enumerable: true, configurable: true }
*/
```
## Modifying 

Object Descriptor can also be modified using : 
`Object.defineProperty(object, property, descriptor)`

### Example
Modifying the `chai` object : 
```javascript
Object.defineProperty(chai,"name",{
    value:"COFFEE",
    writable:false,
    enumerable:false,
    configurable:false
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));

/*
OUTPUT: 

{
  value: 'COFFEE',
  writable: false,
  enumerable: false,
  configurable: false
}
*/
```
```
```


