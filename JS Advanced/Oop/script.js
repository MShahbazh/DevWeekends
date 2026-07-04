// function : this and new
// function user(a,b,c){
//     this.a=a
//     this.b=b
//     this.c=c 
// }
// const user1=new user("Hello",12,false)
// console.log(user1)


// function createUser(username,score){
//     this.username=username
//     this.score=score 
// }
// createUser.prototype.increment=function(){
//     this.score++
//     console.log(this.score)
// }
// const user1=new createUser("Hello",25)
// const user2=new createUser("World",250)
// user1.increment()

// PROTOTYPE
// const obj={
//     username:"Hello"
// }
// Object.prototype.myProt=function(){
//     console.log("THIS IS THE PROT")
// }
// obj.myProt()

// const A={
//     username:"Hello"
// }

// const B={
//     grade:"CS"
// }

// inside the class
// const B={
//     grade:"CS",
//     __proto__:A
// }

// // outside the class
// B.__proto__=A

// Modern syntax
// Object.setPrototypeOf(B,A)


// let string="Hello          World"
// String.prototype.removeEnd=function(){
//     let str=""
//     for(let i=0;i<this.length;i++){
//         if(this[i]!=' '){
//             str+=this[i]
//         }
//     }
//     return str
// }
// console.log(string.removeEnd())


// ES6 JS

// class User{
//     #password // private
//     constructor(username,email,password){
//         this.username=username
//         this.email=email 
//         this.#password=password
//     }
//     encryptPassword(){
//         return `${this.#password}passzxcv`
//     }
// }
// const user=new User("Hello","world","Password")
// console.log(user);
// console.log(user.encryptPassword());


// Behind the scene of the above class example
// function User(username,email,password){
//     this.username=username
//     this.email=email
//     this.password=password
// }

// User.prototype.encryptPassword=function(){
//     return `${this.password}passzxcv`
// }

// const user=new User("Hello","world","Password")
// console.log(user);
// console.log(user.encryptPassword());

// INHERITANCE EXAMPLE
// class User{
//     constructor(username){
//         this.username=username 
//     }
//     logMe(){
//         console.log(`USERNAME IS ${this.username} | LOGGED IN`);
//     }
// }

// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)
//         this.email=email
//         this.password=password
//     }
// }

// const teach=new Teacher("Teacher","email","Password")
// console.log(teach);
// console.log(teach instanceof Teacher);

// USE OF STATIC
// class User{
//     constructor(username){
//         this.username=username 
//     }
//     logMe(){
//         console.log(`USERNAME IS ${this.username} | LOGGED IN`);
//     }
//     static Id(){
//         return "Hello"
//     }
// }

// const u=new User("World")
// // console.log(u.Id()) // error
// console.log(User.Id())


// GETTER AND SETTER
// class User{
//     constructor(email, password){
//         this.email=email
//         this.password=password
//     }

//     get password(){
//         return this._password
//     }
    
//     set password(pass){
//         this._password=pass
//     }
// }
// const user=new User("EMAIL","PASSWord")
// console.log(user.password);

// FUNCTION BASED CLASSES 
// function User(email,password){
//     this._email=email
//     this.password=password

//     Object.defineProperty(this,'email',{
//         get : function(){
//             return this._email
//         },
//         set : function(val){
//             this._email=val
//         }
//     })
// }

// const user=new User("EMAIL","PASSWORD")
// console.log(user);

// OBJECT BASED CLASSES
const User={
    _email:"EMAIL",
    _password:"PASSWORD",
    get email(){
        return this._email
    },

    set email(val){
        this._email=val
    }
}
const tea=Object.create(User)
console.log(tea.email);

