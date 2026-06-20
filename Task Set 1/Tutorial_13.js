// Date and Time in JS

let d=new Date()

console.log(d.toISOString())
console.log(d.toLocaleString())
console.log(d.toString())
console.log(d.toJSON())

let custom=new Date(2023,0,23)
console.log(custom.toDateString())

let timestamp=Date.now()
console.log(timestamp);

console.log(d.getMonth());