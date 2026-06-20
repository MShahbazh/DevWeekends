// Array Part 2

// push and concat
const arr=[1,2,4,false,'Hello']
const arr2=[4,5,6]
const n=arr.concat(arr2)
arr.push(arr2)
console.log(n);
console.log(arr);


// spread operator
const arr3=[1,2,4,false,'Hello']
const arr4=[4,5,6]
const new_arr=[...arr3,...arr4]
console.log(new_arr);

// flat
const arr5=[1,2,3,[4,5,6,[7,8,9]]]
console.log(arr5.flat(Infinity))

// from
console.log(Array.from("Hello"))

// isArray
console.log(Array.isArray("Hello"))

// of 
console.log(Array.of(7,true,"hello"))