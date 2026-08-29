import express from 'express'
import User from '../models/user.js'

const userRouter=express.Router()
userRouter.get('/signin',(req,res)=>{
    return res.render ('signin')
})
userRouter.get('/signup',(req,res)=>{
    return res.render ('signup')
})
userRouter.post('/signup',async (req,res)=>{
    const {fullName,email,password}=req.body
    await User.create({
        fullName,
        email,
        password 
    })
    return res.redirect('/')
})


userRouter.post('/signin', async (req, res) => {
    const { email, password } = req.body
    try {
        const token = await User.matchPasswordAndGenerateToken(
            email,
            password
        )
        return res
            .cookie('token', token)
            .redirect('/')
    } catch (error) {
        console.error("Login attempt failed:", error.message)
        return res.render('/login',{error:"Incorrect Email or Password "})
    }
})




export default userRouter

