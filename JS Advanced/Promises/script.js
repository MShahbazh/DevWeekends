// const promise=new Promise(function(resolve,reject){
// 	// Async Task
// 	setTimeout(()=>{
// 		console.log("ASYNC COMPLETED")
//         resolve() // allows .then() to complete
// 	},1000)
// })

// // .then has direct relation with resolve
// promise.then(function(){
//     console.log("PROMISE CONSUMED")
// })


// DIRECT CODE
// new Promise ((resolve,reject)=>{
// 	setTimeout(()=>{
// 		console.log("ASYNC COMPLETE")
// 		resolve()
// 	},1000)
// }).then(()=>{
// 	console.log("THEN CALLED")
// })

// SENDING DATA
// const promise3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve({user:"hello"})
//     },1000)
// })
// promise3.then((user)=>{
//     console.log(user)
// })

// THEN VS CATCH VS FINALLY
// const promise4=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=false
//         if(!error){
//             resolve("ALL WENT GOOD")
//         }
//         else{
//             reject("ERROR")
//         }
//     },1000)
// })
// promise4.then((user)=>{
//     return user
// }).then((user)=>{
//     console.log(user)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("FINALLY THE PROMISE IS EITHER RESOLVED OR REJECTED")
// })

// ASYNC VS AWAIT
// const promise5=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         let error=true
//          if(!error){
//             resolve("ALL WENT GOOD")
//         }
//         else{
//             reject("ERROR")
//         }
//     },1000)
// })

// async function consume(){
//     try{
//         const response = await promise5
//         console.log(response)
//     }catch(error){
//         console.log(error)
//     }
// };

// consume()


// FETCH

// fetch("https:/api.github.com/users/hiteshchoudhary",{
//     method:"POST",
//     body:{
//         username:"hello"
//     }
// }).then((u)=>{
//     console.log(u)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("DONE");
// })

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