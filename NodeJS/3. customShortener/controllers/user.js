import { randomUUID } from "node:crypto"
import User from "../models/user.js"
import {setUser,getUser} from '../service/auth.js'

async function handleUser(req,res){
    const {name,email,password}=req.body
    await User.create({
        name,email,password
    })
   return res.render("home")
}

async function handleUserLogin(req,res){
    const {email,password}=req.body
    const user=await User.findOne({email,password})
    if(!user)  return res.redirect('/login'); 
    
    const token=setUser(user)
    res.cookie("uid",token)
    return res.redirect("/home")
}

export {handleUser,handleUserLogin}