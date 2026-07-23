function iterator(){
    let values=1
    return {next:()=>{
        if (values<6){
            return {
                value:values++, 
                done:false
            }
        }
        else{
            return {
                value:values, 
                done:true
            }
        }
    }
    }
}

const iterate=iterator()
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());


const arr=[1,2,3,4,5]
const iter=arr[Symbol.iterator]()
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

function* gen(){
    yield 1
    yield 2
    yield 3
    yield 4
}
const iters=gen()
console.log(iters.next());
console.log(iters.next());
console.log(iters.next());
console.log(iters.next());
console.log(iters.next());
console.log(iters.next());




