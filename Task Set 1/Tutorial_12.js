// Numbers and Maths in JS

var num=new Number(100.555)
console.log(num)

// toString()
console.log(num.toString())

// toFixed()
console.log(num.toFixed(1))

// toPrecision(i)
console.log(num.toPrecision(1))

// toLocaleString()
num=new Number(1000000000)
console.log(num.toLocaleString())

Math.floor( Math.random() * (max - min +1 ) + min )