import express from 'express'
import path from 'path'
import userRouter from './router/user.js'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import checkForAuthenticationCookie from './middleware/authentication.js'
import blogRouter from './router/blog.js'
import Blog from './models/blog.js'

const app=express()
const PORT=8000
mongoose.connect("mongodb+srv://ADMINUSER_db_user:MONGODBATLASPASSWORD@cluster0.k1idylo.mongodb.net/?appName=Cluster0").then(()=>console.log("Database Connected"))


app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthenticationCookie('token'))
app.set("view engine",'ejs')
app.set('views',path.resolve('./Views'))
app.get('/',async (req,res)=>{
    const allBlogs=await Blog.find({}).sort('createdAt',-1)
    res.render("home",{
        user:req.user,
        blogs:allBlogs
    })
})

app.use('/user',userRouter)
app.use('/blog',blogRouter)
app.listen(PORT,()=>{
    console.log("Started");
})