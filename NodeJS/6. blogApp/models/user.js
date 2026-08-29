import mongoose from "mongoose";
import crypto  from 'crypto';
import { createTokenForUser } from "../services/authentication.js";

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true 
    },
    salt:{
        type:String, 
    },
    password:{
        type:String,
        required:true  
    },
    profileImageURL:{
        type:String,
        default:'/image/profile.png'
    },
    role:{
        type:String,
        enum:["USER","ADMIN"],
        default:"USER"
    }
},{timestamps:true})
userSchema.pre('save',function (next){
    const user=this
    if(!user.isModified("password") ) return
    const salt=crypto.randomBytes(16).toString()
    const hash=crypto.createHmac('sha256',salt).update(user.password).digest('hex')
    this.salt=salt
    this.password=hash
    next()
}) 

userSchema.static('matchPasswordAndGenerateToken', async function(email, pssword) {
    const user = await this.findOne({ email })
    if (!user) throw new Error("User not Found")
    
    const salt = user.salt
    const databaseHash = user.password 
    
    const userProvidedHash = crypto.createHmac("sha256", salt).update(pssword).digest('hex')
    
    if (databaseHash !== userProvidedHash) throw new Error("Incorrect Password")
    
    const token = createTokenForUser(user)
    return token
})

const User=mongoose.model('user',userSchema)
export default User