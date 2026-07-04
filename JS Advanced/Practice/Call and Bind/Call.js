// function setname(user){
//     this.username=user
// }

// function setuser(username,age){
//     setname(username)
//     this.age=25
// }

// const user=new setuser("Abcd",25)
// console.log(user)


function setname(user){
    this.username=user
}

function setuser(username,age){
    setname.call(this,username)
    this.age=25
}

const user=new setuser("Abcd",25)
console.log(user)