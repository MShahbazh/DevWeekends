// loops

// for
console.log("\nFOR");
for(let i=0;i<4;i++){
    console.log(i)
}

// while 
console.log("\nWHILE");
let i=0
while (i<4){
    console.log(i);
    i++
}

// do while
console.log("\nDO WHILE");
i=0
do{
    console.log(i);
    i++
}while(i<4)


// BREAK 
console.log("\nBREAK");
for(let i=0;i<7;i++){
    console.log(i)
    if (i==4){
        console.log("FOUND : ",i)
        break
    }
}

// CONTINUE 
console.log("\nCONTINUE");
for(let i=0;i<7;i++){
    console.log(i)
    if (i==4){
        console.log("FOUND : ",i)
        continue
    }
}

// High Order Array Loops

const arr=[1,2,3,4,5]
// forOf
console.log("\nFOR OF");
for (const element of arr) {
    console.log(element)
}

let map=new Map() 
// map is collection of key value pairs 
// it retains order
// provide functions like .size
// has forOf implmentation 
// It allows number to use as key unlike JS
map.set("name","World")
map.set("world","Earth")
for (const [key,value] of map) {
    console.log(key,value);
}


// forIn
let arr2=["h","e","l"]
for (const key in arr2) {
    console.log(key);
}

// forEach
console.log("\nFOR EACH");
let arr3=[1,2,3,4,5,6]
// val is every value or arr3
arr3.forEach((val)=>{
    console.log(val);
})

// returning values 
arr3=[1,2,3,4,5,6]
arr3.filter((num)=>num>5)


// map
console.log("\nMAP");
const nums=[1,2,3,4,5,6,7,8,9,10]
console.log(nums.map((num)=>num+10))

// reduce 
console.log("\nREDUCE");
const num = [1,2,3]
const result= num.reduce((accumulator,current)=>accumulator+current,0)
console.log(result);

